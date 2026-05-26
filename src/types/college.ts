export interface Course {
  id: string;
  name: string;        // e.g., "B.Tech Computer Science"
  intake: number;      // e.g., 120
  duration: string;    // e.g., "4 Years"
  firstYearFee: number;// in INR
  eligibility: string; // e.g., "10+2 with 75%"
  exams: string[];     // e.g., ["JEE Advanced"]
}

export interface Review {
  id: string;
  reviewerName: string;
  rating: number;      // out of 5
  comment: string;
  category: string;    // e.g., "Placements", "Infrastructure", "Faculty"
  date: string;
}

export interface ReviewsScoreBreakdown {
  infrastructure: number;
  faculty: number;
  placements: number;
  overall: number;
  totalReviews: number;
}

export interface CutoffBoundary {
  exam: string;        // raw value, e.g., "jee-mains", "jee-advanced", "neet", "bitsat"
  category: string;    // raw value, e.g., "general", "obc", "sc", "st"
  stream: string;      // raw value, e.g., "cse", "ece", "mech", "civil"
  closingRank: number; // closing rank threshold (closingRank >= userRank -> eligible)
}

export interface College {
  id: string;
  name: string;
  logoUrl: string;
  bannerUrl: string;
  tier: string;          // e.g., "NIRF Rank #1"
  location: string;      // e.g., "Chennai, Tamil Nadu"
  city: string;          // e.g., "Chennai"
  state: string;         // e.g., "Tamil Nadu" or "Delhi NCR"
  approvedBy: string;    // e.g., "AICTE Approved"
  averageFee: number;    // used for simple filtering
  rating: number;        // overall score e.g. 4.6
  reviewCount: number;   // count of reviews e.g. 452
  type: "Private" | "Public";
  establishedYear: number;
  bio: string;
  campusArea: string;    // e.g., "550 Acres"
  totalStudents: string;   // e.g., "10,000+"
  totalCoursesCount: number;
  courses: Course[];
  highestCtc: string;    // e.g., "₹ 3.67 Cr"
  highestCtcVal: number; // numerical for formatting or calculations e.g. 36700000
  averageCtc: string;    // e.g., "₹ 21.8 LPA"
  averageCtcVal: number; // numerical e.g. 2180000
  placementRate: number; // e.g., 89
  topRecruiters: string[];
  reviewsBreakdown: ReviewsScoreBreakdown;
  reviews: Review[];
  cutoffs: CutoffBoundary[];
}

export interface PredictorInput {
  exam: string;
  category: string;
  stream: string;
  rank: number;
}
