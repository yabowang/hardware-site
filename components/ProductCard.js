import Link from 'next/link';

export default function ProductCard({ product }) {
  // 提取产品的第一张图片作为卡片的封面图
  // 如果没有图片，给一个空字符串兜底，防止报错
  const coverImage = product?.images?.[0] || '';

  return (
    <div className="group border border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white flex flex-col h-full">

      {/* 图片区域 */}
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

      {/* 内容区域 */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-2">
          {product.category}
        </div>

        <Link href={`/products/${product.slug}`}>
          <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2" title={product.name}>
            {product.name}
          </h3>
        </Link>

        <p className="text-gray-600 text-sm line-clamp-2 mb-6 flex-grow">
          {product.description}
        </p>

        {/* 底部按钮与标识 */}
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded">
            OEM/ODM
          </span>
          <Link href={`/products/${product.slug}`} className="text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center group-hover:translate-x-1 transition-transform">
            Details
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </div>
  );
}