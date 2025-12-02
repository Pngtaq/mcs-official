import Navigation from "../Navigation";
import Footer from "../Footer";
import { useState } from "react";
import { useNewsContext } from "../../contexts/NewsContext";
import { formatDate } from "../../utils/dateFormatter";
import NewsList from "./NewsList";
import Pagination from "./Pagination";

const NewsPage = () => {
  const { news, loading, error } = useNewsContext();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNews = news.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(news.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#212121]">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="relative">
            {/* Spinning circle loader */}
            <div className="w-16 h-16 border-4 border-[#fdc835]/30 border-t-[#fdc835] rounded-full animate-spin"></div>
            <p className="text-white text-center mt-4">Loading news...</p>
          </div>
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

  return (
    <div className="min-h-screen bg-[#212121]">
      <Navigation />

      {/* Header Section */}

      {/* News List Section */}
      <section className="py-16 bg-[#212121]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsList news={currentNews} formatDate={formatDate} />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            onPrevious={handlePrevious}
            onNext={handleNext}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsPage;
