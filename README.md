# 🌐 ICS Global — Corporate Website

> **Idealizeer Content Solutions Pvt. Ltd.**
> An AI-enabled ecosystem driving quality education, community development, and sustainable institutional growth.

**Live site →** [https://late-lab-8753.dev.animaapp.io](https://late-lab-8753.dev.animaapp.io)

---

## 📌 What Is This?

This is the official multi-page website for **ICS Global** — a company operating at the intersection of education, industry, and technology. The site showcases the organisation&#39;s solutions, leadership team, blog content, event gallery, conference announcements, and a fully functional contact form.

Built with **React 18**, **TypeScript**, **Tailwind CSS 3**, and **Vite**, the project is fully responsive across mobile, tablet, and desktop breakpoints.

---

## 🗂️ Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | **Home** | Hero with animated tagline, About Us, Solutions grid, Meet Our Team, Partner logos, Conference CTA, Core Philosophy, Blogs & Guides carousel, Contact form + Footer |
| `/about` | **About** | Hero banner, company overview, photo gallery strip, Mission & Vision section, Solutions accordion, Blogs slider, Contact + Footer |
| `/services` | **Services** | Hero, Signature Offerings intro, 8 industry-specific service sections (K-12, Higher Ed, EdTech, Publishing, Corporate, Manufacturing, IT/ITeS, Branding & Marketing), Why ICS Global |
| `/blog` | **Blog** | Hero, featured blog post, category filter tabs, blog card grid, Contact + Footer |
| `/gallery` | **Gallery** | Hero, "Archive" heading, category filter tabs, responsive masonry-style image grid, Contact + Footer |
| `/conference` | **Conference** | Hero, "Coming Soon" placeholder, Contact + Footer |
| `/contact` | **Contact** | Hero with outreach headline, embedded Google Maps (Pune office), info cards (email, phone, address), outreach contact form + Footer |

---

## ✨ Key Features

### 🧭 Navigation
- **Pill-style navbar** — rounded white card with nav links, consistent across all pages
- **Mobile hamburger menu** — full-screen overlay with gradient background, smooth open/close
- **Active page highlighting** — current page link is bolded/coloured
- **"Join the Community" CTA** — routes to `/contact` from every page

### 👥 Meet Our Team
- Responsive card grid with profile photos, names, roles, and social media icons (Facebook, Twitter/X, LinkedIn)
- Social icons aligned in a strict horizontal row with `8px` gap
- "See More" toggle to reveal additional team members
- Cards feature a raised photo overlap with gradient background

### 📝 Contact Form (EmailJS-Ready)
- Shared `ContactAndFooter` component used on 6 pages (Home, About, Blog, Gallery, Conference, Contact)
- Full field validation: required checks, email regex, phone regex, min-length for name/message
- Red border + error text on blur; errors clear on re-typing
- Loading spinner on send, success/error banners with 5-second auto-dismiss
- EmailJS integration ready — just swap in your service/template/public IDs in `src/lib/emailjs.ts`

### 📰 Blog Carousel
- Auto-scrolling infinite carousel with clone-based seamless loop
- Responsive visible count: 3 on desktop, 2 on tablet, 1 on mobile
- Touch swipe + mouse drag support
- Left/right arrow navigation with frosted-glass styling
- Auto-pauses on hover or drag

### 🖼️ Gallery
- Masonry-style layout using CSS Grid with variable column spans
- Category filter tabs (All, Events, Conferences, Concave MOU Event)
- Smooth hover effects and rounded corners

### 🗺️ Google Maps Embed
- Live Google Maps iframe pointing to the Pune office
- Cinematic styling: contrast, brightness, grayscale filters + inset shadow
- Wrapped in rounded container matching the card design language

### 🎨 Design System
- **Fonts:** Belgiano Serif (headings), Poppins (body/nav), Inter (cards/meta)
- **Colour palette:** Deep navy (`#0e2a47`), primary blue (`#0e467a`), sky blue (`#29a8e0`), accent orange (`#f87e0f`), white
- **Spacing:** Fluid `clamp()` values throughout for smooth scaling
- **Shadows & borders:** Subtle card shadows, pill borders, consistent rounded corners

---

## 🏗️ Project Structure

```
├── index.html                          # Entry HTML
├── tailwind.css                        # Tailwind directives
├── tailwind.config.js                  # Theme tokens & custom colours
├── vite.config.ts                      # Vite config with React plugin
├── package.json                        # Dependencies & scripts
├── tsconfig.json                       # TypeScript config
│
├── src/
│   ├── index.tsx                       # React Router setup (all 7 routes)
│   ├── lib/
│   │   └── emailjs.ts                  # EmailJS config (service/template IDs)
│   │
│   ├── components/
│   │   ├── Navbar/                     # Shared navbar component
│   │   └── ContactAndFooter/           # Shared contact form + footer
│   │
│   └── screens/
│       ├── IcsHome/                    # Home page + sections
│       │   └── sections/
│       │       ├── HeroIntroSection/
│       │       ├── HeroNavigationSection/
│       │       ├── SolutionsGridSection/
│       │       ├── LeadershipGallerySection/
│       │       ├── ConferenceCtaSection/
│       │       ├── ConferenceHighlightSection/
│       │       ├── CampusExperienceSection/
│       │       ├── ContactSupportSection/
│       │       ├── BlogsGuidesSection/
│       │       └── HomeBlogsSlider.tsx
│       │
│       ├── About/                      # About page + sections
│       │   └── sections/
│       │       ├── AboutOverviewSection.tsx
│       │       ├── MissionVisionHighlightsSection.tsx
│       │       ├── SolutionsHighlightsSection.tsx
│       │       ├── BlogsAndGuidesSection.tsx
│       │       └── ContactCalloutSection.tsx
│       │
│       ├── Service/                    # Services page + 11 section files
│       ├── Blog/                       # Blog page + BlogCard, BlogHeroSection
│       ├── Gallery/                    # Gallery page with masonry grid
│       ├── Conference/                 # Conference page (coming soon)
│       ├── Contact/                    # Contact page + map, form, cards
│       └── Box/                        # Utility/dev page
│
└── static/                             # Favicons, OG image, sitemap, robots.txt
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI framework with hooks & functional components |
| **TypeScript 5** | Type safety across the entire codebase |
| **Tailwind CSS 3** | Utility-first styling with custom theme tokens |
| **Vite 7** | Lightning-fast dev server & build tool |
| **React Router 6** | Client-side routing with `BrowserRouter` |
| **EmailJS** | Client-side email sending (no backend needed) |
| **tailwindcss-animate** | Animation utilities for Tailwind |
| **clsx + tailwind-merge** | Conditional class merging |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/ics-global-website.git
cd ics-global-website

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at **http://localhost:5173/**

### Production Build

```bash
npm run build
```

The optimised output will be in the `dist/` folder, ready to deploy on any static hosting platform (Vercel, Netlify, AWS S3, etc.).

### Hostinger and Vercel Deployment

This project is configured as a single-page app with client-side routing, so direct page refreshes need rewrite support on the host.

- **Vercel:** the included `vercel.json` rewrites all routes to `index.html`.
- **Hostinger:** upload the built `dist/` contents and keep the included `.htaccess` file in the web root so Apache can fall back to `index.html`.
- **Root deployment:** the Vite `base` is set to `/`, which matches the default root deployment path on both hosts.

---

## 📧 EmailJS Setup

The contact form is powered by [EmailJS](https://www.emailjs.com/) for client-side email delivery. To activate it:

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Set up an email service and template
3. Update the placeholder IDs in `src/lib/emailjs.ts`:

```ts
export const EMAILJS_SERVICE_ID = "your_service_id";
export const EMAILJS_TEMPLATE_ID = "your_template_id";
export const EMAILJS_PUBLIC_KEY = "your_public_key";
```

Template variables used: `from_name`, `from_email`, `phone`, `message`

---

## 📱 Responsive Design

The site is fully responsive with three primary breakpoints:

- **Mobile** (< 768px) — single-column layouts, hamburger menu, touch-friendly spacing
- **Tablet** (768px – 1024px) — 2-column grids, adjusted typography
- **Desktop** (1024px+) — full multi-column layouts, pill navbar, side-by-side sections

Fluid scaling is achieved through `clamp()` values for font sizes, padding, and container heights — no abrupt jumps between breakpoints.

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m "Add your feature"`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License

This project is proprietary to **Idealizeer Content Solutions Pvt. Ltd.** All rights reserved.

---

<p align="center">
  Built with ❤️ by the ICS Global team
</p>
