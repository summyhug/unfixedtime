# Unfixed Time Portfolio

A modern portfolio website built with Next.js and WordPress API integration, featuring a sustainability-focused design system.

## Features

- **Homepage**: Showcases projects (Velyar, Archium) with thumbnails and quick links
- **About**: Personal information and values
- **Projects**: Detailed project showcase page
- **Photos**: Integration with WordPress-hosted photos via REST API
- **Travel Blog**: WordPress-powered blog section with individual post pages
- **Sustainability Theme**: Complete brand-focused design system with harmony and sustainability

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- WordPress site at unfixedtime.com (or your WordPress URL)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a `.env.local` file in the root directory:
```
NEXT_PUBLIC_WORDPRESS_URL=https://unfixedtime.com
```

3. Add project thumbnails:
Place your project thumbnail images in `public/projects/`:
- `velyar-thumbnail.jpg`
- `archium-thumbnail.jpg`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## WordPress API Integration

The site uses the WordPress REST API to fetch:
- **Blog Posts**: `/wp-json/wp/v2/posts`
- **Media/Photos**: `/wp-json/wp/v2/media`
- **Featured Images**: Embedded media data

The WordPress site remains your content management system - all content is fetched dynamically via the API.

**📖 See [WORDPRESS_CMS_GUIDE.md](./WORDPRESS_CMS_GUIDE.md) for complete details on:**
- How WordPress works as your CMS
- What you can manage in WordPress
- Workflow for adding/editing content
- API endpoints and integration details

## Customization

### Adding New Projects

Edit `lib/projects.ts` to add new projects:

```typescript
{
  id: 'project-id',
  title: 'Project Name',
  description: 'Project description',
  thumbnail: '/projects/project-thumbnail.jpg',
  link: 'https://project-url.com',
  tags: ['Tag1', 'Tag2'],
}
```

### Updating Brand Colors

Edit `styles/globals.css` to modify the color palette defined in `:root` variables.

### Modifying Content

- **About Page**: Edit `app/about/page.tsx`
- **Homepage**: Edit `app/page.tsx`
- **Navigation**: Edit `components/Navigation.tsx`

## Brand Guide

See `BRAND_GUIDE.md` for complete design system, color palette, typography, and brand guidelines.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with navigation/footer
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── projects/          # Projects listing page
│   ├── photos/            # Photos gallery page
│   └── blog/              # Blog pages
│       ├── page.tsx       # Blog listing
│       └── [slug]/        # Individual blog posts
├── components/            # React components
│   ├── Navigation.tsx     # Site navigation
│   ├── Footer.tsx         # Site footer
│   └── ProjectCard.tsx   # Project card component
├── lib/                   # Utilities and API clients
│   ├── wordpress.ts      # WordPress API functions
│   └── projects.ts       # Project data
├── styles/               # Global styles
│   └── globals.css       # Global CSS with brand variables
└── public/               # Static assets
    └── projects/         # Project thumbnails
```

## Deployment

This site can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any Node.js hosting**

Make sure to set the `NEXT_PUBLIC_WORDPRESS_URL` environment variable in your hosting platform.

## Notes

- The site uses Next.js Image component for optimized images
- WordPress images are fetched via the REST API
- All styling follows the sustainability brand guide
- Mobile-responsive design throughout

