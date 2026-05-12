# Deployment Guide: Vercel & Hostinger

This project is a **Single Page App (SPA)** using React Router with client-side routing. All deployment changes below ensure seamless routing and asset resolution on both hosts.

---

## ✅ Changes Made for Deployment

### 1. **Vite Base Path** (`vite.config.ts`)
- Set `base: "/"` so the built app references assets from the root domain
- ✨ Works on both Vercel and Hostinger without path prefixing

### 2. **Font Fallback** (`tailwind.css`)
- Replaced broken external OTF font with system serif fallbacks (Georgia, Times New Roman)
- ✨ No missing asset requests; full-clean builds

### 3. **SPA Routing Rewrites**

#### **Vercel** (`vercel.json`)
- Rewrites all unmatched routes to `index.html` so React Router handles navigation
- Automatically deployed when you push to Vercel

#### **Hostinger** (`.htaccess`)
- Apache rewrite rule falls back to `index.html` for all non-file/non-directory requests
- **Keep this file in the web root (`public_html/` or `www/`)** when uploading

---

## 🚀 Deployment Steps

### **Vercel**

1. **Connect repository:**
   ```bash
   npm i -g vercel
   vercel
   ```

2. **Or use the web UI:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New" → "Project"
   - Import your GitHub repo
   - Vercel auto-detects the React app and uses the default build (`npm run build`)

3. **Deploy:**
   - Push to your branch → Vercel auto-deploys
   - `vercel.json` is automatically applied

✨ **Live immediately** at your Vercel URL

---

### **Hostinger**

1. **Build locally:**
   ```bash
   npm run build
   ```

2. **Upload to Hostinger:**
   - Use **File Manager** or **SFTP**
   - Upload the contents of the `dist/` folder to your **web root** (usually `public_html/`)
   - **Important:** Also upload `.htaccess` to the web root so routing rewrites work

3. **Verify:**
   - Visit your domain (e.g., `yourdomain.com`)
   - Navigate to `/about`, `/services`, etc.
   - If routes load correctly, SPA routing is working

⚠️ **Note:** Hostinger typically enables `.htaccess` by default, but if routes still break:
- Contact Hostinger support to enable `mod_rewrite`
- Or ask them to enable `.htaccess` processing on your domain

---

## 📋 Verification Checklist

After deployment, test these paths:

- ✅ `/` → Home page
- ✅ `/about` → About page
- ✅ `/services` → Services page
- ✅ `/blog` → Blog page
- ✅ `/gallery` → Gallery page
- ✅ `/contact` → Contact page
- ✅ `/conference` → Conference page

If any route returns **404**, the SPA fallback isn't working. Check:
- `.htaccess` is in the web root (Hostinger)
- `vercel.json` is in the repo root (Vercel)

---

## 🔧 Environment Variables

The contact form uses **EmailJS** for client-side email delivery. If you want to activate it:

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Set up an email service and message template
3. Update the IDs in `src/lib/emailjs.ts`:

```ts
export const EMAILJS_SERVICE_ID = "your_service_id";
export const EMAILJS_TEMPLATE_ID = "your_template_id";
export const EMAILJS_PUBLIC_KEY = "your_public_key";
```

No server-side backend is needed.

---

## 📦 What's in `/dist/`?

The production build includes:

- `index.html` — Main entry point
- `assets/` — Minified CSS, JS, and images
- Static files from `static/` folder (robots.txt, sitemap.xml, etc.)

All assets are optimized and ready for deployment.

---

## 🛠️ Troubleshooting

### Routes return 404 (SPA not working)
- **Vercel:** Check `vercel.json` is in repo root
- **Hostinger:** Verify `.htaccess` is in web root and `mod_rewrite` is enabled

### Fonts look off
- System serif fallbacks (Georgia/Times New Roman) are used
- This is intentional—no external font file is fetched

### Styles or images missing
- Check browser DevTools → Network tab
- Verify assets load from `/assets/` (not relative paths)

### Performance is slow
- Run `npm run build` locally to check bundle size
- Hostinger: Check if gzip compression is enabled

---

## 📞 Support

For questions or issues:
- **Vercel:** [vercel.com/docs](https://vercel.com/docs)
- **Hostinger:** Contact Hostinger support
- **React Router:** [reactrouter.com](https://reactrouter.com/)

---

**Last updated:** May 11, 2026  
**Project:** ICS Global Website
