import axios from 'axios';

const WORDPRESS_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || 'https://unfixedtime.com';
const WORDPRESS_API_BASE = process.env.NEXT_PUBLIC_WORDPRESS_API_BASE;

function normalizeSiteHost(siteUrl: string): string {
  // Accepts "https://unfixedtime.com", "unfixedtime.com", etc.
  const withoutProtocol = siteUrl.replace(/^https?:\/\//, '').replace(/\/+$/, '');
  // In case someone passes a path, keep just host portion.
  return withoutProtocol.split('/')[0];
}

function wpJsonUrl(path: string) {
  return `${WORDPRESS_URL}${path}`;
}

function wpComApiUrl(path: string) {
  const site = normalizeSiteHost(WORDPRESS_URL);
  // WordPress.com REST API (works even when /wp-json is not exposed on the mapped domain)
  return `https://public-api.wordpress.com/wp/v2/sites/${site}${path}`;
}

async function wpGet<T>(path: string, params?: Record<string, unknown>): Promise<T> {
  // If user explicitly sets an API base, use it.
  if (WORDPRESS_API_BASE) {
    const base = WORDPRESS_API_BASE.replace(/\/+$/, '');
    const res = await axios.get<T>(`${base}${path}`, { params });
    return res.data;
  }

  // Try wp-json first (self-hosted WP / many WP.com sites)
  try {
    const res = await axios.get<T>(wpJsonUrl(path), { params });
    return res.data;
  } catch (err: unknown) {
    // If wp-json 404s (common on some WordPress.com mapped domains), fall back to wp.com API.
    const status = axios.isAxiosError(err) ? err.response?.status : undefined;
    if (status === 404) {
      const res = await axios.get<T>(wpComApiUrl(path), { params });
      return res.data;
    }
    throw err;
  }
}

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
    return await wpGet<WordPressPost[]>('/wp-json/wp/v2/posts', {
      per_page: limit,
      _embed: true,
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

// Fetch a single blog post by slug
export async function getBlogPost(slug: string): Promise<WordPressPost | null> {
  try {
    const data = await wpGet<WordPressPost[]>('/wp-json/wp/v2/posts', {
      slug,
      _embed: true,
    });
    return data[0] || null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

// Fetch media/photos from WordPress
export async function getPhotos(limit: number = 20): Promise<WordPressMedia[]> {
  try {
    return await wpGet<WordPressMedia[]>('/wp-json/wp/v2/media', {
      per_page: limit,
      media_type: 'image',
    });
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


