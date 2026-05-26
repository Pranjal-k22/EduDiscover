import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CompareDrawer from "./components/CompareDrawer";
import DiscoveryHub from "./components/DiscoveryHub";
import DetailView from "./components/DetailView";
import CompareView from "./components/CompareView";
import PredictorView from "./components/PredictorView";
import { CompareProvider } from "./context/CompareContext";
import { mockColleges } from "./lib/mockData";

export function MainAppContent() {
  const [currentView, setCurrentView] = useState<"listing" | "compare" | "predictor" | "detail">("listing");
  const [selectedCollegeId, setSelectedCollegeId] = useState<string | null>(null);

  // Parse and sync views directly with URL state hash for bookmarking & sharing
  useEffect(() => {
    const handleLocationSync = () => {
      const hash = window.location.hash;
      if (hash === "#compare") {
        setCurrentView("compare");
        setSelectedCollegeId(null);
      } else if (hash === "#predictor") {
        setCurrentView("predictor");
        setSelectedCollegeId(null);
      } else if (hash.startsWith("#college/")) {
        const id = hash.replace("#college/", "");
        const exists = mockColleges.some((c) => c.id === id);
        if (exists) {
          setSelectedCollegeId(id);
          setCurrentView("detail");
        } else {
          window.location.hash = "";
          setCurrentView("listing");
        }
      } else {
        setCurrentView("listing");
        setSelectedCollegeId(null);
      }
    };

    handleLocationSync();
    window.addEventListener("hashchange", handleLocationSync);
    return () => window.removeEventListener("hashchange", handleLocationSync);
  }, []);

  const handleNavigate = (
    view: "listing" | "compare" | "predictor" | "detail",
    collegeId?: string
  ) => {
    if (view === "detail" && collegeId) {
      window.location.hash = `#college/${collegeId}`;
    } else if (view === "compare") {
      window.location.hash = "#compare";
    } else if (view === "predictor") {
      window.location.hash = "#predictor";
    } else {
      window.location.hash = "";
    }
    // Scroll smoothly to top on view changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Find targeted college for details
  const activeCollege = mockColleges.find((c) => c.id === selectedCollegeId) || mockColleges[0];

  return (
    <div className="bg-brand-surface text-brand-on-surface font-sans min-h-screen flex flex-col antialiased selection:bg-brand-primary/10 selection:text-brand-primary pb-28 md:pb-24">
      {/* Top Navbar */}
      <Header currentView={currentView} onNavigate={handleNavigate} />

      {/* Main Container Area */}
      <main className="flex-grow w-full max-w-[1285px] mx-auto px-4 md:px-12 py-8 transition-opacity duration-200">
        
        {currentView === "listing" && (
          <DiscoveryHub
            colleges={mockColleges}
            onViewDetails={(id) => handleNavigate("detail", id)}
            onNavigateToPredictor={() => handleNavigate("predictor")}
          />
        )}

        {currentView === "detail" && activeCollege && (
          <DetailView
            college={activeCollege}
            onBack={() => handleNavigate("listing")}
          />
        )}

        {currentView === "compare" && (
          <CompareView
            allColleges={mockColleges}
            onNavigateToDetail={(id) => handleNavigate("detail", id)}
            onNavigateToHub={() => handleNavigate("listing")}
          />
        )}

        {currentView === "predictor" && (
          <PredictorView
            onNavigateToDetail={(id) => handleNavigate("detail", id)}
            onNavigateToHub={() => handleNavigate("listing")}
          />
        )}

      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Persistent Compare Drawer */}
      {/* Hidden if we are on the Comparison Matrix screen to avoid duplicates */}
      {currentView !== "compare" && (
        <CompareDrawer
          onCompareNow={() => handleNavigate("compare")}
          allColleges={mockColleges}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <CompareProvider>
      <MainAppContent />
    </CompareProvider>
  );
}
