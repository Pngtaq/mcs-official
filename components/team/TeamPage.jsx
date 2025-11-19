import Navigation from "../Navigation";
import Footer from "../Footer";
import { teamData } from "../../data/teamData";

const TeamPage = () => {
  const filteredTeam = teamData;

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Team Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTeam.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100"
              >
                {/* Image Section */}
                <div className="relative h-90 bg-gradient-to-br from-gray-200 to-gray-300">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top "
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#fdc835] to-yellow-600 flex items-center justify-center">
                      <svg
                        className="w-24 h-24 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#fdc835] font-semibold mb-2">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {member.bio}
                  </p>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.slice(0, 3).map((specialty, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border border-gray-200"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredTeam.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No team members found.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeamPage;
