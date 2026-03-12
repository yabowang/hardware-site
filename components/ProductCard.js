import Link from 'next/link';
import categoriesTree from '../data/categories.json';

// 辅助函数：根据 ID 在整个分类树中寻找对应的真实 Name
function getCategoryName(id) {
  if (!id) return '';
  for (const l1 of categoriesTree) {
    if (l1.id === id) return l1.name;
    if (l1.children) {
      for (const l2 of l1.children) {
        if (l2.id === id) return l2.name;
        if (l2.children) {
          for (const l3 of l2.children) {
            if (l3.id === id) return l3.name;
          }
        }
      }
    }
  }
  return id; // 如果万一没找到，兜底显示原样
}

export default function ProductCard({ product }) {
  // 优先用外部传进来的 categoryName，如果没有，组件自己去查
  const categoryName = product.categoryName || getCategoryName(product.category);
  const coverImage = product?.images?.[0] || '';

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
      {/* 1. 商品图片 */}
      <Link href={`/products/${product.slug}`} className="h-56 bg-white relative overflow-hidden flex items-center justify-center border-b border-gray-100">
        {coverImage ? (
          // 如果有图片，渲染真实图片
          <img
            src={coverImage}
            alt={product.name}
            // object-contain 保证五金产品(如长条形的钻头)不会被异常裁剪
            // group-hover:scale-110 加上鼠标悬停时图片微微放大的高级感特效
            className="w-full h-full object-contain p-6 transform group-hover:scale-110 transition-transform duration-500 ease-in-out mix-blend-darken"
          />
        ) : (
          // 如果 JSON 里没配图片，显示占位符
          <div className="text-gray-300 flex flex-col items-center">
            <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            <span className="text-sm font-medium text-gray-400">Image Coming Soon</span>
          </div>
        )}

        {/* 悬停时整个图片区域的轻微遮罩效果 */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-[0.02] transition-all duration-300 z-10" />
      </Link>

      <div className="p-6 flex flex-col flex-grow">
        {/* 2. 分类名称 (现在它足够聪明，一定会显示 Name 了) */}
        <div className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-2">
          {categoryName}
        </div>

        {/* 3. 商品名称 (加了 line-clamp-2 防止名称过长换行破坏排版) */}
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-amber-500 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {/* 4. 商品简介 */}
        {/* 外层盒子只负责 flex-grow 填满剩余空间，把 Details 按钮推到底部 */}
        <div className="mb-4 flex-grow overflow-hidden">

          {/* 内层文本只负责纯粹的 3 行截断，绝对不拉伸自己的高度 */}
          <p className="text-gray-500 text-sm line-clamp-4 overflow-hidden break-words">
            {product.description}
          </p>

        </div>

        {/* 5. 底部按钮区 */}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-xs font-bold text-gray-700 bg-gray-100 px-3 py-1 rounded-md">
            OEM/ODM
          </span>
          <Link href={`/products/${product.slug}`} className="text-amber-600 font-bold text-sm hover:text-amber-500 flex items-center transition-colors">
            Details
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </div>
  );
}