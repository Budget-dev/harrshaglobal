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
  Building2
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { DEPARTMENTS } from '../data/jobs';
import { 
  getApplicationsFromFirestore, 
  deleteApplicationFromFirestore, 
  CandidateApplication 
} from '../services/applicationsService';

interface ApplicationRecord {
  id: string;
  name: string;
  phone: string;
  email: string;
  position: string;
  department: string;
  office: string;
  experience: string;
  coverNote?: string;
  timestamp: string;
  resume?: {
    filename: string;
    originalName: string;
    size: number;
    url: string;
  } | null;
  status?: string;
}

export function AdminApplications() {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('hg_admin_token'));
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const [applications, setApplications] = useState<ApplicationRecord[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('ALL');
  const [selectedAppModal, setSelectedAppModal] = useState<ApplicationRecord | null>(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  useEffect(() => {
    if (token) {
      fetchApplications();
    }
  }, [token]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError(null);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: passwordInput }),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Invalid administrative password');
      }

      localStorage.setItem('hg_admin_token', data.token);
      setToken(data.token);
      setPasswordInput('');
    } catch (err: any) {
      setLoginError(err.message || 'Authentication failed');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('hg_admin_token');
    setToken(null);
    setApplications([]);
  };

  const fetchApplications = async () => {
    if (!token) return;
    setIsLoading(true);
    try {
      // 1. Try fetching directly from Firestore
      const firestoreApps = await getApplicationsFromFirestore();
      if (firestoreApps && firestoreApps.length > 0) {
        setApplications(firestoreApps);
        return;
      }

      // 2. Fallback to server endpoint if any
      const res = await fetch('/api/admin/applications', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 401) {
        handleLogout();
        return;
      }

      const data = await res.json();
      if (data.success && data.applications?.length) {
        setApplications(data.applications);
      } else {
        setApplications(firestoreApps || []);
      }
    } catch (err) {
      console.error('Failed to fetch applications:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!token) return;
    try {
      await deleteApplicationFromFirestore(id);
      try {
        await fetch(`/api/admin/applications/${id}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } catch {}

      setApplications((prev) => prev.filter((a) => a.id !== id));
      setDeleteConfirmId(null);
      if (selectedAppModal?.id === id) {
        setSelectedAppModal(null);
      }
    } catch (err) {
      console.error('Failed to delete application:', err);
    }
  };

  const handleExportCSV = () => {
    if (!token || applications.length === 0) return;
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
        `"${app.createdAt || app.timestamp || ''}"`,
        `"${(app.name || '').replace(/"/g, '""')}"`,
        `"${(app.phone || '').replace(/"/g, '""')}"`,
        `"${(app.email || '').replace(/"/g, '""')}"`,
        `"${(app.position || '').replace(/"/g, '""')}"`,
        `"${(app.department || '').replace(/"/g, '""')}"`,
        `"${(app.office || '').replace(/"/g, '""')}"`,
        `"${(app.experience || '').replace(/"/g, '""')}"`,
        `"${(app.resumeName || app.resume?.originalName || '').replace(/"/g, '""')}"`,
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

  // If not authenticated, render login form
  if (!token) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6 pt-28">
        <SEO title="Admin Login | Harrsha Global Careers" />
        <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-slate-200 shadow-xl text-center">
          <div className="w-14 h-14 bg-[#0B1530] text-white rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-sm">
            <Lock size={26} />
          </div>
          <h1 className="text-2xl font-extrabold text-[#0B1530] mb-2">Careers Admin Portal</h1>
          <p className="text-sm text-slate-500 mb-6">
            Enter administrative credentials to access job applications, candidate resumes, and candidate logs.
          </p>

          {loginError && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-xs font-semibold">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="text-left">
              <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                Admin Password
              </label>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Enter password..."
                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0B1530]"
                required
              />
              <p className="text-[11px] text-slate-400 mt-1">Default: harrsha2026 (or custom ADMIN_PASSWORD in .env)</p>
            </div>

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full bg-[#0B1530] hover:bg-blue-950 text-white font-bold py-3.5 rounded-xl text-sm transition-colors shadow-md disabled:opacity-50"
            >
              {isLoggingIn ? 'Authenticating...' : 'Access Applications Portal'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 pt-24 pb-20">
      <SEO title="Applications Portal | Harrsha Global" />
      
      {/* Top Header Bar */}
      <div className="bg-[#0B1530] text-white border-b border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-blue-300">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold tracking-tight">HR Applications Dashboard</h1>
              <p className="text-xs text-slate-300">Harrsha Global Private Limited · Management Console</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchApplications}
              className="flex items-center gap-1.5 px-3 py-2 bg-white/10 hover:bg-white/15 text-white rounded-xl text-xs font-medium transition-colors"
            >
              <RefreshCw size={14} className={isLoading ? 'animate-spin' : ''} />
              <span>Refresh</span>
            </button>

            <button
              onClick={handleExportCSV}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold transition-colors shadow-sm"
            >
              <Download size={14} />
              <span>Export CSV</span>
            </button>

            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-3 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-200 border border-red-500/30 rounded-xl text-xs font-medium transition-colors"
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
              {applications.filter((a) => a.resume).length}
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
              <p className="text-xs mt-1">Submitted candidate applications will appear here in real-time.</p>
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
                          {new Date(app.timestamp).toLocaleDateString('en-IN', {
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
                        {app.resumeData || app.resume ? (
                          <a
                            href={app.resumeData || app.resume?.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            download={app.resumeName || app.resume?.originalName || 'Resume'}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 text-xs font-semibold transition-colors"
                          >
                            <FileText size={13} />
                            <span className="max-w-[120px] truncate">{app.resumeName || app.resume?.originalName || 'Resume'}</span>
                          </a>
                        ) : (
                          <span className="text-xs text-slate-400 italic">No file</span>
                        )}
                      </td>

                      <td className="py-4 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => setSelectedAppModal(app)}
                            className="p-1.5 text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded-lg text-xs font-medium"
                            title="View candidate details"
                          >
                            <ExternalLink size={16} />
                          </button>
                          <button
                            onClick={() => setDeleteConfirmId(app.id)}
                            className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg"
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
                className="text-slate-400 hover:text-slate-700 p-2"
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

              {(selectedAppModal.resumeData || selectedAppModal.resume) && (
                <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText size={18} className="text-blue-600" />
                    <div>
                      <span className="text-xs font-bold text-slate-900 block truncate max-w-xs">
                        {selectedAppModal.resumeName || selectedAppModal.resume?.originalName || 'Candidate Resume'}
                      </span>
                      <span className="text-[11px] text-slate-500">
                        {selectedAppModal.resumeSize || (selectedAppModal.resume?.size ? `${(selectedAppModal.resume.size / (1024 * 1024)).toFixed(2)} MB` : '')}
                      </span>
                    </div>
                  </div>
                  <a
                    href={selectedAppModal.resumeData || selectedAppModal.resume?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    download={selectedAppModal.resumeName || selectedAppModal.resume?.originalName || 'Candidate_Resume'}
                    className="px-3 py-1.5 bg-[#0B1530] text-white rounded-lg text-xs font-semibold hover:bg-blue-900"
                  >
                    Download Resume
                  </a>
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedAppModal(null)}
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 rounded-xl text-xs font-bold text-slate-800"
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
                className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 rounded-xl text-xs font-semibold text-slate-700"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteConfirmId)}
                className="flex-1 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold"
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
