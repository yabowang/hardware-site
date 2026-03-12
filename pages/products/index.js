import { useState, useMemo } from 'react';
import { NextSeo } from 'next-seo';
import ProductCard from '../../components/ProductCard';
import productsData from '../../data/products.json';
import categoriesTree from '../../data/categories.json';

export default function ProductList({ allProducts, categories }) {
  // 状态管理：现在存储的是选中的分类 ID，而不是分类 Name
  const [selectedL1Id, setSelectedL1Id] = useState('All');
  const [selectedL2Id, setSelectedL2Id] = useState('All');
  const [selectedL3Id, setSelectedL3Id] = useState('All');

  // ================= 1. 构建 ID 到 Name 的全局映射字典 =================
  // 这样我们可以很方便地通过 ID 查出对应的名字，传给商品卡片显示
  const categoryIdToName = useMemo(() => {
    const map = {};
    categories.forEach(l1 => {
      map[l1.id] = l1.name;
      l1.children?.forEach(l2 => {
        map[l2.id] = l2.name;
        l2.children?.forEach(l3 => {
          map[l3.id] = l3.name;
        });
      });
    });
    return map;
  }, [categories]);

  // ================= 2. 动态计算可供选择的子分类列表 =================
  const availableL1 = categories;

  // 寻找当前选中的一级分类对象
  const currentL1Obj = categories.find(c => c.id === selectedL1Id);
  const availableL2 = currentL1Obj?.children || [];

  // 寻找当前选中的二级分类对象
  const currentL2Obj = currentL1Obj?.children?.find(c => c.id === selectedL2Id);
  const availableL3 = currentL2Obj?.children || [];

  // ================= 3. 处理点击事件 =================
  const handleL1Change = (id) => {
    setSelectedL1Id(id);
    setSelectedL2Id('All'); // 重置下级 ID
    setSelectedL3Id('All');
  };

  const handleL2Change = (id) => {
    setSelectedL2Id(id);
    setSelectedL3Id('All');
  };

  // ================= 4. 核心过滤逻辑 (基于 ID) =================
  const filteredProducts = allProducts.filter(product => {
    if (selectedL1Id === 'All') return true;

    let validLeafIds = [];

    if (selectedL3Id !== 'All') {
      // 选到了三级，目标 ID 唯一
      validLeafIds = [selectedL3Id];
    } else if (selectedL2Id !== 'All') {
      // 选了二级，目标 ID 是该二级下的所有三级 ID
      validLeafIds = currentL2Obj?.children?.map(c => c.id) || [];
    } else {
      // 选了一级，目标 ID 是该一级下的所有三级 ID
      validLeafIds = currentL1Obj?.children?.flatMap(l2 => l2.children?.map(c => c.id) || []) || [];
    }

    // 判断商品的 category ID 是否在计算出的有效列表中
    return validLeafIds.includes(product.category);
  });

  return (
    <>
      <NextSeo
        title="Product Catalog | Daoge Xiaoman Tools"
        description="Browse our comprehensive catalog of industrial cutting tools, drill bits, and hardware accessories."
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

          {/* ================= 筛选面板 ================= */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-200 mb-10">

            {/* 第一级分类 */}
            <div className="flex flex-col md:flex-row items-start md:items-center border-b border-gray-100 pb-4 mb-4">
              <span className="text-sm font-bold text-gray-900 w-36 shrink-0 mb-3 md:mb-0">Main Category:</span>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleL1Change('All')}
                  className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${selectedL1Id === 'All' ? 'bg-amber-500 text-gray-900' : 'text-gray-600 hover:bg-amber-100 hover:text-amber-700'}`}
                >
                  All
                </button>
                {availableL1.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => handleL1Change(cat.id)}
                    className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${selectedL1Id === cat.id ? 'bg-amber-500 text-gray-900' : 'text-gray-600 hover:bg-amber-100 hover:text-amber-700'}`}
                  >
                    {cat.name} {/* 界面渲染依然是漂亮的文本 */}
                  </button>
                ))}
              </div>
            </div>

            {/* 第二级分类 */}
            {selectedL1Id !== 'All' && availableL2.length > 0 && (
              <div className="flex flex-col md:flex-row items-start md:items-center border-b border-gray-100 pb-4 mb-4">
                <span className="text-sm font-bold text-gray-900 w-36 shrink-0 mb-3 md:mb-0">Sub Category:</span>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleL2Change('All')}
                    className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${selectedL2Id === 'All' ? 'bg-amber-500 text-gray-900' : 'text-gray-600 hover:bg-amber-100 hover:text-amber-700'}`}
                  >
                    All
                  </button>
                  {availableL2.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => handleL2Change(cat.id)}
                      className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${selectedL2Id === cat.id ? 'bg-amber-500 text-gray-900' : 'text-gray-600 hover:bg-amber-100 hover:text-amber-700'}`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 第三级分类 */}
            {selectedL2Id !== 'All' && availableL3.length > 0 && (
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <span className="text-sm font-bold text-gray-900 w-36 shrink-0 mb-3 md:mb-0">Product Type:</span>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedL3Id('All')}
                    className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${selectedL3Id === 'All' ? 'bg-amber-500 text-gray-900' : 'text-gray-600 hover:bg-amber-100 hover:text-amber-700'}`}
                  >
                    All
                  </button>
                  {availableL3.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedL3Id(cat.id)}
                      className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${selectedL3Id === cat.id ? 'bg-amber-500 text-gray-900' : 'text-gray-600 hover:bg-amber-100 hover:text-amber-700'}`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

          </div>

          <div className="flex justify-between items-center mb-6 text-sm text-gray-500">
            <div>Showing <span className="font-bold text-gray-900">{filteredProducts.length}</span> products</div>
          </div>

          {/* ================= 商品网格 ================= */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {filteredProducts.map(product => {
                // 关键一步：把 ID 翻译成 Name 后再传给卡片
                const productWithCatName = {
                  ...product,
                  categoryName: categoryIdToName[product.category]
                };
                return <ProductCard key={product.id} product={productWithCatName} />
              })}
            </div>
          ) : (
            <div className="bg-white p-12 text-center rounded-xl border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">No products match this category</h3>
              <button onClick={() => handleL1Change('All')} className="mt-6 text-amber-600 font-bold hover:underline">
                Clear Filters
              </button>
            </div>
          )}

        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      allProducts: productsData,
      categories: categoriesTree,
    },
  };
}