import FounderSection from "./FounderSection";
import Navigation from "../Navigation";
import Footer from "../Footer";

const ownerData = {
  name: "MA. CRISTINA DE JESUS-SALVADOR",
  title: "CPA - Founder & Chairman",
  story:
    "Welcome to MCS Accounting & Printing Services. As a Certified Public Accountant, I founded this company with a clear mission to provide comprehensive accounting and business solutions. My journey in the field of accounting began with a passion for helping businesses succeed through sound financial management and strategic planning.",
  backgroundStory:
    "After graduating and passing the CPA board examination, I gained extensive experience working with both large corporations and small businesses. This diverse exposure taught me the unique challenges faced by businesses of all sizes. In 2015, I decided to establish MCS Accounting & Printing Services to provide personalized, professional services that cater to the specific needs of businesses in Region 3 and National Capital Region.",
  vision:
    "To be the most trusted accounting and business services partner in the Philippines, empowering entrepreneurs and businesses to achieve financial excellence and sustainable growth.",
  mission:
    "Our mission is to deliver exceptional accounting, tax, and business registration services with integrity, precision, and personalized attention. We strive to simplify complex financial processes and provide strategic guidance that helps our clients make informed decisions and achieve their business goals.",
  achievements: [
    "Certified Public Accountant (CPA) with 10+ years of professional experience",
    "Successfully helped register and establish 100+ businesses around Region 3 and National Capital Region",
    "Processed over 200+ tax returns ensuring 100% compliance with BIR regulations",
    "Maintained 100% client retention rate for the past 5 years",
    "Provided financial consultation to 50+ startups, helping them establish strong financial foundations",
  ],
  education: [
    {
      degree: "Bachelor of Science in Accountancy",
      institution: "Polytechnic University of the Philippines",
      year: "2012",
      honor: "",
    },
    {
      degree: "Licensed Certified Public Accountant (CPA)",
      institution: "Professional Regulation Commission",
      year: "2013",
      honor: "Board Passer",
    },
    {
      degree: "Accredited Practitioner",
      institution: "Board of Accountancy (BOA)",
      year: "",
      honor: "",
    },
    {
      degree: "Accredited Tax Professional",
      institution: "Bureau of Internal Revenue (BIR)",
      year: "",
      honor: "",
    },
  ],
  timeline: [
    {
      year: "2013-2015",
      title: "Junior Accountant",
      company: "Megaworld Corporation",
      description:
        "Gained foundational experience in accounting and financial management for real estate development.",
    },
    {
      year: "2015-2018",
      title: "BSS Analyst",
      company: "Nestle Business Services, Inc",
      description:
        "Managed business support services and enhanced financial processes for global operations.",
    },
    {
      year: "2015-Present",
      title: "Founder & Chairman",
      company: "MCS Accounting & Printing Services",
      description:
        "Established and grew the company to provide comprehensive accounting, tax, and business registration services.",
    },
  ],
  community: [
    "Vice President for Professional Development - Philippine Institute of Certified Public Accountants Bulacan Chapter",
    "Secretary - Association of Certified Public Accountants Bulacan Chapter",
    "Regular speaker at local business seminars on tax compliance and financial management",
    "Active advocate for professional development in the accounting industry",
  ],
  photo: "/owner.jpg",
};

export default function Owner() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <FounderSection owner={ownerData} />
      <Footer />
    </div>
  );
}
