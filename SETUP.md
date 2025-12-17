# Setup Guide

## Quick Start Checklist

- [ ] Install Node.js 18+ if not already installed
- [ ] Run `npm install` to install dependencies
- [ ] Create `.env.local` file with `NEXT_PUBLIC_WORDPRESS_URL=https://unfixedtime.com`
- [ ] Add project thumbnails to `public/projects/` directory
- [ ] Run `npm run dev` to start development server
- [ ] Visit `http://localhost:3000` to see your site

## Project Thumbnails

You need to add thumbnail images for your projects:

1. Create the directory: `public/projects/`
2. Add these images:
   - `velyar-thumbnail.jpg` (recommended: 800x600px)
   - `archium-thumbnail.jpg` (recommended: 800x600px)

You can use placeholder images initially or actual project screenshots.

## WordPress API Access

The site fetches content from your WordPress site via the REST API. Make sure:
- Your WordPress site is publicly accessible
- The REST API is enabled (default on WordPress.com)
- Featured images are set for blog posts (optional but recommended)

## Customization Steps

### 1. Update Project Information

Edit `lib/projects.ts` to update project details, links, and descriptions.

### 2. Update About Page

Edit `app/about/page.tsx` to customize your personal information.

### 3. Adjust Brand Colors

Edit `styles/globals.css` and modify the CSS variables in `:root` if you want to adjust colors.

### 4. Add More Projects

Add new project objects to the `projects` array in `lib/projects.ts`.

## Troubleshooting

### Images not loading
- Check that image paths in `lib/projects.ts` match files in `public/projects/`
- Ensure images are optimized (use tools like ImageOptim or Squoosh)

### WordPress API errors
- Verify `NEXT_PUBLIC_WORDPRESS_URL` is correct
- Check that your WordPress site is accessible
- WordPress.com sites should work without authentication

### Build errors
- Run `npm install` again
- Clear `.next` directory: `rm -rf .next`
- Check Node.js version: `node --version` (should be 18+)

## Next Steps

1. Customize content to match your personal brand
2. Add more projects as you develop them
3. Update the About page with your story
4. Deploy to Vercel or your preferred hosting platform




