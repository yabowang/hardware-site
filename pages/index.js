import Link from 'next/link';
import { NextSeo } from 'next-seo';
import ProductCard from '../components/ProductCard';
import products from '../data/products.json';

export default function Home({ featuredProducts }) {
  return (
    <>
      <NextSeo
        title="Xiaoman Tools"
        description="Professional manufacturer of HSS twist drill bits, masonry drills and hardware tools. Factory direct pricing, DIN standard quality, global shipping."
      />

      {/* ================= 工业风 Hero Section (重新设计) ================= */}
      <div className="relative h-[650px] flex items-center overflow-hidden bg-gray-900">

        {/* 1. 背景图片层 */}
        {/* 图片会铺满，object-cover 保证不变形。 */}
        {/* 建议：选用一张【主体在右侧】的图片（比如右边是机器或一堆钻头，左边稍微空一点） */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/factory.jpg')" }}
        >
          {/* 这里不加全局遮罩，保证图片原色透亮 */}
        </div>

        {/* 2. 关键修改：渐变遮罩层 (Gradient Overlay) */}
        {/* 仅在左侧加深色，右侧完全透明。这样左边的字能看清，右边的图也能看清 */}
        {/* 手机端 (默认): 全黑半透明，保证手机上字能看清 */}
        {/* 电脑端 (md): 从左边的 深炭灰(95%) 渐变到 中间的(70%) 再到 右边的全透明(0%) */}
        <div className="absolute inset-0 bg-gray-900/80 md:bg-gradient-to-r md:from-gray-900/95 md:via-gray-900/70 md:to-transparent"></div>

        {/* 3. 内容层 */}
        <div className="relative container-custom w-full z-10 pt-10">
          <div className="max-w-2xl">
            {/* 顶栏小字：使用工业橙色 (Amber/Orange) */}
            <div className="flex items-center gap-3 mb-6">
              <span className="h-1 w-12 bg-amber-500"></span>
              <span className="text-amber-500 font-bold tracking-widest uppercase text-sm">
                Shanghai Daoge Xiaoman Tools
              </span>
            </div>

            {/* 主标题：纯白，带一点阴影增加对比度 */}
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-md">
              Precision Tools <br />
              <span className="text-gray-300">Global Standards.</span>
            </h1>

            {/* 副标题：浅灰，字号适中 */}
            <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-lg">
              We deliver professional-grade tools backed by rigorous testing and superior technical service.
              {/* We combine <strong className="text-white">low factory costs</strong> with strict DIN standard quality control. */}
            </p>

            {/* 按钮组：经典的工业风配色 (橙色实心 + 白色描边) */}
            <div className="flex flex-col sm:flex-row gap-5">
              {/* 主按钮：橙色背景，黑色文字 (高对比度，最吸睛) */}
              <Link href="/products" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-gray-900 bg-amber-500 rounded hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20">
                View Products
              </Link>

              {/* 次按钮：透明背景，白色边框 */}
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white border border-gray-500 rounded hover:bg-white hover:text-gray-900 hover:border-white transition-all">
                Contact Factory
              </Link>
            </div>

            {/* 信任背书小标 (可选) */}
            <div className="mt-12 flex items-center gap-6 text-gray-400 text-sm font-medium">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Precision Manufacturing
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Strict Quality Control
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Flexible OEM & ODM Solutions
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================= End Hero Section ================= */}

      {/* Featured Products */}
      <div className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
              <div className="h-1 w-20 bg-amber-500 mb-4"></div> {/* 装饰线条 */}
              <p className="text-gray-600">Precision-engineered industrial tools for metal and concrete applications.</p>
            </div>
            <Link href="/products" className="hidden md:flex items-center text-blue-700 font-bold hover:text-blue-900 transition mt-6 md:mt-0">
              View All Products
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12 md:hidden">
            <Link href="/products" className="inline-block w-full py-4 bg-blue-600 text-white font-bold rounded">View All Products</Link>
          </div>
        </div>
      </div>

      {/* Factory Advantages - 保持简洁 */}
      <div className="py-24 bg-white border-t border-gray-100">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-amber-600 font-bold uppercase tracking-wider text-sm">Why Choose Us</span>
            <h2 className="text-4xl font-bold mt-2 mb-6 text-gray-900">Engineered for Precision<br />Built to Last</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              In the world of industrial manufacturing, there is no room for error. At Xiaoman Tools, we combine state-of-the-art CNC technology with rigorous material selection to deliver tools that exceed expectations.
            </p>

            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <span className="font-bold">1</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">Advanced Manufacturing</h4>
                  <p className="text-gray-500">Our facility is equipped with the latest multi-axis CNC grinding centers. This ensures every drill bit and cutting tool meets micron-level precision standards.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <span className="font-bold">2</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">Premium Materials</h4>
                  <p className="text-gray-500">Hardness defines performance. We use only premium-grade carbides and high-speed steels. Our tools maintain their edge longer, even under the most demanding machining conditions.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <span className="font-bold">3</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">100% Quality Control</h4>
                  <p className="text-gray-500">Every batch goes through strict inspection before leaving our floor. We don't just sell tools; we deliver consistency you can trust.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* 右侧图片区域 */}
          <div className="relative h-[550px] w-[950px] bg-gray-100 rounded-lg overflow-hidden shadow-xl border-4 border-white">
            {/* 复用 Banner 图，或者换成工厂内部图 */}
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/banner.jpg')" }}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const featuredProducts = products.slice(0, 3);
  return {
    props: { featuredProducts },
  };
}