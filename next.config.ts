import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // 关键配置 1: 开启静态导出，构建后会生成 out 文件夹
  output: 'export',
  // 关键配置 2: 静态导出模式下，Next自带的图片优化需要服务端支持，
  // 为了方便Nginx部署，我们直接关闭优化，或者你可以配置 cloudinary 等外部图床
  images: {
    unoptimized: true,
  },
  // 关键配置 3: 生成 trailing slash (例如 /about/index.html 而不是 /about.html)
  // 这样 Nginx 配置 try_files 会更简单，且 SEO 友好
  trailingSlash: true,
  /* config options here */
};

export default nextConfig;
