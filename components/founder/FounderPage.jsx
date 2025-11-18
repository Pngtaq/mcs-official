import FounderSection from "./FounderSection";
import Navigation from "../Navigation";
import Footer from "../Footer";

const ownerData = {
  name: "MA. CRISTINA DE JESUS-SALVADOR",
  title: "CPA - Founder & CEO",
  story:
    "Welcome to MCS Accounting & Printing Services. As a Certified Public Accountant, I founded this company with a clear mission to provide comprehensive accounting and business solutions. My journey in the field of accounting began with a passion for helping businesses succeed through sound financial management and strategic planning.",
  backgroundStory:
    "After graduating with honors and passing the CPA board examination, I gained extensive experience working with both large corporations and small businesses. This diverse exposure taught me the unique challenges faced by businesses of all sizes. In 2014, I decided to establish MCS Accounting & Printing Services to provide personalized, professional services that cater to the specific needs of businesses in Bulacan and surrounding areas.",
  vision:
    "To be the most trusted accounting and business services partner in Bulacan, empowering entrepreneurs and businesses to achieve financial excellence and sustainable growth.",
  mission:
    "Our mission is to deliver exceptional accounting, tax, and business registration services with integrity, precision, and personalized attention. We strive to simplify complex financial processes and provide strategic guidance that helps our clients make informed decisions and achieve their business goals.",
  achievements: [
    "Certified Public Accountant (CPA) with 15+ years of professional experience",
    "Successfully helped register and establish 100+ businesses in Marilao and Bocaue areas",
    "Processed over 200+ tax returns ensuring 100% compliance with BIR regulations",
    "Maintained 100% client retention rate for the past 5 years",
    "Recognized as Top Performing Accounting Firm in Bulacan",
    "Provided financial consultation to 50+ startups, helping them establish strong financial foundations",
  ],
  education: [
    {
      degree: "Bachelor of Science in Accountancy",
      institution: "University of the Philippines",
      year: "2006",
      honor: "Cum Laude",
    },
    {
      degree: "Certified Public Accountant (CPA)",
      institution: "Professional Regulation Commission",
      year: "2007",
      honor: "Board Passer",
    },
  ],
  timeline: [
    {
      year: "2007-2010",
      title: "Junior Accountant",
      company: "SGV & Co.",
      description:
        "Gained foundational experience in auditing and financial reporting for large corporations.",
    },
    {
      year: "2010-2014",
      title: "Senior Accountant",
      company: "Ayala Corporation",
      description:
        "Managed complex financial portfolios and led tax compliance initiatives.",
    },
    {
      year: "2014",
      title: "Founder & CEO",
      company: "MCS Accounting & Printing Services",
      description:
        "Established the company to provide personalized accounting solutions to SMEs in Bulacan.",
    },
    {
      year: "2014-Present",
      title: "Business Growth",
      company: "MCS Accounting & Printing Services",
      description:
        "Expanded services to include business registration, tax planning, and printing services, serving 500+ clients.",
    },
  ],
  community: [
    "Regular speaker at local business seminars on tax compliance and financial management",
    "Volunteer financial advisor for small business development programs",
    "Active member of Philippine Institute of Certified Public Accountants (PICPA)",
    "Conducts free financial literacy workshops for aspiring entrepreneurs",
  ],
  photo: "/owner.jpg",
};

export default function Owner() {
  return (
    <div className="min-h-screen ">
      <Navigation />
      <FounderSection owner={ownerData} />
      <Footer />
    </div>
  );
}
