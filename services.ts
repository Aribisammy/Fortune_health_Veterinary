import {
  Activity,
  Dna,
  HeartPulse,
  PawPrint,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Veterinary Consultation",
    description:
      "Professional assessment and guidance for pets and other animals when you have a health concern.",
    icon: Stethoscope,
  },
  {
    title: "Vaccination & Prevention",
    description:
      "Preventive healthcare support to help protect animals against important infectious diseases.",
    icon: ShieldCheck,
  },
  {
    title: "Deworming & Parasite Control",
    description:
      "Support for routine parasite-control programmes and practical animal-health prevention.",
    icon: Activity,
  },
  {
    title: "Disease Diagnosis & Treatment",
    description:
      "Clinical veterinary support for animals showing signs of illness, with appropriate professional assessment.",
    icon: HeartPulse,
  },
  {
    title: "Reproductive Services",
    description:
      "Veterinary reproductive support, including breeding-related assessment and reproductive care.",
    icon: Dna,
  },
  {
    title: "Farm & Livestock Healthcare",
    description:
      "Practical veterinary support for poultry, sheep, goats, cattle and other farm animals.",
    icon: PawPrint,
  },
];
