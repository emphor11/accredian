export type Program = {
  id: number;
  title: string;
  university: string;
  duration: string;
  domain: string;
};

export const programs: Program[] = [
  {
    id: 1,
    title: "Executive Program in Data Science",
    university: "IIT Guwahati",
    duration: "11 months",
    domain: "Data Science"
  },
  {
    id: 2,
    title: "PG Program in AI & ML",
    university: "IIM Visakhapatnam",
    duration: "9 months",
    domain: "AI/ML"
  },
  {
    id: 3,
    title: "Chief Product Officer Program",
    university: "SP Jain",
    duration: "7 months",
    domain: "Product Management"
  },
  {
    id: 4,
    title: "Business Analytics for Leaders",
    university: "XLRI",
    duration: "6 months",
    domain: "Business Analytics"
  },
  {
    id: 5,
    title: "Strategic Leadership Accelerator",
    university: "IIM Indore",
    duration: "8 months",
    domain: "Leadership"
  },
  {
    id: 6,
    title: "Generative AI for Business Teams",
    university: "IIT Madras",
    duration: "12 weeks",
    domain: "AI/ML"
  }
];

export async function getPrograms() {
  return programs;
}
