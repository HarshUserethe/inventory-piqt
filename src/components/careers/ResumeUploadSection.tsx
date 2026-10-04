"use client";

import { useState, useRef, DragEvent, ChangeEvent } from "react";
import { Upload, FileText, CheckCircle2, X, ArrowRight, Send, Mail, User, Briefcase, Phone } from "lucide-react";
import { openRoles } from "@/config/careers";
import { siteConfig } from "@/config/site";

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
      setErrorMsg("Please upload a PDF, DOC, or DOCX file.");
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
      setErrorMsg("Please upload your resume before submitting.");
      return;
    }

    setSubmitting(true);
    // Simulate async submission
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
    <section id="resume-upload" className="section-padding bg-gradient-to-b from-neutral-900 to-neutral-950 text-white scroll-mt-24">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-sm font-medium mb-4">
              <Upload className="w-4 h-4 text-primary-400" />
              Direct Application & Resume Upload
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-4">
              Upload Your Resume & Join Our Talent Pool
            </h2>
            <p className="text-neutral-300 text-base max-w-2xl mx-auto leading-relaxed">
              Don&apos;t see your exact role listed? Or prefer to share your resume directly with our talent acquisition team? Submit your profile below.
            </p>
          </div>

          {/* Card Container */}
          <div className="bg-neutral-900/90 border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
            {submitted ? (
              <div className="text-center py-10 animate-fade-in">
                <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6 text-emerald-400">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Resume Submitted Successfully!</h3>
                <p className="text-neutral-300 text-base max-w-md mx-auto mb-8 leading-relaxed">
                  Thank you, <span className="text-white font-medium">{formData.fullName}</span>. Our recruitment team has received your resume and application for <span className="text-primary-300 font-medium">{formData.position}</span>.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <button
                    onClick={resetForm}
                    className="btn-primary text-sm py-3 px-6"
                  >
                    Submit Another Resume
                  </button>
                  <a
                    href={`mailto:${siteConfig.careersEmail}`}
                    className="btn-secondary text-sm py-3 px-6 border-neutral-700 text-neutral-200 hover:bg-neutral-800"
                  >
                    Email Careers Team Directly
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                      Full Name <span className="text-rose-400">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500" />
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl pl-11 pr-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 text-sm transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                      Email Address <span className="text-rose-400">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl pl-11 pr-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 text-sm transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Mail className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500 hidden sm:block" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 sm:pl-11 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 text-sm transition-all"
                      />
                    </div>
                  </div>

                  {/* Position of Interest */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                      Position of Interest <span className="text-rose-400">*</span>
                    </label>
                    <div className="relative">
                      <Briefcase className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" />
                      <select
                        value={formData.position}
                        onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl pl-11 pr-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 text-sm transition-all appearance-none"
                      >
                        <option value="General Application / Other">General Application / Spontaneous Candidate</option>
                        {openRoles.map((role) => (
                          <option key={role.id} value={role.title}>
                            {role.title} ({role.department})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* File Upload Dropzone */}
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Upload Resume / CV (PDF, DOC, DOCX) <span className="text-rose-400">*</span>
                  </label>
                  
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={handleFileChange}
                    className="hidden"
                  />

                  {file ? (
                    <div className="bg-neutral-950 border border-primary-500/40 rounded-2xl p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3 overflow-hidden">
                        <div className="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center shrink-0 text-primary-400">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div className="truncate">
                          <p className="text-sm font-medium text-white truncate">{file.name}</p>
                          <p className="text-xs text-neutral-400">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={removeFile}
                        className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
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
                      className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all ${
                        dragActive
                          ? "border-primary-500 bg-primary-500/10"
                          : "border-neutral-800 hover:border-neutral-600 bg-neutral-950/60"
                      }`}
                    >
                      <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mx-auto mb-3 text-neutral-400 group-hover:text-white">
                        <Upload className="w-6 h-6 text-primary-400" />
                      </div>
                      <p className="text-sm font-medium text-neutral-200 mb-1">
                        Click to upload or drag and drop resume
                      </p>
                      <p className="text-xs text-neutral-500">
                        Supports PDF, DOC, DOCX (Max 10MB)
                      </p>
                    </div>
                  )}
                </div>

                {/* Cover Note / Brief Introduction */}
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Cover Note / Additional Details (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.coverNote}
                    onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                    placeholder="Tell us briefly about your background, key expertise, or preferred location..."
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-4 text-white placeholder-neutral-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 text-sm transition-all"
                  />
                </div>

                {/* Error message if any */}
                {errorMsg && (
                  <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-sm flex items-center gap-2">
                    <span>⚠️</span> {errorMsg}
                  </div>
                )}

                {/* Submit button & Mailto alternative */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full sm:w-auto py-3.5 px-8 justify-center disabled:opacity-50"
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Uploading Resume...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Submit Resume <Send className="w-4 h-4" />
                      </span>
                    )}
                  </button>

                  <div className="text-xs text-neutral-400 text-center sm:text-right">
                    Prefer email? Send your CV directly to{" "}
                    <a
                      href={`mailto:${siteConfig.careersEmail}?subject=Resume Application - ${encodeURIComponent(formData.fullName || "Candidate")}`}
                      className="text-primary-400 hover:underline font-medium"
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
