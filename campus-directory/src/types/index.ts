export type Tone = "blue" | "orange" | "red";

export interface Specialization {
  slug: string;
  name: string;
  code: string;
  description: string;
  lead: string;
  lab: string;
}

export interface Department {
  slug: string;
  name: string;
  icon: string;
  description: string;
  enrolled: number;
  specializations: Specialization[];
}

export interface Subject {
  code: string;
  name: string;
  credits: number;
}

export interface Student {
  id: string;
  name: string;
  departmentSlug: string;
  specializationSlug: string;
  focus: string;
  year: 1 | 2 | 3 | 4;
  status: "Active Student";
  email: string;
  enrolled: string;
  about: string;
  subjects: Subject[];
  recordId: string;
  validated: string;
  tone: Tone;
}
