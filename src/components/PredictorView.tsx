import React, { useState } from "react";
import { Sparkles, Info, CheckCircle, HelpCircle, ArrowRight, BookOpen, TrendingDown, RefreshCw, ChevronRight } from "lucide-react";
import { College } from "../types/college";
import { predictChance } from "../lib/mockData";

interface PredictorViewProps {
  onNavigateToDetail: (collegeId: string) => void;
  onNavigateToHub: () => void;
}

export default function PredictorView({ onNavigateToDetail, onNavigateToHub }: PredictorViewProps) {
  const [exam, setExam] = useState("");
  const [category, setCategory] = useState("");
  const [stream, setStream] = useState("");
  const [rank, setRank] = useState<number | "">("");
  
  const [hasPredicted, setHasPredicted] = useState(false);
  const [predictions, setPredictions] = useState<{
    highChance: Array<{ college: College; closingRank: number; streamName: string }>;
    mediumChance: Array<{ college: College; closingRank: number; streamName: string }>;
    lowChance: Array<{ college: College; closingRank: number; streamName: string }>;
  }>({ highChance: [], mediumChance: [], lowChance: [] });

  const handlePredict = (e: React.FormEvent) => {
    e.preventDefault();
    if (!exam || !category || !stream || !rank) {
      alert("Please populate all criteria to run the predictor algorithm.");
      return;
    }

    const res = predictChance(exam, category, stream, Number(rank));
    setPredictions(res);
    setHasPredicted(true);
  };

  const handleReset = () => {
    setExam("");
    setCategory("");
    setStream("");
    setRank("");
    setHasPredicted(false);
  };

  return (
    <div className="w-full">
      {/* Intro block */}
      <div className="mb-8 text-center max-w-2xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-extrabold text-brand-primary tracking-tight">
          Rank & College Predictor Tool
        </h1>
        <p className="text-xs text-brand-text-muted mt-2">
          Discover your chances of getting into top tier institutions based on historical last-round cut-offs and trends compiled from the last 3 academic cycles.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Wizard Form (Left 4-cols) */}
        <div className="lg:col-span-4 bg-white rounded-2xl border border-brand-border-subtle p-5 md:p-6 sticky top-20 shadow-sm">
          <div className="mb-4 pb-3 border-b border-brand-border-subtle">
            <h2 className="text-base font-bold text-brand-primary flex items-center gap-2">
              <Sparkles className="h-4.5 w-4.5 text-brand-on-tertiary-container animate-spin" style={{ animationDuration: '3s' }} />
              Predictor Wizard
            </h2>
            <p className="text-[10px] text-brand-text-muted font-semibold mt-0.5">
              Select variables to query cutoff matrices.
            </p>
          </div>

          <form onSubmit={handlePredict} className="space-y-4">
            
            {/* Exam */}
            <div>
              <label className="block text-[11px] font-bold text-brand-primary uppercase tracking-wider mb-1">
                Select Exam
              </label>
              <select
                required
                value={exam}
                onChange={(e) => setExam(e.target.value)}
                className="w-full bg-brand-surface border border-brand-border-subtle rounded-lg p-2.5 text-xs text-brand-primary font-bold outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
              >
                <option value="">Choose Exam</option>
                <option value="jee-mains">JEE Mains (NITs / State Govt)</option>
                <option value="jee-advanced">JEE Advanced (IITs)</option>
                <option value="bitsat">BITSAT (BITS Campuses)</option>
              </select>
            </div>

            {/* Category */}
            <div>
              <label className="block text-[11px] font-bold text-brand-primary uppercase tracking-wider mb-1">
                Category / Reservation
              </label>
              <select
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-brand-surface border border-brand-border-subtle rounded-lg p-2.5 text-xs text-brand-primary font-bold outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
              >
                <option value="">Select Category</option>
                <option value="general">General (Open Category)</option>
                <option value="obc">OBC-NCL</option>
                <option value="sc">Scheduled Caste (SC)</option>
                <option value="st">Scheduled Tribe (ST)</option>
              </select>
            </div>

            {/* Preferred Stream */}
            <div>
              <label className="block text-[11px] font-bold text-brand-primary uppercase tracking-wider mb-1">
                Preferred Stream
              </label>
              <select
                required
                value={stream}
                onChange={(e) => setStream(e.target.value)}
                className="w-full bg-brand-surface border border-brand-border-subtle rounded-lg p-2.5 text-xs text-brand-primary font-bold outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
              >
                <option value="">Select Stream</option>
                <option value="cse">Computer Science (CSE)</option>
                <option value="ece">Electrical/Electronics (ECE)</option>
                <option value="mech">Mechanical Eng. (ME)</option>
                <option value="civil">Civil Engineering (CE)</option>
              </select>
            </div>

            {/* expected Rank/Score */}
            <div>
              <label className="block text-[11px] font-bold text-brand-primary uppercase tracking-wider mb-1">
                {exam === "bitsat" ? "Secured BITSAT Score (out of 390)" : "Entrance All India Rank (AIR)"}
              </label>
              <input
                type="number"
                required
                min="1"
                max="999999"
                value={rank}
                onChange={(e) => setRank(e.target.value !== "" ? Number(e.target.value) : "")}
                className="w-full bg-brand-surface border border-brand-border-subtle rounded-lg p-2.5 text-xs text-brand-primary font-bold outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                placeholder={exam === "bitsat" ? "e.g., 295" : "e.g., 3400"}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-brand-primary text-white rounded-lg py-3 mt-2 text-xs font-bold hover:bg-brand-primary-container transition-colors flex items-center justify-center gap-1 cursor-pointer shadow-md"
            >
              <Sparkles className="h-4 w-4 text-brand-on-tertiary-container" />
              <span>Show Predictions</span>
            </button>

            {hasPredicted && (
              <button
                type="button"
                onClick={handleReset}
                className="w-full bg-brand-surface text-brand-primary border border-brand-outline-variant rounded-lg py-2.5 text-xs font-bold hover:bg-brand-surface-container transition-all flex items-center justify-center gap-1 cursor-pointer"
              >
                <RefreshCw className="h-3.5 w-3.5" />
                <span>Reset Wizard Criteria</span>
              </button>
            )}

          </form>
        </div>

        {/* Results Block (Right 8-cols) */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          
          {!hasPredicted ? (
            /* Idle Placeholder */
            <div className="bg-brand-surface p-8 rounded-2xl border border-brand-border-subtle text-center shadow-xs">
              <div className="bg-brand-surface-container-low border border-brand-border-subtle rounded-lg p-4 flex gap-3 text-left max-w-xl mx-auto items-start">
                <Info className="h-6 w-6 text-brand-status-info shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-sm text-brand-primary">Data-Driven Insights Ready</h3>
                  <p className="text-xs text-brand-text-muted mt-1 leading-relaxed">
                    Predictions are automatically processed based on last three consecutive rounds of allocation. Select your entrance specifications on the left to activate simulated results matching.
                  </p>
                </div>
              </div>
              <div className="mt-8 text-6xl opacity-30 select-none">🔮</div>
            </div>
          ) : (
            /* Live predictions rendered */
            <div className="space-y-6">
              
              {/* Informative alert box */}
              <div className="bg-green-50 border border-brand-status-success rounded-xl p-4 flex gap-3 items-start animate-fade-in">
                <CheckCircle className="h-5 w-5 text-brand-status-success shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-brand-primary text-xs uppercase tracking-wider">Prediction Compilation complete</h3>
                  <p className="text-xs text-brand-text-muted mt-1 leading-relaxed">
                    Showing forecasted probability for <strong className="text-brand-primary">{exam.toUpperCase()}</strong> inside <strong className="text-brand-primary">{stream.toUpperCase()}</strong> stream as a <strong className="text-brand-primary">{category.toUpperCase()}</strong> applicant with a rank/score of <strong className="text-brand-primary">{rank}</strong>.
                  </p>
                </div>
              </div>

              {/* High chance bucket */}
              <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <h3 className="text-sm font-bold text-brand-status-success flex items-center gap-1.5 mb-3 border-b border-brand-border-subtle pb-2 uppercase tracking-wide">
                  <CheckSquareIcon className="h-4.5 w-4.5" />
                  High Chance (&gt;80% Seat Probability)
                </h3>

                {predictions.highChance.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {predictions.highChance.map(({ college, closingRank, streamName }) => (
                      <div
                        onClick={() => onNavigateToDetail(college.id)}
                        key={college.id}
                        className="bg-white hover:bg-brand-surface border border-brand-border-subtle hover:border-brand-primary p-4 rounded-xl shadow-xs transition-all cursor-pointer group flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold text-xs text-brand-primary group-hover:underline truncate max-w-[170px]">
                              {college.name.replace("Indian Institute of Technology", "IIT")}
                            </h4>
                            <span className="bg-brand-ranking-gold text-white text-[9px] font-bold px-2 py-0.5 rounded">
                              {college.tier}
                            </span>
                          </div>

                          <div className="space-y-1.5 my-3 text-xs text-brand-text-muted">
                            <p className="flex items-center gap-1">
                              <BookOpen className="h-3.5 w-3.5 text-brand-primary" />
                              <span>{streamName}</span>
                            </p>
                            <p className="flex items-center gap-1 font-semibold text-brand-primary">
                              <TrendingDown className="h-3.5 w-3.5 text-brand-primary" />
                              <span>Simulated Closing Cutoff: {closingRank}</span>
                            </p>
                          </div>
                        </div>

                        <div className="flex justify-between items-center border-t border-brand-border-subtle pt-2 mt-2">
                          <div className="flex gap-1.5">
                            <span className="bg-brand-surface-container text-brand-primary text-[8px] font-bold px-1.5 py-0.5 rounded">
                              Govt.
                            </span>
                            <span className="bg-brand-secondary-container text-brand-on-secondary-container text-[8px] font-bold px-1.5 py-0.5 rounded">
                              Safe Choice
                            </span>
                          </div>
                          <ChevronRight className="h-4 w-4 text-brand-primary group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-brand-text-muted italic bg-brand-surface p-4 rounded-xl border border-brand-border-subtle">
                    No colleges fall into the High Probability tier for your rank.
                  </p>
                )}
              </div>

              {/* Medium chance bucket */}
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-sm font-bold text-brand-ranking-gold flex items-center gap-1.5 mb-3 border-b border-brand-border-subtle pb-2 uppercase tracking-wide">
                  <RefreshCw className="h-4 w-4 text-brand-ranking-gold" />
                  Medium Chance (40-80% Allocation Probability)
                </h3>

                {predictions.mediumChance.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {predictions.mediumChance.map(({ college, closingRank, streamName }) => (
                      <div
                        onClick={() => onNavigateToDetail(college.id)}
                        key={college.id}
                        className="bg-white hover:bg-brand-surface border border-brand-border-subtle hover:border-brand-primary p-4 rounded-xl shadow-xs transition-all cursor-pointer group flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold text-xs text-brand-primary group-hover:underline truncate max-w-[170px]">
                              {college.name.replace("Indian Institute of Technology", "IIT")}
                            </h4>
                            <span className="bg-brand-ranking-gold text-white text-[9px] font-bold px-2 py-0.5 rounded">
                              {college.tier}
                            </span>
                          </div>

                          <div className="space-y-1.5 my-3 text-xs text-brand-text-muted">
                            <p className="flex items-center gap-1">
                              <BookOpen className="h-3.5 w-3.5 text-brand-primary" />
                              <span>{streamName}</span>
                            </p>
                            <p className="flex items-center gap-1 font-semibold text-brand-primary">
                              <TrendingDown className="h-3.5 w-3.5 text-brand-primary" />
                              <span>Simulated Closing Cutoff: {closingRank}</span>
                            </p>
                          </div>
                        </div>

                        <div className="flex justify-between items-center border-t border-brand-border-subtle pt-2 mt-2">
                          <div className="flex gap-1.5">
                            <span className="bg-brand-surface-container text-brand-primary text-[8px] font-bold px-1.5 py-0.5 rounded">
                              Govt.
                            </span>
                            <span className="bg-brand-primary-container/20 text-brand-primary text-[8px] font-bold px-1.5 py-0.5 rounded">
                              Borderline / Worth Trial
                            </span>
                          </div>
                          <ChevronRight className="h-4 w-4 text-brand-primary group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-brand-text-muted italic bg-brand-surface p-4 rounded-xl border border-brand-border-subtle">
                    No colleges fall into the Medium Probability tier for your rank.
                  </p>
                )}
              </div>

              {/* Dream / Low chance bucket */}
              <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <h3 className="text-sm font-bold text-brand-on-tertiary-container flex items-center gap-1.5 mb-3 border-b border-brand-border-subtle pb-2 uppercase tracking-wide">
                  <HelpCircle className="h-4.5 w-4.5 text-brand-on-tertiary-container" />
                  Borderline Dream Reach (&lt;40% Probability)
                </h3>

                {predictions.lowChance.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {predictions.lowChance.map(({ college, closingRank, streamName }) => (
                      <div
                        onClick={() => onNavigateToDetail(college.id)}
                        key={college.id}
                        className="bg-white hover:bg-brand-surface border border-brand-border-subtle hover:border-brand-primary p-4 rounded-xl shadow-xs transition-all cursor-pointer group flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold text-xs text-brand-primary group-hover:underline truncate max-w-[170px]">
                              {college.name.replace("Indian Institute of Technology", "IIT")}
                            </h4>
                            <span className="bg-brand-ranking-gold text-white text-[9px] font-bold px-2 py-0.5 rounded">
                              {college.tier}
                            </span>
                          </div>

                          <div className="space-y-1.5 my-3 text-xs text-brand-text-muted">
                            <p className="flex items-center gap-1">
                              <BookOpen className="h-3.5 w-3.5 text-brand-primary" />
                              <span>{streamName}</span>
                            </p>
                            <p className="flex items-center gap-1 font-semibold text-brand-primary">
                              <TrendingDown className="h-3.5 w-3.5 text-brand-primary" />
                              <span>Simulated Closing Cutoff: {closingRank}</span>
                            </p>
                          </div>
                        </div>

                        <div className="flex justify-between items-center border-t border-brand-border-subtle pt-2 mt-2">
                          <div className="flex gap-1.5">
                            <span className="bg-brand-surface-container text-brand-primary text-[8px] font-bold px-1.5 py-0.5 rounded">
                              Govt.
                            </span>
                            <span className="bg-red-50 text-brand-on-tertiary-container text-[8px] font-bold px-1.5 py-0.5 rounded">
                              Dream Reach
                            </span>
                          </div>
                          <ChevronRight className="h-4 w-4 text-brand-primary group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-brand-text-muted italic bg-brand-surface p-4 rounded-xl border border-brand-border-subtle">
                    No "Dream / Reach" colleges matched. Cutoffs may be too competitive or require significantly better index scores.
                  </p>
                )}
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}

function CheckSquareIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}
