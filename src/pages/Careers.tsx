import React, { useState, useId, useRef, useEffect } from 'react';
import { 
  Briefcase, 
  Search, 
  MapPin, 
  Upload, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  X, 
  ChevronDown, 
  ArrowRight, 
  Phone, 
  Mail, 
  Building2, 
  Clock, 
  Sparkles,
  Copy,
  Check
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { FadeIn } from '../components/FadeIn';
import { DEPARTMENTS, JOBS_DATA, OFFICE_LOCATIONS, JobListing } from '../data/jobs';

export function Careers() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartmentFilter, setSelectedDepartmentFilter] = useState<string>('ALL');

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    position: '',
    department: '',
    office: '',
    experience: '',
    coverNote: '',
    hp_field: '', // Honeypot
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeError, setResumeError] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccessData, setSubmitSuccessData] = useState<{
    applicationId: string;
    position: string;
    name: string;
  } | null>(null);
  const [submitErrorMessage, setSubmitErrorMessage] = useState<string | null>(null);
  const [isCopiedId, setIsCopiedId] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const formSectionRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter jobs
  const filteredJobs = JOBS_DATA.filter((job) => {
    const matchesDept =
      selectedDepartmentFilter === 'ALL' || job.department === selectedDepartmentFilter;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      job.post.toLowerCase().includes(query) ||
      job.qualification.toLowerCase().includes(query) ||
      job.department.toLowerCase().includes(query) ||
      job.salary.toLowerCase().includes(query);
    return matchesDept && matchesSearch;
  });

  // Group filtered jobs by department
  const groupedJobs = DEPARTMENTS.reduce<Record<string, JobListing[]>>((acc, dept) => {
    const jobs = filteredJobs.filter((j) => j.department === dept);
    if (jobs.length > 0) {
      acc[dept] = jobs;
    }
    return acc;
  }, {});

  // Handle clicking "Apply" on a job listing
  const handleApplyClick = (job: JobListing) => {
    setFormData((prev) => ({
      ...prev,
      position: job.post,
      department: job.department,
    }));

    if (formSectionRef.current) {
      formSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        nameInputRef.current?.focus();
      }, 600);
    }
  };

  // Scroll to form from Hero
  const scrollToForm = () => {
    formSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      nameInputRef.current?.focus();
    }, 500);
  };

  // Dropdown dependency handlers
  const handlePositionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const pos = e.target.value;
    const matchedJob = JOBS_DATA.find((j) => j.post === pos);
    setFormData((prev) => ({
      ...prev,
      position: pos,
      department: matchedJob ? matchedJob.department : prev.department,
    }));
    if (formErrors.position) {
      setFormErrors((prev) => ({ ...prev, position: '' }));
    }
  };

  const handleDepartmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const dept = e.target.value;
    setFormData((prev) => {
      // Check if current position belongs to new department
      const currentJob = JOBS_DATA.find((j) => j.post === prev.position);
      const isStillValid = currentJob && currentJob.department === dept;
      return {
        ...prev,
        department: dept,
        position: isStillValid ? prev.position : '',
      };
    });
    if (formErrors.department) {
      setFormErrors((prev) => ({ ...prev, department: '' }));
    }
  };

  // File handling
  const handleFileSelect = (file: File | null) => {
    setResumeError(null);
    if (!file) {
      setResumeFile(null);
      return;
    }

    const allowedExtensions = ['.pdf', '.doc', '.docx'];
    const fileNameLower = file.name.toLowerCase();
    const hasValidExt = allowedExtensions.some((ext) => fileNameLower.endsWith(ext));

    if (!hasValidExt) {
      setResumeError('Please upload a PDF, DOC, or DOCX file format.');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setResumeError('File size exceeds the 5 MB limit. Please upload a smaller file.');
      return;
    }

    setResumeFile(file);
  };

  // Validation
  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) {
      errors.name = 'Full name is required.';
    }

    const phoneClean = formData.phone.replace(/[\s-]/g, '');
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required.';
    } else if (!/^(?:\+?91)?[6789]\d{9}$/.test(phoneClean) && phoneClean.length < 10) {
      errors.phone = 'Please enter a valid 10-digit Indian mobile number.';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }

    if (!formData.position) {
      errors.position = 'Please select the position you are applying for.';
    }

    if (!formData.department) {
      errors.department = 'Please select a department.';
    }

    if (!formData.office) {
      errors.office = 'Please select your preferred office location.';
    }

    if (!formData.experience.trim()) {
      errors.experience = 'Total experience is required.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitErrorMessage(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('phone', formData.phone);
      data.append('email', formData.email);
      data.append('position', formData.position);
      data.append('department', formData.department);
      data.append('office', formData.office);
      data.append('experience', formData.experience);
      data.append('coverNote', formData.coverNote);
      data.append('hp_field', formData.hp_field);

      if (resumeFile) {
        data.append('resume', resumeFile);
      }

      const res = await fetch('/api/applications', {
        method: 'POST',
        body: data,
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.message || 'Failed to submit application.');
      }

      setSubmitSuccessData({
        applicationId: result.applicationId,
        position: formData.position,
        name: formData.name,
      });

      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        position: '',
        department: '',
        office: '',
        experience: '',
        coverNote: '',
        hp_field: '',
      });
      setResumeFile(null);
      setFormErrors({});
    } catch (err: any) {
      console.error('Submission error:', err);
      setSubmitErrorMessage(
        err.message || 'Unable to submit your application. Please check your connection or contact info@harrshaglobal.com'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyApplicationId = () => {
    if (submitSuccessData?.applicationId) {
      navigator.clipboard.writeText(submitSuccessData.applicationId);
      setIsCopiedId(true);
      setTimeout(() => setIsCopiedId(false), 2000);
    }
  };

  // Filter positions by selected department in the dropdown
  const availablePositions = formData.department
    ? JOBS_DATA.filter((j) => j.department === formData.department)
    : JOBS_DATA;

  return (
    <>
      <SEO
        title="Careers | Harrsha Global Private Limited"
        description="Explore 49 open industrial, engineering, corporate, and tech career opportunities across Visakhapatnam and pan-India with Harrsha Global."
        url="/careers"
      />

      <div className="min-h-screen bg-[#F8FAFC] text-slate-900 pt-24 md:pt-28 pb-20">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-[#0B1530] text-white py-16 md:py-24 border-b border-slate-800">
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-blue-200 text-xs md:text-sm font-medium mb-6 backdrop-blur-sm">
                  <Sparkles size={14} className="text-blue-400" />
                  <span>Now Hiring for 2026 Expansion</span>
                </div>
                
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
                  Careers at Harrsha Global
                </h1>

                <p className="text-slate-300 text-base md:text-xl leading-relaxed mb-8 font-light">
                  Join a forward-looking industrial conglomerate driving advancements across Mining, Infrastructure, 100-Acre Solar Energy, Defense Sheets, Glass & Steel, Water Tech, and Software.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <button
                    onClick={scrollToForm}
                    className="bg-white text-[#0B1530] hover:bg-slate-100 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-black/20 hover:scale-[1.02] flex items-center gap-2 cursor-pointer text-sm md:text-base"
                  >
                    Apply Now <ArrowRight size={18} />
                  </button>
                  <a
                    href="#job-listings"
                    className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium px-7 py-3.5 rounded-full transition-all duration-200 backdrop-blur-sm text-sm md:text-base"
                  >
                    View All 49 Openings
                  </a>
                </div>

                {/* Quick stats row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-10 border-t border-white/10 text-left">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-white">49</div>
                    <div className="text-xs text-slate-300 font-medium mt-0.5">Active Job Openings</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-white">8</div>
                    <div className="text-xs text-slate-300 font-medium mt-0.5">Industrial Sectors</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-white">3+</div>
                    <div className="text-xs text-slate-300 font-medium mt-0.5">Vizag Work Hubs</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-white">Competitive</div>
                    <div className="text-xs text-slate-300 font-medium mt-0.5">Industry Compensation</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* JOB LISTINGS SECTION */}
        <section id="job-listings" className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
          <FadeIn>
            {/* Meta AI-style Title Banner matching Image 2 */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 mb-10 text-center">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-[#0B1530] tracking-wide mb-2 uppercase">
                Harrsha Global Private Limited
              </h2>
              <div className="text-slate-500 text-xs md:text-sm flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-medium">
                <span>Kancharapalem</span>
                <span>•</span>
                <span>Rushikonda IT SEZ</span>
                <span>•</span>
                <span>Muralinagar, Visakhapatnam, AP</span>
                <span>•</span>
                <span className="text-slate-700 font-semibold">9491750999</span>
                <span>•</span>
                <span className="text-slate-700 font-semibold">info@harrshaglobal.com</span>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center gap-2">
                <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-[#0B1530] bg-slate-100 px-3.5 py-1 rounded-md">
                  Complete Job List - Salary & Qualification (2026)
                </span>
              </div>
            </div>

            {/* Filter and Search Bar */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 md:p-6 mb-10">
              <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
                {/* Search Box */}
                <div className="relative flex-1">
                  <Search
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by job title, skill, or qualification (e.g. B.Tech, Mining, Chemist, SCADA)..."
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0B1530] focus:bg-white transition-all text-slate-800 placeholder:text-slate-400"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Department Dropdown / Quick Select */}
                <div className="w-full md:w-72">
                  <div className="relative">
                    <Building2
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                    />
                    <select
                      value={selectedDepartmentFilter}
                      onChange={(e) => setSelectedDepartmentFilter(e.target.value)}
                      className="w-full pl-11 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0B1530] focus:bg-white transition-all text-slate-800 appearance-none cursor-pointer"
                    >
                      <option value="ALL">All Departments (49 Positions)</option>
                      {DEPARTMENTS.map((dept) => (
                        <option key={dept} value={dept}>
                          {dept}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={16}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                    />
                  </div>
                </div>
              </div>

              {/* Department pills for quick filtering on desktop */}
              <div className="hidden lg:flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-100">
                <button
                  onClick={() => setSelectedDepartmentFilter('ALL')}
                  className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                    selectedDepartmentFilter === 'ALL'
                      ? 'bg-[#0B1530] text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  All ({JOBS_DATA.length})
                </button>
                {DEPARTMENTS.map((dept) => {
                  const count = JOBS_DATA.filter((j) => j.department === dept).length;
                  return (
                    <button
                      key={dept}
                      onClick={() => setSelectedDepartmentFilter(dept)}
                      className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                        selectedDepartmentFilter === dept
                          ? 'bg-[#0B1530] text-white shadow-sm'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {dept.length > 28 ? dept.substring(0, 25) + '...' : dept} ({count})
                    </button>
                  );
                })}
              </div>
            </div>

            {/* RESULTS COUNT */}
            <div className="flex items-center justify-between mb-6 px-1">
              <span className="text-sm font-semibold text-slate-600">
                Showing <strong className="text-slate-900">{filteredJobs.length}</strong> matching positions
              </span>
              {(searchQuery || selectedDepartmentFilter !== 'ALL') && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedDepartmentFilter('ALL');
                  }}
                  className="text-xs text-blue-600 hover:text-blue-800 font-medium underline"
                >
                  Reset filters
                </button>
              )}
            </div>

            {/* JOB TABLES GROUPED BY DEPARTMENT */}
            {Object.keys(groupedJobs).length === 0 ? (
              <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
                <div className="w-14 h-14 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase size={26} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-1">No positions match your search</h3>
                <p className="text-sm text-slate-500 mb-6 max-w-md mx-auto">
                  Try adjusting your search keyword or selecting "All Departments" to explore all 49 openings.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedDepartmentFilter('ALL');
                  }}
                  className="bg-[#0B1530] text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-blue-900 transition-colors"
                >
                  View All Openings
                </button>
              </div>
            ) : (
              <div className="space-y-10">
                {Object.entries(groupedJobs).map(([department, jobs]) => (
                  <div
                    key={department}
                    className="bg-white rounded-xl shadow-sm border border-slate-200/90 overflow-hidden"
                  >
                    {/* Department Title */}
                    <div className="bg-slate-50 border-b border-slate-200/80 px-6 py-4 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#0B1530]" />
                        <h3 className="text-base md:text-lg font-bold text-[#0B1530] uppercase tracking-wide">
                          {department}
                        </h3>
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 bg-white border border-slate-200 rounded-full text-slate-600">
                        {jobs.length} {jobs.length === 1 ? 'Opening' : 'Openings'}
                      </span>
                    </div>

                    {/* Desktop & Tablet Table */}
                    <div className="hidden sm:block overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-[#0B1530] text-white text-xs uppercase tracking-wider font-semibold">
                            <th className="py-3 px-6 w-1/3 border-r border-slate-700/50">Post</th>
                            <th className="py-3 px-6 w-1/3 border-r border-slate-700/50">Qualification</th>
                            <th className="py-3 px-6 w-1/4 border-r border-slate-700/50">Salary / Month</th>
                            <th className="py-3 px-6 text-center w-28">Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-sm">
                          {jobs.map((job, idx) => (
                            <tr
                              key={job.id}
                              className={`hover:bg-blue-50/40 transition-colors ${
                                idx % 2 === 1 ? 'bg-slate-50/40' : 'bg-white'
                              }`}
                            >
                              <td className="py-3.5 px-6 font-semibold text-slate-900 border-r border-slate-100">
                                {job.post}
                              </td>
                              <td className="py-3.5 px-6 text-slate-600 border-r border-slate-100 font-normal">
                                {job.qualification}
                              </td>
                              <td className="py-3.5 px-6 font-medium text-emerald-700 border-r border-slate-100 whitespace-nowrap">
                                {job.salary}
                              </td>
                              <td className="py-3.5 px-6 text-center whitespace-nowrap">
                                <button
                                  onClick={() => handleApplyClick(job)}
                                  className="bg-[#0B1530] hover:bg-blue-900 text-white text-xs font-semibold px-4 py-1.5 rounded-lg transition-all shadow-sm hover:shadow cursor-pointer"
                                >
                                  Apply
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Mobile Card Layout */}
                    <div className="sm:hidden divide-y divide-slate-100">
                      {jobs.map((job) => (
                        <div key={job.id} className="p-4 space-y-3">
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="font-bold text-slate-900 text-base">{job.post}</h4>
                            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 shrink-0">
                              {job.salary}
                            </span>
                          </div>
                          <div className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-lg">
                            <strong className="text-slate-800">Qualification:</strong> {job.qualification}
                          </div>
                          <button
                            onClick={() => handleApplyClick(job)}
                            className="w-full bg-[#0B1530] hover:bg-blue-900 text-white text-xs font-bold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                          >
                            Apply for this Position <ArrowRight size={14} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Official Footer Contact line specified in requirements & Image 2 */}
            <div className="mt-12 p-6 bg-slate-100/90 border border-slate-200 rounded-2xl text-center">
              <p className="text-sm md:text-base font-semibold text-[#0B1530] tracking-wide">
                For Apply:{' '}
                <span className="text-blue-700">www.harrshaglobal.com/careers</span>{' '}
                <span className="mx-2 text-slate-400">|</span>{' '}
                <a href="tel:9491750999" className="hover:underline text-slate-900">
                  9491750999
                </a>{' '}
                <span className="mx-2 text-slate-400">|</span>{' '}
                <a href="mailto:info@harrshaglobal.com" className="hover:underline text-slate-900">
                  info@harrshaglobal.com
                </a>
              </p>
              <p className="text-xs text-slate-500 mt-2 font-medium">
                © 2026 Harrsha Global Private Limited · Equal Opportunity Employer
              </p>
            </div>
          </FadeIn>
        </section>

        {/* CANDIDATE DETAILS APPLICATION FORM SECTION (Matching Image 1) */}
        <section ref={formSectionRef} id="application-form" className="max-w-4xl mx-auto px-6 lg:px-8 pt-8 pb-16">
          <FadeIn>
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden p-6 sm:p-10 md:p-12 relative">
              
              {/* Header Title & Subtitle */}
              <div className="mb-8 border-b border-slate-100 pb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-[#0B1530] text-white flex items-center justify-center shrink-0">
                    <Briefcase size={18} />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1530] tracking-tight">
                      Candidate Details
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 font-normal mt-0.5">
                      Fields marked <span className="text-red-500 font-semibold">*</span> are required.
                    </p>
                  </div>
                </div>

                {formData.position && (
                  <div className="mt-4 bg-blue-50/80 border border-blue-200/80 rounded-xl p-3 flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-blue-900">
                      Applying for: <strong>{formData.position}</strong> ({formData.department})
                    </span>
                    <button
                      type="button"
                      onClick={() => setFormData((p) => ({ ...p, position: '', department: '' }))}
                      className="text-blue-600 hover:text-blue-800 text-xs font-semibold underline"
                    >
                      Clear
                    </button>
                  </div>
                )}
              </div>

              {/* Error Banner */}
              {submitErrorMessage && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-3">
                  <AlertCircle size={18} className="shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Submission Error</p>
                    <p>{submitErrorMessage}</p>
                  </div>
                </div>
              )}

              {/* FORM */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot hidden input for spam protection */}
                <input
                  type="text"
                  name="hp_field"
                  value={formData.hp_field}
                  onChange={(e) => setFormData((p) => ({ ...p, hp_field: e.target.value }))}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                {/* ROW 1: Full Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-800">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      ref={nameInputRef}
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData((p) => ({ ...p, name: e.target.value }));
                        if (formErrors.name) setFormErrors((p) => ({ ...p, name: '' }));
                      }}
                      placeholder="e.g. Ananya Sharma"
                      className={`w-full px-4 py-3 bg-white border ${
                        formErrors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200'
                      } rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0B1530] text-slate-900 placeholder:text-slate-400 transition-all`}
                    />
                    {formErrors.name && (
                      <p className="text-xs text-red-500 font-medium">{formErrors.name}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-800">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData((p) => ({ ...p, phone: e.target.value }));
                        if (formErrors.phone) setFormErrors((p) => ({ ...p, phone: '' }));
                      }}
                      placeholder="e.g. 98765 43210"
                      className={`w-full px-4 py-3 bg-white border ${
                        formErrors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200'
                      } rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0B1530] text-slate-900 placeholder:text-slate-400 transition-all`}
                    />
                    {formErrors.phone && (
                      <p className="text-xs text-red-500 font-medium">{formErrors.phone}</p>
                    )}
                  </div>
                </div>

                {/* ROW 2: Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-800">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData((p) => ({ ...p, email: e.target.value }));
                      if (formErrors.email) setFormErrors((p) => ({ ...p, email: '' }));
                    }}
                    placeholder="e.g. you@example.com"
                    className={`w-full px-4 py-3 bg-white border ${
                      formErrors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200'
                    } rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0B1530] text-slate-900 placeholder:text-slate-400 transition-all`}
                  />
                  {formErrors.email && (
                    <p className="text-xs text-red-500 font-medium">{formErrors.email}</p>
                  )}
                </div>

                {/* ROW 3: Position Applied For & Department */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="position" className="block text-sm font-semibold text-slate-800">
                      Position Applied For <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="position"
                        value={formData.position}
                        onChange={handlePositionChange}
                        className={`w-full px-4 py-3 pr-10 bg-white border ${
                          formErrors.position ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200'
                        } rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0B1530] text-slate-900 appearance-none transition-all cursor-pointer`}
                      >
                        <option value="">Select a position</option>
                        {availablePositions.map((j) => (
                          <option key={j.id} value={j.post}>
                            {j.post}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={16}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                      />
                    </div>
                    {formErrors.position && (
                      <p className="text-xs text-red-500 font-medium">{formErrors.position}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="department" className="block text-sm font-semibold text-slate-800">
                      Department <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="department"
                        value={formData.department}
                        onChange={handleDepartmentChange}
                        className={`w-full px-4 py-3 pr-10 bg-white border ${
                          formErrors.department ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200'
                        } rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0B1530] text-slate-900 appearance-none transition-all cursor-pointer`}
                      >
                        <option value="">Select a department</option>
                        {DEPARTMENTS.map((dept) => (
                          <option key={dept} value={dept}>
                            {dept}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={16}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                      />
                    </div>
                    {formErrors.department && (
                      <p className="text-xs text-red-500 font-medium">{formErrors.department}</p>
                    )}
                  </div>
                </div>

                {/* ROW 4: Preferred Office & Total Experience */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="office" className="block text-sm font-semibold text-slate-800">
                      Preferred Office <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="office"
                        value={formData.office}
                        onChange={(e) => {
                          setFormData((p) => ({ ...p, office: e.target.value }));
                          if (formErrors.office) setFormErrors((p) => ({ ...p, office: '' }));
                        }}
                        className={`w-full px-4 py-3 pr-10 bg-white border ${
                          formErrors.office ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200'
                        } rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0B1530] text-slate-900 appearance-none transition-all cursor-pointer`}
                      >
                        <option value="">Select an office</option>
                        {OFFICE_LOCATIONS.map((loc) => (
                          <option key={loc} value={loc}>
                            {loc}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={16}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                      />
                    </div>
                    {formErrors.office && (
                      <p className="text-xs text-red-500 font-medium">{formErrors.office}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="experience" className="block text-sm font-semibold text-slate-800">
                      Total Experience <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="experience"
                      value={formData.experience}
                      onChange={(e) => {
                        setFormData((p) => ({ ...p, experience: e.target.value }));
                        if (formErrors.experience) setFormErrors((p) => ({ ...p, experience: '' }));
                      }}
                      placeholder="e.g. 4 years in project management"
                      className={`w-full px-4 py-3 bg-white border ${
                        formErrors.experience ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200'
                      } rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0B1530] text-slate-900 placeholder:text-slate-400 transition-all`}
                    />
                    {formErrors.experience && (
                      <p className="text-xs text-red-500 font-medium">{formErrors.experience}</p>
                    )}
                  </div>
                </div>

                {/* ROW 5: Resume File Upload (Matching Image 1) */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-slate-800">Resume</label>
                  
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(e) => handleFileSelect(e.target.files?.[0] || null)}
                  />

                  {!resumeFile ? (
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      onDragOver={(e) => {
                        e.preventDefault();
                        setIsDragging(true);
                      }}
                      onDragLeave={() => setIsDragging(false)}
                      onDrop={(e) => {
                        e.preventDefault();
                        setIsDragging(false);
                        handleFileSelect(e.dataTransfer.files?.[0] || null);
                      }}
                      className={`border-2 border-dashed ${
                        isDragging ? 'border-blue-600 bg-blue-50/50' : 'border-slate-200 bg-slate-50/50 hover:bg-slate-50'
                      } rounded-2xl p-6 sm:p-8 flex items-center justify-center gap-4 cursor-pointer transition-all`}
                    >
                      <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-slate-200 flex items-center justify-center text-slate-500 shrink-0">
                        <Upload size={22} strokeWidth={1.5} />
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-semibold text-slate-800">
                          Choose your resume file
                        </p>
                        <p className="text-xs text-slate-500 mt-0.5">
                          PDF, DOC or DOCX · max 5 MB
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3 overflow-hidden">
                        <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                          <FileText size={20} />
                        </div>
                        <div className="truncate">
                          <p className="text-sm font-semibold text-slate-800 truncate">
                            {resumeFile.name}
                          </p>
                          <p className="text-xs text-slate-500">
                            {(resumeFile.size / (1024 * 1024)).toFixed(2)} MB · Ready to submit
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setResumeFile(null);
                          if (fileInputRef.current) fileInputRef.current.value = '';
                        }}
                        className="text-slate-400 hover:text-red-500 p-2 rounded-lg hover:bg-white transition-colors"
                        title="Remove file"
                      >
                        <X size={18} />
                      </button>
                    </div>
                  )}

                  {resumeError && (
                    <p className="text-xs text-red-500 font-medium">{resumeError}</p>
                  )}
                </div>

                {/* ROW 6: Cover Note */}
                <div className="space-y-1.5">
                  <label htmlFor="coverNote" className="block text-sm font-semibold text-slate-800">
                    Cover Note
                  </label>
                  <textarea
                    id="coverNote"
                    rows={4}
                    value={formData.coverNote}
                    onChange={(e) => setFormData((p) => ({ ...p, coverNote: e.target.value }))}
                    placeholder="Briefly describe your relevant experience..."
                    className="w-full p-4 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0B1530] text-slate-900 placeholder:text-slate-400 transition-all resize-none"
                  />
                </div>

                {/* ROW 7: Submit Button (Matching Image 1) */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#0B1530] hover:bg-[#14234b] text-white font-bold py-4 px-6 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 text-sm tracking-wider uppercase"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>SUBMITTING APPLICATION...</span>
                      </>
                    ) : (
                      <>
                        <span>SUBMIT APPLICATION</span>
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                </div>

                {/* Form Footer Note */}
                <p className="text-center text-xs text-slate-500 leading-relaxed px-4 pt-1">
                  Your application and resume will be securely transmitted to our Human Resources department. For immediate inquiries, contact{' '}
                  <a href="mailto:info@harrshaglobal.com" className="text-blue-600 font-medium hover:underline">
                    info@harrshaglobal.com
                  </a>{' '}
                  or call{' '}
                  <a href="tel:9491750999" className="text-blue-600 font-medium hover:underline">
                    +91 9491750999
                  </a>.
                </p>
              </form>
            </div>
          </FadeIn>
        </section>
      </div>

      {/* SUCCESS MODAL / SCREEN */}
      {submitSuccessData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl border border-slate-100 text-center relative animate-in zoom-in-95 duration-200">
            {/* Green Check Icon */}
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-5 shadow-inner">
              <CheckCircle2 size={36} />
            </div>

            <h3 className="text-2xl font-extrabold text-[#0B1530] mb-2">
              Application Submitted!
            </h3>
            
            <p className="text-slate-600 text-sm mb-6">
              Thank you, <strong className="text-slate-900">{submitSuccessData.name}</strong>. Your application for{' '}
              <strong className="text-slate-900">{submitSuccessData.position}</strong> has been successfully received by Harrsha Global.
            </p>

            {/* Application ID Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-6 flex items-center justify-between">
              <div className="text-left">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block">
                  Application ID
                </span>
                <span className="text-lg font-mono font-bold text-[#0B1530]">
                  {submitSuccessData.applicationId}
                </span>
              </div>
              <button
                onClick={copyApplicationId}
                className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 bg-white border border-slate-200 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors shadow-xs"
              >
                {isCopiedId ? (
                  <>
                    <Check size={14} className="text-emerald-600" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy ID</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-xs text-slate-500 mb-8 leading-relaxed">
              An auto-reply confirmation email has been dispatched to your email address. Our HR recruitment team will review your qualifications and contact you shortly.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  setSubmitSuccessData(null);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-3 px-5 rounded-xl text-sm transition-colors cursor-pointer"
              >
                Back to Careers
              </button>
              <button
                onClick={() => {
                  setSubmitSuccessData(null);
                  formSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex-1 bg-[#0B1530] hover:bg-blue-900 text-white font-semibold py-3 px-5 rounded-xl text-sm transition-colors cursor-pointer"
              >
                Apply for Another Role
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
