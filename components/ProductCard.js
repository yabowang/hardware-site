import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white flex flex-col">
      {/* 图片区域 - 实际开发中替换为 <img src={product.images[0]} ... /> */}
      <Link href={`/products/${product.slug}`} className="h-48 bg-gray-100 relative overflow-hidden flex items-center justify-center">
         <div className="text-gray-400">
            {/* 这里的 placeholder 可以换成真实图片 */}
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
         </div>
         {/* 悬停时的遮罩效果 */}
         <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-300" />
      </Link>
      
      {/* 内容区域 */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1">
          {product.category}
        </div>
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm line-clamp-2 mb-4 flex-grow">
          {product.description}
        </p>
        
        {/* 底部按钮 */}
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs text-gray-500 font-medium">MOQ: 500 pcs</span>
            <Link href={`/products/${product.slug}`} className="text-sm font-semibold text-blue-600 hover:text-blue-800 flex items-center">
              View Specs 
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
        </div>
      </div>
    </div>
  );
}