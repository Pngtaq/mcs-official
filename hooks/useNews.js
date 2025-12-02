import { useState, useEffect } from "react";
import { fetchNews, fetchNewsById } from "../services/newsService";

// Hook for fetching all news
export const useNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    setLoading(true);
    const { data, error } = await fetchNews();

    if (error) {
      setError(error);
    } else {
      setNews(data || []);
    }
    setLoading(false);
  };

  const refreshNews = () => {
    loadNews();
  };

  return { news, loading, error, refreshNews };
};

// Hook for single news item
export const useNewsItem = (id) => {
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      loadNewsItem();
    }
  }, [id]);

  const loadNewsItem = async () => {
    setLoading(true);
    const { data, error } = await fetchNewsById(id);

    if (error) {
      setError(error);
    } else {
      setNewsItem(data);
    }
    setLoading(false);
  };

  return { newsItem, loading, error };
};
