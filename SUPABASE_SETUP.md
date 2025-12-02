# Supabase Database Setup Instructions

## 1. Create News Table

Run this SQL in your Supabase SQL Editor:

```sql
-- Create news table
CREATE TABLE news (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  description text NOT NULL,
  content text,
  category text NOT NULL,
  image text,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_news_updated_at BEFORE UPDATE ON news
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security
ALTER TABLE news ENABLE ROW LEVEL SECURITY;

-- Create policies
-- Allow public read access
CREATE POLICY "Allow public read access" ON news
FOR SELECT USING (true);

-- Allow authenticated users to insert
CREATE POLICY "Allow authenticated insert" ON news
FOR INSERT TO authenticated
WITH CHECK (true);

-- Allow authenticated users to update
CREATE POLICY "Allow authenticated update" ON news
FOR UPDATE TO authenticated
USING (true);

-- Allow authenticated users to delete
CREATE POLICY "Allow authenticated delete" ON news
FOR DELETE TO authenticated
USING (true);
```

## 2. Create Storage Bucket for Images

1. Go to Storage in your Supabase dashboard
2. Create a new bucket named `news`
3. Make it public
4. Set the following policies:

```sql
-- Allow public read access
CREATE POLICY "Allow public read access" ON storage.objects FOR SELECT
USING (bucket_id = 'news');

-- Allow authenticated upload
CREATE POLICY "Allow authenticated upload" ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'news');

-- Allow authenticated delete
CREATE POLICY "Allow authenticated delete" ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'news');
```

## 3. Create Admin User

1. Go to Authentication in your Supabase dashboard
2. Click "Add User"
3. Enter admin email and password
4. Save the credentials

## 4. Environment Variables

Make sure your `.env` file has:

```
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

## 5. Test the Integration

1. Run your app: `npm run dev`
2. Navigate to `/admin/login`
3. Login with your admin credentials
4. Create a test news post
5. Check if it appears on `/news` page

## Notes

- Images are stored in Supabase Storage bucket `news`
- News items are automatically ordered by `created_at DESC` (newest first)
- Only authenticated users can create/edit/delete news
- Public users can only read news
