import { 
  collection, 
  doc, 
  setDoc, 
  getDocs, 
  deleteDoc
} from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { JOBS_DATA, JobListing, DEPARTMENTS } from '../data/jobs';

export interface ManagedJob extends JobListing {
  isCustom?: boolean;
  createdAt?: string;
  location?: string;
}

const JOBS_COLLECTION = 'jobs';
const ARCHIVED_COLLECTION = 'jobs_archived';

// Fetch all active jobs combining base catalog and Firestore custom jobs (excluding archived/deleted ones)
export async function getActiveJobs(): Promise<ManagedJob[]> {
  try {
    // 1. Fetch any archived/deleted job IDs from Firestore
    let deletedDefaultIds: string[] = [];
    try {
      const deletedSnap = await getDocs(collection(db, ARCHIVED_COLLECTION));
      deletedDefaultIds = deletedSnap.docs.map((d) => d.id);
      localStorage.setItem('hg_deleted_jobs', JSON.stringify(deletedDefaultIds));
    } catch (e) {
      // Local fallback if offline or restricted
      try {
        deletedDefaultIds = JSON.parse(localStorage.getItem('hg_deleted_jobs') || '[]');
      } catch {
        deletedDefaultIds = [];
      }
    }

    // 2. Filter base catalog jobs (the original 49 jobs)
    const activeBaseJobs: ManagedJob[] = JOBS_DATA.filter(
      (job) => !deletedDefaultIds.includes(job.id)
    ).map((j) => ({ ...j, isCustom: false }));

    // 3. Fetch custom posted jobs from Firestore
    let customJobs: ManagedJob[] = [];
    try {
      const customSnap = await getDocs(collection(db, JOBS_COLLECTION));
      customJobs = customSnap.docs
        .map((d) => ({ ...d.data(), id: d.id } as ManagedJob))
        .filter((j) => !deletedDefaultIds.includes(j.id));
    } catch (err) {
      console.warn('Could not fetch custom jobs from Firestore:', err);
    }

    // Return custom jobs first, then the base catalog jobs
    return [...customJobs, ...activeBaseJobs];
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return JOBS_DATA.map((j) => ({ ...j, isCustom: false }));
  }
}

// Fetch list of all departments dynamically (including any custom departments from added jobs)
export async function getAllDepartments(): Promise<string[]> {
  const jobs = await getActiveJobs();
  const deptSet = new Set<string>(DEPARTMENTS);
  jobs.forEach((j) => {
    if (j.department?.trim()) {
      deptSet.add(j.department.trim());
    }
  });
  return Array.from(deptSet);
}

// Add a new job opening to Firestore
export async function createJobInFirestore(job: {
  post: string;
  department: string;
  qualification: string;
  salary: string;
  location?: string;
}): Promise<ManagedJob> {
  const jobId = `job-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
  const newJob: ManagedJob = {
    id: jobId,
    post: job.post.trim(),
    department: job.department.trim(),
    qualification: job.qualification.trim(),
    salary: job.salary.trim(),
    location: job.location?.trim() || 'Visakhapatnam & Site Operations',
    isCustom: true,
    createdAt: new Date().toISOString(),
  };

  try {
    const docRef = doc(db, JOBS_COLLECTION, jobId);
    await setDoc(docRef, newJob);
    return newJob;
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, `${JOBS_COLLECTION}/${jobId}`);
    throw error;
  }
}

// Delete a job permanently (removes custom job or archives default job)
export async function deleteJob(jobId: string, isCustom?: boolean): Promise<boolean> {
  try {
    if (isCustom) {
      const docRef = doc(db, JOBS_COLLECTION, jobId);
      await deleteDoc(docRef);
    } else {
      // Mark default job as archived in Firestore so it is hidden
      const archiveRef = doc(db, ARCHIVED_COLLECTION, jobId);
      await setDoc(archiveRef, {
        jobId,
        archivedAt: new Date().toISOString(),
      });
      // Update local cache
      const cached: string[] = JSON.parse(localStorage.getItem('hg_deleted_jobs') || '[]');
      if (!cached.includes(jobId)) {
        cached.push(jobId);
        localStorage.setItem('hg_deleted_jobs', JSON.stringify(cached));
      }
    }
    return true;
  } catch (error) {
    console.error('Failed to delete job:', error);
    // Local fallback for offline/preview
    const cached: string[] = JSON.parse(localStorage.getItem('hg_deleted_jobs') || '[]');
    if (!cached.includes(jobId)) {
      cached.push(jobId);
      localStorage.setItem('hg_deleted_jobs', JSON.stringify(cached));
    }
    return true;
  }
}

// Restore a previously deleted default job
export async function restoreJob(jobId: string): Promise<boolean> {
  try {
    const archiveRef = doc(db, ARCHIVED_COLLECTION, jobId);
    await deleteDoc(archiveRef);
    const cached: string[] = JSON.parse(localStorage.getItem('hg_deleted_jobs') || '[]');
    const updated = cached.filter((id) => id !== jobId);
    localStorage.setItem('hg_deleted_jobs', JSON.stringify(updated));
    return true;
  } catch (error) {
    console.error('Failed to restore job:', error);
    return false;
  }
}
