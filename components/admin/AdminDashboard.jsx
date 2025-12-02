import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { signOut } from "../../services/authService";
import { useNews } from "../../hooks/useNews";
import { deleteNews } from "../../services/newsService";
import NewsForm from "./NewsForm";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const { news, loading: newsLoading, refreshNews } = useNews();
  const [showForm, setShowForm] = useState(false);
  const [editingNews, setEditingNews] = useState(null);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/admin/login");
    }
  }, [user, authLoading, navigate]);

  const handleSignOut = async () => {
    await signOut();
    navigate("/admin/login");
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this news?")) {
      const { error } = await deleteNews(id);
      if (!error) {
        refreshNews();
      } else {
        alert("Error deleting news: " + error);
      }
    }
  };

  const handleEdit = (newsItem) => {
    setEditingNews(newsItem);
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditingNews(null);
    refreshNews();
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-[#212121] flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#212121]">
      {/* Header */}
      <div className="bg-[#2a2a2a] border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">News Dashboard</h1>
            <div className="flex gap-4">
              <button
                onClick={() => navigate("/")}
                className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
              >
                View Site
              </button>
              <button
                onClick={handleSignOut}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <button
            onClick={() => setShowForm(true)}
            className="px-6 py-3 bg-[#fdc835] text-black font-semibold rounded-lg hover:bg-[#fdb835] transition-colors"
          >
            + Create New Post
          </button>
        </div>

        {/* News List */}
        {newsLoading ? (
          <div className="text-center py-12">
            <div className="text-white text-xl">Loading news...</div>
          </div>
        ) : (
          <div className="grid gap-4">
            {news.map((item) => (
              <div
                key={item.id}
                className="bg-[#2a2a2a] rounded-lg p-6 border border-gray-800"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 mb-2 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex gap-4 text-sm text-gray-500">
                      <span>{item.category}</span>
                      <span>
                        {new Date(item.created_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <button
                      onClick={() => handleEdit(item)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {news.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                No news posts yet. Create your first post!
              </div>
            )}
          </div>
        )}
      </div>

      {/* News Form Modal */}
      {showForm && (
        <NewsForm newsItem={editingNews} onClose={handleFormClose} />
      )}
    </div>
  );
};

export default AdminDashboard;
