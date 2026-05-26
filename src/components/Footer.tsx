import { School } from "lucide-react";

interface FooterProps {
  onNavigate: (view: "listing" | "compare" | "predictor" | "detail") => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-brand-primary text-white w-full border-t border-brand-primary-container">
      <div className="w-full py-12 px-6 md:px-12 max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div>
          <button
            onClick={() => onNavigate("listing")}
            className="text-lg md:text-xl font-bold text-white flex items-center gap-2 mb-4 hover:opacity-95 cursor-pointer"
          >
            <School className="text-white h-6 w-6" />
            <span>EduDiscover</span>
          </button>
          <p className="text-sm text-brand-on-primary-container max-w-xs leading-relaxed">
            Empowering students to make data-driven decisions about their higher education journey with cutoff intelligence and side-by-side matrices.
          </p>
          <div className="mt-6 text-xs text-brand-on-primary-container">
            © 2026 EduDiscover. All rights reserved.
          </div>
        </div>

        <div className="flex flex-wrap gap-12">
          <div className="flex flex-col gap-3 min-w-[100px]">
            <h4 className="font-semibold text-sm text-white border-b border-brand-primary-container pb-1">Company</h4>
            <button onClick={() => onNavigate("listing")} className="text-xs text-brand-on-primary-container hover:text-white transition-all text-left cursor-pointer">
              About Us
            </button>
            <button onClick={() => onNavigate("listing")} className="text-xs text-brand-on-primary-container hover:text-white transition-all text-left cursor-pointer">
              Contact Us
            </button>
          </div>

          <div className="flex flex-col gap-3 min-w-[100px]">
            <h4 className="font-semibold text-sm text-white border-b border-brand-primary-container pb-1">Resources</h4>
            <button
              onClick={() => onNavigate("predictor")}
              className="text-xs text-brand-on-primary-container hover:text-white transition-all text-left cursor-pointer"
            >
              College Predictor
            </button>
            <button onClick={() => onNavigate("listing")} className="text-xs text-brand-on-primary-container hover:text-white transition-all text-left cursor-pointer">
              Sitemap
            </button>
          </div>

          <div className="flex flex-col gap-3 min-w-[100px]">
            <h4 className="font-semibold text-sm text-white border-b border-brand-primary-container pb-1">Legal</h4>
            <button onClick={() => onNavigate("listing")} className="text-xs text-brand-on-primary-container hover:text-white transition-all text-left cursor-pointer">
              Privacy Policy
            </button>
            <button onClick={() => onNavigate("listing")} className="text-xs text-brand-on-primary-container hover:text-white transition-all text-left cursor-pointer">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
