import React, { useState, useRef, useEffect } from "react";
import { ArrowLeft, MapPin, Calendar, Award, CheckCircle, Download, Landmark, Users, BookOpen, Medal, Star, TrendingUp, Check, Play, ChevronRight, Send, Briefcase } from "lucide-react";
import { College, Course } from "../types/college";

interface DetailViewProps {
  college: College;
  onBack: () => void;
}

export default function DetailView({ college, onBack }: DetailViewProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "courses" | "placements" | "reviews">("overview");
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [applied, setApplied] = useState(false);

  // Form Fields
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [applicantPhone, setApplicantPhone] = useState("");
  const [applicantCourse, setApplicantCourse] = useState(college.courses[0]?.name || "");

  const overviewRef = useRef<HTMLDivElement>(null);
  const coursesRef = useRef<HTMLDivElement>(null);
  const placementsRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);

  const handleScrollToSection = (section: "overview" | "courses" | "placements" | "reviews") => {
    setActiveTab(section);
    let targetRef;
    if (section === "overview") targetRef = overviewRef;
    if (section === "courses") targetRef = coursesRef;
    if (section === "placements") targetRef = placementsRef;
    if (section === "reviews") targetRef = reviewsRef;

    if (targetRef && targetRef.current) {
      const offset = 140; // accounted for sticky headers
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetRef.current.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantEmail || !applicantPhone) {
      alert("Please populate all mandated criteria.");
      return;
    }
    setApplied(true);
    setTimeout(() => {
      setShowApplyModal(false);
      setApplied(false);
      setApplicantName("");
      setApplicantEmail("");
      setApplicantPhone("");
      alert(`Application to ${college.name} for ${applicantCourse} is successfully registered! Our counselor will reach out shortly.`);
    }, 1500);
  };

  const handleDownloadBrochure = () => {
    alert(`Downloading brochure for ${college.name}... This simulated PDF aggregates course descriptions, fee matrix, hostel rates, and placements list.`);
  };

  return (
    <div className="w-full">
      {/* Back button and breadcrumb */}
      <div className="mb-4 flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs font-bold text-brand-primary hover:underline cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to College Listings Hub</span>
        </button>
        <span className="text-xs text-brand-text-muted font-semibold">
          Home / Colleges / {college.id.toUpperCase()}
        </span>
      </div>

      {/* Hero Banner Section */}
      <section className="bg-white border border-brand-border-subtle rounded-2xl overflow-hidden shadow-sm mb-6">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Logo / Image visual side */}
          <div className="w-full lg:w-[38%] relative aspect-[4/3] bg-brand-surface-container overflow-hidden shrink-0">
            {college.id === "iit-bombay" ? (
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0s_bXAO--uPYKyV57KuTq5hpKB-yFsXq8-X_Qcc0VyiEgjEeZ__1cccJvfdSErI_JIpdoLgboo5AG5vn2kn2xFBWmnmoybQeBkNQmalcjdlS9AOGxNgDMX3GG9iCZSOzQMl2WpDroYa5XG48ItM7uEOHSJX8hLb2-M98x4MelrgwaNBBSL63uus2eIw-vu5Zbal3_KqbWiRdFCPrj15ZlmhjV4HYX3dmVRgNTN1xYRJHrSVSSCKbySI4nXAPfgAJdFpm5N5Y5uWRV"
                alt="IIT Bombay establish landscape"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-brand-primary-container relative flex items-center justify-center p-8">
                <div className="text-center text-white">
                  <Landmark className="h-20 w-20 mx-auto opacity-30 mb-2" />
                  <span className="text-lg font-bold block">{college.name}</span>
                </div>
              </div>
            )}
            {/* Top Rank overlay */}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-lg border border-brand-border-subtle flex items-center gap-1.5 shadow-sm">
              <Medal className="h-4 w-4 text-brand-ranking-gold" />
              <span className="text-xs font-bold text-brand-primary">{college.tier}</span>
            </div>
          </div>

          {/* Hero details side */}
          <div className="p-6 md:p-8 flex-grow">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-brand-surface border border-brand-border-subtle text-brand-primary text-[10px] font-bold px-2.5 py-1 rounded-lg">
                {college.type}/Government
              </span>
              <span className="bg-brand-surface border border-brand-border-subtle text-brand-primary text-[10px] font-bold px-2.5 py-1 rounded-lg">
                {college.approvedBy}
              </span>
              <span className="bg-brand-secondary-container/30 border border-brand-secondary text-brand-on-secondary-container text-[10px] font-bold px-2.5 py-1 rounded-lg flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-status-success"></span>
                Admission Open 2026-27
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-brand-primary leading-tight tracking-tight">
              {college.name}
            </h1>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-1.5 mt-3 text-xs text-brand-text-muted font-semibold">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-brand-on-tertiary-container" />
                {college.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-brand-primary" />
                Estd. {college.establishedYear}
              </span>
            </div>

            <p className="mt-4 text-sm text-brand-on-surface-variant leading-relaxed">
              {college.bio}
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-6">
              <button
                onClick={() => setShowApplyModal(true)}
                className="px-6 py-2.5 bg-brand-primary hover:bg-brand-primary-container text-white rounded-lg text-xs font-bold transition-all shadow-sm cursor-pointer"
              >
                Apply Now online
              </button>
              <button
                onClick={handleDownloadBrochure}
                className="px-5 py-2.5 border border-brand-primary text-brand-primary hover:bg-brand-surface rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="h-4 w-4" />
                Download Brochure File
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Tab switcher */}
      <nav className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-brand-border-subtle shadow-sm mb-8">
        <div className="px-4 md:px-12 max-w-[1280px] mx-auto">
          <ul className="flex overflow-x-auto hide-scrollbar gap-8 text-sm font-bold pt-3">
            <li>
              <button
                onClick={() => handleScrollToSection("overview")}
                className={`pb-3 border-b-2 font-bold cursor-pointer whitespace-nowrap transition-all ${
                  activeTab === "overview"
                    ? "text-brand-primary border-brand-primary scale-102"
                    : "text-brand-on-surface-variant border-transparent hover:text-brand-primary"
                }`}
              >
                Overview & Quick Facts
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollToSection("courses")}
                className={`pb-3 border-b-2 font-bold cursor-pointer whitespace-nowrap transition-all ${
                  activeTab === "courses"
                    ? "text-brand-primary border-brand-primary scale-102"
                    : "text-brand-on-surface-variant border-transparent hover:text-brand-primary"
                }`}
              >
                Courses & Fees
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollToSection("placements")}
                className={`pb-3 border-b-2 font-bold cursor-pointer whitespace-nowrap transition-all ${
                  activeTab === "placements"
                    ? "text-brand-primary border-brand-primary scale-102"
                    : "text-brand-on-surface-variant border-transparent hover:text-brand-primary"
                }`}
              >
                Placements stats
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollToSection("reviews")}
                className={`pb-3 border-b-2 font-bold cursor-pointer whitespace-nowrap transition-all ${
                  activeTab === "reviews"
                    ? "text-brand-primary border-brand-primary scale-102"
                    : "text-brand-on-surface-variant border-transparent hover:text-brand-primary"
                }`}
              >
                Campus Reviews
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Contents Divisions */}
      <div className="flex flex-col gap-10">
        
        {/* Section 1: Overview */}
        <section ref={overviewRef} className="scroll-mt-36 p-1">
          <h2 className="text-xl font-bold text-brand-primary mb-5 flex items-center gap-2">
            <Landmark className="h-5 w-5 text-brand-primary" />
            Quick Facts & Overview
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="bg-white border border-brand-border-subtle p-4 rounded-xl flex flex-col gap-1 hover:shadow-sm transition-shadow">
              <Landmark className="h-5 w-5 text-brand-primary" />
              <span className="text-[10px] font-bold text-brand-text-muted uppercase tracking-wider">Campus Area</span>
              <span className="text-base font-bold text-brand-text-main">{college.campusArea}</span>
            </div>

            <div className="bg-white border border-brand-border-subtle p-4 rounded-xl flex flex-col gap-1 hover:shadow-sm transition-shadow">
              <Users className="h-5 w-5 text-brand-primary" />
              <span className="text-[10px] font-bold text-brand-text-muted uppercase tracking-wider">Total Active Cohort</span>
              <span className="text-base font-bold text-brand-text-main">{college.totalStudents} Students</span>
            </div>

            <div className="bg-white border border-brand-border-subtle p-4 rounded-xl flex flex-col gap-1 hover:shadow-sm transition-shadow">
              <BookOpen className="h-5 w-5 text-brand-primary" />
              <span className="text-[10px] font-bold text-brand-text-muted uppercase tracking-wider">Currated Courses</span>
              <span className="text-base font-bold text-brand-text-main">{college.totalCoursesCount} Streams</span>
            </div>

            <div className="bg-white border border-brand-border-subtle p-4 rounded-xl flex flex-col gap-1 hover:shadow-sm transition-shadow">
              <Medal className="h-5 w-5 text-brand-primary" />
              <span className="text-[10px] font-bold text-brand-text-muted uppercase tracking-wider">NAAC Grade / Accreditation</span>
              <span className="text-base font-bold text-brand-text-main">A++ Grade Certified</span>
            </div>

          </div>
        </section>

        {/* Section 2: Courses & Fees */}
        <section ref={coursesRef} className="scroll-mt-36 p-1">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-xl font-bold text-brand-primary flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-brand-primary" />
              Courses & Fees Matrix
            </h2>
            <span className="text-xs bg-brand-surface border border-brand-border-subtle text-brand-primary font-bold px-3 py-1.5 rounded-lg">
              Seats Allocation Certified
            </span>
          </div>

          <div className="bg-white border border-brand-border-subtle rounded-xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-brand-surface-container-low border-b border-brand-border-subtle text-[11px] font-bold text-brand-primary uppercase tracking-wider">
                    <th className="p-4">Course/Stream Name</th>
                    <th className="p-4">Academic Eligibility</th>
                    <th className="p-4">Duration</th>
                    <th className="p-4 text-right">First Year Fees</th>
                  </tr>
                </thead>
                <tbody className="text-xs text-brand-on-surface divide-y divide-brand-border-subtle">
                  {college.courses.map((course) => (
                    <tr key={course.id} className="hover:bg-brand-surface transition-colors">
                      <td className="p-4">
                        <div className="font-bold text-sm text-brand-primary">{course.name}</div>
                        <div className="text-xs text-brand-text-muted mt-1">{course.intake} Annual Seats</div>
                      </td>
                      <td className="p-4">
                        <div className="text-brand-on-surface font-semibold">{course.eligibility}</div>
                        <div className="mt-1 flex gap-1">
                          {course.exams.map((ex) => (
                            <span
                              key={ex}
                              className="bg-brand-surface-container-highest px-2 py-0.5 rounded text-[10px] font-bold border border-brand-border-subtle text-brand-primary"
                            >
                              {ex}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="p-4 font-semibold text-brand-on-surface-variant">{course.duration}</td>
                      <td className="p-4 text-right font-bold text-sm text-brand-primary">
                        ₹{course.firstYearFee.toLocaleString("en-IN")} /yr
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 3: Placements stats */}
        <section ref={placementsRef} className="scroll-mt-36 p-1">
          <h2 className="text-xl font-bold text-brand-primary mb-5 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-brand-primary" />
            Placement Statistics (2025 Audit)
          </h2>

          <div className="flex flex-col lg:flex-row gap-6">
            
            {/* Stat items Column */}
            <div className="w-full lg:w-1/3 flex flex-col gap-4">
              
              <div className="bg-white border border-brand-border-subtle rounded-xl p-6 flex flex-col gap-1 items-center justify-center text-center shadow-sm relative overflow-hidden">
                <TrendingUp className="absolute top-4 right-4 h-5 w-5 text-brand-on-tertiary-container opacity-40" />
                <span className="text-[10px] font-bold text-brand-text-muted uppercase tracking-wider">Highest International CTC Offered</span>
                <span className="text-3xl font-extrabold text-brand-on-tertiary-container mt-1">{college.highestCtc}</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border border-brand-border-subtle rounded-xl p-4 flex flex-col gap-1 text-center shadow-sm">
                  <span className="text-[10px] font-bold text-brand-text-muted uppercase tracking-wider">Average Annual CTC</span>
                  <span className="text-lg font-bold text-brand-primary mt-1">{college.averageCtc}</span>
                </div>
                <div className="bg-white border border-brand-border-subtle rounded-xl p-4 flex flex-col gap-1 text-center shadow-sm">
                  <span className="text-[10px] font-bold text-brand-text-muted uppercase tracking-wider">Placement Conversion Rate</span>
                  <span className="text-lg font-bold text-brand-status-success mt-1">{college.placementRate}%</span>
                </div>
              </div>

            </div>

            {/* Recruiters Logos column */}
            <div className="w-full lg:w-2/3 bg-white border border-brand-border-subtle rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-sm text-brand-primary mb-4 flex items-center gap-1.5 uppercase tracking-wider">
                <Briefcase className="h-4.5 w-4.5 text-brand-primary" />
                Top Recruiting Partners
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 animate-fade-in">
                {college.topRecruiters.map((recruiter) => (
                  <div
                    key={recruiter}
                    className="h-16 bg-brand-surface border border-brand-border-subtle rounded-lg flex items-center justify-center font-bold text-xs text-brand-text-muted hover:border-brand-primary hover:text-brand-primary cursor-default select-none shadow-xs transition-all p-2 text-center"
                  >
                    <span>{recruiter}</span>
                  </div>
                ))}
                <div className="h-16 bg-brand-primary-container text-white rounded-lg flex items-center justify-center font-bold text-xs hover:bg-brand-primary transition-colors cursor-pointer text-center">
                  + 300 Recruiters
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Section 4: Reviews list */}
        <section ref={reviewsRef} className="scroll-mt-36 p-1">
          <h2 className="text-xl font-bold text-brand-primary mb-5 flex items-center gap-2">
            <Star className="h-5 w-5 text-brand-primary" />
            Verified Student Reviews & Breakdown
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left breakdown parameters */}
            <div className="lg:col-span-4 bg-white border border-brand-border-subtle rounded-xl p-5 shadow-sm">
              <h3 className="font-bold text-xs text-brand-primary uppercase tracking-wider mb-4 border-b border-brand-border-subtle pb-2">
                Rating Parameters Score
              </h3>

              <div className="flex flex-col gap-4">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-brand-primary mb-1">
                    <span>Infrastructure & Hostels</span>
                    <span className="font-bold">{college.reviewsBreakdown.infrastructure} / 5</span>
                  </div>
                  <div className="w-full h-1.5 bg-brand-surface rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brand-ranking-gold rounded-full"
                      style={{ width: `${(college.reviewsBreakdown.infrastructure / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-brand-primary mb-1">
                    <span>Faculty & Academics</span>
                    <span className="font-bold">{college.reviewsBreakdown.faculty} / 5</span>
                  </div>
                  <div className="w-full h-1.5 bg-brand-surface rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brand-ranking-gold rounded-full"
                      style={{ width: `${(college.reviewsBreakdown.faculty / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-brand-primary mb-1">
                    <span>Placement Cell Velocity</span>
                    <span className="font-bold">{college.reviewsBreakdown.placements} / 5</span>
                  </div>
                  <div className="w-full h-1.5 bg-brand-surface rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brand-ranking-gold rounded-full"
                      style={{ width: `${(college.reviewsBreakdown.placements / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="bg-brand-surface p-4 rounded-xl border border-brand-border-subtle text-center mt-3">
                  <div className="text-3xl font-extrabold text-brand-primary mb-1">{college.rating}</div>
                  <div className="flex justify-center text-brand-ranking-gold gap-0.5 mb-1.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4.5 w-4.5 ${
                          i < Math.floor(college.rating) ? "fill-brand-ranking-gold text-brand-ranking-gold" : "text-brand-outline-variant"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-[10px] text-brand-text-muted font-bold uppercase tracking-wider">
                    Based on {college.reviewsBreakdown.totalReviews} verified student survey logs
                  </p>
                </div>
              </div>
            </div>

            {/* Right student reviews mapping */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              {college.reviews.map((rev) => (
                <div key={rev.id} className="bg-white border border-brand-border-subtle rounded-xl p-5 shadow-sm">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-bold text-sm text-brand-primary">{rev.reviewerName}</h4>
                      <div className="text-[10px] text-brand-text-muted font-semibold mt-0.5">
                        Reviewed for <span className="text-brand-primary">{rev.category}</span> on {rev.date}
                      </div>
                    </div>
                    <div className="flex items-center gap-0.5 bg-brand-surface-container px-2.5 py-1 rounded-lg border border-brand-border-subtle">
                      <span className="font-bold text-brand-primary text-xs">{rev.rating}.0</span>
                      <Star className="h-3.5 w-3.5 fill-brand-ranking-gold text-brand-ranking-gold" />
                    </div>
                  </div>
                  
                  <p className="text-xs text-brand-on-surface-variant leading-relaxed italic">
                    "{rev.comment}"
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

      </div>

      {/* Online Application Modal wrapper */}
      {showApplyModal && (
        <div className="fixed inset-0 bg-brand-primary/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white p-6 rounded-2xl w-full max-w-md border border-brand-border-subtle shadow-xl animate-fade-in relative">
            <button
              onClick={() => setShowApplyModal(false)}
              className="absolute top-4 right-4 text-brand-text-muted hover:text-brand-on-tertiary-container transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
            
            <h3 className="font-bold text-lg text-brand-primary mb-1">
              Apply to {college.name.replace("Indian Institute of Technology", "IIT")}
            </h3>
            <p className="text-xs text-brand-text-muted mb-4 font-semibold">
              Register your entrance credentials for spot counseling allocation.
            </p>

            <form onSubmit={handleApplySubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold text-brand-primary uppercase tracking-wider mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                  className="w-full bg-brand-surface border border-brand-border-subtle rounded-lg p-2.5 text-xs text-brand-primary outline-none focus:border-brand-primary-container focus:ring-1 focus:ring-brand-primary-container"
                  placeholder="e.g., Harshit Sharma"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-brand-primary uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    className="w-full bg-brand-surface border border-brand-border-subtle rounded-lg p-2.5 text-xs text-brand-primary outline-none focus:border-brand-primary-container focus:ring-1 focus:ring-brand-primary-container"
                    placeholder="name@gmail.com"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-brand-primary uppercase tracking-wider mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={applicantPhone}
                    onChange={(e) => setApplicantPhone(e.target.value)}
                    className="w-full bg-brand-surface border border-brand-border-subtle rounded-lg p-2.5 text-xs text-brand-primary outline-none focus:border-brand-primary-container focus:ring-1 focus:ring-brand-primary-container"
                    placeholder="+91 9876543210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-brand-primary uppercase tracking-wider mb-1">
                  Stream Priority
                </label>
                <select
                  value={applicantCourse}
                  onChange={(e) => setApplicantCourse(e.target.value)}
                  className="w-full bg-brand-surface border border-brand-border-subtle rounded-lg p-2.5 text-xs text-brand-primary font-semibold outline-none focus:border-brand-primary-container focus:ring-1 focus:ring-brand-primary-container"
                >
                  {college.courses.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={applied}
                className="w-full bg-brand-primary text-white rounded-lg py-3 text-xs font-bold hover:bg-brand-primary-container transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md mt-4 disabled:opacity-50"
              >
                {applied ? (
                  <>
                    <span className="animate-spin rounded-full h-3.5 w-3.5 border-2 border-white border-t-transparent"></span>
                    <span>Synchronizing Application...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Submit Spot Registration Application</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

// Simple X custom Icon since inline standard may be needed if Lucide has any issue
function X({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  );
}
