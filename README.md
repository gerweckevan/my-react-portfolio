React + Tailwind Glassmorphism Portfolio (SEO-Optimized)

A fast, modern portfolio scaffold built with React + Tailwind CSS and a sleek glassmorphism UI. Includes production-ready SEO (dynamic <title>/meta, Open Graph/Twitter, JSON-LD), robots.txt, and a simple sitemap generator.

Maintained by Evan Gerweck — github.com/gerweckevan

![Website preview](images/Website.png)

✨ Features

⚡ Performance: Tailwind purge, minified builds, lightweight assets

🔍 SEO: description, canonical, OG/Twitter, JSON-LD, robots.txt, sitemap

🧠 Dynamic <head> tags with react-helmet-async (src/SEO.jsx)

🎨 UI: Tailwind + glassmorphism components

🔗 Repo metadata wired in package.json (author, homepage, repository)

🛠️ Tech

React 18

Tailwind CSS

react-helmet-async

Node 18+

Quick Start

# 1) Install

npm install

# 2) Run dev server (Vite/Next) or CRA

npm run dev # or: npm start

# 3) Build for production

npm run build

If npm run dev doesn’t start, try npm start.

SEO Usage

Use the reusable SEO component on each page to set title/description/canonical/social tags.

// src/SEO.jsx is already created for you
import SEO from './SEO';

export default function Home() {
return (
<>
<SEO
        title="Home | Evan Gerweck"
        description="React + Tailwind portfolio and projects by Evan Gerweck."
        canonical="https://evan-gerweck-react-portfolio-1e224ee75958.herokuapp.com/"
        image="/thumbnail.png"
      />
{/_ page content _/}
</>
);
}

Ensure the app is wrapped with HelmetProvider in src/index.tsx:

import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
<React.StrictMode>
<HelmetProvider>
<App />
</HelmetProvider>
</React.StrictMode>
);

Install the dependency if needed: npm i react-helmet-async

Search Engine Files
robots.txt

Allows crawling and points to your sitemap (already added in public/robots.txt).
Adapt rules if you need to block routes.

Sitemap

A lightweight route-based generator is included.

Edit routes in routes.config.json:

{
"siteUrl": "https://evan-gerweck-react-portfolio-1e224ee75958.herokuapp.com/",
"routes": ["/", "/projects", "/about", "/contact"]
}

Generate:

npm run sitemap

This writes public/sitemap.xml.

Replace public/thumbnail.png with a 1200×630 branded image for rich link previews.

Tailwind Purge

tailwind.config.js uses modern content globs to remove unused CSS:

['./src/**/*.{js,jsx,ts,tsx,html}','./pages/**/*.{js,jsx,ts,tsx}','./app/**/*.{js,jsx,ts,tsx,mdx}']

Deploy

GitHub Pages (static): push the build output (build/ or dist/). Ensure homepage in package.json matches your site URL.

Netlify / Vercel / Render: build command: npm run build.

CRA publish dir: build/

Vite publish dir: dist/

CDN tips: enable Brotli/Gzip, set long-lived cache headers for static assets, prefer WebP/AVIF, lazy-load non-critical images/components.

Project Structure (brief)
.
├─ public/
│ ├─ index.html
│ ├─ robots.txt
│ ├─ sitemap.xml
│ └─ thumbnail.png
├─ src/
│ ├─ SEO.jsx
│ ├─ index.tsx
│ └─ App.(tsx|jsx)
├─ scripts/
│ └─ generate-sitemap.js
├─ routes.config.json
├─ tailwind.config.js
└─ package.json

Author

Evan Gerweck
GitHub: https://github.com/gerweckevan

