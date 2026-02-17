import Head from 'next/head';
import Link from 'next/link';
import products from '../../data/products.json'; // 直接导入JSON
import { useState } from 'react';

export default function ProductList({ allProducts, categories }) {
  const [filter, setFilter] = useState('All');

  const filteredProducts = filter === 'All' 
    ? allProducts 
    : allProducts.filter(p => p.category === filter);

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Product Catalog - Xiaoman Tools</title>
        <meta name="description" content="Explore our wide range of hardware tools." />
      </Head>

      <h1 className="text-3xl font-bold mb-6">Our Products</h1>

      {/* 分类筛选 */}
      <div className="flex gap-4 mb-8 overflow-x-auto">
        <button 
          onClick={() => setFilter('All')}
          className={`px-4 py-2 rounded ${filter === 'All' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          All
        </button>
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded ${filter === cat ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 产品网格 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition">
            <div className="h-48 bg-gray-100 flex items-center justify-center text-gray-400">
               {/* 实际项目中这里放 <Image /> */}
               [Product Image Placeholder]
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
              <Link href={`/products/${product.slug}`} className="text-blue-600 font-medium hover:underline">
                View Specs &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 构建时获取数据
export async function getStaticProps() {
  // 提取所有唯一分类
  const categories = [...new Set(products.map(p => p.category))];
  
  return {
    props: {
      allProducts: products,
      categories,
    },
  };
}