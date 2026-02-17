import '../styles/globals.css';
// 1. 引入 Layout 组件 (注意路径 ../components/Layout)
import Layout from '../components/Layout'; 
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

function MyApp({ Component, pageProps }) {
  return (
    // 2. 用 Layout 包裹住 Component
    // Component 代表你当前访问的页面（比如 index.js 或 contact.js）
    <Layout>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;