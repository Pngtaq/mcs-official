import { supabase } from "../lib/supabaseClient";

// Fetch all news, ordered by created_at (newest first)
export const fetchNews = async () => {
  try {
    const { data, error } = await supabase
      .from("news")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error fetching news:", error);
    return { data: null, error: error.message };
  }
};

// Fetch single news item by ID
export const fetchNewsById = async (id) => {
  try {
    const { data, error } = await supabase
      .from("news")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error fetching news item:", error);
    return { data: null, error: error.message };
  }
};

// Create new news item
export const createNews = async (newsData) => {
  try {
    const { data, error } = await supabase
      .from("news")
      .insert([newsData])
      .select()
      .single();

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error creating news:", error);
    return { data: null, error: error.message };
  }
};

// Update existing news item
export const updateNews = async (id, newsData) => {
  try {
    const { data, error } = await supabase
      .from("news")
      .update(newsData)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error updating news:", error);
    return { data: null, error: error.message };
  }
};

// Delete news item
export const deleteNews = async (id) => {
  try {
    const { error } = await supabase.from("news").delete().eq("id", id);

    if (error) throw error;
    return { error: null };
  } catch (error) {
    console.error("Error deleting news:", error);
    return { error: error.message };
  }
};

// Upload image to Supabase Storage
export const uploadNewsImage = async (file) => {
  try {
    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from("news-images")
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    // Get public URL
    const {
      data: { publicUrl },
    } = supabase.storage.from("news-images").getPublicUrl(filePath);

    return { data: publicUrl, error: null };
  } catch (error) {
    console.error("Error uploading image:", error);
    return { data: null, error: error.message };
  }
};
