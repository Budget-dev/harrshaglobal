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
  CheckCircle2
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { DEPARTMENTS } from '../data/jobs';
import { 
  getApplicationsFromFirestore, 
  deleteApplicationFromFirestore, 
  CandidateApplication 
} from '../services/applicationsService';
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

export function AdminApplications() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [authChecking, setAuthChecking] = useState(true);

  // Form states
  const [emailInput, setEmailInput] = useState(ADMIN_EMAIL);
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState<string | null>(null);
  const [isSubmittingAuth, setIsSubmittingAuth] = useState(false);
  const [isRegisterMode, setIsRegisterMode] = useState(false);

  // Data states
  const [applications, setApplications] = useState<CandidateApplication[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('ALL');
  const [selectedAppModal, setSelectedAppModal] = useState<CandidateApplication | null>(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

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
    } else {
      setApplications([]);
    }
  }, [isAdmin]);

  const loadApplications = async () => {
    setIsLoading(true);
    try {
      const data = await getApplicationsFromFirestore();
      setApplications(data);
    } catch (err: any) {
      console.error('Failed to load applications from Firestore:', err);
    } finally {
      setIsLoading(false);
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
      setAuthError(err.message || 'Google Sign-In failed. Please try again.');
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
        setAuthError('This email is already registered. Please sign in with your password or use Google Sign-In.');
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
    } catch (err) {
      console.error('Sign out error:', err);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const ok = await deleteApplicationFromFirestore(id);
      if (ok) {
        setApplications((prev) => prev.filter((a) => a.id !== id));
        setDeleteConfirmId(null);
        if (selectedAppModal?.id === id) {
          setSelectedAppModal(null);
        }
      }
    } catch (err) {
      console.error('Failed to delete application:', err);
    }
  };

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

  const filteredApplications = applications.filter((app) => {
    const matchesDept = selectedDept === 'ALL' || app.department === selectedDept;
    const q = searchTerm.toLowerCase();
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
            Secured via Firebase Firestore & Authentication
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

          {/* 1. Google 1-Click Sign-In */}
          <div className="space-y-4">
            <button
              onClick={handleGoogleLogin}
              disabled={isSubmittingAuth}
              className="w-full flex items-center justify-center gap-3 bg-white hover:bg-slate-50 text-slate-800 font-semibold py-3.5 px-4 rounded-xl border border-slate-300 shadow-xs transition-all cursor-pointer text-sm disabled:opacity-50"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
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
              <span>Sign in with Google</span>
            </button>

            {/* Divider */}
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center text-[11px] uppercase tracking-wider">
                <span className="bg-white px-3 text-slate-400 font-bold">Or Email & Password</span>
              </div>
            </div>

            {/* 2. Email & Password Sign-in */}
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
                  {isRegisterMode ? 'New Password' : 'Password'}
                </label>
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Enter your Firebase password..."
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
                  : 'Sign In with Password'}
              </button>

              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsRegisterMode(!isRegisterMode);
                    setAuthError(null);
                  }}
                  className="text-xs text-blue-600 hover:text-blue-800 font-medium underline"
                >
                  {isRegisterMode
                    ? 'Already set up? Switch to standard login'
                    : 'First time? Create / Set your admin password'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // Authenticated as harrshaglobal@gmail.com
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 pt-24 pb-20">
      <SEO title="Applications Portal | Harrsha Global" />
      
      {/* Top Header Bar */}
      <div className="bg-[#0B1530] text-white border-b border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-emerald-400">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold tracking-tight">HR Applications Dashboard</h1>
              <p className="text-xs text-slate-300">
                Authenticated Admin: <span className="text-emerald-300 font-semibold">{currentUser.email}</span> · Firestore Live
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={loadApplications}
              className="flex items-center gap-1.5 px-3 py-2 bg-white/10 hover:bg-white/15 text-white rounded-xl text-xs font-medium transition-colors cursor-pointer"
            >
              <RefreshCw size={14} className={isLoading ? 'animate-spin' : ''} />
              <span>Refresh</span>
            </button>

            <button
              onClick={handleExportCSV}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold transition-colors shadow-sm cursor-pointer"
            >
              <Download size={14} />
              <span>Export CSV</span>
            </button>

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

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search candidate, email, ID, or position..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0B1530]"
            />
          </div>

          <div className="w-full md:w-64">
            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0B1530] cursor-pointer"
            >
              <option value="ALL">All Departments</option>
              {DEPARTMENTS.map((dept) => (
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
                            onClick={() => setDeleteConfirmId(app.id)}
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

      {/* DETAIL MODAL */}
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
                ✕
              </button>
            </div>

            <div className="space-y-3 text-sm">
              <div className="grid grid-cols-2 gap-2 p-3 bg-slate-50 rounded-xl">
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Phone</span>
                  <span className="font-semibold">{selectedAppModal.phone}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Email</span>
                  <span className="font-semibold break-all">{selectedAppModal.email}</span>
                </div>
                <div className="mt-2">
                  <span className="text-xs text-slate-400 block font-medium">Preferred Office</span>
                  <span className="font-semibold">{selectedAppModal.office}</span>
                </div>
                <div className="mt-2">
                  <span className="text-xs text-slate-400 block font-medium">Total Experience</span>
                  <span className="font-semibold">{selectedAppModal.experience}</span>
                </div>
              </div>

              {selectedAppModal.coverNote && (
                <div className="p-3 bg-slate-50 rounded-xl">
                  <span className="text-xs text-slate-400 block font-medium mb-1">Cover Note</span>
                  <p className="text-xs text-slate-700 whitespace-pre-wrap leading-relaxed">
                    {selectedAppModal.coverNote}
                  </p>
                </div>
              )}

              {selectedAppModal.resumeData && (
                <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText size={18} className="text-blue-600" />
                    <div>
                      <span className="text-xs font-bold text-slate-900 block truncate max-w-xs">
                        {selectedAppModal.resumeName || 'Candidate Resume'}
                      </span>
                      <span className="text-[11px] text-slate-500">
                        {selectedAppModal.resumeSize || ''}
                      </span>
                    </div>
                  </div>
                  <a
                    href={selectedAppModal.resumeData}
                    target="_blank"
                    rel="noopener noreferrer"
                    download={selectedAppModal.resumeName || 'Candidate_Resume'}
                    className="px-3 py-1.5 bg-[#0B1530] text-white rounded-lg text-xs font-semibold hover:bg-blue-900 cursor-pointer"
                  >
                    Download Resume
                  </a>
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedAppModal(null)}
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 rounded-xl text-xs font-bold text-slate-800 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* DELETE CONFIRM MODAL */}
      {deleteConfirmId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 text-center">
            <Trash2 size={32} className="mx-auto text-red-500 mb-3" />
            <h4 className="text-lg font-bold text-slate-900">Delete Application Record?</h4>
            <p className="text-xs text-slate-500 mt-1 mb-6">
              This will permanently delete application {deleteConfirmId} from the database.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteConfirmId(null)}
                className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 rounded-xl text-xs font-semibold text-slate-700 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteConfirmId)}
                className="flex-1 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
