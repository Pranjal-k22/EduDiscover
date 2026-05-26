import React, { createContext, useContext, useState, useEffect } from "react";
import { College } from "../types/college";

interface CompareContextType {
  compareList: College[];
  addToCompare: (college: College) => void;
  removeFromCompare: (collegeId: string) => void;
  clearCompare: () => void;
  isInCompare: (collegeId: string) => boolean;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export function CompareProvider({ children }: { children: React.ReactNode }) {
  const [compareList, setCompareList] = useState<College[]>(() => {
    try {
      const saved = localStorage.getItem("edudiscover_compare");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("edudiscover_compare", JSON.stringify(compareList));
    } catch (e) {
      console.error("Failed to persist compare list", e);
    }
  }, [compareList]);

  const addToCompare = (college: College) => {
    setCompareList((prev) => {
      // Check if already in list
      if (prev.some((c) => c.id === college.id)) return prev;
      // Enforce limit of 3 colleges
      if (prev.length >= 3) {
        alert("You can compare a maximum of 3 colleges side-by-side.");
        return prev;
      }
      return [...prev, college];
    });
  };

  const removeFromCompare = (collegeId: string) => {
    setCompareList((prev) => prev.filter((c) => c.id !== collegeId));
  };

  const clearCompare = () => {
    setCompareList([]);
  };

  const isInCompare = (collegeId: string) => {
    return compareList.some((c) => c.id === collegeId);
  };

  return (
    <CompareContext.Provider
      value={{
        compareList,
        addToCompare,
        removeFromCompare,
        clearCompare,
        isInCompare,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  const context = useContext(CompareContext);
  if (!context) {
    throw new Error("useCompare must be used within a CompareProvider");
  }
  return context;
}
