const fs = require('fs');
const path = require('path');

// 1. 配置你的真实域名 (上线前一定要改这个！)
const DOMAIN = 'https://xiaomantools.com';

// 2. 读取数据源
const products = require('../data/products.json');
// 如果你有博客，把下面这行注释打开
// const posts = require('../data/posts.json'); 

// 3. 定义静态页面列表
const staticPages = [
  '',            // 首页
  '/products',   // 产品列表
  '/about',      // 关于我们
  '/contact',    // 联系我们
  '/blog',       // 博客列表
];

function generateSitemap() {
  const currentDate = new Date().toISOString();

  // 4. 生成静态页面的 XML
  const staticSitemap = staticPages
    .map((page) => {
      return `
  <url>
    <loc>${DOMAIN}${page}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`;
    })
    .join('');

  // 5. 生成产品详情页的 XML (动态生成)
  const productSitemap = products
    .map((product) => {
      return `
  <url>
    <loc>${DOMAIN}/products/${product.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`;
    })
    .join('');

  // 6. 生成博客文章的 XML (如果还没文章，这段是空的)
  // const postSitemap = posts.map(post => ...).join(''); 

  // 7. 拼接完整 XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticSitemap}
${productSitemap}
</urlset>`;

  // 8. 写入到 public 目录
  const publicDir = path.join(__dirname, '..', 'public');
  
  // 确保 public 目录存在
  if (!fs.existsSync(publicDir)){
      fs.mkdirSync(publicDir);
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);

  console.log(`✅ Sitemap generated at: ${path.join(publicDir, 'sitemap.xml')}`);
  console.log(`   - Total URLs: ${staticPages.length + products.length}`);
}

generateSitemap();