// Mock data for services - separated from component logic
export const servicesData = {
  "Sole Proprietorship": {
    title: "Sole Proprietorship Registration",
    description:
      "Start your business journey with ease. We handle all the paperwork and requirements for registering your sole proprietorship business with DTI, BIR, and local government units.",
    features: [
      "DTI Business Name Registration",
      "BIR Registration and TIN Application",
      "Barangay Business Permit Processing",
      "Mayor's Permit Assistance",
      "Complete Documentation Support",
    ],
    price: "Starting at ₱5,000",
    duration: "3-5 business days",
  },
  Professionals: {
    title: "Professional Practice Registration",
    description:
      "Specialized registration services for licensed professionals starting their own practice. We ensure compliance with PRC requirements and proper tax registration.",
    features: [
      "PRC Professional Registration Certificate",
      "BIR Professional Tax Receipt (PTR)",
      "Professional Tax Registration",
      "Books of Accounts Setup",
      "Quarterly Tax Filing Assistance",
    ],
    price: "Starting at ₱7,500",
    duration: "5-7 business days",
  },
  Corporation: {
    title: "Corporation Formation & Registration",
    description:
      "Establish your corporation with our comprehensive formation services. We handle SEC registration, tax compliance, and all legal requirements for your business entity.",
    features: [
      "SEC Articles of Incorporation Filing",
      "Corporate By-Laws Preparation",
      "BIR Corporate Registration (TIN)",
      "Stock and Transfer Book Setup",
      "Annual Corporate Compliance Advisory",
    ],
    price: "Starting at ₱25,000",
    duration: "15-20 business days",
  },
  Partnership: {
    title: "Partnership Registration Services",
    description:
      "Form your partnership business with professional guidance. We assist in drafting partnership agreements and completing all registration requirements.",
    features: [
      "SEC Partnership Registration",
      "Partnership Agreement Drafting",
      "BIR Partnership Tax Registration",
      "Local Government Permits",
      "Partnership Books Setup",
    ],
    price: "Starting at ₱15,000",
    duration: "10-15 business days",
  },
  "Financial Consultation": {
    title: "Expert Financial Consultation",
    description:
      "Get professional advice on managing your business finances, tax planning, and strategic financial decisions from our experienced CPAs.",
    features: [
      "One-on-One CPA Consultation",
      "Financial Health Assessment",
      "Tax Optimization Strategies",
      "Business Growth Planning",
      "Cash Flow Management Advice",
    ],
    price: "₱2,500 per hour",
    duration: "By appointment",
  },
  "Financial Planning": {
    title: "Comprehensive Financial Planning",
    description:
      "Plan for your business's financial future with our strategic planning services. We help you set goals, create budgets, and build sustainable financial strategies.",
    features: [
      "Annual Budget Preparation",
      "Financial Forecasting",
      "Investment Planning Guidance",
      "Retirement & Succession Planning",
      "Risk Management Assessment",
    ],
    price: "Starting at ₱10,000",
    duration: "Customized timeline",
  },
};

// Get list of service names
export const getServiceNames = () => Object.keys(servicesData);

// Get specific service data
export const getServiceData = (serviceName) => servicesData[serviceName];
