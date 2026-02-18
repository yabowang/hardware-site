import { useState } from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { FaWhatsapp, FaCheckCircle } from 'react-icons/fa';
import products from '../../data/products.json';

export default function ProductDetail({ product }) {
  // 状态：用于控制顶部主图显示哪一张
  const [activeImage, setActiveImage] = useState(product?.images[0] || '');

  if (!product) return <div className="text-center py-20">Loading...</div>;

  // 预设 WhatsApp 询盘话术
  const whatsappMsg = `Hi, I am interested in ${product.name} (ID: ${product.id}). Could you send me the latest FOB price?`;
  const whatsappLink = `https://wa.me/8615618076867?text=${encodeURIComponent(whatsappMsg)}`;

  // 获取底部详情图 (如果有 detail_images 就用，没有就用 images 兜底)
  const detailImages = product.detail_images || product.images;

  return (
    <>
      <NextSeo
        title={`${product.name} | Daoge Tools`}
        description={product.seo_desc || product.description}
        openGraph={{
          title: product.seo_title,
          description: product.seo_desc,
          images: [{ url: `https://www.xiaomantools.com${product.images[0]}` }],
        }}
      />
      
      <div className="bg-gray-50 pb-20">
        
        {/* ================= 1. 顶部：产品信息与主图 ================= */}
        <div className="bg-white border-b border-gray-200">
          <div className="container-custom py-8 md:py-12">
            
            {/* 面包屑导航 (SEO 友好) */}
            <nav className="text-sm text-gray-500 mb-8 flex items-center space-x-2">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span>/</span>
              <Link href="/products" className="hover:text-blue-600">Products</Link>
              <span>/</span>
              <span className="text-gray-900 font-medium">{product.category}</span>
            </nav>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              
              {/* 左侧：图片展示区 */}
              <div className="flex flex-col gap-4">
                {/* 大主图 */}
                <div className="bg-gray-50 border border-gray-100 rounded-xl overflow-hidden aspect-square flex items-center justify-center p-4">
                  {activeImage ? (
                    <img 
                      src={activeImage} 
                      alt={product.name} 
                      className="w-full h-full object-contain mix-blend-darken"
                    />
                  ) : (
                    <span className="text-gray-400">No Image Available</span>
                  )}
                </div>
                
                {/* 下方缩略图列表 (超过1张才显示) */}
                {product.images.length > 1 && (
                  <div className="flex gap-3 overflow-x-auto pb-2">
                    {product.images.map((img, idx) => (
                      <button 
                        key={idx} 
                        onClick={() => setActiveImage(img)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg border-2 overflow-hidden p-1 bg-white transition-all ${
                          activeImage === img ? 'border-amber-500 shadow-md' : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover mix-blend-darken" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* 右侧：参数与询盘区 */}
              <div className="flex flex-col">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                    {product.category}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                    {product.name}
                  </h1>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* 规格参数表 */}
                {product.specs && (
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                      Quick Specifications
                    </h3>
                    <div className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
                      <table className="w-full text-sm text-left">
                        <tbody>
                          {Object.entries(product.specs).map(([key, value], index) => (
                            <tr key={key} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                              <th className="py-3 px-4 font-semibold text-gray-700 w-1/3 border-b border-gray-100">{key}</th>
                              <td className="py-3 px-4 text-gray-900 border-b border-gray-100">{value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* 卖点列表 */}
                <ul className="space-y-2 mb-8 text-gray-600 font-medium">
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500" /> Factory Direct Pricing</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500" /> Strict DIN Standard QC</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500" /> Support OEM / Custom Packaging</li>
                </ul>

                {/* 询盘按钮 */}
                <div className="mt-auto pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 mb-4 font-medium">Want to know the MOQ and latest price?</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href={whatsappLink} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-4 rounded-lg font-bold text-lg hover:bg-[#128C7E] transition shadow-lg shadow-green-500/20"
                    >
                      <FaWhatsapp size={24} />
                      Chat on WhatsApp
                    </a>
                    <a 
                      href="mailto:info@xiaomantools.com" 
                      className="flex-1 flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition shadow-lg shadow-gray-900/20"
                    >
                      Email Inquiry
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= 2. 底部：商品详情 (图片流) ================= */}
        <div className="container-custom mt-12">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            {/* 标题栏 */}
            <div className="bg-gray-100 border-b border-gray-200 px-8 py-4">
              <h2 className="text-2xl font-bold text-gray-900">Product Details</h2>
            </div>
            
            {/* 详情图展示区 */}
            <div className="p-4 md:p-8 flex flex-col items-center">
              {detailImages && detailImages.length > 0 ? (
                // 循环渲染详情图，设置为 w-full 最大宽度 100%
                detailImages.map((imgUrl, index) => (
                  <img 
                    key={index}
                    src={imgUrl} 
                    alt={`${product.name} Detail ${index + 1}`} 
                    className="w-full max-w-4xl h-auto block mb-[-1px]" // mb-[-1px] 消除图片之间的缝隙
                    loading="lazy" // 延迟加载，优化长图页面的性能
                  />
                ))
              ) : (
                <div className="py-20 text-gray-400">
                  Detail images will be updated soon.
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

// 静态路径生成 (不用动)
export async function getStaticPaths() {
  const paths = products.map((product) => ({
    params: { slug: product.slug },
  }));
  return { paths, fallback: false };
}

// 静态属性获取 (不用动)
export async function getStaticProps({ params }) {
  const product = products.find((p) => p.slug === params.slug);
  return { props: { product } };
}