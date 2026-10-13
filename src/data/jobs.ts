export interface JobListing {
  id: string;
  department: string;
  post: string;
  qualification: string;
  salary: string;
}

export const DEPARTMENTS = [
  "MINING & MINERAL",
  "INFRASTRUCTURE & REAL ESTATE",
  "SOLAR POWER PROJECT - 100 Acres",
  "GLASS FACTORY / STEEL PLANT / BULLET PROOF",
  "WATER BOTTLE MANUFACTURING",
  "SOFTWARE & IT - Rushikonda",
  "EXPORT & IMPORT",
  "CORPORATE - HO",
] as const;

export type DepartmentName = (typeof DEPARTMENTS)[number];

export const OFFICE_LOCATIONS = [
  "Visakhapatnam – Rushikonda IT SEZ",
  "Kancharapalem",
  "Muralinagar",
  "Other",
] as const;

export const JOBS_DATA: JobListing[] = [
  // MINING & MINERAL
  {
    id: "mm-01",
    department: "MINING & MINERAL",
    post: "VP Mining Operations",
    qualification: "B.Tech Mining +12 yrs",
    salary: "Rs. 1,20,000-1,50,000",
  },
  {
    id: "mm-02",
    department: "MINING & MINERAL",
    post: "Mining Engineer",
    qualification: "B.Tech Mining +3-5 yrs",
    salary: "Rs. 45,000-65,000",
  },
  {
    id: "mm-03",
    department: "MINING & MINERAL",
    post: "Asst. Mining Engineer",
    qualification: "B.Tech/Diploma +1-2 yrs",
    salary: "Rs. 32,000-42,000",
  },
  {
    id: "mm-04",
    department: "MINING & MINERAL",
    post: "Geologist",
    qualification: "M.Sc Geology +2-4 yrs",
    salary: "Rs. 40,000-55,000",
  },
  {
    id: "mm-05",
    department: "MINING & MINERAL",
    post: "Mines Surveyor",
    qualification: "Diploma Survey +3 yrs",
    salary: "Rs. 30,000-40,000",
  },
  {
    id: "mm-06",
    department: "MINING & MINERAL",
    post: "Blasting Supervisor",
    qualification: "Diploma + License",
    salary: "Rs. 35,000-45,000",
  },
  {
    id: "mm-07",
    department: "MINING & MINERAL",
    post: "Safety Officer",
    qualification: "B.Tech + Safety Diploma",
    salary: "Rs. 40,000-55,000",
  },
  {
    id: "mm-08",
    department: "MINING & MINERAL",
    post: "HEMM Operator",
    qualification: "10th + HMV License",
    salary: "Rs. 25,000-32,000",
  },
  {
    id: "mm-09",
    department: "MINING & MINERAL",
    post: "Drill / Crusher Operator",
    qualification: "ITI +2 yrs",
    salary: "Rs. 24,000-30,000",
  },
  {
    id: "mm-10",
    department: "MINING & MINERAL",
    post: "Weighbridge Operator",
    qualification: "Inter + Computer",
    salary: "Rs. 20,000-25,000",
  },
  {
    id: "mm-11",
    department: "MINING & MINERAL",
    post: "Mining Helper",
    qualification: "8th Pass",
    salary: "Rs. 15,000-18,000",
  },

  // INFRASTRUCTURE & REAL ESTATE
  {
    id: "ir-01",
    department: "INFRASTRUCTURE & REAL ESTATE",
    post: "VP Infrastructure",
    qualification: "B.Tech Civil +12 yrs",
    salary: "Rs. 1,20,000-1,50,000",
  },
  {
    id: "ir-02",
    department: "INFRASTRUCTURE & REAL ESTATE",
    post: "Civil Project Manager",
    qualification: "B.Tech Civil +6-8 yrs",
    salary: "Rs. 60,000-80,000",
  },
  {
    id: "ir-03",
    department: "INFRASTRUCTURE & REAL ESTATE",
    post: "Sr. Site Engineer",
    qualification: "B.Tech +4 yrs",
    salary: "Rs. 40,000-50,000",
  },
  {
    id: "ir-04",
    department: "INFRASTRUCTURE & REAL ESTATE",
    post: "Jr. Site Engineer",
    qualification: "Diploma/B.Tech +1-2 yrs",
    salary: "Rs. 28,000-35,000",
  },
  {
    id: "ir-05",
    department: "INFRASTRUCTURE & REAL ESTATE",
    post: "Architect",
    qualification: "B.Arch + AutoCAD",
    salary: "Rs. 45,000-60,000",
  },
  {
    id: "ir-06",
    department: "INFRASTRUCTURE & REAL ESTATE",
    post: "Quantity Surveyor",
    qualification: "B.Tech + Billing",
    salary: "Rs. 35,000-45,000",
  },
  {
    id: "ir-07",
    department: "INFRASTRUCTURE & REAL ESTATE",
    post: "Sales Executive",
    qualification: "Any Degree +1 yr",
    salary: "Rs. 25,000-35,000",
  },

  // SOLAR POWER PROJECT - 100 Acres
  {
    id: "sp-01",
    department: "SOLAR POWER PROJECT - 100 Acres",
    post: "Project Head Solar",
    qualification: "B.Tech EEE +7 yrs Solar",
    salary: "Rs. 75,000-95,000",
  },
  {
    id: "sp-02",
    department: "SOLAR POWER PROJECT - 100 Acres",
    post: "Electrical Engineer",
    qualification: "B.Tech EEE +3 yrs",
    salary: "Rs. 40,000-55,000",
  },
  {
    id: "sp-03",
    department: "SOLAR POWER PROJECT - 100 Acres",
    post: "Solar Technician",
    qualification: "ITI Electrical +2 yrs",
    salary: "Rs. 24,000-30,000",
  },
  {
    id: "sp-04",
    department: "SOLAR POWER PROJECT - 100 Acres",
    post: "SCADA Operator",
    qualification: "Diploma EEE",
    salary: "Rs. 28,000-35,000",
  },

  // GLASS FACTORY / STEEL PLANT / BULLET PROOF
  {
    id: "gf-01",
    department: "GLASS FACTORY / STEEL PLANT / BULLET PROOF",
    post: "Plant Head Glass/Steel",
    qualification: "B.Tech +10 yrs",
    salary: "Rs. 80,000-1,10,000",
  },
  {
    id: "gf-02",
    department: "GLASS FACTORY / STEEL PLANT / BULLET PROOF",
    post: "Production Manager",
    qualification: "B.Tech +5 yrs",
    salary: "Rs. 55,000-70,000",
  },
  {
    id: "gf-03",
    department: "GLASS FACTORY / STEEL PLANT / BULLET PROOF",
    post: "Furnace / Kiln Operator",
    qualification: "ITI +3-4 yrs",
    salary: "Rs. 26,000-38,000",
  },
  {
    id: "gf-04",
    department: "GLASS FACTORY / STEEL PLANT / BULLET PROOF",
    post: "QC Chemist",
    qualification: "M.Sc Chemistry",
    salary: "Rs. 30,000-40,000",
  },
  {
    id: "gf-05",
    department: "GLASS FACTORY / STEEL PLANT / BULLET PROOF",
    post: "Composite Engineer",
    qualification: "B.Tech Materials",
    salary: "Rs. 50,000-65,000",
  },
  {
    id: "gf-06",
    department: "GLASS FACTORY / STEEL PLANT / BULLET PROOF",
    post: "Press Machine Operator",
    qualification: "ITI +3 yrs",
    salary: "Rs. 26,000-32,000",
  },

  // WATER BOTTLE MANUFACTURING
  {
    id: "wb-01",
    department: "WATER BOTTLE MANUFACTURING",
    post: "Plant In-charge",
    qualification: "Diploma +5 yrs FMCG",
    salary: "Rs. 45,000-60,000",
  },
  {
    id: "wb-02",
    department: "WATER BOTTLE MANUFACTURING",
    post: "RO Plant Operator",
    qualification: "ITI +2 yrs",
    salary: "Rs. 24,000-30,000",
  },
  {
    id: "wb-03",
    department: "WATER BOTTLE MANUFACTURING",
    post: "Blow Moulding Operator",
    qualification: "ITI +2 yrs",
    salary: "Rs. 22,000-28,000",
  },
  {
    id: "wb-04",
    department: "WATER BOTTLE MANUFACTURING",
    post: "Quality Checker",
    qualification: "B.Sc Chemistry",
    salary: "Rs. 25,000-32,000",
  },
  {
    id: "wb-05",
    department: "WATER BOTTLE MANUFACTURING",
    post: "Packing Staff",
    qualification: "10th Pass",
    salary: "Rs. 15,000-19,000",
  },
  {
    id: "wb-06",
    department: "WATER BOTTLE MANUFACTURING",
    post: "Delivery Driver",
    qualification: "10th + License",
    salary: "Rs. 20,000-25,000",
  },

  // SOFTWARE & IT - Rushikonda
  {
    id: "it-01",
    department: "SOFTWARE & IT - Rushikonda",
    post: "VP Software",
    qualification: "B.Tech CSE +10 yrs",
    salary: "Rs. 1,00,000-1,30,000",
  },
  {
    id: "it-02",
    department: "SOFTWARE & IT - Rushikonda",
    post: "IT Team Leader",
    qualification: "B.Tech +5 yrs",
    salary: "Rs. 65,000-85,000",
  },
  {
    id: "it-03",
    department: "SOFTWARE & IT - Rushikonda",
    post: "Software Developer",
    qualification: "B.Tech CSE +2-4 yrs",
    salary: "Rs. 40,000-60,000",
  },
  {
    id: "it-04",
    department: "SOFTWARE & IT - Rushikonda",
    post: "Web Designer",
    qualification: "Degree + UI Skills",
    salary: "Rs. 30,000-45,000",
  },
  {
    id: "it-05",
    department: "SOFTWARE & IT - Rushikonda",
    post: "Digital Marketing Executive",
    qualification: "Degree + SEO",
    salary: "Rs. 28,000-40,000",
  },

  // EXPORT & IMPORT
  {
    id: "ex-01",
    department: "EXPORT & IMPORT",
    post: "VP EXIM",
    qualification: "MBA IB +10 yrs",
    salary: "Rs. 1,00,000-1,25,000",
  },
  {
    id: "ex-02",
    department: "EXPORT & IMPORT",
    post: "International Business Mgr",
    qualification: "MBA +5 yrs",
    salary: "Rs. 60,000-80,000",
  },
  {
    id: "ex-03",
    department: "EXPORT & IMPORT",
    post: "Export Documentation Exe.",
    qualification: "Degree +2 yrs EXIM",
    salary: "Rs. 28,000-38,000",
  },
  {
    id: "ex-04",
    department: "EXPORT & IMPORT",
    post: "Logistics Coordinator",
    qualification: "Degree +2 yrs",
    salary: "Rs. 28,000-35,000",
  },

  // CORPORATE - HO
  {
    id: "co-01",
    department: "CORPORATE - HO",
    post: "CFO",
    qualification: "CA +10 yrs",
    salary: "Rs. 1,20,000-1,60,000",
  },
  {
    id: "co-02",
    department: "CORPORATE - HO",
    post: "Accounts Manager",
    qualification: "M.Com/CA Inter +4 yrs",
    salary: "Rs. 45,000-60,000",
  },
  {
    id: "co-03",
    department: "CORPORATE - HO",
    post: "Legal Head",
    qualification: "LLB +8 yrs",
    salary: "Rs. 70,000-90,000",
  },
  {
    id: "co-04",
    department: "CORPORATE - HO",
    post: "HR Head",
    qualification: "MBA HR +8 yrs",
    salary: "Rs. 60,000-80,000",
  },
  {
    id: "co-05",
    department: "CORPORATE - HO",
    post: "HR Executive",
    qualification: "MBA HR +2 yrs",
    salary: "Rs. 30,000-40,000",
  },
  {
    id: "co-06",
    department: "CORPORATE - HO",
    post: "Admin Manager",
    qualification: "Degree +5 yrs",
    salary: "Rs. 40,000-55,000",
  },
];
