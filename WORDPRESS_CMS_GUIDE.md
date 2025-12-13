# WordPress as Content Management System

## How It Works

Your Next.js portfolio site uses **WordPress REST API** to fetch content dynamically. WordPress remains your content management system (CMS), and the Next.js site displays that content with a custom, modern design.

## Architecture

```
WordPress (unfixedtime.com)
    ↓ (REST API)
Next.js Portfolio Site
    ↓ (Displays)
Beautiful Modern UI
```

## What You Can Manage in WordPress

### 1. **Blog Posts** (Travels)
- **Location**: WordPress Admin → Posts
- **What it powers**: `/blog` page and individual blog post pages
- **You can manage**:
  - Create/edit/delete blog posts
  - Add featured images
  - Write content with WordPress editor
  - Set categories and tags
  - Schedule posts
  - Everything you normally do in WordPress!

**API Endpoint Used**:
- Primary (self-hosted / many sites): `https://unfixedtime.com/wp-json/wp/v2/posts`
- WordPress.com fallback (mapped domains that 404 on `/wp-json`): `https://public-api.wordpress.com/wp/v2/sites/unfixedtime.com/posts`

### 2. **Photos/Media**
- **Location**: WordPress Admin → Media Library
- **How we use it**: Featured images and media inside travel posts (and future galleries if needed)
- **You can manage**:
  - Upload photos to Media Library
  - Add alt text for accessibility
  - Attach media to posts

**API Endpoint Used**:
- Primary (self-hosted / many sites): `https://unfixedtime.com/wp-json/wp/v2/media`
- WordPress.com fallback (mapped domains that 404 on `/wp-json`): `https://public-api.wordpress.com/wp/v2/sites/unfixedtime.com/media`

### 3. **Featured Images**
- **Location**: Set when creating/editing posts
- **What it powers**: Blog post thumbnails and hero images
- **You can manage**: Set featured image for any post in WordPress

## Current Integration

### Blog Posts Integration

The site automatically fetches your WordPress posts:

```typescript
// Fetches latest 20 posts
const posts = await getBlogPosts(20);
```

**What gets displayed:**
- Post title
- Post content (full HTML)
- Featured image
- Publication date
- Excerpt

**Where it appears:**
- `/blog` - Travels listing page
- `/blog/[slug]` - Individual travel pages

### Media Integration

The site fetches media (images) primarily for featured images and post content.

## Workflow

### Adding a New Blog Post

1. **Go to WordPress Admin** → `https://unfixedtime.com/wp-admin`
2. **Create a new post** (Posts → Add New)
3. **Write your content** using WordPress editor
4. **Set featured image** (if desired)
5. **Publish** the post
6. **It automatically appears** on your Next.js site at `/blog`

**No code changes needed!** The site fetches content dynamically.

### Adding Photos

1. **Go to WordPress Admin** → Media → Add New
2. **Upload your photos**
3. **Add alt text** for accessibility
4. **They automatically appear** on `/photos` page

### Editing Content

- Edit any post in WordPress → Changes appear on Next.js site
- Delete a post in WordPress → It disappears from Next.js site
- Update featured images → Changes reflect immediately

## API Endpoints Being Used

### 1. Get All Posts
```
GET https://unfixedtime.com/wp-json/wp/v2/posts
Query Parameters:
  - per_page: number of posts (default: 10)
  - _embed: true (includes featured images)
```

### 2. Get Single Post by Slug
```
GET https://unfixedtime.com/wp-json/wp/v2/posts?slug=wuzhen
Query Parameters:
  - slug: post slug
  - _embed: true
```

### 3. Get Media/Photos
```
GET https://unfixedtime.com/wp-json/wp/v2/media
Query Parameters:
  - per_page: number of images (default: 20)
  - media_type: 'image'
```

## Testing the Connection

You can test if the API is working by visiting these URLs in your browser:

1. **Blog Posts**: `https://unfixedtime.com/wp-json/wp/v2/posts`
2. **Media**: `https://unfixedtime.com/wp-json/wp/v2/media`
3. **Single Post**: `https://unfixedtime.com/wp-json/wp/v2/posts?slug=wuzhen`

If you see JSON data, the API is working!

## Extending the Integration

### Option 1: Custom Post Types for Projects

You could create a custom post type in WordPress for projects (instead of hardcoding them):

1. Install a plugin like "Custom Post Type UI" or "Advanced Custom Fields"
2. Create a "Projects" post type
3. Add custom fields (description, link, tags, etc.)
4. Update `lib/wordpress.ts` to fetch projects from WordPress

**Benefits:**
- Manage projects in WordPress admin
- No code changes needed to add/remove projects
- Can use WordPress media library for project thumbnails

### Option 2: WordPress Categories/Tags

You could filter blog posts by categories or tags:

```typescript
// Fetch posts from specific category
GET /wp-json/wp/v2/posts?categories=5
```

### Option 3: WordPress Pages

You could fetch WordPress pages for dynamic content:

```typescript
// Fetch pages
GET /wp-json/wp/v2/pages
```

## Environment Configuration

Make sure your `.env.local` file has:

```
NEXT_PUBLIC_WORDPRESS_URL=https://unfixedtime.com
```

This tells the Next.js site where to fetch content from.

### Optional: Explicit API Base (recommended for WordPress.com mapped domains)

If your site returns a 404 for `https://unfixedtime.com/wp-json/wp/v2/posts` on the public internet (this can happen on some WordPress.com configurations),
set this env var in Vercel (and optionally `.env.local`) to force the API base:

```
NEXT_PUBLIC_WORDPRESS_API_BASE=https://public-api.wordpress.com/wp/v2/sites/unfixedtime.com
```

## Caching & Performance

- **Static Generation**: Blog posts are statically generated at build time
- **Revalidation**: You can set up ISR (Incremental Static Regeneration) to update content periodically
- **Images**: Next.js Image component optimizes WordPress images automatically

## Security

- **Public API**: WordPress REST API is public (read-only for posts/media)
- **No Authentication Needed**: For public content, no API keys required
- **WordPress.com**: Your WordPress.com site already has REST API enabled

## Troubleshooting

### Posts Not Appearing

1. Check if REST API is enabled: Visit `https://unfixedtime.com/wp-json/`
2. Verify posts are published (not drafts)
3. Check browser console for API errors
4. Verify `NEXT_PUBLIC_WORDPRESS_URL` in `.env.local`

### Images Not Loading

1. Check if images are uploaded to WordPress Media Library
2. Verify image URLs are accessible
3. Check Next.js image domain configuration in `next.config.js`

### API Errors

1. Check WordPress site is accessible
2. Verify REST API endpoints work in browser
3. Check for CORS issues (WordPress.com handles this automatically)

## Summary

**WordPress = Your Content Management System**
- Write blog posts in WordPress → Appear on Next.js site
- Upload photos in WordPress → Appear on Next.js site
- Edit content in WordPress → Changes reflect on Next.js site

**Next.js = Your Beautiful Frontend**
- Custom, modern design
- Fast performance
- Great user experience
- Fetches content from WordPress API

You get the best of both worlds: **Easy content management** (WordPress) + **Modern, fast frontend** (Next.js)!


