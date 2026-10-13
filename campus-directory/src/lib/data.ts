import type { Department, Student } from "@/types";

export const departments: Department[] = [
  {
    slug: "computer-science",
    name: "Computer Science",
    icon: ">_",
    description: "Software engineering, artificial intelligence, algorithms, and systems infrastructure.",
    enrolled: 320,
    specializations: [
      { slug: "artificial-intelligence", name: "Artificial Intelligence", code: "CS-SPEC-01", description: "Machine learning, data pipelines, and applied AI systems.", lead: "Dr. Ravi Kulkarni", lab: "Babbage Hall 112" },
      { slug: "systems-engineering", name: "Systems Engineering", code: "CS-SPEC-02", description: "Operating systems, networking, and cloud infrastructure.", lead: "Prof. Hana Ito", lab: "Turing Hall 210" },
      { slug: "cybersecurity", name: "Cybersecurity", code: "CS-SPEC-03", description: "Secure design, cryptography, and threat analysis.", lead: "Dr. Omar Haddad", lab: "Lovelace Annex 05" },
      { slug: "web-development", name: "Web Development", code: "CS-SPEC-04", description: "Focusing on modern frontend architectures, full-stack frameworks, reactive interfaces, and distributed web APIs.", lead: "Prof. Elena Vance", lab: "Turing Hall 408" },
    ],
  },
  {
    slug: "design",
    name: "Design",
    icon: "✎",
    description: "User experience research, visual communication, interaction design, and product prototyping.",
    enrolled: 185,
    specializations: [
      { slug: "ux-research", name: "UX Research", code: "DS-SPEC-01", description: "Interviews, usability testing, and research synthesis.", lead: "Prof. Clara Nunez", lab: "Studio B 14" },
      { slug: "visual-communication", name: "Visual Communication", code: "DS-SPEC-02", description: "Typography, identity, and editorial design.", lead: "Prof. Jonas Weber", lab: "Studio A 03" },
      { slug: "interaction-design", name: "Interaction Design", code: "DS-SPEC-03", description: "Prototyping and motion for digital products.", lead: "Dr. Mei Tanaka", lab: "Studio B 21" },
    ],
  },
  {
    slug: "business",
    name: "Business",
    icon: "↗",
    description: "Strategic management, financial technology, international entrepreneurship, and analytics.",
    enrolled: 240,
    specializations: [
      { slug: "strategic-management", name: "Strategic Management", code: "BU-SPEC-01", description: "Competitive strategy and organizational leadership.", lead: "Prof. Daniel Okafor", lab: "Hayes Hall 301" },
      { slug: "fintech", name: "Financial Technology", code: "BU-SPEC-02", description: "Payments, markets, and data-driven finance.", lead: "Dr. Sana Iqbal", lab: "Hayes Hall 118" },
      { slug: "entrepreneurship", name: "International Entrepreneurship", code: "BU-SPEC-03", description: "Launching and scaling ventures across borders.", lead: "Prof. Lucia Romero", lab: "Hayes Hall 220" },
    ],
  },
];

export const students: Student[] = [
  {
    id: "STU-1042", name: "Aarav Mehta", departmentSlug: "computer-science", specializationSlug: "web-development",
    focus: "Full-Stack Architecture", year: 3, status: "Active Student", email: "aarav.mehta@campus.edu", enrolled: "Fall 2022",
    about: "Aarav is an undergraduate researcher focusing on distributed systems and cloud architecture. When not coding in Rust or Go, he mentors first-year engineering students in algorithm fundamentals.",
    subjects: [
      { code: "CS-301", name: "Distributed Systems & Microservices", credits: 4 },
      { code: "CS-340", name: "Web Application Architecture", credits: 4 },
      { code: "CS-280", name: "Algorithms & Complexity", credits: 3.5 },
    ],
    recordId: "0948-CS-AM", validated: "Oct 24, 2024", tone: "blue",
  },
  {
    id: "STU-1089", name: "Elena Rostova", departmentSlug: "design", specializationSlug: "interaction-design",
    focus: "Motion Prototyping", year: 2, status: "Active Student", email: "elena.rostova@campus.edu", enrolled: "Fall 2023",
    about: "Elena explores how motion communicates state in mobile interfaces and leads the campus prototyping club.",
    subjects: [
      { code: "DS-210", name: "Interaction Design Studio", credits: 4 },
      { code: "DS-225", name: "Motion for Interfaces", credits: 3 },
      { code: "DS-190", name: "Design Research Methods", credits: 3 },
    ],
    recordId: "1021-DS-ER", validated: "Oct 24, 2024", tone: "blue",
  },
  {
    id: "STU-1120", name: "Marcus Chen", departmentSlug: "business", specializationSlug: "fintech",
    focus: "Payment Systems", year: 4, status: "Active Student", email: "marcus.chen@campus.edu", enrolled: "Fall 2021",
    about: "Marcus studies payment infrastructure and is completing a capstone on cross-border settlement for small businesses.",
    subjects: [
      { code: "BU-410", name: "Financial Technology Capstone", credits: 5 },
      { code: "BU-385", name: "Digital Payments & Regulation", credits: 4 },
      { code: "BU-360", name: "Business Analytics", credits: 3.5 },
    ],
    recordId: "0877-BU-MC", validated: "Oct 24, 2024", tone: "orange",
  },
  {
    id: "STU-1155", name: "Priya Sharma", departmentSlug: "computer-science", specializationSlug: "web-development",
    focus: "Reactive UI Design", year: 1, status: "Active Student", email: "priya.sharma@campus.edu", enrolled: "Fall 2024",
    about: "Priya is a first-year student who builds interactive interfaces and is learning component-driven design.",
    subjects: [
      { code: "CS-101", name: "Introduction to Programming", credits: 4 },
      { code: "CS-120", name: "Web Fundamentals", credits: 3 },
      { code: "MA-110", name: "Discrete Mathematics", credits: 3.5 },
    ],
    recordId: "1190-CS-PS", validated: "Oct 24, 2024", tone: "blue",
  },
  {
    id: "STU-1201", name: "Lucas Dubois", departmentSlug: "design", specializationSlug: "ux-research",
    focus: "Usability Testing", year: 3, status: "Active Student", email: "lucas.dubois@campus.edu", enrolled: "Fall 2022",
    about: "Lucas runs usability studies for student-built apps and is interested in accessibility research.",
    subjects: [
      { code: "DS-310", name: "Usability Testing Lab", credits: 4 },
      { code: "DS-322", name: "Accessible Design", credits: 3 },
      { code: "DS-305", name: "Qualitative Research", credits: 3.5 },
    ],
    recordId: "0952-DS-LD", validated: "Oct 24, 2024", tone: "red",
  },
  {
    id: "STU-1244", name: "Maya Lin", departmentSlug: "business", specializationSlug: "strategic-management",
    focus: "Organizational Strategy", year: 2, status: "Active Student", email: "maya.lin@campus.edu", enrolled: "Fall 2023",
    about: "Maya studies how teams make strategic decisions and coordinates the business society mentoring program.",
    subjects: [
      { code: "BU-220", name: "Strategic Management", credits: 4 },
      { code: "BU-235", name: "Organizational Behavior", credits: 3 },
      { code: "BU-210", name: "Managerial Accounting", credits: 3.5 },
    ],
    recordId: "1033-BU-ML", validated: "Oct 24, 2024", tone: "blue",
  },
  {
    id: "STU-1310", name: "Tariq Al-Mansoor", departmentSlug: "computer-science", specializationSlug: "web-development",
    focus: "Distributed Web Systems", year: 4, status: "Active Student", email: "tariq.almansoor@campus.edu", enrolled: "Fall 2021",
    about: "Tariq is finishing a capstone on scalable web APIs and works as a teaching assistant for operating systems.",
    subjects: [
      { code: "CS-450", name: "Distributed Web Systems", credits: 4 },
      { code: "CS-440", name: "Software Engineering Capstone", credits: 5 },
      { code: "CS-360", name: "Operating Systems", credits: 4 },
    ],
    recordId: "0841-CS-TA", validated: "Oct 24, 2024", tone: "blue",
  },
  {
    id: "STU-1388", name: "Sophia Müller", departmentSlug: "computer-science", specializationSlug: "web-development",
    focus: "Progressive Web Apps", year: 2, status: "Active Student", email: "sophia.mueller@campus.edu", enrolled: "Fall 2023",
    about: "Sophia builds offline-first web apps and contributes to open-source tooling for frontend developers.",
    subjects: [
      { code: "CS-210", name: "Data Structures", credits: 4 },
      { code: "CS-240", name: "Frontend Engineering", credits: 3.5 },
      { code: "CS-225", name: "Databases", credits: 3 },
    ],
    recordId: "1066-CS-SM", validated: "Oct 24, 2024", tone: "blue",
  },
];

const ordinal = ["", "1st", "2nd", "3rd", "4th"];
const standing = ["", "Freshman", "Sophomore", "Junior", "Senior"];

export const yearLabel = (y: number) => `${ordinal[y]} Year`;
export const yearLabelLong = (y: number) => `${ordinal[y]} Year (${standing[y]})`;
export const initials = (name: string) =>
  name.split(" ").map((p) => p[0]).slice(0, 2).join("").toUpperCase();

export const getStudent = (id: string) => students.find((s) => s.id.toLowerCase() === id.toLowerCase());
export const getDepartment = (slug: string) => departments.find((d) => d.slug === slug);
export const getSpecialization = (deptSlug: string, specSlug: string) =>
  getDepartment(deptSlug)?.specializations.find((s) => s.slug === specSlug);
