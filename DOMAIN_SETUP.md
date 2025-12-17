# Domain Setup Guide: Pointing unfixedtime.com to Vercel

## Overview
This guide walks you through pointing your `unfixedtime.com` domain to your new Next.js site hosted on Vercel, while keeping WordPress.com as your content backend.

## Prerequisites
- ✅ Vercel project is deployed and working
- ✅ You have access to your domain registrar (where you bought unfixedtime.com)
- ✅ You have access to your WordPress.com account

## Step-by-Step Instructions

### 1. Add Domain in Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your **unfixedtime** project
3. Go to **Settings** → **Domains**
4. Click **Add Domain**
5. Enter: `unfixedtime.com`
6. Click **Add**
7. Also add: `www.unfixedtime.com` (optional but recommended)

Vercel will show you the DNS records you need to add. **Copy these values** - you'll need them in the next step.

### 2. Update DNS at Your Domain Registrar

Go to your domain registrar (e.g., Namecheap, GoDaddy, Google Domains, etc.) and update DNS:

#### Option A: Using A Records (if your registrar supports it)
- **Type**: A
- **Name/Host**: `@` (or leave blank, or `unfixedtime.com`)
- **Value**: Vercel's IP address (Vercel will show this)
- **TTL**: 3600 (or default)

- **Type**: CNAME
- **Name/Host**: `www`
- **Value**: `cname.vercel-dns.com` (or what Vercel shows)
- **TTL**: 3600

#### Option B: Using CNAME (if A records aren't supported)
- **Type**: CNAME
- **Name/Host**: `@` (or root domain)
- **Value**: `cname.vercel-dns.com` (or what Vercel shows)
- **TTL**: 3600

- **Type**: CNAME
- **Name/Host**: `www`
- **Value**: `cname.vercel-dns.com`
- **TTL**: 3600

**Important**: Remove any existing A or CNAME records pointing to WordPress.com.

### 3. Remove Domain Mapping from WordPress.com

1. Go to [WordPress.com](https://wordpress.com)
2. Navigate to **My Sites** → **unfixedtime.com**
3. Go to **Settings** → **Domains**
4. Find `unfixedtime.com` in your domain list
5. Click **Remove** or **Unmap** the domain
6. (Optional) You can keep WordPress accessible via the `.wordpress.com` subdomain for content management

**Why?** If WordPress.com still has the domain mapped, it will conflict with Vercel's DNS.

### 4. Wait for DNS Propagation

- DNS changes typically take **5-60 minutes** to propagate
- Can take up to **48 hours** in rare cases
- Check propagation status: https://dnschecker.org (search for `unfixedtime.com`)

### 5. Verify Everything Works

1. Visit `https://unfixedtime.com` - should show your new Next.js site
2. Visit `https://www.unfixedtime.com` - should also work
3. Check that WordPress content still loads (your site fetches from WordPress API)

## Troubleshooting

### Domain not resolving after 24 hours
- Double-check DNS records at your registrar match Vercel's requirements
- Verify you removed WordPress.com domain mapping
- Check Vercel dashboard for any domain configuration errors

### SSL Certificate Issues
- Vercel automatically provisions SSL certificates
- If you see SSL errors, wait 5-10 minutes after DNS propagation
- Check Vercel dashboard → Domains for certificate status

### WordPress Content Not Loading
- Your WordPress site should still be accessible via the WordPress.com subdomain
- The Next.js site fetches content via API, so WordPress doesn't need to be public
- Verify `NEXT_PUBLIC_WORDPRESS_URL` is set correctly in Vercel environment variables

### Mixed Content (HTTP/HTTPS) Issues
- Ensure WordPress.com is serving content over HTTPS
- Check that `NEXT_PUBLIC_WORDPRESS_URL` uses `https://`

## After Setup

✅ Your domain now points to Vercel  
✅ WordPress.com remains your CMS (accessible via WordPress.com subdomain)  
✅ All content is fetched via WordPress REST API  
✅ SSL is automatically handled by Vercel  

## Need Help?

- **Vercel Support**: https://vercel.com/support
- **DNS Issues**: Contact your domain registrar
- **WordPress.com**: https://wordpress.com/support



