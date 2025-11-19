const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  onPrevious,
  onNext,
}) => {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-12 flex items-center justify-center gap-2">
      {/* Previous Button */}
      <button
        onClick={onPrevious}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-lg border border-gray-500 text-white font-medium hover:bg-gray-50 hover:text-black disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Previous
      </button>

      {/* Page Numbers */}
      <div className="flex gap-2">
        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;
          return (
            <button
              key={pageNumber}
              onClick={() => onPageChange(pageNumber)}
              className={`w-10 h-10 rounded-lg font-medium transition-all ${
                currentPage === pageNumber
                  ? "bg-[#fdc835] text-black"
                  : "border border-gray-300 text-gray-500 hover:bg-gray-50"
              }`}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded-lg border border-gray-500 text-white font-medium hover:bg-gray-50 hover:text-black disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
