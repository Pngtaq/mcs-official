import { useState, useEffect } from "react";
import {
  createNews,
  updateNews,
  uploadNewsImage,
} from "../../services/newsService";
import { newsCategories } from "../../data/newsData";

const NewsForm = ({ newsItem, onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    category: newsCategories[0] || "Tax Updates",
    image: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (newsItem) {
      setFormData({
        title: newsItem.title || "",
        description: newsItem.description || "",
        content: newsItem.content || "",
        category: newsItem.category || newsCategories[0],
        image: newsItem.image || "",
      });
    }
  }, [newsItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      let imageUrl = formData.image;

      // Upload new image if selected
      if (imageFile) {
        const { data: uploadedUrl, error: uploadError } = await uploadNewsImage(
          imageFile
        );
        if (uploadError) throw new Error(uploadError);
        imageUrl = uploadedUrl;
      }

      const newsData = {
        ...formData,
        image: imageUrl,
      };

      let result;
      if (newsItem) {
        // Update existing news
        result = await updateNews(newsItem.id, newsData);
      } else {
        // Create new news
        result = await createNews(newsData);
      }

      if (result.error) throw new Error(result.error);

      onClose();
    } catch (err) {
      setError(err.message || "An error occurred");
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#2a2a2a] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">
              {newsItem ? "Edit News" : "Create New News"}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500 rounded-lg text-red-500 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#212121] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#fdc835]"
                placeholder="Enter news title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Category *
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#212121] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#fdc835]"
              >
                {newsCategories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="3"
                className="w-full px-4 py-3 bg-[#212121] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#fdc835] resize-none"
                placeholder="Brief description (shown in news list)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Content
              </label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                rows="6"
                className="w-full px-4 py-3 bg-[#212121] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#fdc835] resize-none"
                placeholder="Full article content (optional)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full px-4 py-3 bg-[#212121] border border-gray-700 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[#fdc835] file:text-black hover:file:bg-[#fdb835] file:cursor-pointer"
              />
              {formData.image && !imageFile && (
                <p className="mt-2 text-sm text-gray-400">
                  Current image: {formData.image}
                </p>
              )}
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 py-3 bg-[#fdc835] text-black font-semibold rounded-lg hover:bg-[#fdb835] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Saving..." : newsItem ? "Update" : "Create"}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsForm;
