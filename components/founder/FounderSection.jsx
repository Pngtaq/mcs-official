export default function FounderSection({ owner }) {
  return (
    <section className="py-16 bg-gradient-to-br bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <div className="relative">
            <div className="relative h-96 w-full lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              {owner.photo ? (
                <img
                  src="/owner.jpg"
                  alt="cristina"
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
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

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#fdc835] rounded-full opacity-60" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-yellow-300 rounded-full opacity-40" />
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                Ma. Cristina Salvador
              </h1>
              <p className="text-xl text-[#fdc835] font-semibold mb-6">
                FOUNDER | CEO
              </p>
            </div>

            <div className="prose prose-lg text-gray-700">
              <p className="leading-relaxed text-gray-700">{owner.story}</p>
            </div>

            {/* Vision */}
            {owner.vision && (
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#fdc835]">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Our Vision
                </h3>
                <p className="text-gray-700 italic">
                  &ldquo;{owner.vision}&rdquo;
                </p>
              </div>
            )}

            {/* Achievements */}
            {owner.achievements && owner.achievements.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Key Achievements
                </h3>
                <div className="space-y-3">
                  {owner.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-[#fdc835] to-yellow-600 rounded-full flex items-center justify-center mt-0.5">
                        <svg
                          className="w-3 h-3 text-white"
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
                      <p className="ml-3 text-gray-700">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Contact CTA */}
            <div className="pt-6">
              <button className="bg-gradient-to-r from-[#fdc835] to-yellow-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
