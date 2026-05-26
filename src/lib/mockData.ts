import { College } from "../types/college";

export const mockColleges: College[] = [
  {
    id: "iit-madras",
    name: "Indian Institute of Technology (IIT) Madras",
    logoUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBv6gyW_e_CNXxseCVoES9TK6Wd77PrjRwANa-G_6zpF35LkQcQu7NVUoKLEiNX3QhFnO88ZnnFKJkB89tb5AYFu__wfpnS6T75sGEfKIJ59BFDlL2bmVvoQWqFhNuOfYyybSDZxyS8Jd3prf3K9LamixD9UfSY0FE1PKm9UubSCMrbq3qsaaoQM7pAqiu9gRPjPiiMpVgjp4EvAKO_-Y0Ev8LkZFyBBMvKA6LzRa5QaAD8jnzEZGn5jRp5JkgZR9JV9VXigyQ-VtFN",
    bannerUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0s_bXAO--uPYKyV57KuTq5hpKB-yFsXq8-X_Qcc0VyiEgjEeZ__1cccJvfdSErI_JIpdoLgboo5AG5vn2kn2xFBWmnmoybQeBkNQmalcjdlS9AOGxNgDMX3GG9iCZSOzQMl2WpDroYa5XG48ItM7uEOHSJX8hLb2-M98x4MelrgwaNBBSL63uus2eIw-vu5Zbal3_KqbWiRdFCPrj15ZlmhjV4HYX3dmVRgNTN1xYRJHrSVSSCKbySI4nXAPfgAJdFpm5N5Y5uWRV",
    tier: "NIRF Rank #1",
    location: "Chennai, Tamil Nadu",
    city: "Chennai",
    state: "Tamil Nadu",
    approvedBy: "AICTE Approved",
    averageFee: 214000,
    rating: 4.8,
    reviewCount: 452,
    type: "Public",
    establishedYear: 1959,
    bio: "Established in 1959, IIT Madras is globally renowned for its high-impact research, exceptional technical curriculum, and translation of technology to industry. Spanning a 250-hectare beautiful campus housing diverse flora and fauna, it boasts top rankings nationally and strong corporate partnerships.",
    campusArea: "620 Acres",
    totalStudents: "11,500+",
    totalCoursesCount: 124,
    courses: [
      {
        id: "iitm-cse",
        name: "B.Tech Computer Science",
        intake: 120,
        duration: "4 Years",
        firstYearFee: 214000,
        eligibility: "10+2 with 75%",
        exams: ["JEE Advanced"]
      },
      {
        id: "iitm-ece",
        name: "B.Tech Electrical & Electronics",
        intake: 100,
        duration: "4 Years",
        firstYearFee: 214000,
        eligibility: "10+2 with 75%",
        exams: ["JEE Advanced"]
      },
      {
        id: "iitm-mech",
        name: "B.Tech Mechanical Eng.",
        intake: 140,
        duration: "4 Years",
        firstYearFee: 214000,
        eligibility: "10+2 with 75%",
        exams: ["JEE Advanced"]
      }
    ],
    highestCtc: "₹ 1.98 Cr",
    highestCtcVal: 19800000,
    averageCtc: "₹ 21.4 LPA",
    averageCtcVal: 2140000,
    placementRate: 92,
    topRecruiters: ["Google", "Microsoft", "Apple", "TCS", "Goldman Sachs", "Amazon"],
    reviewsBreakdown: {
      infrastructure: 4.8,
      faculty: 4.9,
      placements: 4.8,
      overall: 4.8,
      totalReviews: 452
    },
    reviews: [
      {
        id: "iitm-r1",
        reviewerName: "Rohan K.",
        rating: 5,
        comment: "Excellent placement opportunities, highly supportive research infrastructure, and beautiful campus like a forest in Chennai.",
        category: "Placements",
        date: "2026-03-12"
      },
      {
        id: "iitm-r2",
        reviewerName: "Priya S.",
        rating: 4,
        comment: "Outstanding coding culture and professors are brilliant, though some academic schedules can feel quite strenuous.",
        category: "Faculty",
        date: "2026-04-18"
      }
    ],
    cutoffs: [
      { exam: "jee-advanced", category: "general", stream: "cse", closingRank: 150 },
      { exam: "jee-advanced", category: "general", stream: "ece", closingRank: 420 },
      { exam: "jee-advanced", category: "general", stream: "mech", closingRank: 1200 },
      { exam: "jee-advanced", category: "general", stream: "civil", closingRank: 2500 },
      { exam: "jee-advanced", category: "obc", stream: "cse", closingRank: 400 },
      { exam: "jee-advanced", category: "obc", stream: "ece", closingRank: 950 },
      { exam: "jee-advanced", category: "sc", stream: "cse", closingRank: 1100 },
      { exam: "jee-advanced", category: "st", stream: "cse", closingRank: 1500 }
    ]
  },
  {
    id: "iit-delhi",
    name: "Indian Institute of Technology (IIT) Delhi",
    logoUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDePNMRIZalYBctXfAQBV-sardPyHFqBHDK322G1x5-qSFP1cC-tZAivIqeVRTfE1njd3LY-CDKZQ3o7TgXq7vLlfsyKeM9jEFC-ZZYVdWLPr-no5NRYG8II8Ms-kEGVTTzmgNaQS8Bv5RqXXyeF-Y_WGybu-xYoFWCWTkTjPaXcjbqwx_AXPTay8pk20J3vw4Bldvr-dLUxmDZ8oLwcE0WZYTR5anu2dK-VVLERGs00VgFHOG2Y6_EOa9eusyHoZ20u81elXny_ZNZ",
    bannerUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0s_bXAO--uPYKyV57KuTq5hpKB-yFsXq8-X_Qcc0VyiEgjEeZ__1cccJvfdSErI_JIpdoLgboo5AG5vn2kn2xFBWmnmoybQeBkNQmalcjdlS9AOGxNgDMX3GG9iCZSOzQMl2WpDroYa5XG48ItM7uEOHSJX8hLb2-M98x4MelrgwaNBBSL63uus2eIw-vu5Zbal3_KqbWiRdFCPrj15ZlmhjV4HYX3dmVRgNTN1xYRJHrSVSSCKbySI4nXAPfgAJdFpm5N5Y5uWRV",
    tier: "NIRF Rank #2",
    location: "New Delhi, Delhi NCR",
    city: "New Delhi",
    state: "Delhi NCR",
    approvedBy: "UGC Recognized",
    averageFee: 235000,
    rating: 4.7,
    reviewCount: 389,
    type: "Public",
    establishedYear: 1961,
    bio: "IIT Delhi stands in the historic capital of India. Best known for pioneering entrepreneurship, incubating unicorn startups, and having a hyper-active alumni network, the institute maintains high research output across computer engineering and humanities.",
    campusArea: "320 Acres",
    totalStudents: "10,000+",
    totalCoursesCount: 89,
    courses: [
      {
        id: "iitd-cse",
        name: "B.Tech Computer Science",
        intake: 110,
        duration: "4 Years",
        firstYearFee: 235000,
        eligibility: "10+2 with 75%",
        exams: ["JEE Advanced"]
      },
      {
        id: "iitd-mech",
        name: "B.Tech Mechanical Eng.",
        intake: 120,
        duration: "4 Years",
        firstYearFee: 235000,
        eligibility: "10+2 with 75%",
        exams: ["JEE Advanced"]
      },
      {
        id: "iitd-civil",
        name: "B.Tech Civil Engineering",
        intake: 100,
        duration: "4 Years",
        firstYearFee: 215000,
        eligibility: "10+2 with 75%",
        exams: ["JEE Advanced"]
      }
    ],
    highestCtc: "₹ 2.10 Cr",
    highestCtcVal: 21000000,
    averageCtc: "₹ 23.8 LPA",
    averageCtcVal: 2380000,
    placementRate: 94,
    topRecruiters: ["Google", "Microsoft", "Goldman Sachs", "Amazon", "Uber", "Tower Research"],
    reviewsBreakdown: {
      infrastructure: 4.7,
      faculty: 4.6,
      placements: 4.9,
      overall: 4.7,
      totalReviews: 389
    },
    reviews: [
      {
        id: "iitd-r1",
        reviewerName: "Aditya P.",
        rating: 5,
        comment: "Excellent startup ecosystem! The college gives absolute freedom to experiment, and the placements are top-tier.",
        category: "Placements",
        date: "2026-02-28"
      }
    ],
    cutoffs: [
      { exam: "jee-advanced", category: "general", stream: "cse", closingRank: 115 },
      { exam: "jee-advanced", category: "general", stream: "ece", closingRank: 380 },
      { exam: "jee-advanced", category: "general", stream: "mech", closingRank: 980 },
      { exam: "jee-advanced", category: "general", stream: "civil", closingRank: 2200 },
      { exam: "jee-advanced", category: "obc", stream: "cse", closingRank: 320 },
      { exam: "jee-advanced", category: "sc", stream: "cse", closingRank: 980 }
    ]
  },
  {
    id: "iit-bombay",
    name: "Indian Institute of Technology (IIT) Bombay",
    logoUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBv6gyW_e_CNXxseCVoES9TK6Wd77PrjRwANa-G_6zpF35LkQcQu7NVUoKLEiNX3QhFnO88ZnnFKJkB89tb5AYFu__wfpnS6T75sGEfKIJ59BFDlL2bmVvoQWqFhNuOfYyybSDZxyS8Jd3prf3K9LamixD9UfSY0FE1PKm9UubSCMrbq3qsaaoQM7pAqiu9gRPjPiiMpVgjp4EvAKO_-Y0Ev8LkZFyBBMvKA6LzRa5QaAD8jnzEZGn5jRp5JkgZR9JV9VXigyQ-VtFN",
    bannerUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0s_bXAO--uPYKyV57KuTq5hpKB-yFsXq8-X_Qcc0VyiEgjEeZ__1cccJvfdSErI_JIpdoLgboo5AG5vn2kn2xFBWmnmoybQeBkNQmalcjdlS9AOGxNgDMX3GG9iCZSOzQMl2WpDroYa5XG48ItM7uEOHSJX8hLb2-M98x4MelrgwaNBBSL63uus2eIw-vu5Zbal3_KqbWiRdFCPrj15ZlmhjV4HYX3dmVRgNTN1xYRJHrSVSSCKbySI4nXAPfgAJdFpm5N5Y5uWRV",
    tier: "NIRF Rank #3",
    location: "Mumbai, Maharashtra",
    city: "Mumbai",
    state: "Maharashtra",
    approvedBy: "AICTE Approved",
    averageFee: 220000,
    rating: 4.9,
    reviewCount: 615,
    type: "Public",
    establishedYear: 1958,
    bio: "Reputed for outstanding academic caliber and vibrant campus events like Mood Indigo. Flanked by Powai Lake, IIT Bombay is a premier technical center attracting the absolute highest rankers of JEE Advanced.",
    campusArea: "550 Acres",
    totalStudents: "10,200+",
    totalCoursesCount: 86,
    courses: [
      {
        id: "iitb-cse",
        name: "B.Tech Computer Science",
        intake: 120,
        duration: "4 Years",
        firstYearFee: 220000,
        eligibility: "10+2 with 75%",
        exams: ["JEE Advanced"]
      },
      {
        id: "iitb-mech",
        name: "B.Tech Mechanical Eng.",
        intake: 140,
        duration: "4 Years",
        firstYearFee: 220000,
        eligibility: "10+2 with 75%",
        exams: ["JEE Advanced"]
      },
      {
        id: "iitb-datasci",
        name: "M.Tech Data Science",
        intake: 60,
        duration: "2 Years",
        firstYearFee: 150000,
        eligibility: "B.Tech/B.E.",
        exams: ["GATE"]
      }
    ],
    highestCtc: "₹ 3.67 Cr",
    highestCtcVal: 36700000,
    averageCtc: "₹ 21.8 LPA",
    averageCtcVal: 2180000,
    placementRate: 89,
    topRecruiters: ["Google", "Microsoft", "Apple", "TCS", "Goldman Sachs", "Amazon", "Qualcomm"],
    reviewsBreakdown: {
      infrastructure: 4.9,
      faculty: 4.8,
      placements: 5.0,
      overall: 4.9,
      totalReviews: 615
    },
    reviews: [
      {
        id: "iitb-r1",
        reviewerName: "Kabir M.",
        rating: 5,
        comment: "Being surrounded by Powai lake and the heavy corporate connection of Bombay is unbeatable.",
        category: "Infrastructure",
        date: "2026-05-01"
      }
    ],
    cutoffs: [
      { exam: "jee-advanced", category: "general", stream: "cse", closingRank: 60 },
      { exam: "jee-advanced", category: "general", stream: "ece", closingRank: 290 },
      { exam: "jee-advanced", category: "general", stream: "mech", closingRank: 850 },
      { exam: "jee-advanced", category: "general", stream: "civil", closingRank: 1900 },
      { exam: "jee-advanced", category: "obc", stream: "cse", closingRank: 220 },
      { exam: "jee-advanced", category: "sc", stream: "cse", closingRank: 700 }
    ]
  },
  {
    id: "nit-trichy",
    name: "National Institute of Technology (NIT) Trichy",
    logoUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBv6gyW_e_CNXxseCVoES9TK6Wd77PrjRwANa-G_6zpF35LkQcQu7NVUoKLEiNX3QhFnO88ZnnFKJkB89tb5AYFu__wfpnS6T75sGEfKIJ59BFDlL2bmVvoQWqFhNuOfYyybSDZxyS8Jd3prf3K9LamixD9UfSY0FE1PKm9UubSCMrbq3qsaaoQM7pAqiu9gRPjPiiMpVgjp4EvAKO_-Y0Ev8LkZFyBBMvKA6LzRa5QaAD8jnzEZGn5jRp5JkgZR9JV9VXigyQ-VtFN",
    bannerUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0s_bXAO--uPYKyV57KuTq5hpKB-yFsXq8-X_Qcc0VyiEgjEeZ__1cccJvfdSErI_JIpdoLgboo5AG5vn2kn2xFBWmnmoybQeBkNQmalcjdlS9AOGxNgDMX3GG9iCZSOzQMl2WpDroYa5XG48ItM7uEOHSJX8hLb2-M98x4MelrgwaNBBSL63uus2eIw-vu5Zbal3_KqbWiRdFCPrj15ZlmhjV4HYX3dmVRgNTN1xYRJHrSVSSCKbySI4nXAPfgAJdFpm5N5Y5uWRV",
    tier: "NIRF Rank #8",
    location: "Tiruchirappalli, Tamil Nadu",
    city: "Tiruchirappalli",
    state: "Tamil Nadu",
    approvedBy: "AICTE Approved",
    averageFee: 145000,
    rating: 4.4,
    reviewCount: 220,
    type: "Public",
    establishedYear: 1964,
    bio: "NIT Trichy is historically ranked as the #1 National Institute of Technology in India. Boasting excellent infrastructure, deep tech labs, and an extremely secure high-placement rate into top corporate entities.",
    campusArea: "800 Acres",
    totalStudents: "6,500+",
    totalCoursesCount: 45,
    courses: [
      {
        id: "nitt-cse",
        name: "B.Tech Computer Science",
        intake: 110,
        duration: "4 Years",
        firstYearFee: 145000,
        eligibility: "10+2 with 75%",
        exams: ["JEE Main"]
      },
      {
        id: "nitt-mech",
        name: "B.Tech Mechanical",
        intake: 120,
        duration: "4 Years",
        firstYearFee: 145000,
        eligibility: "10+2 with 75%",
        exams: ["JEE Main"]
      },
      {
        id: "nitt-civil",
        name: "B.Tech Civil",
        intake: 90,
        duration: "4 Years",
        firstYearFee: 145000,
        eligibility: "10+2 with 75%",
        exams: ["JEE Main"]
      }
    ],
    highestCtc: "₹ 52.8 LPA",
    highestCtcVal: 5280000,
    averageCtc: "₹ 15.0 LPA",
    averageCtcVal: 1500000,
    placementRate: 88,
    topRecruiters: ["Google", "Microsoft", "Goldman Sachs", "TCS", "Cisco", "Intel"],
    reviewsBreakdown: {
      infrastructure: 4.3,
      faculty: 4.4,
      placements: 4.6,
      overall: 4.4,
      totalReviews: 220
    },
    reviews: [
      {
        id: "nitt-r1",
        reviewerName: "Sanjay T.",
        rating: 4,
        comment: "Excellent tech groups and sports. Accommodation is robust though weather in Trichy can be extremely hot.",
        category: "Infrastructure",
        date: "2026-01-15"
      }
    ],
    cutoffs: [
      { exam: "jee-mains", category: "general", stream: "cse", closingRank: 1500 },
      { exam: "jee-mains", category: "general", stream: "ece", closingRank: 3400 },
      { exam: "jee-mains", category: "general", stream: "mech", closingRank: 8200 },
      { exam: "jee-mains", category: "general", stream: "civil", closingRank: 14000 },
      { exam: "jee-mains", category: "obc", stream: "cse", closingRank: 4200 },
      { exam: "jee-mains", category: "sc", stream: "cse", closingRank: 8000 }
    ]
  },
  {
    id: "mit-manipal",
    name: "Manipal Institute of Technology",
    logoUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBv6gyW_e_CNXxseCVoES9TK6Wd77PrjRwANa-G_6zpF35LkQcQu7NVUoKLEiNX3QhFnO88ZnnFKJkB89tb5AYFu__wfpnS6T75sGEfKIJ59BFDlL2bmVvoQWqFhNuOfYyybSDZxyS8Jd3prf3K9LamixD9UfSY0FE1PKm9UubSCMrbq3qsaaoQM7pAqiu9gRPjPiiMpVgjp4EvAKO_-Y0Ev8LkZFyBBMvKA6LzRa5QaAD8jnzEZGn5jRp5JkgZR9JV9VXigyQ-VtFN",
    bannerUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0s_bXAO--uPYKyV57KuTq5hpKB-yFsXq8-X_Qcc0VyiEgjEeZ__1cccJvfdSErI_JIpdoLgboo5AG5vn2kn2xFBWmnmoybQeBkNQmalcjdlS9AOGxNgDMX3GG9iCZSOzQMl2WpDroYa5XG48ItM7uEOHSJX8hLb2-M98x4MelrgwaNBBSL63uus2eIw-vu5Zbal3_KqbWiRdFCPrj15ZlmhjV4HYX3dmVRgNTN1xYRJHrSVSSCKbySI4nXAPfgAJdFpm5N5Y5uWRV",
    tier: "NIRF Rank #55",
    location: "Manipal, Karnataka",
    city: "Manipal",
    state: "Karnataka",
    approvedBy: "AICTE Approved",
    averageFee: 435000,
    rating: 4.2,
    reviewCount: 345,
    type: "Private",
    establishedYear: 1957,
    bio: "MIT Manipal is a leading private college in coastal Karnataka. Highly prized for premium campus amenities, student safety, foreign university exchange modules, and a vibrant multicultural student environment.",
    campusArea: "312 Acres",
    totalStudents: "8,500+",
    totalCoursesCount: 104,
    courses: [
      {
        id: "mitm-cse",
        name: "B.Tech Computer Science",
        intake: 180,
        duration: "4 Years",
        firstYearFee: 435000,
        eligibility: "10+2 with 60% in Physics/Maths",
        exams: ["MET", "JEE Main"]
      },
      {
        id: "mitm-ece",
        name: "B.Tech Electronics & Communication",
        intake: 140,
        duration: "4 Years",
        firstYearFee: 410000,
        eligibility: "10+2 with 60% in Physics/Maths",
        exams: ["MET", "JEE Main"]
      },
      {
        id: "mitm-mech",
        name: "B.Tech Mechanical Eng.",
        intake: 120,
        duration: "4 Years",
        firstYearFee: 390000,
        eligibility: "10+2 with 60%",
        exams: ["MET", "JEE Main"]
      }
    ],
    highestCtc: "₹ 43.3 LPA",
    highestCtcVal: 4330000,
    averageCtc: "₹ 12.59 LPA",
    averageCtcVal: 1259000,
    placementRate: 85,
    topRecruiters: ["Microsoft", "AWS", "Goldman Sachs", "IBM", "TCS", "Infosys"],
    reviewsBreakdown: {
      infrastructure: 4.6,
      faculty: 4.1,
      placements: 4.0,
      overall: 4.2,
      totalReviews: 345
    },
    reviews: [
      {
        id: "mit-r1",
        reviewerName: "Vikram N.",
        rating: 4,
        comment: "Excellent infrastructure, sports fields, food options. Academic fees are on the higher side but exposure is wonderful.",
        category: "Infrastructure",
        date: "2026-03-05"
      }
    ],
    cutoffs: [
      { exam: "jee-mains", category: "general", stream: "cse", closingRank: 25000 },
      { exam: "jee-mains", category: "general", stream: "ece", closingRank: 38000 },
      { exam: "jee-mains", category: "general", stream: "mech", closingRank: 55000 },
      { exam: "jee-mains", category: "general", stream: "civil", closingRank: 75000 },
      { exam: "bitsat", category: "general", stream: "cse", closingRank: 240 },
      { exam: "bitsat", category: "general", stream: "ece", closingRank: 210 }
    ]
  },
  {
    id: "bits-pilani",
    name: "Birla Institute of Technology and Science (BITS) Pilani",
    logoUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDePNMRIZalYBctXfAQBV-sardPyHFqBHDK322G1x5-qSFP1cC-tZAivIqeVRTfE1njd3LY-CDKZQ3o7TgXq7vLlfsyKeM9jEFC-ZZYVdWLPr-no5NRYG8II8Ms-kEGVTTzmgNaQS8Bv5RqXXyeF-Y_WGybu-xYoFWCWTkTjPaXcjbqwx_AXPTay8pk20J3vw4Bldvr-dLUxmDZ8oLwcE0WZYTR5anu2dK-VVLERGs00VgFHOG2Y6_EOa9eusyHoZ20u81elXny_ZNZ",
    bannerUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0s_bXAO--uPYKyV57KuTq5hpKB-yFsXq8-X_Qcc0VyiEgjEeZ__1cccJvfdSErI_JIpdoLgboo5AG5vn2kn2xFBWmnmoybQeBkNQmalcjdlS9AOGxNgDMX3GG9iCZSOzQMl2WpDroYa5XG48ItM7uEOHSJX8hLb2-M98x4MelrgwaNBBSL63uus2eIw-vu5Zbal3_KqbWiRdFCPrj15ZlmhjV4HYX3dmVRgNTN1xYRJHrSVSSCKbySI4nXAPfgAJdFpm5N5Y5uWRV",
    tier: "NIRF Rank #12",
    location: "Pilani, Rajasthan",
    city: "Pilani",
    state: "Rajasthan",
    approvedBy: "UGC Recognized",
    averageFee: 485000,
    rating: 4.6,
    reviewCount: 189,
    type: "Private",
    establishedYear: 1964,
    bio: "An Institution of Eminence, BITS Pilani offers its signature zero-attendance policy, dual degree options, and 'Practice School' industrial internships, producing stellar technocrats and entrepreneurs worldwide.",
    campusArea: "328 Acres",
    totalStudents: "5,800+",
    totalCoursesCount: 64,
    courses: [
      {
        id: "bits-cse",
        name: "B.Tech Computer Science",
        intake: 120,
        duration: "4 Years",
        firstYearFee: 485000,
        eligibility: "12th with 75% PCM & min 60% in each",
        exams: ["BITSAT"]
      },
      {
        id: "bits-ece",
        name: "B.Tech Electronics & Comm.",
        intake: 100,
        duration: "4 Years",
        firstYearFee: 485000,
        eligibility: "12th with 75% PCM",
        exams: ["BITSAT"]
      }
    ],
    highestCtc: "₹ 60.7 LPA",
    highestCtcVal: 6070000,
    averageCtc: "₹ 18.2 LPA",
    averageCtcVal: 1820000,
    placementRate: 91,
    topRecruiters: ["Google", "Salesforce", "Microsoft", "Uber", "Oracle", "Nvidia"],
    reviewsBreakdown: {
      infrastructure: 4.5,
      faculty: 4.7,
      placements: 4.8,
      overall: 4.6,
      totalReviews: 189
    },
    reviews: [
      {
        id: "bits-r1",
        reviewerName: "Armaan V.",
        rating: 5,
        comment: "Zero attendance policy offers complete freedom to build startups, and the Practice School ensures you graduate with real experience.",
        category: "Faculty",
        date: "2026-04-20"
      }
    ],
    cutoffs: [
      { exam: "bitsat", category: "general", stream: "cse", closingRank: 320 },
      { exam: "bitsat", category: "general", stream: "ece", closingRank: 285 },
      { exam: "bitsat", category: "general", stream: "mech", closingRank: 244 },
      { exam: "bitsat", category: "general", stream: "civil", closingRank: 205 }
    ]
  },
  {
    id: "dtu-delhi",
    name: "Delhi Technological University (DTU)",
    logoUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDePNMRIZalYBctXfAQBV-sardPyHFqBHDK322G1x5-qSFP1cC-tZAivIqeVRTfE1njd3LY-CDKZQ3o7TgXq7vLlfsyKeM9jEFC-ZZYVdWLPr-no5NRYG8II8Ms-kEGVTTzmgNaQS8Bv5RqXXyeF-Y_WGybu-xYoFWCWTkTjPaXcjbqwx_AXPTay8pk20J3vw4Bldvr-dLUxmDZ8oLwcE0WZYTR5anu2dK-VVLERGs00VgFHOG2Y6_EOa9eusyHoZ20u81elXny_ZNZ",
    bannerUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0s_bXAO--uPYKyV57KuTq5hpKB-yFsXq8-X_Qcc0VyiEgjEeZ__1cccJvfdSErI_JIpdoLgboo5AG5vn2kn2xFBWmnmoybQeBkNQmalcjdlS9AOGxNgDMX3GG9iCZSOzQMl2WpDroYa5XG48ItM7uEOHSJX8hLb2-M98x4MelrgwaNBBSL63uus2eIw-vu5Zbal3_KqbWiRdFCPrj15ZlmhjV4HYX3dmVRgNTN1xYRJHrSVSSCKbySI4nXAPfgAJdFpm5N5Y5uWRV",
    tier: "NIRF Rank #24",
    location: "New Delhi, Delhi NCR",
    city: "New Delhi",
    state: "Delhi NCR",
    approvedBy: "AICTE Approved",
    averageFee: 190000,
    rating: 4.3,
    reviewCount: 167,
    type: "Public",
    establishedYear: 1941,
    bio: "Formerly known as Delhi College of Engineering (DCE). Strategically located in New Delhi, DTU stands as a majestic brand of technological education with exceptional placements and a strong focus on technical project groups.",
    campusArea: "164 Acres",
    totalStudents: "9,000+",
    totalCoursesCount: 78,
    courses: [
      {
        id: "dtu-cse",
        name: "B.Tech Computer Science",
        intake: 140,
        duration: "4 Years",
        firstYearFee: 190000,
        eligibility: "10+2 with 75% in PCM",
        exams: ["JEE Main"]
      },
      {
        id: "dtu-ece",
        name: "B.Tech Electronics & Comm",
        intake: 120,
        duration: "4 Years",
        firstYearFee: 190000,
        eligibility: "10+2 with 75% in PCM",
        exams: ["JEE Main"]
      },
      {
        id: "dtu-mech",
        name: "B.Tech Mechanical",
        intake: 120,
        duration: "4 Years",
        firstYearFee: 190000,
        eligibility: "10+2 with 75%",
        exams: ["JEE Main"]
      }
    ],
    highestCtc: "₹ 64.0 LPA",
    highestCtcVal: 6400000,
    averageCtc: "₹ 15.6 LPA",
    averageCtcVal: 1560000,
    placementRate: 88,
    topRecruiters: ["Google", "Microsoft", "Paytm", "Zomato", "Uber", "McKinsey"],
    reviewsBreakdown: {
      infrastructure: 4.1,
      faculty: 4.2,
      placements: 4.7,
      overall: 4.3,
      totalReviews: 167
    },
    reviews: [
      {
        id: "dtu-r1",
        reviewerName: "Nitin J.",
        rating: 4,
        comment: "Excellent tech societies like Solar Car and Unmanned Systems. Placements are solid, and campus life is highly energetic.",
        category: "Placements",
        date: "2026-03-24"
      }
    ],
    cutoffs: [
      { exam: "jee-mains", category: "general", stream: "cse", closingRank: 4200 },
      { exam: "jee-mains", category: "general", stream: "ece", closingRank: 9200 },
      { exam: "jee-mains", category: "general", stream: "mech", closingRank: 16500 },
      { exam: "jee-mains", category: "general", stream: "civil", closingRank: 24000 },
      { exam: "jee-mains", category: "obc", stream: "cse", closingRank: 12000 },
      { exam: "jee-mains", category: "sc", stream: "cse", closingRank: 28000 }
    ]
  },
  {
    id: "iit-roorkee",
    name: "Indian Institute of Technology (IIT) Roorkee",
    logoUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBv6gyW_e_CNXxseCVoES9TK6Wd77PrjRwANa-G_6zpF35LkQcQu7NVUoKLEiNX3QhFnO88ZnnFKJkB89tb5AYFu__wfpnS6T75sGEfKIJ59BFDlL2bmVvoQWqFhNuOfYyybSDZxyS8Jd3prf3K9LamixD9UfSY0FE1PKm9UubSCMrbq3qsaaoQM7pAqiu9gRPjPiiMpVgjp4EvAKO_-Y0Ev8LkZFyBBMvKA6LzRa5QaAD8jnzEZGn5jRp5JkgZR9JV9VXigyQ-VtFN",
    bannerUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0s_bXAO--uPYKyV57KuTq5hpKB-yFsXq8-X_Qcc0VyiEgjEeZ__1cccJvfdSErI_JIpdoLgboo5AG5vn2kn2xFBWmnmoybQeBkNQmalcjdlS9AOGxNgDMX3GG9iCZSOzQMl2WpDroYa5XG48ItM7uEOHSJX8hLb2-M98x4MelrgwaNBBSL63uus2eIw-vu5Zbal3_KqbWiRdFCPrj15ZlmhjV4HYX3dmVRgNTN1xYRJHrSVSSCKbySI4nXAPfgAJdFpm5N5Y5uWRV",
    tier: "NIRF Rank #6",
    location: "Roorkee, Uttarakhand",
    city: "Roorkee",
    state: "Uttarakhand",
    approvedBy: "UGC Recognized",
    averageFee: 210000,
    rating: 4.5,
    reviewCount: 154,
    type: "Public",
    establishedYear: 1847,
    bio: "As the oldest technical institution in Asia, established in 1847 as Thomason College of Civil Engineering, IIT Roorkee possesses a regal legacy, majestic structures, outstanding research and top global ranking.",
    campusArea: "365 Acres",
    totalStudents: "8,000+",
    totalCoursesCount: 76,
    courses: [
      {
        id: "iitr-cse",
        name: "B.Tech Computer Science",
        intake: 90,
        duration: "4 Years",
        firstYearFee: 210000,
        eligibility: "10+2 with 75%",
        exams: ["JEE Advanced"]
      },
      {
        id: "iitr-civil",
        name: "B.Tech Civil",
        intake: 120,
        duration: "4 Years",
        firstYearFee: 210000,
        eligibility: "10+2 with 75%",
        exams: ["JEE Advanced"]
      }
    ],
    highestCtc: "₹ 1.20 Cr",
    highestCtcVal: 12000000,
    averageCtc: "₹ 17.5 LPA",
    averageCtcVal: 1750000,
    placementRate: 89,
    topRecruiters: ["Google", "Microsoft", "Amazon", "Tata Steel", "L&T", "Schlumberger"],
    reviewsBreakdown: {
      infrastructure: 4.5,
      faculty: 4.6,
      placements: 4.4,
      overall: 4.5,
      totalReviews: 154
    },
    reviews: [
      {
        id: "iitr-r1",
        reviewerName: "Shashank V.",
        rating: 4,
        comment: "Excellent heritage buildings, great laboratories. Campus has peaceful foothills vibration with intense technical competitions.",
        category: "Faculty",
        date: "2026-02-10"
      }
    ],
    cutoffs: [
      { exam: "jee-advanced", category: "general", stream: "cse", closingRank: 400 },
      { exam: "jee-advanced", category: "general", stream: "civil", closingRank: 4800 },
      { exam: "jee-advanced", category: "obc", stream: "cse", closingRank: 1200 },
      { exam: "jee-advanced", category: "sc", stream: "cse", closingRank: 2500 }
    ]
  }
];

// Helper to filter and rank chances for Predictor
export function predictChance(
  exam: string,
  category: string,
  stream: string,
  userRank: number
): {
  highChance: Array<{ college: College; closingRank: number; streamName: string }>;
  mediumChance: Array<{ college: College; closingRank: number; streamName: string }>;
  lowChance: Array<{ college: College; closingRank: number; streamName: string }>;
} {
  const highChance: any[] = [];
  const mediumChance: any[] = [];
  const lowChance: any[] = [];

  mockColleges.forEach((college) => {
    // Find matching cutoffs
    const matches = college.cutoffs.filter(
      (c) =>
        c.exam === exam &&
        c.category === category &&
        c.stream === stream
    );

    matches.forEach((cutoff) => {
      // Find course details to display standard readable name
      const matchedCourse = college.courses.find(
        (co) => co.exams.includes(exam === "jee-mains" ? "JEE Main" : exam === "jee-advanced" ? "JEE Advanced" : exam === "bitsat" ? "BITSAT" : "")
      ) || college.courses[0];

      const streamName = matchedCourse ? matchedCourse.name : `${stream.toUpperCase()}`;

      // logic based on cut-off boundary
      // If cutoff closingRank is e.g. 5000:
      // - User Rank = 3000 -> Very safe. closingRank is 1.25x or higher than user Rank. (userRank <= cutoff.closingRank * 0.8) -> High Chance
      // - User Rank = 4800 -> Borderline, but matches cutoff. (cutoff.closingRank * 0.8 < userRank <= cutoff.closingRank) -> Medium Chance
      // - User Rank = 5500 -> Dream, cutoff is smaller than userRank. (cutoff.closingRank < userRank <= cutoff.closingRank * 1.3) -> Low Chance (Dream)
      
      const factor = cutoff.closingRank / userRank;

      if (factor >= 1.2) {
        highChance.push({
          college,
          closingRank: cutoff.closingRank,
          streamName
        });
      } else if (factor >= 1.0) {
        mediumChance.push({
          college,
          closingRank: cutoff.closingRank,
          streamName
        });
      } else if (factor >= 0.7) {
        lowChance.push({
          college,
          closingRank: cutoff.closingRank,
          streamName
        });
      }
    });
  });

  return {
    highChance: highChance.sort((a, b) => a.college.rating - b.college.rating),
    mediumChance: mediumChance.sort((a, b) => a.college.rating - b.college.rating),
    lowChance: lowChance.sort((a, b) => a.college.rating - b.college.rating)
  };
}
