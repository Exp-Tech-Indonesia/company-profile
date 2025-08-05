import {
  FiBarChart2,
  FiBriefcase,
  FiDatabase,
  FiUsers,
  FiTarget,
  FiTrendingUp,
  FiMap,
  FiLayers,
  FiShield,
} from "react-icons/fi";

import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
  {
    title: "IT Consulting",
    description:
      "We map your business goals to a clear technology roadmap, ensuring every investment delivers maximum ROI.",
    bullets: [
      {
        title: "Technology Roadmapping",
        description:
          "Align IT strategy with your business vision, ensuring every system and tool supports long-term growth.",
        icon: <FiMap size={26} />,
      },
      {
        title: "System Architecture & Integration",
        description:
          "Design scalable architectures and ensure seamless integration across all your digital platforms.",
        icon: <FiLayers size={26} />,
      },
      {
        title: "Risk & Compliance Advisory",
        description:
          "Mitigate risks and meet regulatory requirements with expert guidance on security and compliance.",
        icon: <FiShield size={26} />,
      },
    ],
    imageSrc: "/images/mockup-1.webp",
  },
  {
    title: "ERP Solutions",
    description:
      "Unify your business operations with powerful ERP systems. We integrate finance, supply chain, sales, and manufacturing into a single platform for a 360-degree view of your operations—driving efficiency, insight, and growth.",
    bullets: [
      {
        title: "Centralized Data Management",
        description:
          "Eliminate data silos by connecting finance, inventory, and operations into one source of truth.",
        icon: <FiDatabase size={26} />,
      },
      {
        title: "Process Automation",
        description:
          "Automate repetitive workflows to reduce errors and improve operational efficiency.",
        icon: <FiTrendingUp size={26} />,
      },
      {
        title: "Real-Time Insights",
        description:
          "Gain actionable analytics to make data-driven decisions and forecast business performance.",
        icon: <FiBarChart2 size={26} />,
      },
    ],
    imageSrc: "/images/mockup-1.webp",
  },
  {
    title: "HRIS Solutions",
    description:
      "Manage your people smarter with modern HRIS solutions. From recruitment and payroll to performance and analytics, we help you optimize the employee experience and unlock workforce productivity.",
    bullets: [
      {
        title: "Streamlined Recruitment",
        description:
          "Simplify hiring with integrated applicant tracking and onboarding tools.",
        icon: <FiTarget size={26} />,
      },
      {
        title: "Employee Lifecycle Management",
        description:
          "Manage payroll, benefits, and performance reviews seamlessly in one platform.",
        icon: <FiUsers size={26} />,
      },
      {
        title: "Workforce Analytics",
        description:
          "Leverage data-driven insights to improve retention, engagement, and productivity.",
        icon: <FiBriefcase size={26} />,
      },
    ],
    imageSrc: "/images/mockup-2.webp",
  },
];
