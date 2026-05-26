import React, { useState } from "react";
import { X, Plus, Landmark, Award, Star, TrendingUp, BookOpen, ChevronLeft, ChevronRight, School, ArrowRight, CornerDownRight } from "lucide-react";
import { useCompare } from "../context/CompareContext";
import { College } from "../types/college";

interface CompareViewProps {
  allColleges: College[];
  onNavigateToDetail: (collegeId: string) => void;
  onNavigateToHub: () => void;
}

export default function CompareView({ allColleges, onNavigateToDetail, onNavigateToHub }: CompareViewProps) {
  const { compareList, removeFromCompare, addToCompare, clearCompare } = useCompare();
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter out colleges already compared to prevent duplicates
  const availableToCompare = allColleges.filter(
    (c) => !compareList.some((comp) => comp.id === c.id)
  );

  const searchedAvailable = availableToCompare.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddFromSearch = (college: College) => {
    addToCompare(college);
    setSearchQuery("");
    setShowSearchDropdown(false);
  };

  // If list is empty or only 1 college, show empty state / partial state with option to add
  if (compareList.length === 0) {
    return (
      <div className="bg-white border border-brand-border-subtle rounded-2xl p-12 text-center max-w-2xl mx-auto shadow-sm">
        <div className="text-5xl mb-4">📊</div>
        <h2 className="text-xl font-bold text-brand-primary">No Colleges Selected for Comparison</h2>
        <p className="text-xs text-brand-text-muted mt-2 max-w-md mx-auto">
          Our Decision Engine requires 2 or 3 colleges to compile comparative matrices. Go back to our listing and toggle "Add to Compare" on your targeted institutions.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <button
            onClick={onNavigateToHub}
            className="px-6 py-2.5 bg-brand-primary text-white font-bold text-xs rounded-lg shadow-md hover:bg-opacity-95 transition-opacity cursor-pointer"
          >
            Explore Colleges Listings
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between sm:items-end gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-brand-primary tracking-tight">
            Live Comparison Matrix
          </h1>
          <p className="text-xs text-brand-text-muted mt-1">
            Carefully evaluate NIRF rankings, first-year fee structures, user score sheets, and average packages.
          </p>
        </div>

        {compareList.length > 0 && (
          <button
            onClick={clearCompare}
            className="text-xs font-bold text-brand-primary border border-brand-border-subtle px-4 py-2 rounded-lg hover:bg-brand-surface cursor-pointer"
          >
            Clear Selected Bucket
          </button>
        )}
      </div>

      {/* Main comparative Matrix */}
      <div className="bg-white rounded-2xl border border-brand-border-subtle overflow-hidden shadow-sm">
        
        {/* Desktop View (768px and wider) */}
        <div className="hidden md:block">
          <div className="overflow-x-auto hide-scrollbar">
            <table className="w-full text-left border-collapse min-w-225">
              <thead>
                <tr className="bg-brand-surface border-b border-brand-border-subtle">
                  {/* Criteria header cells */}
                  <th className="w-[20%] p-5 border-r border-brand-border-subtle align-middle">
                    <span className="text-[10px] font-bold text-brand-text-muted uppercase tracking-wider">
                      Comparison Criteria
                    </span>
                  </th>

                  {/* Selected Colleges Headings Column Cells */}
                  {compareList.map((college) => (
                    <th
                      key={college.id}
                      className="w-[26.6%] p-6 align-top border-r border-brand-border-subtle relative bg-white group hover:bg-brand-surface-container-low transition-colors"
                    >
                      {/* Close button to remove */}
                      <button
                        onClick={() => removeFromCompare(college.id)}
                        className="absolute top-4 right-4 text-brand-text-muted hover:text-brand-on-tertiary-container transition-colors cursor-pointer"
                        title="Remove"
                      >
                        <X className="h-4.5 w-4.5" />
                      </button>

                      <div className="flex flex-col items-center text-center mt-2">
                        <div className="w-14 h-14 rounded-lg bg-brand-surface mb-3 flex items-center justify-center overflow-hidden border border-brand-border-subtle">
                          {college.logoUrl ? (
                            <img
                              src={college.logoUrl}
                              alt={college.name}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-contain p-2"
                            />
                          ) : (
                            <Landmark className="h-6 w-6 text-brand-primary" />
                          )}
                        </div>

                        <span className="bg-brand-secondary-container/20 border border-brand-secondary text-brand-on-secondary-container px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider mb-2">
                          {college.type}
                        </span>

                        <h3 className="text-xs font-bold text-brand-primary hover:underline cursor-pointer tracking-tight" onClick={() => onNavigateToDetail(college.id)}>
                          {college.name}
                        </h3>
                        <p className="text-[10px] text-brand-text-muted font-semibold mt-1">
                          {college.location}
                        </p>
                      </div>
                    </th>
                  ))}

                  {/* Add College Slots up to max 3 */}
                  {Array.from({ length: 3 - compareList.length }).map((_, idx) => (
                    <th
                      key={`placeholder-${idx}`}
                      className="w-[26.6%] p-6 align-top bg-brand-surface-container-low relative"
                    >
                      <div className="flex flex-col items-center justify-center h-full min-h-40 border-2 border-dashed border-brand-outline-variant rounded-xl p-4 text-center">
                        <div className="relative w-full">
                          <button
                            onClick={() => setShowSearchDropdown(!showSearchDropdown)}
                            className="w-10 h-10 rounded-full bg-brand-primary-container text-white flex items-center justify-center mx-auto mb-2.5 transition-transform hover:scale-105 cursor-pointer shadow-sm"
                            title="Add College to Compare"
                          >
                            <Plus className="h-5 w-5" />
                          </button>
                          <span className="text-xs font-bold text-brand-primary block mb-4">
                            Add College to compare
                          </span>

                          {/* Quick dropdown search inputs inside the placeholder */}
                          {showSearchDropdown && (
                            <div className="absolute top-22 left-0 right-0 max-w-70 mx-auto bg-white border border-brand-border-subtle rounded-xl p-3 shadow-xl z-50 text-left">
                              <input
                                type="text"
                                placeholder="Type college name..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full text-xs p-2 border border-brand-border-subtle rounded-md mb-2 outline-none focus:border-brand-primary"
                              />
                              <div className="max-h-40 overflow-y-auto flex flex-col gap-1.5 hide-scrollbar">
                                {searchedAvailable.length > 0 ? (
                                  searchedAvailable.map((c) => (
                                    <button
                                      key={c.id}
                                      onClick={() => handleAddFromSearch(c)}
                                      className="w-full text-left p-1.5 hover:bg-brand-surface rounded text-[11px] text-brand-primary font-semibold block truncate"
                                    >
                                      {c.name.replace("Indian Institute of Technology", "IIT")}
                                    </button>
                                  ))
                                ) : (
                                  <span className="text-[10px] text-brand-text-muted p-2 block text-center">
                                    No available colleges found
                                  </span>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              
              <tbody className="text-xs divide-y divide-brand-border-subtle">
                
                {/* NIRF rankings Row */}
                <tr className="hover:bg-brand-surface transition-colors">
                  <td className="p-4 border-r border-brand-border-subtle font-bold text-brand-primary uppercase text-[10px]">
                    NIRF Ranking
                  </td>
                  {compareList.map((college) => (
                    <td key={college.id} className="p-4 border-r border-brand-border-subtle text-center bg-white">
                      <div className="inline-flex items-center justify-center bg-brand-ranking-gold text-white px-3 py-1 rounded-lg text-xs font-bold leading-none">
                        {college.tier}
                      </div>
                      <div className="text-[10px] text-brand-text-muted mt-1 font-semibold">
                        in Engineering streams
                      </div>
                    </td>
                  ))}
                  {Array.from({ length: 3 - compareList.length }).map((_, i) => (
                    <td key={i} className="p-4 text-center text-brand-outline font-bold">--</td>
                  ))}
                </tr>

                {/* Average Fee stats row */}
                <tr className="hover:bg-brand-surface transition-colors">
                  <td className="p-4 border-r border-brand-border-subtle font-bold text-brand-primary uppercase text-[10px]">
                    First Year Fees
                  </td>
                  {compareList.map((college) => (
                    <td key={college.id} className="p-4 border-r border-brand-border-subtle text-center bg-white">
                      <div className="font-bold text-sm text-brand-primary">
                        ₹{(college.averageFee / 100000).toFixed(2)} Lakhs
                      </div>
                      <div className="text-[10px] text-brand-text-muted mt-1 font-semibold">
                        Average annual fee
                      </div>
                    </td>
                  ))}
                  {Array.from({ length: 3 - compareList.length }).map((_, i) => (
                    <td key={i} className="p-4 text-center text-brand-outline font-bold">--</td>
                  ))}
                </tr>

                {/* Average placements package row */}
                <tr className="hover:bg-brand-surface transition-colors">
                  <td className="p-4 border-r border-brand-border-subtle font-bold text-brand-primary uppercase text-[10px]">
                    Average Package
                  </td>
                  {compareList.map((college) => (
                    <td key={college.id} className="p-4 border-r border-brand-border-subtle text-center bg-white">
                      <div className="font-bold text-sm text-brand-status-success">
                        {college.averageCtc}
                      </div>
                      <div className="text-[10px] text-brand-text-muted mt-1 font-semibold">
                        Latest Placement Audit
                      </div>
                    </td>
                  ))}
                  {Array.from({ length: 3 - compareList.length }).map((_, i) => (
                    <td key={i} className="p-4 text-center text-brand-outline font-bold">--</td>
                  ))}
                </tr>

                {/* Placement rate row */}
                <tr className="hover:bg-brand-surface transition-colors">
                  <td className="p-4 border-r border-brand-border-subtle font-bold text-brand-primary uppercase text-[10px]">
                    Placement rate
                  </td>
                  {compareList.map((college) => (
                    <td key={college.id} className="p-4 border-r border-brand-border-subtle text-center bg-white">
                      <div className="font-bold text-base text-brand-primary">
                        {college.placementRate}%
                      </div>
                      <div className="text-[10px] text-brand-text-muted mt-0.5 font-semibold">
                        Job-Seeking Students Hired
                      </div>
                    </td>
                  ))}
                  {Array.from({ length: 3 - compareList.length }).map((_, i) => (
                    <td key={i} className="p-4 text-center text-brand-outline font-bold">--</td>
                  ))}
                </tr>

                {/* Star rating stats row */}
                <tr className="hover:bg-brand-surface transition-colors">
                  <td className="p-4 border-r border-brand-border-subtle font-bold text-brand-primary uppercase text-[10px]">
                    Student Rating
                  </td>
                  {compareList.map((college) => (
                    <td key={college.id} className="p-4 border-r border-brand-border-subtle text-center bg-white">
                      <div className="flex items-center justify-center gap-1 text-brand-ranking-gold mb-1">
                        <Star className="h-4 w-4 fill-brand-ranking-gold text-brand-ranking-gold" />
                        <span className="font-bold text-sm text-brand-primary">{college.rating}</span>
                        <span className="text-[10px] text-brand-text-muted">/ 5</span>
                      </div>
                      <span className="text-[10px] text-brand-status-info hover:underline hover:cursor-pointer" onClick={() => onNavigateToDetail(college.id)}>
                        Based on {college.reviewCount} Reviews
                      </span>
                    </td>
                  ))}
                  {Array.from({ length: 3 - compareList.length }).map((_, i) => (
                    <td key={i} className="p-4 text-center text-brand-outline font-bold">--</td>
                  ))}
                </tr>

                {/* Exams accepted lists row */}
                <tr className="hover:bg-brand-surface transition-colors">
                  <td className="p-4 border-r border-brand-border-subtle font-bold text-brand-primary uppercase text-[10px]">
                    Exams Admissible
                  </td>
                  {compareList.map((college) => {
                    const examsSet = Array.from(new Set(college.courses.flatMap((c) => c.exams)));
                    return (
                      <td key={college.id} className="p-4 border-r border-brand-border-subtle text-center bg-white">
                        <div className="flex flex-wrap gap-1 justify-center">
                          {examsSet.map((ex) => (
                            <span
                              key={ex}
                              className="bg-brand-surface-container text-brand-primary px-2.5 py-1 rounded-lg text-[9px] font-bold border border-brand-border-subtle"
                            >
                              {ex}
                            </span>
                          ))}
                        </div>
                      </td>
                    );
                  })}
                  {Array.from({ length: 3 - compareList.length }).map((_, i) => (
                    <td key={i} className="p-4 text-center text-brand-outline font-bold">--</td>
                  ))}
                </tr>

              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile View: table breaks gracefully to stacked cards matrix (scr < 768px) */}
        <div className="block md:hidden p-4 space-y-4">
          <div className="text-center pb-2 border-b border-brand-border-subtle">
            <span className="text-xs bg-brand-primary-container text-white px-3 py-1 rounded-full font-bold">
              Mobile Comparative Mode
            </span>
          </div>

          <div className="space-y-4 divide-y divide-brand-border-subtle">
            {compareList.map((college) => (
              <div key={college.id} className="pt-4 first:pt-0">
                <div className="flex items-center justify-between mb-3 bg-brand-surface p-3 rounded-xl border border-brand-border-subtle">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-white flex items-center justify-center border border-brand-border-subtle overflow-hidden p-1">
                      <img src={college.logoUrl} alt="" className="object-contain" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-brand-primary truncate max-w-42.5">
                        {college.name}
                      </h4>
                      <p className="text-[9px] text-brand-text-muted font-semibold">{college.location}</p>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => removeFromCompare(college.id)}
                    className="text-brand-on-tertiary-container hover:text-red-500 cursor-pointer"
                    title="Remove College"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {/* aligned checklist keypoints */}
                <div className="grid grid-cols-2 gap-3 text-xs p-1">
                  <div>
                    <span className="text-[9px] font-bold text-brand-text-muted uppercase">NIRF Rank</span>
                    <p className="font-bold text-xs text-brand-ranking-gold">{college.tier}</p>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-brand-text-muted uppercase">First Year Fees</span>
                    <p className="font-bold text-xs text-brand-primary">₹{(college.averageFee / 100000).toFixed(2)} L /yr</p>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-brand-text-muted uppercase">Average package</span>
                    <p className="font-bold text-xs text-brand-status-success">{college.averageCtc}</p>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-brand-text-muted uppercase">Student Score</span>
                    <p className="font-bold text-xs text-brand-primary flex items-center gap-0.5">
                      {college.rating} <Star className="h-3 w-3 fill-brand-ranking-gold text-brand-ranking-gold" />
                    </p>
                  </div>
                  <div className="col-span-2">
                    <span className="text-[9px] font-bold text-brand-text-muted uppercase block mb-1">Admissible Entrance Exam</span>
                    <div className="flex flex-wrap gap-1">
                      {college.courses[0]?.exams.map((ex) => (
                        <span key={ex} className="bg-brand-surface-container text-brand-primary border border-brand-border-subtle px-2 py-0.5 rounded text-[9px] font-bold">
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onNavigateToDetail(college.id)}
                  className="w-full mt-3 bg-brand-primary text-white text-[11px] font-bold py-2 rounded-lg flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>Deep Dive Details</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>

          {/* Option to search / populate in mobile */}
          {compareList.length < 3 && (
            <div className="border border-dashed border-brand-outline-variant rounded-xl p-4 text-center mt-6">
              <button
                onClick={() => setShowSearchDropdown(!showSearchDropdown)}
                className="mx-auto flex items-center justify-center gap-1.5 py-2 px-4 bg-brand-surface text-brand-primary text-xs font-bold border rounded-lg cursor-pointer hover:bg-brand-surface-container"
              >
                <Plus className="h-4 w-4" />
                <span>Compare Another College</span>
              </button>

              {showSearchDropdown && (
                <div className="mt-3 bg-white border border-brand-border-subtle rounded-xl p-3 shadow-md text-left max-w-xs mx-auto">
                  <input
                    type="text"
                    placeholder="Search by name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-2 text-xs border border-brand-border-subtle rounded m-1 outline-none focus:border-brand-primary"
                  />
                  <div className="max-h-36 overflow-y-auto flex flex-col gap-1 hide-scrollbar">
                    {searchedAvailable.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => handleAddFromSearch(c)}
                        className="w-full text-left p-1.5 hover:bg-brand-surface text-[10px] text-brand-primary font-bold block"
                      >
                        {c.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
