import { useNavigate } from "react-router-dom";

const NewsCard = ({ news, formatDate }) => {
  const navigate = useNavigate();

  const handleReadMore = (newsId) => {
    navigate(`/news/${newsId}`);
  };

  return (
    <div className="bg-[#2a2a2a] rounded-2xl shadow-lg overflow-hidden border border-gray-800 hover:shadow-xl transition-shadow duration-300">
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] lg:grid-cols-[400px_1fr] md:h-70">
        {/* Image Section */}
        <div className="relative h-64 md:h-80 bg-gradient-to-br from-gray-200 to-gray-300">
          {news.image ? (
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-full object-cover object-center"
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
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-8 flex flex-col justify-center">
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            {news.title}
          </h2>

          {/* Category Badge */}
          <span className="inline-block w-fit px-3 py-1 bg-[#fdc835]/10 text-[#fdc835] text-xs font-semibold rounded-full mb-3">
            {news.category}
          </span>

          {/* Description */}
          <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">
            {news.description}
          </p>

          {/* Date and Read More */}
          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-500 text-sm">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>{formatDate(news.date)}</span>
            </div>

            {/* Read More Button */}
            <button
              onClick={() => handleReadMore(news.id)}
              className="inline-flex items-center gap-2 px-4 py-2 text-white hover:scale-105 rounded-lg transition-all duration-300 active:scale-95"
            >
              Read More
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
