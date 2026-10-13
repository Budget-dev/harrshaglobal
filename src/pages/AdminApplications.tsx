import React, { useState, useEffect } from 'react';
import { 
  Lock, 
  Search, 
  Download, 
  Trash2, 
  FileText, 
  Briefcase, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  LogOut,
  RefreshCw,
  ExternalLink,
  ShieldCheck,
  Building2,
  AlertCircle,
  KeyRound,
  CheckCircle2,
  Plus,
  X,
  Filter,
  Layers,
  Sparkles,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { DEPARTMENTS } from '../data/jobs';
import { 
  getApplicationsFromFirestore, 
  deleteApplicationFromFirestore, 
  CandidateApplication 
} from '../services/applicationsService';
import { 
  getActiveJobs, 
  createJobInFirestore, 
  deleteJob, 
  ManagedJob,
  getAllDepartments
} from '../services/jobsService';
import { 
  auth, 
  googleProvider, 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  ADMIN_EMAIL,
  User 
} from '../lib/firebase';

type AdminTab = 'applications' | 'jobs';

export function AdminApplications() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [authChecking, setAuthChecking] = useState(true);
  const [activeTab, setActiveTab] = useState<AdminTab>('applications');

  // Auth states
  const [emailInput, setEmailInput] = useState(ADMIN_EMAIL);
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState<string | null>(null);
  const [isSubmittingAuth, setIsSubmittingAuth] = useState(false);
  const [isRegisterMode, setIsRegisterMode] = useState(false);

  // Applications data states
  const [applications, setApplications] = useState<CandidateApplication[]>([]);
  const [isLoadingApps, setIsLoadingApps] = useState(false);
  const [searchAppTerm, setSearchAppTerm] = useState('');
  const [selectedAppDept, setSelectedAppDept] = useState('ALL');
  const [selectedAppModal, setSelectedAppModal] = useState<CandidateApplication | null>(null);
  const [deleteAppConfirmId, setDeleteAppConfirmId] = useState<string | null>(null);

  // Jobs data states
  const [jobs, setJobs] = useState<ManagedJob[]>([]);
  const [availableDepartments, setAvailableDepartments] = useState<string[]>(DEPARTMENTS);
  const [isLoadingJobs, setIsLoadingJobs] = useState(false);
  const [searchJobTerm, setSearchJobTerm] = useState('');
  const [selectedJobDept, setSelectedJobDept] = useState('ALL');
  const [deleteJobConfirmId, setDeleteJobConfirmId] = useState<string | null>(null);

  // Post new job modal/form states
  const [showPostJobModal, setShowPostJobModal] = useState(false);
  const [isPostingJob, setIsPostingJob] = useState(false);
  const [postJobError, setPostJobError] = useState<string | null>(null);
  const [postJobSuccess, setPostJobSuccess] = useState(false);
  const [isCustomCategory, setIsCustomCategory] = useState(false);
  const [newJobForm, setNewJobForm] = useState({
    post: '',
    department: DEPARTMENTS[0],
    customDepartment: '',
    qualification: '',
    salary: '',
    location: 'Visakhapatnam & Site Operations'
  });

  const isAdmin = currentUser?.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setAuthChecking(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (isAdmin) {
      loadApplications();
      loadJobs();
    } else {
      setApplications([]);
      setJobs([]);
    }
  }, [isAdmin]);

  const loadApplications = async () => {
    setIsLoadingApps(true);
    try {
      const data = await getApplicationsFromFirestore();
      setApplications(data);
    } catch (err: any) {
      console.error('Failed to load applications from Firestore:', err);
    } finally {
      setIsLoadingApps(false);
    }
  };

  const loadJobs = async () => {
    setIsLoadingJobs(true);
    try {
      const data = await getActiveJobs();
      setJobs(data);
      const depts = await getAllDepartments();
      setAvailableDepartments(depts);
    } catch (err: any) {
      console.error('Failed to load jobs:', err);
    } finally {
      setIsLoadingJobs(false);
    }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    setIsSubmittingAuth(true);
    setAuthError(null);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      if (result.user.email?.toLowerCase() !== ADMIN_EMAIL.toLowerCase()) {
        setAuthError(`Signed in as ${result.user.email}. Access denied: only ${ADMIN_EMAIL} is authorized.`);
      }
    } catch (err: any) {
      console.error('Google Sign-In failed:', err);
      if (err.code === 'auth/popup-closed-by-user' || err.code === 'auth/cancelled-popup-request') {
        setAuthError('Sign-in popup was closed. Please try again or use the Email & Password form below.');
      } else {
        setAuthError(err.message || 'Google Sign-In failed. Please try Email & Password.');
      }
    } finally {
      setIsSubmittingAuth(false);
    }
  };

  // Email & Password Login / Register
  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim() || !passwordInput.trim()) {
      setAuthError('Please enter both email and password.');
      return;
    }

    if (emailInput.trim().toLowerCase() !== ADMIN_EMAIL.toLowerCase()) {
      setAuthError(`Administrative access is restricted to ${ADMIN_EMAIL}`);
      return;
    }

    setIsSubmittingAuth(true);
    setAuthError(null);

    try {
      if (isRegisterMode) {
        // Create admin credentials in Firebase Auth
        await createUserWithEmailAndPassword(auth, emailInput.trim(), passwordInput.trim());
      } else {
        // Sign in with Firebase Auth
        await signInWithEmailAndPassword(auth, emailInput.trim(), passwordInput.trim());
      }
      setPasswordInput('');
    } catch (err: any) {
      console.error('Auth error:', err);
      if (err.code === 'auth/user-not-found' || err.code === 'auth/invalid-credential') {
        setAuthError('Invalid credentials. If this is your first time logging in with a password, click "Create / Set Admin Password" below.');
      } else if (err.code === 'auth/weak-password') {
        setAuthError('Password must be at least 6 characters.');
      } else if (err.code === 'auth/email-already-in-use') {
        setAuthError('This email is already registered. Please sign in with your password.');
        setIsRegisterMode(false);
      } else {
        setAuthError(err.message || 'Authentication failed. Please verify credentials.');
      }
    } finally {
      setIsSubmittingAuth(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setCurrentUser(null);
      setApplications([]);
      setJobs([]);
    } catch (err) {
      console.error('Sign out error:', err);
    }
  };

  // Delete Application
  const handleDeleteApplication = async (id: string) => {
    try {
      const ok = await deleteApplicationFromFirestore(id);
      if (ok) {
        setApplications((prev) => prev.filter((a) => a.id !== id));
        setDeleteAppConfirmId(null);
        if (selectedAppModal?.id === id) {
          setSelectedAppModal(null);
        }
      }
    } catch (err) {
      console.error('Failed to delete application:', err);
    }
  };

  // Delete Job
  const handleDeleteJob = async (job: ManagedJob) => {
    try {
      const ok = await deleteJob(job.id, job.isCustom);
      if (ok) {
        setJobs((prev) => prev.filter((j) => j.id !== job.id));
        setDeleteJobConfirmId(null);
      }
    } catch (err) {
      console.error('Failed to delete job:', err);
    }
  };

  // Handle Post New Job
  const handlePostJobSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPostJobError(null);

    const departmentToUse = isCustomCategory 
      ? newJobForm.customDepartment.trim() 
      : newJobForm.department.trim();

    if (!newJobForm.post.trim()) {
      setPostJobError('Please enter a job title / post.');
      return;
    }
    if (!departmentToUse) {
      setPostJobError('Please select or specify a category / department.');
      return;
    }
    if (!newJobForm.qualification.trim()) {
      setPostJobError('Please enter qualification & experience requirements.');
      return;
    }
    if (!newJobForm.salary.trim()) {
      setPostJobError('Please enter monthly salary.');
      return;
    }

    setIsPostingJob(true);

    try {
      const created = await createJobInFirestore({
        post: newJobForm.post,
        department: departmentToUse,
        qualification: newJobForm.qualification,
        salary: newJobForm.salary,
        location: newJobForm.location
      });

      setJobs((prev) => [created, ...prev]);
      if (!availableDepartments.includes(departmentToUse)) {
        setAvailableDepartments((prev) => [...prev, departmentToUse]);
      }

      setPostJobSuccess(true);
      setTimeout(() => {
        setPostJobSuccess(false);
        setShowPostJobModal(false);
        setNewJobForm({
          post: '',
          department: DEPARTMENTS[0],
          customDepartment: '',
          qualification: '',
          salary: '',
          location: 'Visakhapatnam & Site Operations'
        });
        setIsCustomCategory(false);
      }, 1200);
    } catch (err: any) {
      console.error('Error posting job:', err);
      setPostJobError(err.message || 'Failed to post job. Please verify Firebase permissions.');
    } finally {
      setIsPostingJob(false);
    }
  };

  // Export CSV
  const handleExportCSV = () => {
    if (applications.length === 0) return;
    const headers = [
      'Application ID',
      'Date',
      'Full Name',
      'Phone',
      'Email',
      'Position',
      'Department',
      'Preferred Office',
      'Experience',
      'Resume File',
      'Cover Note',
    ];

    const csvRows = [headers.join(',')];
    for (const app of applications) {
      const row = [
        `"${app.id}"`,
        `"${app.createdAt || ''}"`,
        `"${(app.name || '').replace(/"/g, '""')}"`,
        `"${(app.phone || '').replace(/"/g, '""')}"`,
        `"${(app.email || '').replace(/"/g, '""')}"`,
        `"${(app.position || '').replace(/"/g, '""')}"`,
        `"${(app.department || '').replace(/"/g, '""')}"`,
        `"${(app.office || '').replace(/"/g, '""')}"`,
        `"${(app.experience || '').replace(/"/g, '""')}"`,
        `"${(app.resumeName || '').replace(/"/g, '""')}"`,
        `"${(app.coverNote || '').replace(/"/g, '""').replace(/\n/g, ' ')}"`,
      ];
      csvRows.push(row.join(','));
    }

    const blob = new Blob([csvRows.join('\n')], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `harrsha_applications_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  // Filtered Applications
  const filteredApplications = applications.filter((app) => {
    const matchesDept = selectedAppDept === 'ALL' || app.department === selectedAppDept;
    const q = searchAppTerm.toLowerCase();
    const matchesSearch =
      !q ||
      app.name.toLowerCase().includes(q) ||
      app.email.toLowerCase().includes(q) ||
      app.phone.toLowerCase().includes(q) ||
      app.id.toLowerCase().includes(q) ||
      app.position.toLowerCase().includes(q) ||
      app.office.toLowerCase().includes(q);
    return matchesDept && matchesSearch;
  });

  // Filtered Jobs
  const filteredJobs = jobs.filter((job) => {
    const matchesDept = selectedJobDept === 'ALL' || job.department === selectedJobDept;
    const q = searchJobTerm.toLowerCase();
    const matchesSearch =
      !q ||
      job.post.toLowerCase().includes(q) ||
      job.qualification.toLowerCase().includes(q) ||
      job.department.toLowerCase().includes(q) ||
      job.salary.toLowerCase().includes(q);
    return matchesDept && matchesSearch;
  });

  // Loading state during auth check
  if (authChecking) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center pt-24">
        <div className="w-8 h-8 border-3 border-slate-300 border-t-[#0B1530] rounded-full animate-spin" />
      </div>
    );
  }

  // If user is not authenticated OR not the authorized admin email
  if (!currentUser || !isAdmin) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-6 pt-28">
        <SEO title="Admin Login | Harrsha Global Careers" />
        <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xl text-center">
          <div className="w-14 h-14 bg-[#0B1530] text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
            <Lock size={26} />
          </div>
          
          <h1 className="text-2xl font-extrabold text-[#0B1530] mb-1">HR Admin Portal</h1>
          <p className="text-xs text-slate-500 mb-6">
            Harrsha Global Private Limited · Administration
          </p>

          <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-3.5 mb-6 text-left">
            <div className="flex items-start gap-2.5">
              <ShieldCheck size={18} className="text-blue-700 shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-bold text-blue-900 block">Authorized Admin Email:</span>
                <span className="font-mono text-blue-800 font-semibold">{ADMIN_EMAIL}</span>
              </div>
            </div>
          </div>

          {currentUser && !isAdmin && (
            <div className="mb-6 p-4 bg-amber-50 border border-amber-200 text-amber-800 rounded-2xl text-xs text-left">
              <p className="font-bold mb-1">Access Restricted</p>
              <p>You are signed in as <strong>{currentUser.email}</strong>, which does not match the authorized admin email ({ADMIN_EMAIL}).</p>
              <button
                onClick={handleLogout}
                className="mt-3 text-xs bg-amber-200/60 hover:bg-amber-200 text-amber-900 font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
              >
                Sign Out & Switch Account
              </button>
            </div>
          )}

          {authError && (
            <div className="mb-6 p-3.5 bg-red-50 border border-red-200 text-red-600 rounded-2xl text-xs font-semibold text-left flex items-start gap-2">
              <AlertCircle size={16} className="shrink-0 mt-0.5 text-red-500" />
              <span>{authError}</span>
            </div>
          )}

          {/* Email & Password Sign-in (Primary) */}
          <div className="space-y-4">
            <form onSubmit={handleEmailAuth} className="space-y-3.5 text-left">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Admin Email</label>
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder={ADMIN_EMAIL}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0B1530]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {isRegisterMode ? 'Create New Admin Password' : 'Password'}
                </label>
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Enter your password..."
                  className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0B1530]"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmittingAuth}
                className="w-full bg-[#0B1530] hover:bg-blue-950 text-white font-bold py-3.5 rounded-xl text-sm transition-colors shadow-md disabled:opacity-50 cursor-pointer"
              >
                {isSubmittingAuth
                  ? 'Verifying...'
                  : isRegisterMode
                  ? 'Set Admin Password & Sign In'
                  : 'Sign In to Admin Portal'}
              </button>

              <div className="text-center pt-1">
                <button
                  type="button"
                  onClick={() => {
                    setIsRegisterMode(!isRegisterMode);
                    setAuthError(null);
                  }}
                  className="text-xs text-blue-600 hover:text-blue-800 font-medium underline cursor-pointer"
                >
                  {isRegisterMode
                    ? 'Already have password? Switch to sign in'
                    : 'First time? Create / Set your admin password'}
                </button>
              </div>
            </form>

            {/* Divider */}
            <div className="relative my-3">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center text-[11px] uppercase tracking-wider">
                <span className="bg-white px-3 text-slate-400 font-bold">Or With Google</span>
              </div>
            </div>

            {/* Google 1-Click Sign-In */}
            <button
              onClick={handleGoogleLogin}
              disabled={isSubmittingAuth}
              type="button"
              className="w-full flex items-center justify-center gap-3 bg-white hover:bg-slate-50 text-slate-800 font-semibold py-3 px-4 rounded-xl border border-slate-300 shadow-xs transition-all cursor-pointer text-xs disabled:opacity-50"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Sign in with Google ({ADMIN_EMAIL})</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Authenticated as harrshaglobal@gmail.com
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 pt-24 pb-20">
      <SEO title="Admin Portal | Harrsha Global" />
      
      {/* Top Header Bar */}
      <div className="bg-[#0B1530] text-white border-b border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-emerald-400">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold tracking-tight">Harrsha Global Admin Portal</h1>
              <p className="text-xs text-slate-300">
                Logged in: <span className="text-emerald-300 font-semibold">{currentUser.email}</span> · Cloud Firestore Live
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <Link
              to="/careers"
              target="_blank"
              className="flex items-center gap-1.5 px-3 py-2 bg-white/10 hover:bg-white/15 text-white rounded-xl text-xs font-medium transition-colors"
            >
              <ExternalLink size={14} />
              <span>View Public Careers</span>
            </Link>

            <button
              onClick={() => {
                if (activeTab === 'applications') loadApplications();
                else loadJobs();
              }}
              className="flex items-center gap-1.5 px-3 py-2 bg-white/10 hover:bg-white/15 text-white rounded-xl text-xs font-medium transition-colors cursor-pointer"
            >
              <RefreshCw size={14} className={isLoadingApps || isLoadingJobs ? 'animate-spin' : ''} />
              <span>Refresh</span>
            </button>

            {activeTab === 'applications' && (
              <button
                onClick={handleExportCSV}
                className="flex items-center gap-1.5 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold transition-colors shadow-sm cursor-pointer"
              >
                <Download size={14} />
                <span>Export CSV</span>
              </button>
            )}

            {activeTab === 'jobs' && (
              <button
                onClick={() => setShowPostJobModal(true)}
                className="flex items-center gap-1.5 px-3.5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold transition-colors shadow-sm cursor-pointer"
              >
                <Plus size={15} />
                <span>Post New Job</span>
              </button>
            )}

            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-3 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-200 border border-red-500/30 rounded-xl text-xs font-medium transition-colors cursor-pointer"
            >
              <LogOut size={14} />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-3 border-b border-slate-200 mb-8 pb-4">
          <button
            onClick={() => setActiveTab('applications')}
            className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'applications'
                ? 'bg-[#0B1530] text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Users size={16} />
            <span>Candidate Applications</span>
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              activeTab === 'applications' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'
            }`}>
              {applications.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('jobs')}
            className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'jobs'
                ? 'bg-[#0B1530] text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Briefcase size={16} />
            <span>Job Openings Management</span>
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              activeTab === 'jobs' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'
            }`}>
              {jobs.length}
            </span>
          </button>
        </div>

        {/* ============================================================== */}
        {/* TAB 1: APPLICATIONS                                             */}
        {/* ============================================================== */}
        {activeTab === 'applications' && (
          <div>
            {/* Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">Total Received</span>
                <div className="text-3xl font-extrabold text-[#0B1530] mt-1">{applications.length}</div>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">With Attached Resume</span>
                <div className="text-3xl font-extrabold text-blue-600 mt-1">
                  {applications.filter((a) => a.resumeData || a.resumeName).length}
                </div>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">Filtered View</span>
                <div className="text-3xl font-extrabold text-emerald-600 mt-1">
                  {filteredApplications.length}
                </div>
              </div>
            </div>

            {/* Filter Bar */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 w-full">
                <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchAppTerm}
                  onChange={(e) => setSearchAppTerm(e.target.value)}
                  placeholder="Search candidate, email, ID, or position..."
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0B1530]"
                />
              </div>

              <div className="w-full md:w-64">
                <select
                  value={selectedAppDept}
                  onChange={(e) => setSelectedAppDept(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0B1530] cursor-pointer"
                >
                  <option value="ALL">All Departments</option>
                  {availableDepartments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Applications Table */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
              {filteredApplications.length === 0 ? (
                <div className="p-16 text-center text-slate-500">
                  <Briefcase size={36} className="mx-auto mb-3 text-slate-300" />
                  <p className="font-semibold text-slate-700">No applications match your criteria</p>
                  <p className="text-xs mt-1">Submitted candidate applications stored in Firestore will appear here in real-time.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-[#0B1530] text-white text-xs uppercase tracking-wider">
                        <th className="py-3.5 px-4 font-semibold">ID</th>
                        <th className="py-3.5 px-4 font-semibold">Candidate</th>
                        <th className="py-3.5 px-4 font-semibold">Position & Department</th>
                        <th className="py-3.5 px-4 font-semibold">Office / Experience</th>
                        <th className="py-3.5 px-4 font-semibold">Resume</th>
                        <th className="py-3.5 px-4 font-semibold text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredApplications.map((app) => (
                        <tr key={app.id} className="hover:bg-slate-50/70 transition-colors">
                          <td className="py-4 px-4 font-mono font-bold text-xs text-blue-700">
                            {app.id}
                            <span className="block font-sans font-normal text-[11px] text-slate-400 mt-0.5">
                              {new Date(app.createdAt).toLocaleDateString('en-IN', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                              })}
                            </span>
                          </td>

                          <td className="py-4 px-4">
                            <div className="font-semibold text-slate-900">{app.name}</div>
                            <div className="text-xs text-slate-500 flex flex-col gap-0.5 mt-0.5">
                              <span className="flex items-center gap-1">
                                <Phone size={11} className="text-slate-400" /> {app.phone}
                              </span>
                              <span className="flex items-center gap-1">
                                <Mail size={11} className="text-slate-400" /> {app.email}
                              </span>
                            </div>
                          </td>

                          <td className="py-4 px-4">
                            <span className="font-medium text-slate-900">{app.position}</span>
                            <span className="block text-xs text-slate-500 mt-0.5">{app.department}</span>
                          </td>

                          <td className="py-4 px-4 text-xs">
                            <div className="text-slate-800 font-medium">{app.office}</div>
                            <div className="text-slate-500 mt-0.5">Exp: {app.experience}</div>
                          </td>

                          <td className="py-4 px-4">
                            {app.resumeData || app.resumeName ? (
                              <a
                                href={app.resumeData}
                                target="_blank"
                                rel="noopener noreferrer"
                                download={app.resumeName || 'Resume'}
                                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 text-xs font-semibold transition-colors"
                              >
                                <FileText size={13} />
                                <span className="max-w-[120px] truncate">{app.resumeName || 'Resume'}</span>
                              </a>
                            ) : (
                              <span className="text-xs text-slate-400 italic">No file</span>
                            )}
                          </td>

                          <td className="py-4 px-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => setSelectedAppModal(app)}
                                className="p-1.5 text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded-lg text-xs font-medium cursor-pointer"
                                title="View candidate details"
                              >
                                <ExternalLink size={16} />
                              </button>
                              <button
                                onClick={() => setDeleteAppConfirmId(app.id)}
                                className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg cursor-pointer"
                                title="Delete record"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 2: JOB OPENINGS MANAGEMENT                                 */}
        {/* ============================================================== */}
        {activeTab === 'jobs' && (
          <div>
            {/* Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">Total Active Jobs</span>
                <div className="text-3xl font-extrabold text-[#0B1530] mt-1">{jobs.length}</div>
                <span className="text-xs text-slate-500 mt-1 block">Visible on /careers page</span>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">Job Categories</span>
                <div className="text-3xl font-extrabold text-blue-600 mt-1">{availableDepartments.length}</div>
                <span className="text-xs text-slate-500 mt-1 block">Active business departments</span>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">Custom Posted Jobs</span>
                  <div className="text-3xl font-extrabold text-emerald-600 mt-1">
                    {jobs.filter((j) => j.isCustom).length}
                  </div>
                </div>
                <button
                  onClick={() => setShowPostJobModal(true)}
                  className="bg-[#0B1530] hover:bg-blue-950 text-white font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
                >
                  <Plus size={15} />
                  <span>Post Job</span>
                </button>
              </div>
            </div>

            {/* Filter and Search Bar */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 w-full">
                <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchJobTerm}
                  onChange={(e) => setSearchJobTerm(e.target.value)}
                  placeholder="Search job title, qualification, or department..."
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0B1530]"
                />
              </div>

              <div className="w-full md:w-72">
                <select
                  value={selectedJobDept}
                  onChange={(e) => setSelectedJobDept(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0B1530] cursor-pointer"
                >
                  <option value="ALL">All Departments ({jobs.length})</option>
                  {availableDepartments.map((dept) => {
                    const count = jobs.filter((j) => j.department === dept).length;
                    return (
                      <option key={dept} value={dept}>
                        {dept} ({count})
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            {/* Jobs Listing Grid / Table */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
              <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Active Positions List ({filteredJobs.length} visible)
                </div>
                <div className="text-xs text-slate-500">
                  Clicking "Delete" will remove the job from public website immediately.
                </div>
              </div>

              {filteredJobs.length === 0 ? (
                <div className="p-16 text-center text-slate-500">
                  <Briefcase size={36} className="mx-auto mb-3 text-slate-300" />
                  <p className="font-semibold text-slate-700">No jobs match your filter</p>
                  <button
                    onClick={() => {
                      setSearchJobTerm('');
                      setSelectedJobDept('ALL');
                    }}
                    className="mt-3 text-xs text-blue-600 hover:underline font-semibold"
                  >
                    Reset filters
                  </button>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-[#0B1530] text-white text-xs uppercase tracking-wider">
                        <th className="py-3.5 px-4 font-semibold">Post / Title</th>
                        <th className="py-3.5 px-4 font-semibold">Category / Department</th>
                        <th className="py-3.5 px-4 font-semibold">Qualification</th>
                        <th className="py-3.5 px-4 font-semibold">Salary / Month</th>
                        <th className="py-3.5 px-4 font-semibold">Type</th>
                        <th className="py-3.5 px-4 font-semibold text-right">Delete</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredJobs.map((job) => (
                        <tr key={job.id} className="hover:bg-slate-50/70 transition-colors">
                          <td className="py-4 px-4">
                            <span className="font-bold text-slate-900 block">{job.post}</span>
                            <span className="text-[11px] text-slate-400 font-mono">ID: {job.id}</span>
                          </td>

                          <td className="py-4 px-4">
                            <span className="inline-block px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-50 text-blue-800">
                              {job.department}
                            </span>
                          </td>

                          <td className="py-4 px-4 text-xs font-medium text-slate-700">
                            {job.qualification}
                          </td>

                          <td className="py-4 px-4">
                            <span className="font-bold text-emerald-700 text-xs bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                              {job.salary}
                            </span>
                          </td>

                          <td className="py-4 px-4">
                            {job.isCustom ? (
                              <span className="text-[11px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                                Custom Live
                              </span>
                            ) : (
                              <span className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                                Company Default
                              </span>
                            )}
                          </td>

                          <td className="py-4 px-4 text-right">
                            <button
                              onClick={() => setDeleteJobConfirmId(job.id)}
                              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-red-600 hover:text-white hover:bg-red-600 rounded-lg border border-red-200 transition-colors cursor-pointer"
                              title="Delete this job"
                            >
                              <Trash2 size={13} />
                              <span>Delete</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* ============================================================== */}
      {/* POST NEW JOB MODAL                                             */}
      {/* ============================================================== */}
      {showPostJobModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 md:p-8 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Post New Job Opening</h3>
                  <p className="text-xs text-slate-500">Publish immediately to website & Firestore</p>
                </div>
              </div>
              <button
                onClick={() => setShowPostJobModal(false)}
                className="text-slate-400 hover:text-slate-700 p-1 rounded-lg cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {postJobSuccess ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={36} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-1">Job Published Successfully!</h4>
                <p className="text-xs text-slate-500">
                  The position is now visible on the public Careers page.
                </p>
              </div>
            ) : (
              <form onSubmit={handlePostJobSubmit} className="space-y-4">
                {postJobError && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-xs font-semibold flex items-center gap-2">
                    <AlertCircle size={15} className="shrink-0" />
                    <span>{postJobError}</span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Job Title / Post Name *
                  </label>
                  <input
                    type="text"
                    value={newJobForm.post}
                    onChange={(e) => setNewJobForm({ ...newJobForm, post: e.target.value })}
                    placeholder="e.g. Senior Mechanical Engineer, Plant Chemist, HR Executive"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0B1530]"
                    required
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-bold text-slate-700">
                      Department / Category *
                    </label>
                    <button
                      type="button"
                      onClick={() => setIsCustomCategory(!isCustomCategory)}
                      className="text-[11px] text-blue-600 hover:underline font-semibold cursor-pointer"
                    >
                      {isCustomCategory ? '← Choose Existing Category' : '+ Create New Category'}
                    </button>
                  </div>

                  {isCustomCategory ? (
                    <input
                      type="text"
                      value={newJobForm.customDepartment}
                      onChange={(e) => setNewJobForm({ ...newJobForm, customDepartment: e.target.value })}
                      placeholder="Enter new department name (e.g. RESEARCH & LABS)"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0B1530]"
                      required
                    />
                  ) : (
                    <select
                      value={newJobForm.department}
                      onChange={(e) => setNewJobForm({ ...newJobForm, department: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0B1530] cursor-pointer"
                      required
                    >
                      {availableDepartments.map((dept) => (
                        <option key={dept} value={dept}>
                          {dept}
                        </option>
                      ))}
                    </select>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Salary / Month *
                    </label>
                    <input
                      type="text"
                      value={newJobForm.salary}
                      onChange={(e) => setNewJobForm({ ...newJobForm, salary: e.target.value })}
                      placeholder="e.g. Rs. 45,000-60,000"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0B1530]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Work Location
                    </label>
                    <input
                      type="text"
                      value={newJobForm.location}
                      onChange={(e) => setNewJobForm({ ...newJobForm, location: e.target.value })}
                      placeholder="Visakhapatnam / Site / HO"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0B1530]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Qualification & Experience *
                  </label>
                  <textarea
                    rows={2}
                    value={newJobForm.qualification}
                    onChange={(e) => setNewJobForm({ ...newJobForm, qualification: e.target.value })}
                    placeholder="e.g. B.Tech Mechanical +3-5 yrs experience in plant machinery"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0B1530]"
                    required
                  />
                </div>

                <div className="pt-3 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowPostJobModal(false)}
                    className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isPostingJob}
                    className="px-6 py-2.5 bg-[#0B1530] hover:bg-blue-950 text-white rounded-xl text-xs font-bold transition-all shadow-md disabled:opacity-50 cursor-pointer flex items-center gap-1.5"
                  >
                    {isPostingJob ? (
                      <>
                        <RefreshCw size={13} className="animate-spin" />
                        <span>Publishing...</span>
                      </>
                    ) : (
                      <>
                        <Plus size={15} />
                        <span>Publish Job Opening</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* DELETE JOB CONFIRMATION MODAL                                  */}
      {/* ============================================================== */}
      {deleteJobConfirmId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-slate-100 text-center">
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Trash2 size={24} />
            </div>
            <h4 className="text-base font-bold text-slate-900 mb-1">Delete Job Opening?</h4>
            <p className="text-xs text-slate-500 mb-6">
              This job will be immediately removed from the public website and Careers page.
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => setDeleteJobConfirmId(null)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  const target = jobs.find((j) => j.id === deleteJobConfirmId);
                  if (target) handleDeleteJob(target);
                }}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold shadow-sm cursor-pointer"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* DELETE APPLICATION CONFIRMATION MODAL                          */}
      {/* ============================================================== */}
      {deleteAppConfirmId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-slate-100 text-center">
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Trash2 size={24} />
            </div>
            <h4 className="text-base font-bold text-slate-900 mb-1">Delete Application Record?</h4>
            <p className="text-xs text-slate-500 mb-6">
              This candidate application will be permanently removed from Firestore.
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => setDeleteAppConfirmId(null)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteApplication(deleteAppConfirmId)}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold shadow-sm cursor-pointer"
              >
                Delete Record
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* APPLICATION DETAIL MODAL                                       */}
      {/* ============================================================== */}
      {selectedAppModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-xl w-full p-8 shadow-2xl border border-slate-100 relative">
            <div className="flex items-start justify-between mb-4 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                  {selectedAppModal.id}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-2">{selectedAppModal.name}</h3>
                <p className="text-xs text-slate-500">
                  Applied for <strong>{selectedAppModal.position}</strong> ({selectedAppModal.department})
                </p>
              </div>
              <button
                onClick={() => setSelectedAppModal(null)}
                className="text-slate-400 hover:text-slate-700 p-2 cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl">
                <div>
                  <span className="text-slate-400 block font-semibold">Phone</span>
                  <a href={`tel:${selectedAppModal.phone}`} className="font-bold text-slate-800 hover:underline">
                    {selectedAppModal.phone}
                  </a>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">Email</span>
                  <a href={`mailto:${selectedAppModal.email}`} className="font-bold text-slate-800 hover:underline">
                    {selectedAppModal.email}
                  </a>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">Preferred Office</span>
                  <span className="font-semibold text-slate-800">{selectedAppModal.office}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">Experience</span>
                  <span className="font-semibold text-slate-800">{selectedAppModal.experience}</span>
                </div>
              </div>

              {selectedAppModal.coverNote && (
                <div>
                  <span className="text-slate-400 block font-semibold mb-1">Cover Note / Message</span>
                  <div className="bg-slate-50 p-3 rounded-xl text-slate-700 whitespace-pre-wrap leading-relaxed">
                    {selectedAppModal.coverNote}
                  </div>
                </div>
              )}

              {selectedAppModal.resumeData && (
                <div className="pt-2">
                  <a
                    href={selectedAppModal.resumeData}
                    target="_blank"
                    rel="noopener noreferrer"
                    download={selectedAppModal.resumeName || 'Resume'}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#0B1530] text-white py-3 rounded-xl font-bold hover:bg-blue-900 transition-colors shadow-sm"
                  >
                    <Download size={16} />
                    <span>Download Attached Resume ({selectedAppModal.resumeName || 'File'})</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
