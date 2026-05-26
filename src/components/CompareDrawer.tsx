import { X, Plus, Sparkles } from "lucide-react";
import { useCompare } from "../context/CompareContext";
import { College } from "../types/college";

interface CompareDrawerProps {
  onCompareNow: () => void;
  onNavigateToPredictor?: () => void;
  allColleges: College[];
  onSelectCollege?: (college: College) => void;
}

export default function CompareDrawer({ onCompareNow, onNavigateToPredictor, allColleges, onSelectCollege }: CompareDrawerProps) {
  const { compareList, removeFromCompare, clearCompare } = useCompare();

  if (compareList.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-brand-border-subtle shadow-[0px_-8px_30px_rgba(4,23,81,0.1)] z-50 transform transition-transform duration-300">
      <div className="max-w-[1280px] mx-auto px-4 md:px-12 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Selected List */}
        <div className="flex items-center gap-4 flex-1 w-full overflow-x-auto hide-scrollbar">
          <span className="text-xs font-bold text-brand-primary whitespace-nowrap uppercase tracking-wider shrink-0 flex items-center gap-1">
            <Sparkles className="h-3.5 w-3.5 text-brand-on-tertiary-container" />
            Comparing ({compareList.length}/3):
          </span>

          <div className="flex items-center gap-3">
            {compareList.map((college) => (
              <div
                key={college.id}
                className="flex items-center gap-2 bg-brand-surface border border-brand-border-subtle rounded-lg px-3 py-1.5 shrink-0 hover:bg-brand-surface-container-low transition-colors"
              >
                {college.logoUrl ? (
                  <img
                    src={college.logoUrl}
                    alt={college.name}
                    referrerPolicy="no-referrer"
                    className="w-5 h-5 object-contain"
                  />
                ) : (
                  <div className="w-5 h-5 rounded bg-brand-primary-container flex items-center justify-center text-[10px] text-white">
                    🎓
                  </div>
                )}
                <span className="text-xs font-semibold text-brand-primary truncate max-w-[140px]">
                  {college.name.replace("Indian Institute of Technology", "IIT")}
                </span>
                <button
                  onClick={() => removeFromCompare(college.id)}
                  className="text-brand-text-muted hover:text-brand-on-tertiary-container transition-colors cursor-pointer"
                  title="Remove"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}

            {/* Empty slots placeholders */}
            {Array.from({ length: 3 - compareList.length }).map((_, idx) => (
              <div
                key={`empty-${idx}`}
                className="flex items-center gap-1.5 bg-brand-surface-container-low border border-dashed border-brand-outline-variant rounded-lg px-3 py-1.5 shrink-0 text-brand-text-muted text-xs font-semibold"
              >
                <Plus className="h-3.5 w-3.5 text-brand-outline" />
                <span>Add College</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-4 shrink-0 w-full md:w-auto">
          <button
            onClick={clearCompare}
            className="text-xs font-bold text-brand-on-surface-variant hover:text-brand-on-tertiary-container underline px-2 py-1 cursor-pointer"
          >
            Clear All
          </button>
          
          <button
            onClick={onCompareNow}
            className="flex-1 md:flex-none bg-brand-primary text-white px-6 py-2.5 rounded-lg text-xs font-bold hover:bg-brand-primary-container transition-colors whitespace-nowrap shadow-md cursor-pointer"
          >
            Update Comparison Matrix
          </button>
        </div>
      </div>
    </div>
  );
}
