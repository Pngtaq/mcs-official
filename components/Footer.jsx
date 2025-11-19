import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="contact" className="text-white bg-[#212121]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold" style={{ color: "#fdc835" }}>
              MA. CRISTINA DE JESUS-SALVADOR, CPA
            </h3>
            <h4 className="text-lg font-medium" style={{ color: "#fdc835" }}>
              ACCOUNTING & PRINTING SERVICES
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner for comprehensive accounting, tax, and
              business services. Professional excellence with personalized
              attention for over a decade.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/mcsaccountingandprintingservices"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full transition-colors duration-300 hover:opacity-80"
                style={{ backgroundColor: "#fdc835" }}
                aria-label="Facebook - MCS Accounting SVCS"
              >
                <svg
                  className="w-5 h-5 text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="mailto:macristinasalvador0926@gmail.com"
                className="p-3 rounded-full transition-colors duration-300 hover:opacity-80"
                style={{ backgroundColor: "#fdc835" }}
                aria-label="Email"
              >
                <svg
                  className="w-5 h-5 text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819v.273L12 8.773l6.545-4.679V3.82h3.819c.904 0 1.636.733 1.636 1.637z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              <Link
                to="/"
                className="block text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm"
              >
                Home
              </Link>
              <Link
                to="/services"
                className="block text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm"
              >
                Services
              </Link>
              <Link
                to="/team"
                className="block text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm"
              >
                Our Team
              </Link>
              <Link
                to="/founder"
                className="block text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm"
              >
                Founder
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-4">
              {/* Marilao Branch */}
              <div>
                <h5
                  className="font-medium mb-2 text-sm"
                  style={{ color: "#fdc835" }}
                >
                  📍 Marilao Branch
                </h5>
                <div className="space-y-1 text-sm text-gray-300">
                  <p className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 flex-shrink-0"
                      style={{ color: "#fdc835" }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <a
                      href="tel:09499947142"
                      className="hover:opacity-80 transition-colors"
                      style={{ color: "#fdc835" }}
                    >
                      Smart: 0949-994-7142
                    </a>
                  </p>
                  <p className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 flex-shrink-0"
                      style={{ color: "#fdc835" }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <a
                      href="tel:09951543049"
                      className="hover:opacity-80 transition-colors"
                      style={{ color: "#fdc835" }}
                    >
                      Globe: 0995-154-3049
                    </a>
                  </p>
                </div>
              </div>

              {/* Bocaue Branch */}
              <div>
                <h5
                  className="font-medium mb-2 text-sm"
                  style={{ color: "#fdc835" }}
                >
                  📍 Bocaue Branch
                </h5>
                <div className="space-y-1 text-sm text-gray-300">
                  <p className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 flex-shrink-0"
                      style={{ color: "#fdc835" }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <a
                      href="tel:09399182512"
                      className="hover:opacity-80 transition-colors"
                      style={{ color: "#fdc835" }}
                    >
                      Smart: 0939-918-2512
                    </a>
                  </p>
                  <p className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 flex-shrink-0"
                      style={{ color: "#fdc835" }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <a
                      href="tel:09772042718"
                      className="hover:opacity-80 transition-colors"
                      style={{ color: "#fdc835" }}
                    >
                      Globe: 0977-204-2718
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center text-sm text-gray-300">
                <svg
                  className="w-4 h-4 mr-2 flex-shrink-0"
                  style={{ color: "#fdc835" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:macristinasalvador0926@gmail.com"
                  className="hover:opacity-80 transition-colors break-all"
                  style={{ color: "#fdc835" }}
                >
                  📧 macristinasalvador0926@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} MA. CRISTINA DE JESUS-SALVADOR, CPA.
              All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:opacity-80 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:opacity-80 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
