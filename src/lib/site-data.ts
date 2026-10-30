import army from "@/assets/army.jpg";
import airforce from "@/assets/airforce.jpg";
import navy from "@/assets/navy.jpg";
import hero from "@/assets/hero.jpg";
import {
  Landmark, HeartPulse, Briefcase, Scale, Users, CalendarHeart,
} from "lucide-react";

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
] as const;

export const branches = [
  { title: "Indian Army Veterans", text: "Serving with honor on land, protecting our borders and communities", img: army },
  { title: "Indian Air Force Veterans", text: "Guarding our skies with courage and dedication", img: airforce },
  { title: "Indian Navy Veterans", text: "Protecting our maritime interests with pride and valor", img: navy },
];

// PLACEHOLDER numbers — replace with real figures
export const stats = [
  { value: 5200, suffix: "+", label: "Veterans Supported" },
  { value: 1800, suffix: "+", label: "Families Helped" },
  { value: 240, suffix: "", label: "Events Held" },
  { value: 350, suffix: "+", label: "Volunteers" },
];

export const services = [
  { icon: Landmark, title: "Pension & Welfare Guidance", text: "Help with pension claims, ECHS, CSD and welfare scheme paperwork." },
  { icon: HeartPulse, title: "Medical Support", text: "Guidance on treatment, hospital referrals and health camps." },
  { icon: Briefcase, title: "Employment Assistance", text: "Resettlement, skill training and job placement for second careers." },
  { icon: Scale, title: "Legal Aid", text: "Free counsel on property, pension and service-related disputes." },
  { icon: Users, title: "Family & Widow Support", text: "Care, education aid and dignity for families of the fallen." },
  { icon: CalendarHeart, title: "Community Events", text: "Reunions, remembrance days and gatherings that keep the bond alive." },
];

// PLACEHOLDER testimonials — replace with real quotes
export const testimonials = [
  { quote: "After retirement my pension was stuck for two years. The Foundation sorted it in weeks. I felt the regiment still had my back.", name: "Hav. Ramesh Singh (Retd.)", rank: "Indian Army, 21 Years" },
  { quote: "When my husband passed, they helped me with every form and got my children scholarships. I will always be grateful.", name: "Smt. Kavita Nair", rank: "Wife of Late Sgt. Nair, IAF" },
  { quote: "Their job programme got me a security officer role within a month of leaving the Navy.", name: "PO Anil Deshmukh (Retd.)", rank: "Indian Navy, 15 Years" },
];

export const gallery = [
  { src: hero, alt: "Veterans saluting the national flag at sunset" },
  { src: army, alt: "Decorated Indian Army veteran in uniform" },
  { src: airforce, alt: "Indian Air Force jets flying in formation" },
  { src: navy, alt: "Indian Navy sailors on the deck of a warship" },
];

export const contactInfo = {
  // PLACEHOLDER contact details — replace with real ones
  address: "Sainik Bhawan, Sector 12, New Delhi 110001",
  phone: "+91 98765 43210",
  email: "contact@exservicemenfoundation.org",
};
