const fs = require('fs');
const path = require('path');

const configPath = path.join(process.cwd(), 'routes.config.json');
const publicDir = path.join(process.cwd(), 'public');
const outPath = path.join(publicDir, 'sitemap.xml');

if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

const cfg = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
const { siteUrl, routes } = cfg;

const urls = routes.map(route => `
  <url>
    <loc>${siteUrl.replace(/\/$/, '')}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.7'}</priority>
  </url>`).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

fs.writeFileSync(outPath, xml);
console.log('Sitemap written to', outPath);
