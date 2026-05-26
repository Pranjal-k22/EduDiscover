import React, { useState, useEffect } from "react";
import { Search, MapPin, CheckCircle, ChevronRight, Award, Trash2, ArrowRight, Sparkles } from "lucide-react";
import { College } from "../types/college";
import { useCompare } from "../context/CompareContext";
import { Star } from "lucide-react";

interface DiscoveryHubProps {
  colleges: College[];
  onViewDetails: (collegeId: string) => void;
  onNavigateToPredictor: () => void;
}

export default function DiscoveryHub({ colleges, onViewDetails, onNavigateToPredictor }: DiscoveryHubProps) {
  const { addToCompare, removeFromCompare, isInCompare } = useCompare();

  // Load initial filters from state / simulated URL params
  const [searchQuery, setSearchQuery] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("q") || "";
  });
  
  const [selectedLocations, setSelectedLocations] = useState<string[]>(() => {
    const params = new URLSearchParams(window.location.search);
    const locs = params.get("locations");
    return locs ? locs.split(",") : [];
  });

  const [selectedFees, setSelectedFees] = useState<string[]>(() => {
    const params = new URLSearchParams(window.location.search);
    const fees = params.get("fees");
    return fees ? fees.split(",") : [];
  });

  const [minRating, setMinRating] = useState<number>(() => {
    const params = new URLSearchParams(window.location.search);
    const r = params.get("rating");
    return r ? parseFloat(r) : 0;
  });

  const [sortBy, setSortBy] = useState<string>("popularity");

  // Sync state with URL Search Parameters
  useEffect(() => {
    const params = new URLSearchParams();
    if (searchQuery) params.set("q", searchQuery);
    if (selectedLocations.length > 0) params.set("locations", selectedLocations.join(","));
    if (selectedFees.length > 0) params.set("fees", selectedFees.join(","));
    if (minRating > 0) params.set("rating", minRating.toString());
    
    const newRelativePathQuery = window.location.pathname + "?" + params.toString();
    window.history.replaceState(null, "", newRelativePathQuery);
  }, [searchQuery, selectedLocations, selectedFees, minRating]);

  // Compute stats for filters
  const locationsList = ["Delhi NCR", "Maharashtra", "Karnataka", "Tamil Nadu"];
  
  const handleLocationToggle = (location: string) => {
    setSelectedLocations((prev) =>
      prev.includes(location) ? prev.filter((l) => l !== location) : [...prev, location]
    );
  };

  const handleFeeToggle = (feeRange: string) => {
    setSelectedFees((prev) =>
      prev.includes(feeRange) ? prev.filter((f) => f !== feeRange) : [...prev, feeRange]
    );
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedLocations([]);
    setSelectedFees([]);
    setMinRating(0);
  };

  // Filter logic
  const filteredColleges = colleges.filter((college) => {
    // 1. Search Query
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchName = college.name.toLowerCase().includes(q);
      const matchState = college.state.toLowerCase().includes(q);
      const matchCity = college.city.toLowerCase().includes(q);
      const matchCourses = college.courses.some((c) => c.name.toLowerCase().includes(q));
      if (!matchName && !matchState && !matchCity && !matchCourses) return false;
    }

    // 2. Locations
    if (selectedLocations.length > 0) {
      if (!selectedLocations.includes(college.state)) return false;
    }

    // 3. Fees
    // Ranges: '<1.5l' (averageFee < 150000), '1.5-2.5l' (150000 to 250000), '2.5-4.5l' (250000 to 450000), '>4.5l' (> 450000)
    if (selectedFees.length > 0) {
      const matchFee = selectedFees.some((range) => {
        if (range === "<1.5l") return college.averageFee < 150000;
        if (range === "1.5-2.5l") return college.averageFee >= 150000 && college.averageFee <= 250000;
        if (range === "2.5-4.5l") return college.averageFee > 250000 && college.averageFee <= 450000;
        if (range === ">4.5l") return college.averageFee > 450000;
        return false;
      });
      if (!matchFee) return false;
    }

    // 4. Star Rating
    if (minRating > 0) {
      if (college.rating < minRating) return false;
    }

    return true;
  });

  // Sort logic
  const sortedColleges = [...filteredColleges].sort((a, b) => {
    if (sortBy === "popularity") {
      return b.reviewCount - a.reviewCount;
    }
    if (sortBy === "ranking") {
      // NIRF Rank #X -> extract rank
      const rankA = parseInt(a.tier.replace(/\D/g, "")) || 999;
      const rankB = parseInt(b.tier.replace(/\D/g, "")) || 999;
      return rankA - rankB; // Ascending is better for ranking
    }
    if (sortBy === "fees-low") {
      return a.averageFee - b.averageFee;
    }
    if (sortBy === "fees-high") {
      return b.averageFee - a.averageFee;
    }
    if (sortBy === "rating") {
      return b.rating - a.rating;
    }
    return 0;
  });

  return (
    <div className="w-full">
      {/* Breadcrumb & Header */}
      <div className="mb-6">
        <div className="flex items-center gap-1 text-brand-text-muted text-xs font-semibold mb-2">
          <button onClick={clearAllFilters} className="hover:text-brand-primary cursor-pointer">
            Home
          </button>
          <ChevronRight className="h-3 w-3" />
          <span className="text-brand-primary">Top Engineering Colleges in India</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-brand-primary tracking-tight">
              Top Engineering Colleges in India 2026
            </h1>
            <p className="text-brand-text-muted text-xs mt-1">
              Found <strong className="text-brand-primary">{sortedColleges.length}</strong> matching colleges based on variables.
            </p>
          </div>
          
          <button
            onClick={onNavigateToPredictor}
            className="flex items-center gap-1.5 px-4 py-2 bg-brand-on-tertiary-container hover:bg-opacity-95 text-white rounded-lg text-xs font-bold transition-all shadow-sm cursor-pointer"
          >
            <Sparkles className="h-4 w-4 animate-pulse" />
            Try College Predictor Wizard
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Side Filters */}
        <aside className="lg:col-span-3">
          <div className="sticky top-20 flex flex-col gap-4">
            
            {/* Filter Container */}
            <div className="bg-white border border-brand-border-subtle rounded-xl overflow-hidden shadow-sm">
              <div className="p-4 border-b border-brand-border-subtle flex justify-between items-center bg-brand-surface">
                <h2 className="font-bold text-sm text-brand-primary uppercase tracking-wider">Filters</h2>
                <button
                  onClick={clearAllFilters}
                  className="text-brand-primary font-bold text-xs hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  Clear All
                </button>
              </div>

              {/* Filter Section: State Location */}
              <div className="p-4 border-b border-brand-border-subtle">
                <h3 className="font-bold text-xs text-brand-primary uppercase tracking-wider mb-3">Location</h3>
                <div className="flex flex-col gap-2.5">
                  {locationsList.map((loc) => {
                    const count = colleges.filter((c) => c.state === loc).length;
                    return (
                      <label key={loc} className="flex items-center gap-2 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={selectedLocations.includes(loc)}
                          onChange={() => handleLocationToggle(loc)}
                          className="w-4 h-4 rounded border-brand-outline text-brand-primary focus:ring-brand-primary-container"
                        />
                        <span className="text-sm text-brand-on-surface group-hover:text-brand-primary transition-colors">
                          {loc} <span className="text-xs text-brand-text-muted">({count})</span>
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Filter Section: Fees Range */}
              <div className="p-4 border-b border-brand-border-subtle">
                <h3 className="font-bold text-xs text-brand-primary uppercase tracking-wider mb-2">First Year Fees</h3>
                <div className="flex flex-col gap-2.5">
                  {[
                    { label: "< 1.5 Lakhs", value: "<1.5l" },
                    { label: "1.5 - 2.5 Lakhs", value: "1.5-2.5l" },
                    { label: "2.5 - 4.5 Lakhs", value: "2.5-4.5l" },
                    { label: "> 4.5 Lakhs", value: ">4.5l" }
                  ].map((fee) => (
                    <label key={fee.value} className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedFees.includes(fee.value)}
                        onChange={() => handleFeeToggle(fee.value)}
                        className="w-4 h-4 rounded border-brand-outline text-brand-primary focus:ring-brand-primary-container"
                      />
                      <span className="text-sm text-brand-on-surface group-hover:text-brand-primary transition-colors">
                        {fee.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Filter Section: User Rating */}
              <div className="p-4">
                <h3 className="font-bold text-xs text-brand-primary uppercase tracking-wider mb-3">Minimum User Rating</h3>
                <div className="flex flex-wrap gap-2">
                  {[0, 4.0, 4.5].map((val) => (
                    <button
                      key={val}
                      onClick={() => setMinRating(val)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer flex items-center gap-1 ${
                        minRating === val
                          ? "bg-brand-primary text-white border-brand-primary"
                          : "bg-brand-surface border-brand-border-subtle text-brand-on-surface-variant hover:border-brand-primary"
                      }`}
                    >
                      {val === 0 ? (
                        "All Ratings"
                      ) : (
                        <>
                          <span>{val}+</span>
                          <Star className="h-3 w-3 fill-brand-ranking-gold text-brand-ranking-gold" />
                        </>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Counseling card */}
            <div className="bg-brand-primary-container text-white rounded-xl p-5 text-center shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-full filter blur-xl"></div>
              <h4 className="font-bold text-md text-white mb-1.5">Need Counseling Guidance?</h4>
              <p className="text-xs text-brand-border-subtle mb-4">
                Receive curated college recommendations custom fitted to your personal entrance exam percentile.
              </p>
              <button
                onClick={onNavigateToPredictor}
                className="w-full bg-brand-on-tertiary-container hover:bg-opacity-95 text-white font-bold py-2 px-4 rounded-lg text-xs tracking-wider uppercase transition-all cursor-pointer"
              >
                Launch Cutoff Predictor
              </button>
            </div>

          </div>
        </aside>

        {/* Right Column: Listings */}
        <main className="lg:col-span-9 flex flex-col gap-4">
          {/* Quick Find Bar */}
          <div className="bg-white border border-brand-border-subtle p-3 rounded-xl flex flex-col sm:flex-row justify-between items-center gap-3 shadow-sm z-10 sticky top-16 md:top-20">
            <div className="relative w-full sm:w-1/2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-text-muted h-4 w-4" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-brand-border-subtle rounded-lg text-sm focus:border-brand-primary-container focus:ring-1 focus:ring-brand-primary outline-none bg-brand-surface"
                placeholder="Search by college name, exam or course..."
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto self-stretch sm:self-auto justify-between sm:justify-start">
              <label htmlFor="sort-select" className="text-xs text-brand-text-muted font-bold whitespace-nowrap">Sort by:</label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-xs border border-brand-border-subtle rounded-lg p-2 font-bold bg-white focus:border-brand-primary outline-none text-brand-primary flex-1 sm:flex-none"
                title="Sort colleges by"
              >
                <option value="popularity">Popularity (Reviews)</option>
                <option value="ranking">NIRF Ranking (Ascending)</option>
                <option value="fees-low">First Year Fees (Low to High)</option>
                <option value="fees-high">First Year Fees (High to Low)</option>
                <option value="rating">User Rating (High to Low)</option>
              </select>
            </div>
          </div>

          {/* Results Listings mapping */}
          <div className="flex flex-col gap-4">
            {sortedColleges.length > 0 ? (
              sortedColleges.map((college) => {
                const isSelected = isInCompare(college.id);
                return (
                  <div
                    key={college.id}
                    className="bg-white border border-brand-border-subtle rounded-xl p-4 md:p-5 hover:shadow-[0px_8px_24px_rgba(4,23,81,0.06)] transition-shadow flex flex-col sm:flex-row gap-5 relative group"
                  >
                    {/* Rank Badge top right */}
                    <div className="absolute top-0 right-0 bg-brand-ranking-gold text-white font-bold text-[11px] px-3.5 py-1 rounded-bl-xl rounded-tr-xl flex items-center gap-1 shadow-sm">
                      <Award className="h-3.5 w-3.5" />
                      {college.tier}
                    </div>

                    {/* Left side Logo image container */}
                    <div className="shrink-0 pt-1 group-hover:scale-102 transition-transform">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 border border-brand-border-subtle rounded-lg flex items-center justify-center bg-brand-surface overflow-hidden">
                        {college.logoUrl ? (
                          <img
                            src={college.logoUrl}
                            alt={college.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-contain p-2"
                          />
                        ) : (
                          <span className="text-2xl">🏫</span>
                        )}
                      </div>
                    </div>

                    {/* Middle Info Block */}
                    <div className="grow flex flex-col justify-between pr-2">
                      <div>
                        <button
                          onClick={() => onViewDetails(college.id)}
                          className="font-bold text-base md:text-lg text-brand-primary text-left hover:underline transition-all cursor-pointer pr-16 block"
                          aria-label={`View details for ${college.name}`}
                        >
                          {college.name}
                        </button>
                        
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-2 text-xs text-brand-text-muted font-semibold">
                          <span className="flex items-center gap-1 text-xs">
                            <MapPin className="h-3.5 w-3.5 text-brand-on-tertiary-container" />
                            {college.location}
                          </span>
                          <span className="flex items-center gap-1 text-xs bg-brand-secondary-container text-brand-on-secondary-container px-2 py-0.5 rounded-lg border border-brand-border-subtle">
                            <CheckCircle className="h-3 w-3" />
                            {college.approvedBy}
                          </span>
                          <span className="text-brand-on-surface-variant">Est. {college.establishedYear}</span>
                        </div>

                        {/* Top Courses tags preview */}
                        <div className="flex flex-wrap gap-1.5 mt-4">
                          {college.courses.slice(0, 3).map((course) => (
                            <span
                              key={course.id}
                              className="bg-brand-surface-container text-brand-primary font-bold text-[10px] px-2.5 py-1 rounded-lg border border-brand-border-subtle"
                            >
                              {course.name}
                            </span>
                          ))}
                          {college.totalCoursesCount > 3 && (
                            <span className="text-brand-primary font-bold text-[10px] px-2.5 py-1 bg-brand-surface rounded-lg">
                              +{college.totalCoursesCount - 3} More
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Right side Stats & CTA */}
                    <div className="sm:w-60 shrink-0 flex flex-col justify-between border-t sm:border-t-0 sm:border-l border-brand-border-subtle pt-4 sm:pt-0 sm:pl-5 gap-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-[10px] font-bold text-brand-text-muted uppercase tracking-wider">Avg First Year Fee</p>
                          <p className="font-bold text-sm text-brand-text-main mt-0.5">
                            ₹{(college.averageFee / 100000).toFixed(2)} Lakhs
                          </p>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-brand-text-muted uppercase tracking-wider">User Rating</p>
                          <div className="flex items-center gap-1 mt-0.5">
                            <span className="font-bold text-sm text-brand-text-main">{college.rating}</span>
                            <Star className="h-3.5 w-3.5 fill-brand-ranking-gold text-brand-ranking-gold" />
                            <span className="text-[10px] text-brand-text-muted">({college.reviewCount})</span>
                          </div>
                        </div>
                      </div>

                      {/* CTAs */}
                      <div className="flex flex-col gap-2 mt-auto">
                        <button
                          onClick={() => onViewDetails(college.id)}
                          className="w-full bg-brand-primary text-white py-2 rounded-lg text-xs font-bold hover:bg-brand-primary-container transition-all flex items-center justify-center gap-1 cursor-pointer shadow-sm"
                          aria-label={`View detailed information about ${college.name}`}
                        >
                          View Deep Dive Details
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                        
                        <button
                          onClick={() => {
                            if (isSelected) {
                              removeFromCompare(college.id);
                            } else {
                              addToCompare(college);
                            }
                          }}
                          className={`w-full py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1 border cursor-pointer ${
                            isSelected
                              ? "bg-brand-secondary text-white border-brand-secondary"
                              : "border-brand-primary text-brand-primary hover:bg-brand-surface-container"
                          }`}
                          aria-label={isSelected ? `Remove ${college.name} from comparison` : `Add ${college.name} to comparison`}
                        >
                          {isSelected ? "Remove from Compare" : "Add to Compare"}
                        </button>
                      </div>
                    </div>

                  </div>
                );
              })
            ) : (
              <div className="bg-white border border-brand-border-subtle rounded-xl p-12 text-center shadow-sm">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="font-bold text-brand-primary text-lg">No Matching Colleges Found</h3>
                <p className="text-brand-text-muted text-xs max-w-md mx-auto mt-2">
                  We couldn't find any institutions fitting your precise criteria. Try widening your states, fee thresholds, or rating constraints.
                </p>
                <button
                  onClick={clearAllFilters}
                  className="mt-4 px-4 py-2 bg-brand-primary text-white font-bold text-xs rounded-lg shadow-sm hover:bg-opacity-95 transition-opacity cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
