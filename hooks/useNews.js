import { useState, useEffect } from "react";
import { newsData } from "../data/newsData";

// This hook will be updated to fetch from Supabase
export const useNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // TODO: Replace with Supabase fetch
    // For now, using local data
    const fetchNews = async () => {
      try {
        setLoading(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 100));
        setNews(newsData);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return { news, loading, error };
};

// Hook for single news item
export const useNewsItem = (id) => {
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // TODO: Replace with Supabase fetch
    const fetchNewsItem = async () => {
      try {
        setLoading(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 100));
        const item = newsData.find((n) => n.id === parseInt(id));
        setNewsItem(item);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchNewsItem();
    }
  }, [id]);

  return { newsItem, loading, error };
};
