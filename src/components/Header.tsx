import { School, Heart, Menu } from "lucide-react";
import { useCompare } from "../context/CompareContext";

interface HeaderProps {
  currentView: string;
  onNavigate: (view: "listing" | "compare" | "predictor" | "detail", collegeId?: string) => void;
}

export default function Header({ currentView, onNavigate }: HeaderProps) {
  const { compareList } = useCompare();

  return (
    <nav className="bg-white border-b border-brand-border-subtle sticky top-0 z-50 w-full shadow-sm">
      <div className="flex justify-between items-center w-full px-4 md:px-12 max-w-[1280px] mx-auto h-16">
        {/* Brand */}
        <button
          onClick={() => onNavigate("listing")}
          className="text-xl md:text-2xl font-bold text-brand-primary flex items-center gap-2 cursor-pointer hover:opacity-90"
          id="nav-logo"
        >
          <School className="text-brand-primary h-7 w-7" />
          <span className="tracking-tight">EduDiscover</span>
        </button>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-8 h-full">
          <button
            onClick={() => onNavigate("listing")}
            className={`h-full flex items-center pt-1 font-semibold text-sm transition-colors duration-200 cursor-pointer border-b-2 hover:border-brand-primary ${
              currentView === "listing" || currentView === "detail"
                ? "text-brand-primary border-brand-primary"
                : "text-brand-on-surface-variant border-transparent hover:text-brand-primary"
            }`}
          >
            Colleges
          </button>
          <button
            onClick={() => onNavigate("predictor")}
            className={`h-full flex items-center pt-1 font-semibold text-sm transition-colors duration-200 cursor-pointer border-b-2 hover:border-brand-primary ${
              currentView === "predictor"
                ? "text-brand-primary border-brand-primary"
                : "text-brand-on-surface-variant border-transparent hover:text-brand-primary"
            }`}
          >
            College Predictor
          </button>
          <button
            onClick={() => onNavigate("compare")}
            className={`h-full flex items-center pt-1 font-semibold text-sm transition-colors duration-200 cursor-pointer border-b-2 hover:border-brand-primary ${
              currentView === "compare"
                ? "text-brand-primary border-brand-primary"
                : "text-brand-on-surface-variant border-transparent hover:text-brand-primary"
            }`}
          >
            Compare Matrix
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => onNavigate("compare")}
            className="flex items-center gap-1.5 text-brand-primary hover:bg-brand-surface-container-low px-3 py-2 rounded-lg transition-colors cursor-pointer relative"
          >
            <Heart className="h-4.5 w-4.5 text-brand-primary fill-brand-primary" />
            <span className="font-semibold text-xs hidden sm:inline">Compare Bucket</span>
            {compareList.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand-on-tertiary-container text-white px-1.5 py-0.5 rounded-full text-[10px] font-bold leading-none">
                {compareList.length}
              </span>
            )}
          </button>

          <button
            onClick={() => onNavigate("predictor")}
            className="bg-brand-primary text-white hover:bg-brand-primary-container px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all shadow-sm cursor-pointer"
          >
            Predict Cutoffs
          </button>
        </div>
      </div>
    </nav>
  );
}
