const fs = require('fs');
const path = require('path');

// 1. 定义你的网站主域名
const DOMAIN = 'https://www.xiaomantools.com';

function generateSitemap() {
  try {
    // 2. 获取绝对路径
    const dataDir = path.join(process.cwd(), 'data');
    const productsPath = path.join(dataDir, 'products.json');
    const publicDir = path.join(process.cwd(), 'public');
    const sitemapPath = path.join(publicDir, 'sitemap.xml');

    // 3. 安全地读取产品数据
    let products = [];
    if (fs.existsSync(productsPath)) {
      const productsData = fs.readFileSync(productsPath, 'utf8');
      products = JSON.parse(productsData);
    } else {
      console.warn(`⚠️ Warning: Could not find ${productsPath}. Sitemap will only contain static pages.`);
    }

    // 4. 定义固定的静态页面 (已更新为你最新的 5 个页面)
    const staticPages = [
      '',           // 首页
      '/products',  // 产品列表
      '/about',     // 关于我们
      '/contact',   // 联系我们
      '/blog'       // 博客列表
    ];

    // 5. 组装所有的网址
    const allUrls = [
      ...staticPages.map(route => `${DOMAIN}${route}`),
      // 遍历 products.json，提取 slug 生成产品详情页 URL
      ...products.map(product => `${DOMAIN}/products/${product.slug}`)
    ];

    // 6. 生成 XML 结构 (符合 Google 标准)
    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(url => `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${url === DOMAIN ? 'daily' : 'weekly'}</changefreq>
    <priority>${url === DOMAIN ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

    // 7. 确保 public 文件夹存在，然后写入文件
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir);
    }
    
    fs.writeFileSync(sitemapPath, sitemapContent.trim());
    
    // 打印成功绿字提示
    console.log(`\x1b[32m✅ Sitemap successfully generated at: public/sitemap.xml\x1b[0m`);
    console.log(`\x1b[32m   - Total URLs indexed: ${allUrls.length}\x1b[0m`);

  } catch (error) {
    console.error('\x1b[31m❌ Error generating sitemap:\x1b[0m', error.message);
    process.exit(1); 
  }
}

// 执行函数
generateSitemap();