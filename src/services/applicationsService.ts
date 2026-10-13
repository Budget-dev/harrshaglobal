import { 
  collection, 
  doc, 
  setDoc, 
  getDocs, 
  deleteDoc, 
  query, 
  orderBy 
} from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';

export interface CandidateApplication {
  id: string;
  name: string;
  phone: string;
  email: string;
  position: string;
  department: string;
  office: string;
  experience: string;
  coverNote?: string;
  resumeName?: string;
  resumeSize?: string;
  resumeData?: string; // base64 data URL for instant viewing and downloading
  status: string;
  createdAt: string;
}

const COLLECTION_NAME = 'applications';

export async function submitApplicationToFirestore(
  data: Omit<CandidateApplication, 'id' | 'createdAt' | 'status'>
): Promise<{ success: boolean; applicationId: string }> {
  try {
    // Generate unique ID in the format HG-2026-XXXX
    let nextNum = 1;
    try {
      const snap = await getDocs(collection(db, COLLECTION_NAME));
      nextNum = snap.size + 1;
    } catch {
      // fallback
      nextNum = Math.floor(1000 + Math.random() * 9000);
    }

    const applicationId = `HG-2026-${String(nextNum).padStart(4, '0')}`;
    const createdAt = new Date().toISOString();

    const applicationDoc: CandidateApplication = {
      id: applicationId,
      name: data.name.trim(),
      phone: data.phone.trim(),
      email: data.email.trim(),
      position: data.position.trim(),
      department: data.department.trim(),
      office: data.office.trim(),
      experience: data.experience.trim(),
      coverNote: (data.coverNote || '').trim(),
      resumeName: data.resumeName || '',
      resumeSize: data.resumeSize || '',
      resumeData: data.resumeData || '',
      status: 'Received',
      createdAt,
    };

    const docRef = doc(db, COLLECTION_NAME, applicationId);
    await setDoc(docRef, applicationDoc);

    return { success: true, applicationId };
  } catch (error: any) {
    handleFirestoreError(error, OperationType.CREATE, COLLECTION_NAME);
    throw error;
  }
}

export async function getApplicationsFromFirestore(): Promise<CandidateApplication[]> {
  try {
    const q = query(collection(db, COLLECTION_NAME), orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((d) => d.data() as CandidateApplication);
  } catch (error: any) {
    // If index or orderBy fails initially, fallback to simple getDocs
    try {
      const snapshot = await getDocs(collection(db, COLLECTION_NAME));
      const list = snapshot.docs.map((d) => d.data() as CandidateApplication);
      return list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    } catch (innerError) {
      handleFirestoreError(innerError, OperationType.LIST, COLLECTION_NAME);
      return [];
    }
  }
}

export async function deleteApplicationFromFirestore(id: string): Promise<boolean> {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, `${COLLECTION_NAME}/${id}`);
    return false;
  }
}
