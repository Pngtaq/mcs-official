import FounderSection from "./FounderSection";
import Navigation from "../Navigation";
import Footer from "../Footer";

const ownerData = {
  name: "MA. CRISTINA DE JESUS-SALVADOR",
  title: "CPA - Founder & CEO",
  story:
    "Welcome to MCS Accounting & Printing Services. As a Certified Public Accountant, I founded this company with a clear mission to provide comprehensive accounting and business solutions.",
  vision:
    "To be the most trusted accounting and business services partner in Bulacan.",
  achievements: [
    "Certified Public Accountant (CPA) with 15+ years of professional experience",
    "Successfully helped register and establish 100+ businesses in Marilao and Bocaue areas",
    "Processed over 200+ tax returns ensuring 100% compliance with BIR regulations",
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
