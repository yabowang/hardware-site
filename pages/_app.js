import '../styles/globals.css';
import Layout from '../components/Layout'; 
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
// 1. 引入 Next.js 的高性能脚本组件
import Script from 'next/script'; 

function MyApp({ Component, pageProps }) {
  // 把这里换成你的真实 GA4 ID
  const GA_TRACKING_ID = 'G-ZNHEQQ7MBK'; 

  return (
    <>
      {/* 2. 注入 Google Analytics 核心外部脚本 */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      
      {/* 3. 注入 Google Analytics 配置代码 */}
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      {/* 网站原有的内容包裹区 */}
      <Layout>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;