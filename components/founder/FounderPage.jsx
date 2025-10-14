import FounderSection from "./FounderSection";

const ownerData = {
  name: "MA. CRISTINA DE JESUS-SALVADOR",
  title: "CPA - Founder & CEO",
  story: `Welcome to MCS Accounting & Printing Services. As a Certified Public Accountant, I founded this company with a clear mission: to provide comprehensive accounting and business solutions that help enterprises of all sizes achieve compliance and growth.

  With over 15 years of experience in accounting and business consulting, I have witnessed the challenges that businesses face in navigating complex regulatory requirements, tax compliance, and financial management. From business registration to tax filing, from payroll services to financial reporting, every business needs reliable professional support.

  That's why I established MCS Accounting Services with branches in Marilao and Bocaue, bringing professional accounting services closer to the business community. Our team of dedicated specialists works diligently to ensure your business remains compliant while focusing on sustainable growth.

  We believe in building lasting partnerships with our clients, providing not just services but trusted advisory support. Every business we serve is an opportunity to contribute to the local economy's growth and success.`,
  vision:
    "To be the most trusted accounting and business services partner in Bulacan, empowering businesses with professional expertise and reliable support for their growth and compliance needs.",
  achievements: [
    "Certified Public Accountant (CPA) with 15+ years of professional experience",
    "Successfully helped register and establish 100+ businesses in Marilao and Bocaue areas",
    "Processed over 200+ tax returns ensuring 100% compliance with BIR regulations",
    "Established two branch locations to better serve the local business community",
    "Specialized in comprehensive land transfer documentation and legal processing",
    "Trusted advisor for sole proprietorships, partnerships, and corporations",
  ],
  photo: "/owner.jpg",
};

export default function Owner() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Main Owner Section */}
      <FounderSection owner={ownerData} />

      {/* Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                My Philosophy
              </h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  Success in accounting isn&apos;t just about numbers and
                  compliance. It&apos;s about understanding that behind every
                  business are entrepreneurs with dreams, families depending on
                  success, and communities that benefit from thriving
                  enterprises.
                </p>
                <p className="text-lg leading-relaxed">
                  As a CPA, I believe in providing more than just services - I
                  offer partnership, guidance, and peace of mind. Every business
                  registration, tax filing, and financial consultation is an
                  opportunity to help someone achieve their entrepreneurial
                  goals while staying compliant and financially healthy.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Professional Excellence
                </h3>
                <p className="text-gray-700">
                  Maintaining the highest standards of accounting practice and
                  continuous professional development to serve our clients
                  better.
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Trust & Integrity
                </h3>
                <p className="text-gray-700">
                  Building lasting relationships through transparency, ethical
                  practice, and reliable service that businesses can depend on.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Community Focus
                </h3>
                <p className="text-gray-700">
                  Supporting local businesses in Marilao and Bocaue with
                  accessible, professional accounting services that drive
                  economic growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Community Commitment
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Beyond professional services, I am committed to supporting the
              local business community and helping entrepreneurs succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Business Advocacy
              </h3>
              <p className="text-gray-600">
                Actively supporting local business development and providing
                guidance to new entrepreneurs in the community
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Professional Development
              </h3>
              <p className="text-gray-600">
                Continuously updating knowledge of tax laws, accounting
                standards, and business regulations to serve clients better
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Client Partnership
              </h3>
              <p className="text-gray-600">
                Building long-term relationships with clients, providing trusted
                advice and support for their business growth
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Let&apos;s Connect
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ready to discuss your accounting and business needs? Contact MCS
            Accounting Services today for professional consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0949-994-7142"
                className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-200 transform hover:scale-105"
              >
                📞 Marilao: 0949-994-7142
              </a>
              <a
                href="tel:0939-918-2512"
                className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                📞 Bocaue: 0939-918-2512
              </a>
            </div>
          </div>
          <div className="mt-6">
            <a
              href="mailto:macristinasalvador0926@gmail.com"
              className="text-blue-100 hover:text-white transition-colors text-lg"
            >
              📧 macristinasalvador0926@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
