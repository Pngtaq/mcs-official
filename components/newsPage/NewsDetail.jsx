import { useParams, useNavigate } from "react-router-dom";
import Navigation from "../Navigation";
import Footer from "../Footer";
import { useNewsItem } from "../../hooks/useNews";
import { formatDate } from "../../utils/dateFormatter";

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { newsItem: news, loading, error } = useNewsItem(id);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#212121]">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-white text-xl">Loading...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#212121]">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-red-500 text-xl">Error: {error}</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!news) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            News Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The news article you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/news")}
            className="px-6 py-3 bg-[#fdc835] text-black font-semibold rounded-lg hover:bg-[#fdb835] transition-colors"
          >
            Back to News
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#212121]">
      <Navigation />

      {/* Header Section */}
      <section className="bg-gradient-to-br bg-[#212121] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate("/news")}
            className="inline-flex items-center gap-1 text-[#fdc835] hover:text-[#fdb835] mb-6 transition-colors "
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to News
          </button>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {news.title}
          </h1>
          <span className="inline-block px-3 py-1 bg-[#fdc835]/20 border border-[#fdc835]/40 rounded-full text-[#fdc835] text-xs font-semibold mb-4">
            {news.category}
          </span>
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
        </div>
      </section>

      {/* Content Section */}
      <article className="pb-16  bg-[#212121]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Image */}
          {news.image ? (
            <div className="mb-8 rounded-2xl overflow-hidden">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-96 object-cover"
                loading="lazy"
              />
            </div>
          ) : (
            <div className="mb-8 rounded-2xl overflow-hidden bg-gradient-to-br from-[#fdc835] to-yellow-600 h-96 flex items-center justify-center">
              <svg
                className="w-32 h-32 text-white"
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

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              {news.description}
            </p>

            {news.content && (
              <div className="text-gray-400 leading-relaxed space-y-4">
                {news.content.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            )}

            {!news.content && (
              <div className="text-gray-400 leading-relaxed space-y-4">
                <p>
                  This is detailed content for the news article. The full story
                  provides comprehensive information about{" "}
                  {news.title.toLowerCase()}.
                </p>
                <p>
                  Our team at MCS Accounting & Printing Services is committed to
                  keeping you informed about the latest developments in
                  accounting, tax regulations, and business services.
                </p>
                <p>
                  For more information or if you have any questions, please
                  don't hesitate to contact our office. We're here to help you
                  navigate these changes and ensure your business remains
                  compliant and successful.
                </p>
              </div>
            )}
          </div>

          {/* Back Button */}
          <div className="mt-12 pt-8 border-t border-gray-700 flex justify-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-1 text-[#fdc835] hover:text-[#fdb835] transition-colors text-xs font-semibold"
            >
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
              Back to Top
            </button>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default NewsDetail;
