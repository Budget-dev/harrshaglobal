import React, { useState, useId, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  Search, 
  MapPin, 
  Upload, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  X, 
  ChevronRight, 
  ArrowRight, 
  Phone, 
  Mail, 
  Building2, 
  Clock, 
  Award,
  Copy,
  Check,
  GraduationCap
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { FadeIn } from '../components/FadeIn';
import { OFFICE_STAFF_ROLES, OfficeStaffRole } from '../data/officeStaffRoles';
import { submitApplicationToFirestore } from '../services/applicationsService';

export function OfficeStaffRecruitment() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('ALL');
  const [selectedRoleForModal, setSelectedRoleForModal] = useState<OfficeStaffRole | null>(null);

  // Application form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    position: '',
    department: '',
    office: 'Visakhapatnam Corporate HQ',
    experience: '',
    coverNote: '',
    hp_field: '', // Honeypot spam trap
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeError, setResumeError] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<{
    applicationId: string;
    position: string;
    name: string;
  } | null>(null);
  const [submitErrorMessage, setSubmitErrorMessage] = useState<string | null>(null);
  const [isCopiedId, setIsCopiedId] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const formSectionRef = useRef<HTMLDivElement>(null);
  const nameInputId = useId();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Distinct departments
  const departments = ['ALL', ...Array.from(new Set(OFFICE_STAFF_ROLES.map(r => r.department)))].sort();

  // Filter roles
  const filteredRoles = OFFICE_STAFF_ROLES.filter((role) => {
    const matchesDept = selectedDepartment === 'ALL' || role.department === selectedDepartment;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || (
      role.title.toLowerCase().includes(q) ||
      role.department.toLowerCase().includes(q) ||
      role.description.toLowerCase().includes(q) ||
      role.qualification.toLowerCase().includes(q)
    );
    return matchesDept && matchesSearch;
  });

  const handleApplyClick = (role: OfficeStaffRole) => {
    setFormData((prev) => ({
      ...prev,
      position: role.title,
      department: role.department,
      office: role.location,
    }));
    setSelectedRoleForModal(role);
    setSubmitSuccess(null);
    setSubmitErrorMessage(null);

    // Also scroll smoothly to form if on screen
    if (formSectionRef.current) {
      formSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFileChange = (file: File | null) => {
    if (!file) {
      setResumeFile(null);
      setResumeError(null);
      return;
    }

    const validExtensions = ['.pdf', '.doc', '.docx'];
    const fileName = file.name.toLowerCase();
    const isValidExt = validExtensions.some((ext) => fileName.endsWith(ext));

    if (!isValidExt) {
      setResumeError('Accepted document formats: PDF, DOC, or DOCX only.');
      setResumeFile(null);
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setResumeError('Document file size must not exceed 5 MB.');
      setResumeFile(null);
      return;
    }

    setResumeError(null);
    setResumeFile(file);
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Full candidate name is required.';
    if (!formData.phone.trim()) {
      errors.phone = 'Contact telephone or mobile number is required.';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      errors.phone = 'Please provide a valid phone number (8-15 digits).';
    }

    if (!formData.email.trim()) {
      errors.email = 'Official or personal email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Please provide a valid email format.';
    }

    if (!formData.position.trim()) errors.position = 'Please choose a job role.';
    if (!formData.experience.trim()) errors.experience = 'Please indicate your experience level.';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitErrorMessage(null);

    // Spam honeypot
    if (formData.hp_field) {
      setSubmitSuccess({
        applicationId: 'HG-2026-7788',
        position: formData.position,
        name: formData.name,
      });
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      let resumeData: string | undefined = undefined;
      let resumeName = '';
      let resumeSize = '';

      if (resumeFile) {
        resumeName = resumeFile.name;
        resumeSize = `${(resumeFile.size / 1024).toFixed(1)} KB`;
        try {
          const reader = new FileReader();
          resumeData = await new Promise<string>((resolve, reject) => {
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(resumeFile);
          });
        } catch (readErr) {
          console.warn('Could not read resume file to base64, proceeding with filename only', readErr);
        }
      }

      const res = await submitApplicationToFirestore({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        position: formData.position,
        department: formData.department || 'Corporate Office',
        office: formData.office || 'Visakhapatnam Corporate HQ',
        experience: formData.experience,
        coverNote: formData.coverNote,
        resumeName,
        resumeSize,
        resumeData,
      });

      setSubmitSuccess({
        applicationId: res.applicationId,
        position: formData.position,
        name: formData.name,
      });

      // Clear form
      setFormData({
        name: '',
        phone: '',
        email: '',
        position: '',
        department: '',
        office: 'Visakhapatnam Corporate HQ',
        experience: '',
        coverNote: '',
        hp_field: '',
      });
      setResumeFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
    } catch (err: any) {
      console.error('Submission error:', err);
      setSubmitErrorMessage(err.message || 'Unable to submit your application. Please check your network and retry.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyApplicationId = (id: string) => {
    navigator.clipboard.writeText(id);
    setIsCopiedId(true);
    setTimeout(() => setIsCopiedId(false), 2500);
  };

  const breadcrumbs = [
    { name: 'Home', url: 'https://www.harrshaglobal.com/' },
    { name: 'Careers', url: 'https://www.harrshaglobal.com/careers' },
    { name: 'Office Staff Recruitment', url: 'https://www.harrshaglobal.com/office-staff-recruitment' },
  ];

  const recruitmentSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Office Staff & Corporate Recruitment | Harrsha Global Private Limited',
    url: 'https://www.harrshaglobal.com/office-staff-recruitment',
    description: 'A to Z Office Staff & Corporate Roles recruitment for Harrsha Global Private Limited corporate and operational expansion across India.',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((b, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: b.name,
        item: b.url,
      })),
    },
  };

  return (
    <>
      <SEO 
        title="Office Staff Recruitment | A to Z Corporate Job Roles | Harrsha Global"
        description="Explore and apply for A to Z corporate office and operational positions at Harrsha Global Private Limited across India. Direct online job applications."
        url="/office-staff-recruitment"
        schema={recruitmentSchema}
      />

      <div className="pt-28 pb-20 min-h-screen bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-8">
            <Link to="/" className="hover:text-blue-700 transition-colors">Home</Link>
            <ChevronRight size={14} className="text-slate-400" />
            <Link to="/careers" className="hover:text-blue-700 transition-colors">Careers</Link>
            <ChevronRight size={14} className="text-slate-400" />
            <span className="text-slate-800 font-semibold">Office Staff Recruitment</span>
          </nav>

          {/* Hero Header */}
          <FadeIn>
            <div className="max-w-4xl mb-12">
              <span className="inline-block bg-blue-50 text-blue-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                Corporate &amp; Operational Expansion
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1530] tracking-tight mb-4">
                Office Staff Recruitment (A to Z Job Roles)
              </h1>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light mb-4">
                In alignment with <strong>Harrsha Global Private Limited</strong> corporate scaling across mining, sponge iron, granite export, bulletproof defense manufacturing, and infrastructure, we are inviting applications across our complete A to Z roster of corporate office, operational management, and administrative positions.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700 pt-2">
                <span className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-2xs">
                  <Building2 size={14} className="text-blue-700" /> Visakhapatnam Corporate HQ
                </span>
                <span className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-2xs">
                  <MapPin size={14} className="text-blue-700" /> Ballari &middot; Hyderabad &middot; Regional Hubs
                </span>
                <span className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-2xs">
                  <Briefcase size={14} className="text-emerald-700" /> Full-Time Direct Employment
                </span>
                <span className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-2xs">
                  <Award size={14} className="text-amber-700" /> {OFFICE_STAFF_ROLES.length} Positions Available
                </span>
              </div>
            </div>
          </FadeIn>

          {/* Search & Department Filters */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8">
            <div className="md:col-span-8 relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search by job title, department, or keyword (e.g., Accountant, Manager, Engineer)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-xs md:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0B1530] shadow-2xs"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            <div className="md:col-span-4">
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full py-3 px-4 bg-white border border-slate-200 rounded-xl text-xs md:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B1530] shadow-2xs cursor-pointer"
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept === 'ALL' ? 'All Departments' : dept}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Roles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredRoles.map((role, idx) => (
              <FadeIn key={role.id} delay={Math.min(idx * 0.03, 0.3)}>
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between h-full">
                  <div>
                    {/* Header with Letter badge & department */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-900 font-black text-xs flex items-center justify-center border border-blue-200/60">
                        {role.letter}
                      </span>
                      <span className="text-[11px] font-bold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
                        {role.department}
                      </span>
                    </div>

                    {/* Role Title */}
                    <h2 className="text-lg font-bold text-[#0B1530] tracking-tight mb-2">
                      {role.title}
                    </h2>

                    {/* Meta info (Location, Exp, Qual) */}
                    <div className="space-y-1.5 text-xs text-slate-600 mb-4 pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-1.5">
                        <MapPin size={13} className="text-slate-400 shrink-0" />
                        <span>{role.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock size={13} className="text-slate-400 shrink-0" />
                        <span>Experience: <strong>{role.experience}</strong></span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <GraduationCap size={13} className="text-slate-400 shrink-0" />
                        <span className="truncate" title={role.qualification}>Qual: {role.qualification}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed mb-6 font-light">
                      {role.description}
                    </p>
                  </div>

                  {/* Apply Action Button */}
                  <div className="pt-2">
                    <button
                      onClick={() => handleApplyClick(role)}
                      className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-blue-900 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-2xs"
                    >
                      Apply for this Role <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </FadeIn>
            ))}

            {filteredRoles.length === 0 && (
              <div className="col-span-full py-16 text-center bg-white rounded-3xl border border-slate-200">
                <Briefcase className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="text-base font-bold text-slate-800 mb-1">No roles matching your filter</h3>
                <p className="text-xs text-slate-500 mb-4">Try clearing your search query or selecting another department.</p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedDepartment('ALL'); }}
                  className="px-4 py-2 bg-[#0B1530] text-white text-xs font-bold rounded-xl"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>

          {/* Dedicated Application Form Section */}
          <div ref={formSectionRef} className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-sm max-w-4xl mx-auto">
            <div className="border-b border-slate-100 pb-6 mb-8 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block mb-1">
                Direct Candidate Application
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B1530] tracking-tight">
                Submit Your Application to Harrsha Global
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 font-light">
                Fill in your candidate details below. Our corporate HR team reviews all applications and coordinates preliminary interview rounds within 48 business hours.
              </p>
            </div>

            {submitSuccess ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-xl font-bold text-emerald-950">Application Successfully Submitted!</h3>
                <p className="text-xs sm:text-sm text-emerald-800 max-w-lg mx-auto">
                  Thank you, <strong>{submitSuccess.name}</strong>. Your profile for the <strong>{submitSuccess.position}</strong> position has been registered with Harrsha Global Corporate Recruitment.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-emerald-300 shadow-2xs text-xs font-mono font-bold text-emerald-900">
                  <span>Application Reference ID: {submitSuccess.applicationId}</span>
                  <button
                    onClick={() => copyApplicationId(submitSuccess.applicationId)}
                    className="p-1 hover:text-emerald-700"
                    title="Copy ID"
                  >
                    {isCopiedId ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => setSubmitSuccess(null)}
                    className="px-6 py-2.5 bg-[#0B1530] text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-blue-900 transition-colors"
                  >
                    Submit Another Application
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot hidden input */}
                <input
                  type="text"
                  name="hp_field"
                  value={formData.hp_field}
                  onChange={(e) => setFormData({ ...formData, hp_field: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {submitErrorMessage && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs text-red-800 flex items-center gap-2">
                    <AlertCircle size={16} className="text-red-600 shrink-0" />
                    <span>{submitErrorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor={nameInputId} className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Candidate Full Name *
                    </label>
                    <input
                      id={nameInputId}
                      type="text"
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs md:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0B1530] focus:bg-white"
                    />
                    {formErrors.name && <p className="text-[11px] text-red-600 mt-1">{formErrors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Mobile / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 9491750999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs md:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0B1530] focus:bg-white"
                    />
                    {formErrors.phone && <p className="text-[11px] text-red-600 mt-1">{formErrors.phone}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. rajesh@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs md:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0B1530] focus:bg-white"
                    />
                    {formErrors.email && <p className="text-[11px] text-red-600 mt-1">{formErrors.email}</p>}
                  </div>

                  {/* Position */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Applying For Position *
                    </label>
                    <select
                      value={formData.position}
                      onChange={(e) => {
                        const chosen = OFFICE_STAFF_ROLES.find(r => r.title === e.target.value);
                        setFormData({
                          ...formData,
                          position: e.target.value,
                          department: chosen ? chosen.department : formData.department,
                        });
                      }}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs md:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0B1530] focus:bg-white cursor-pointer"
                    >
                      <option value="">Select an office role (A to Z)</option>
                      {OFFICE_STAFF_ROLES.map((r) => (
                        <option key={r.id} value={r.title}>
                          [{r.letter}] {r.title} ({r.department})
                        </option>
                      ))}
                    </select>
                    {formErrors.position && <p className="text-[11px] text-red-600 mt-1">{formErrors.position}</p>}
                  </div>

                  {/* Office Hub */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Preferred Office Location
                    </label>
                    <select
                      value={formData.office}
                      onChange={(e) => setFormData({ ...formData, office: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs md:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0B1530] focus:bg-white cursor-pointer"
                    >
                      <option value="Visakhapatnam Corporate HQ">Visakhapatnam Corporate HQ (Rushikonda / Muralinagar)</option>
                      <option value="Ballari Mining & Plant Office">Ballari Mining &amp; Plant Office (Karnataka)</option>
                      <option value="Chimakurthi Granite Operations">Chimakurthi Granite Operations (Prakasam)</option>
                      <option value="Hyderabad Regional Office">Hyderabad Regional Office (Telangana)</option>
                      <option value="Any Group Operational Location">Flexible / Any Group Operational Location</option>
                    </select>
                  </div>

                  {/* Experience */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Relevant Total Experience *
                    </label>
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs md:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0B1530] focus:bg-white cursor-pointer"
                    >
                      <option value="">Select experience bracket</option>
                      <option value="Fresher / 0-1 Year">Fresher / 0 - 1 Year</option>
                      <option value="1 - 3 Years">1 - 3 Years</option>
                      <option value="3 - 5 Years">3 - 5 Years</option>
                      <option value="5 - 8 Years">5 - 8 Years</option>
                      <option value="8 - 12 Years">8 - 12 Years</option>
                      <option value="12+ Years Executive">12+ Years (Senior / Executive)</option>
                    </select>
                    {formErrors.experience && <p className="text-[11px] text-red-600 mt-1">{formErrors.experience}</p>}
                  </div>
                </div>

                {/* Resume Upload Drag & Drop */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Attach Resume / CV (PDF, DOC, DOCX &bull; Max 5 MB)
                  </label>
                  
                  <div
                    onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={(e) => {
                      e.preventDefault();
                      setIsDragging(false);
                      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                        handleFileChange(e.dataTransfer.files[0]);
                      }
                    }}
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-colors ${
                      isDragging 
                        ? 'border-blue-600 bg-blue-50/50' 
                        : resumeFile 
                        ? 'border-emerald-400 bg-emerald-50/30' 
                        : 'border-slate-300 hover:border-slate-400 bg-slate-50/50'
                    }`}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => handleFileChange(e.target.files ? e.target.files[0] : null)}
                      className="hidden"
                    />
                    
                    {resumeFile ? (
                      <div className="flex items-center justify-center gap-3">
                        <FileText size={28} className="text-emerald-700 shrink-0" />
                        <div className="text-left">
                          <p className="text-xs font-bold text-slate-900">{resumeFile.name}</p>
                          <p className="text-[11px] text-slate-500">{(resumeFile.size / 1024).toFixed(1)} KB &bull; Ready to upload</p>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleFileChange(null);
                          }}
                          className="p-1 hover:bg-slate-200 rounded-full ml-2 text-slate-500"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ) : (
                      <div>
                        <Upload size={28} className="text-slate-400 mx-auto mb-2" />
                        <p className="text-xs font-semibold text-slate-800">
                          Click to browse or drag and drop your resume here
                        </p>
                        <p className="text-[11px] text-slate-400 mt-1">
                          Supported formats: PDF, DOC, DOCX up to 5 MB
                        </p>
                      </div>
                    )}
                  </div>
                  {resumeError && <p className="text-[11px] text-red-600 mt-1">{resumeError}</p>}
                </div>

                {/* Cover Note */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Brief Introduction / Cover Note (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly highlight your core skills, current location, and notice period..."
                    value={formData.coverNote}
                    onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs md:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0B1530] focus:bg-white"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-[#0B1530] hover:bg-blue-900 disabled:bg-slate-400 text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-xs"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        Registering Application...
                      </>
                    ) : (
                      <>
                        Submit Application to Harrsha Global &rarr;
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </>
  );
}
