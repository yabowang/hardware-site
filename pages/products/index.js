import { useState } from 'react';
import { NextSeo } from 'next-seo';
import ProductCard from '../../components/ProductCard'; // 核心：引入我们做好的卡片组件
import products from '../../data/products.json';

export default function ProductList({ allProducts, categories }) {
  // 状态管理：当前选中的分类，默认是 'All'
  const [filter, setFilter] = useState('All');

  // 根据当前选择的分类过滤商品
  const filteredProducts = filter === 'All'
    ? allProducts
    : allProducts.filter(p => p.category === filter);

  return (
    <>
      <NextSeo
        title="Product Catalog - Xiaoman Tools"
        description="Browse our complete catalog of industrial hardware tools, including HSS twist drill bits, masonry drills, and saw blades."
      />

      {/* ================= 1. 头部 Banner (带背景图版) ================= */}
      <div className="relative py-20 md:py-32 text-center border-b-4 border-amber-500 overflow-hidden flex items-center justify-center">

        {/* 1. 背景图片层 */}
        {/* 建议在这里放一张满是钻头、工具墙或者仓库货架的图片 */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/factory.jpg')" }}
        ></div>

        {/* 2. 深色遮罩层 */}
        {/* 使用 bg-gray-900/85 (85%不透明度的深灰)，确保无论图片多亮，白色文字都能看清 */}
        <div className="absolute inset-0 bg-gray-900/85"></div>

        {/* 3. 文字内容层 (必须加 relative 和 z-10 浮在遮罩上方) */}
        <div className="relative z-10 container-custom">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
            Our Products
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            High-performance cutting tools engineered for precision and durability.
            Explore our catalog designed for global industrial standards.
          </p>
        </div>
      </div>
      {/* ============================================================== */}
      

      <div className="bg-gray-50 py-12 min-h-screen">
        <div className="container-custom">

          {/* ================= 2. 分类筛选器 (Category Filters) ================= */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {/* "全部" 按钮 */}
            <button
              onClick={() => setFilter('All')}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm ${filter === 'All'
                ? 'bg-amber-500 text-gray-900 scale-105'
                : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-gray-200'
                }`}
            >
              All Products
            </button>

            {/* 动态渲染其他分类按钮 */}
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm ${filter === cat
                  ? 'bg-amber-500 text-gray-900 scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-gray-200'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* ================= 3. 商品网格 (Product Grid) ================= */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {filteredProducts.map(product => (
                // 直接使用我们封装好的 ProductCard，代码瞬间清爽
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            // 兜底设计：如果某个分类下没有商品，显示友好提示
            <div className="text-center py-20">
              <svg className="mx-auto h-12 w-12 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></svg>
              <h3 className="text-lg font-medium text-gray-900">No products found</h3>
              <p className="mt-1 text-gray-500">We are updating our catalog for this category.</p>
            </div>
          )}

          {/* ================= 4. 结果统计 ================= */}
          <div className="text-center mt-12 text-gray-500 text-sm font-medium border-t border-gray-200 pt-8">
            Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </div>

        </div>
      </div>
    </>
  );
}

// ================= 构建时数据处理 =================
export async function getStaticProps() {
  // 从 JSON 中提取所有不重复的分类名称 (category)
  const categories = [...new Set(products.map(p => p.category))];

  return {
    props: {
      allProducts: products, // 传给页面的完整商品数据
      categories,            // 传给页面的分类列表
    },
  };
}