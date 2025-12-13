import axios from 'axios';

const WORDPRESS_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || 'https://unfixedtime.com';

export interface WordPressPost {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  featured_media: number;
  slug: string;
  link: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

export interface WordPressMedia {
  id: number;
  source_url: string;
  alt_text: string;
  media_details: {
    width: number;
    height: number;
    sizes: {
      thumbnail?: { source_url: string };
      medium?: { source_url: string };
      large?: { source_url: string };
      full?: { source_url: string };
    };
  };
}

export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  link?: string;
  tags?: string[];
}

// Fetch blog posts from WordPress
export async function getBlogPosts(limit: number = 10): Promise<WordPressPost[]> {
  try {
    const response = await axios.get(`${WORDPRESS_URL}/wp-json/wp/v2/posts`, {
      params: {
        per_page: limit,
        _embed: true,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

// Fetch a single blog post by slug
export async function getBlogPost(slug: string): Promise<WordPressPost | null> {
  try {
    const response = await axios.get(`${WORDPRESS_URL}/wp-json/wp/v2/posts`, {
      params: {
        slug,
        _embed: true,
      },
    });
    return response.data[0] || null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

// Fetch media/photos from WordPress
export async function getPhotos(limit: number = 20): Promise<WordPressMedia[]> {
  try {
    const response = await axios.get(`${WORDPRESS_URL}/wp-json/wp/v2/media`, {
      params: {
        per_page: limit,
        media_type: 'image',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching photos:', error);
    return [];
  }
}

// Get featured image URL from post
export function getFeaturedImageUrl(post: WordPressPost): string | null {
  if (post._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
    return post._embedded['wp:featuredmedia'][0].source_url;
  }
  return null;
}


