export default function FounderSection({ owner }) {
  return (
    <div className="bg-white">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Photo Section */}
            <div className="relative">
              <div className="relative h-120 w-full sm:h-150 md:h-120 lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                {owner.photo ? (
                  <img
                    src="/owner.jpg"
                    alt="cristina"
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#fdc835] to-yellow-600 flex items-center justify-center">
                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                      <svg
                        className="w-16 h-16 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-black mb-2">
                  Ma. Cristina Salvador
                </h1>
                <p className="text-xl text-[#fdc835] font-semibold mb-6">
                  FOUNDER | CEO
                </p>
              </div>

              <div className="prose prose-lg text-black">
                <p className="leading-relaxed text-black">{owner.story}</p>
              </div>

              {/* Vision */}
              {owner.vision && (
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#fdc835]">
                  <h3 className="text-lg font-semibold text-black mb-3">
                    Our Vision
                  </h3>
                  <p className="text-black italic">
                    &ldquo;{owner.vision}&rdquo;
                  </p>
                </div>
              )}

              {/* Achievements */}
              {owner.achievements && owner.achievements.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-black mb-4">
                    Key Achievements
                  </h3>
                  <div className="space-y-3">
                    {owner.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-[#fdc835] rounded-full flex items-center justify-center mt-0.5">
                          <svg
                            className="w-3 h-3 text-black"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="ml-3 text-black">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Contact CTA */}
              <div className="pt-6">
                <a
                  href="#contact"
                  className="inline-block bg-[#fdc835] text-black px-8 py-4 rounded-xl font-semibold hover:bg-yellow-500 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Background Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <svg
              className="w-12 h-12 text-[#fdc835] mx-auto mb-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-xl lg:text-2xl text-black italic mb-6">
              "Success in business requires training, discipline, and hard work.
              But if you're not frightened by these things, the opportunities
              are just as great today as they ever were."
            </blockquote>
            <p className="text-black font-semibold">
              - Ma. Cristina De Jesus-Salvador, CPA
            </p>
          </div>
        </div>
      </section>
      {/* Mission Section */}

      {/* Education & Certifications */}
      {owner.education && owner.education.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-12 text-center">
              Education & Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {owner.education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-[#fdc835]"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-[#fdc835] rounded-full mr-4">
                      <svg
                        className="w-6 h-6 text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        />
                      </svg>
                    </div>
                    <span className="text-[#fdc835] font-semibold">
                      {edu.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-black mb-1">{edu.institution}</p>
                  <span className="inline-block px-3 py-1 bg-[#fdc835] text-black text-sm rounded-full font-semibold">
                    {edu.honor}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Professional Journey Timeline */}
      {owner.timeline && owner.timeline.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-12 text-center">
              Professional Journey
            </h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#fdc835] hidden lg:block"></div>

              <div className="space-y-8">
                {owner.timeline.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    } flex-col`}
                  >
                    {/* Timeline dot */}
                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#fdc835] rounded-full border-4 border-white shadow-lg z-10"></div>

                    {/* Content card */}
                    <div
                      className={`w-full lg:w-5/12 ${
                        index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"
                      }`}
                    >
                      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                        <span className="inline-block px-3 py-1 bg-[#fdc835] text-black text-sm rounded-full font-semibold mb-3">
                          {item.year}
                        </span>
                        <h3 className="text-xl font-bold text-black mb-1">
                          {item.title}
                        </h3>
                        <p className="text-[#fdc835] font-semibold mb-3">
                          {item.company}
                        </p>
                        <p className="text-black leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Community Involvement */}
      {owner.community && owner.community.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-12 text-center">
              Community Involvement
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {owner.community.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-[#fdc835] flex items-start"
                >
                  <div className="flex-shrink-0 mr-4 mt-1">
                    <div className="w-10 h-10 bg-[#fdc835] rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="text-black leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonial/Quote Section */}

      {/* Call to Action */}
    </div>
  );
}
