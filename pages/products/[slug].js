import products from '../../data/products.json';
import { NextSeo } from 'next-seo';
import { FaWhatsapp } from 'react-icons/fa';
import Head from 'next/head';

export default function ProductDetail({ product }) {
    if (!product) return <div>Loading...</div>;

    const whatsappMsg = `Hi, I am interested in ${product.name}.`;
    const whatsappLink = `https://wa.me/8615618076867?text=${encodeURIComponent(whatsappMsg)}`;

    const jsonLd = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": product.name,
        "image": [
            `https://xiaomantools.com${product.images[0]}`
        ],
        "description": product.description,
        "sku": product.id,
        "brand": {
            "@type": "Brand",
            "name": "Daoge Xiaoman" // 你的品牌名
        },
        "offers": {
            "@type": "Offer",
            "url": `https://xiaomantools.com/products/${product.slug}`,
            "priceCurrency": "USD",
            "price": "0.00", // 如果不公开价格，可不写或写0
            "availability": "https://schema.org/InStock",
            "itemCondition": "https://schema.org/NewCondition"
        }
    };

    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </Head>
            <NextSeo
                title={product.seo_title}
                description={product.seo_desc}
                openGraph={{
                    title: product.seo_title,
                    description: product.seo_desc,
                    images: [{ url: product.images[0] || '' }],
                }}
            />

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* 左侧图片 */}
                    <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
                        [Product Image Gallery Component]
                    </div>

                    {/* 右侧信息 */}
                    <div>
                        <span className="text-sm text-gray-500 uppercase tracking-wide">{product.category}</span>
                        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">{product.name}</h1>
                        <p className="text-gray-700 mb-6">{product.description}</p>

                        {/* 参数表格 */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold mb-3">Technical Specifications</h3>
                            <table className="w-full text-sm text-left text-gray-500">
                                <tbody>
                                    {Object.entries(product.specs).map(([key, value]) => (
                                        <tr key={key} className="border-b">
                                            <th className="py-2 font-medium text-gray-900">{key}</th>
                                            <td className="py-2">{value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* CTA 按钮组 */}
                        <div className="flex gap-4">
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition"
                            >
                                <FaWhatsapp size={20} />
                                Chat on WhatsApp
                            </a>
                            <a href="#contact-form" className="flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-lg font-bold hover:bg-gray-50 transition">
                                Inquire Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// 生成所有静态路径
export async function getStaticPaths() {
    const paths = products.map((product) => ({
        params: { slug: product.slug },
    }));

    return { paths, fallback: false };
}

// 获取特定产品数据
export async function getStaticProps({ params }) {
    const product = products.find((p) => p.slug === params.slug);
    return { props: { product } };
}