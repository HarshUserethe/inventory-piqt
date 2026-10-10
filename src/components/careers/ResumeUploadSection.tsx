"use client";

import { useState, useRef, DragEvent, ChangeEvent, useEffect } from "react";
import { Upload, FileText, CheckCircle2, X, Send, Mail, User, Briefcase, Phone } from "lucide-react";
import { openRoles } from "@/config/careers";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface ResumeUploadSectionProps {
  selectedRoleTitle?: string;
}

export default function ResumeUploadSection({ selectedRoleTitle }: ResumeUploadSectionProps) {
  const [file, setFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: selectedRoleTitle || "General Application / Other",
    experience: "3-5 years",
    coverNote: "",
  });
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (selectedRoleTitle) {
      setFormData((prev) => ({ ...prev, position: selectedRoleTitle }));
    }
  }, [selectedRoleTitle]);

  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndSetFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      validateAndSetFile(e.target.files[0]);
    }
  };

  const validateAndSetFile = (selectedFile: File) => {
    setErrorMsg("");
    const validTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!validTypes.includes(selectedFile.type)) {
      setErrorMsg("Please upload a valid PDF, DOC, or DOCX document.");
      return;
    }

    // 10 MB limit
    if (selectedFile.size > 10 * 1024 * 1024) {
      setErrorMsg("File size exceeds 10MB limit.");
      return;
    }

    setFile(selectedFile);
  };

  const removeFile = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!file) {
      setErrorMsg("Please attach your resume before submitting.");
      return;
    }

    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFile(null);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      position: "General Application / Other",
      experience: "3-5 years",
      coverNote: "",
    });
  };

  return (
    <section
      id="resume-upload"
      className="relative py-20 sm:py-28 bg-[#FAFAFC] dark:bg-[#0A0B10] text-slate-900 dark:text-white transition-colors duration-300 scroll-mt-20 z-20"
    >
      {/* Soft Radial Ambient Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25 dark:opacity-30"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(26, 115, 255, 0.25) 0%, rgba(10, 11, 16, 0) 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 dark:bg-white/10 border border-slate-200/80 dark:border-white/15 backdrop-blur-md text-slate-800 dark:text-blue-300 text-xs sm:text-sm font-semibold mb-6 shadow-sm dark:shadow-inner transition-colors">
              <Upload className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              Direct Application & Resume Upload
            </span>
            <h2 className="signature-headline text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
              <span className="sans mr-3 sm:mr-4 text-slate-900 dark:text-white">Join Our</span>
              <span className="serif italic text-blue-600 dark:text-blue-400">Talent Network</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed transition-colors">
              Don&apos;t see your exact position listed? Submit your resume directly to our recruitment team for upcoming opportunities.
            </p>
          </div>

          {/* Main Card Container */}
          <div className="bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-white/15 rounded-[32px] p-6 sm:p-10 shadow-2xl shadow-blue-500/5 backdrop-blur-xl transition-colors duration-300">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-blue-500/15 dark:bg-blue-500/20 border border-blue-500/30 dark:border-blue-400/40 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600 dark:text-blue-400">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">Resume Submitted Successfully!</h3>
                <p className="text-slate-600 dark:text-slate-300 text-base max-w-md mx-auto mb-8 leading-relaxed">
                  Thank you, <span className="text-slate-900 dark:text-white font-semibold">{formData.fullName}</span>. Our recruitment team has received your application for <span className="text-blue-600 dark:text-blue-400 font-semibold">{formData.position}</span>.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <button
                    onClick={resetForm}
                    className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-300 shadow-md shadow-blue-500/25"
                  >
                    Submit Another Application
                  </button>
                  <a
                    href={`mailto:${siteConfig.careersEmail}`}
                    className="px-6 py-3 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/15 text-slate-800 dark:text-white border border-slate-200 dark:border-white/20 font-semibold text-sm transition-all duration-300"
                  >
                    Email Talent Team Directly
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 transition-colors">
                      Full Name <span className="text-blue-600 dark:text-blue-400">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-slate-50/80 dark:bg-black/60 border border-slate-200 dark:border-white/15 rounded-xl pl-12 pr-4 py-3.5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 focus:ring-1 focus:ring-blue-600 dark:focus:ring-blue-500 text-sm transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 transition-colors">
                      Email Address <span className="text-blue-600 dark:text-blue-400">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full bg-slate-50/80 dark:bg-black/60 border border-slate-200 dark:border-white/15 rounded-xl pl-12 pr-4 py-3.5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 focus:ring-1 focus:ring-blue-600 dark:focus:ring-blue-500 text-sm transition-all duration-200"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 transition-colors">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-slate-50/80 dark:bg-black/60 border border-slate-200 dark:border-white/15 rounded-xl pl-12 pr-4 py-3.5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 focus:ring-1 focus:ring-blue-600 dark:focus:ring-blue-500 text-sm transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Position of Interest */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 transition-colors">
                      Position of Interest <span className="text-blue-600 dark:text-blue-400">*</span>
                    </label>
                    <div className="relative">
                      <Briefcase className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 pointer-events-none" />
                      <select
                        value={formData.position}
                        onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                        className="w-full bg-slate-50/80 dark:bg-black/60 border border-slate-200 dark:border-white/15 rounded-xl pl-12 pr-4 py-3.5 text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 focus:ring-1 focus:ring-blue-600 dark:focus:ring-blue-500 text-sm transition-all duration-200 appearance-none cursor-pointer"
                      >
                        <option value="General Application / Other" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                          General Application / Other
                        </option>
                        {openRoles.map((role) => (
                          <option key={role.id} value={role.title} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                            {role.title} ({role.department})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* File Upload Dropzone */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 transition-colors">
                    Upload Resume / CV (PDF, DOC, DOCX) <span className="text-blue-600 dark:text-blue-400">*</span>
                  </label>
                  
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={handleFileChange}
                    className="hidden"
                  />

                  {file ? (
                    <div className="bg-slate-50 dark:bg-black/60 border border-blue-500/50 rounded-2xl p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3 overflow-hidden">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center shrink-0 text-blue-600 dark:text-blue-400">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div className="truncate">
                          <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">{file.name}</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={removeFile}
                        className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors"
                        title="Remove file"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ) : (
                    <div
                      onDragEnter={handleDrag}
                      onDragLeave={handleDrag}
                      onDragOver={handleDrag}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className={cn(
                        "border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all duration-300",
                        dragActive
                          ? "border-blue-600 dark:border-blue-500 bg-blue-50 dark:bg-blue-500/10"
                          : "border-slate-200 dark:border-white/15 hover:border-blue-500/50 bg-slate-50/60 dark:bg-black/40 hover:bg-slate-100 dark:hover:bg-black/60"
                      )}
                    >
                      <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-3 text-blue-600 dark:text-blue-400">
                        <Upload className="w-6 h-6" />
                      </div>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1">
                        Click to upload or drag & drop resume
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Supports PDF, DOC, DOCX (Max 10MB)
                      </p>
                    </div>
                  )}
                </div>

                {/* Cover Note */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 transition-colors">
                    Cover Note / Additional Details (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.coverNote}
                    onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                    placeholder="Briefly tell us about your background, key technical skills, or preferred start date..."
                    className="w-full bg-slate-50/80 dark:bg-black/60 border border-slate-200 dark:border-white/15 rounded-xl p-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 focus:ring-1 focus:ring-blue-600 dark:focus:ring-blue-500 text-sm transition-all duration-200"
                  />
                </div>

                {/* Error message */}
                {errorMsg && (
                  <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-700 dark:text-rose-300 text-xs sm:text-sm flex items-center gap-2">
                    <span>⚠️</span> {errorMsg}
                  </div>
                )}

                {/* Submit button & Mailto alternative */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 transition-all duration-300 disabled:opacity-50"
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting Application...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Submit Resume <Send className="w-4 h-4" />
                      </span>
                    )}
                  </button>

                  <div className="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-right">
                    Prefer email? Send CV directly to{" "}
                    <a
                      href={`mailto:${siteConfig.careersEmail}?subject=Resume Application - ${encodeURIComponent(formData.fullName || "Candidate")}`}
                      className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                    >
                      {siteConfig.careersEmail}
                    </a>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
