import { createContext, useContext, useState, useEffect } from "react";
import { fetchNews } from "../services/newsService";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isCached, setIsCached] = useState(false);

  useEffect(() => {
    // Only fetch if not already cached
    if (!isCached) {
      loadNews();
    }
  }, [isCached]);

  const loadNews = async () => {
    setLoading(true);
    const { data, error } = await fetchNews();

    if (error) {
      setError(error);
    } else {
      setNews(data || []);
      setIsCached(true); // Mark as cached
    }
    setLoading(false);
  };

  const refreshNews = () => {
    setIsCached(false); // Reset cache
    loadNews();
  };

  return (
    <NewsContext.Provider value={{ news, loading, error, refreshNews }}>
      {children}
    </NewsContext.Provider>
  );
};

export const useNewsContext = () => {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error("useNewsContext must be used within NewsProvider");
  }
  return context;
};
