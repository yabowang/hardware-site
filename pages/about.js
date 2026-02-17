import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { FcSearch, FcRadarPlot, FcApproval } from 'react-icons/fc';

export default function About() {
  return (
    <>
      <NextSeo
        title="About Us - Xiaoman Tools"
        description="Learn about Shanghai Daoge Xiaoman Tools Co., Ltd., a professional manufacturer of drill bits and hardware tools."
      />

      {/* ================= Header Section (带背景图) ================= */}
      {/* 这里设置 py-24 (上下内边距) 让高度撑开，显得大气 */}
      <div className="relative py-24 md:py-32 bg-gray-900 flex items-center justify-center overflow-hidden">

        {/* 1. 背景图片层 */}
        {/* 请确保 public/images/ 下有一张叫 about-bg.jpg 的图片 */}
        {/* 建议：用一张工厂全景图、仓库图或者团队合影 */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/about-bg.jpg')" }}
        ></div>

        {/* 2. 遮罩层 (Overlay) */}
        {/* 使用深蓝色半透明遮罩，让文字更凸显，同时保持品牌色调 */}
        <div className="absolute inset-0 bg-blue-900/85 mix-blend-multiply"></div>

        {/* 3. 文字内容层 (z-10 浮在最上面) */}
        <div className="relative z-10 container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            About Xiaoman Tools
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
            Precision Manufacturing. Industrial Grade Performance.
          </p>
        </div>
      </div>
      {/* ================= End Header ================= */}

      <div className="container-custom py-16">
        <div className="max-w-3xl mx-auto prose prose-lg text-gray-600">
          <p className="lead text-xl text-gray-800 font-semibold mb-6">
            A leading manufacturer of high-performance cutting tools and abrasives.
            From raw material to finished product, we engineer quality into every detail.
            Advanced Manufacturing Based in Shanghai.
          </p>
          <p className="mb-4">
            Founded with a commitment to engineering excellence, <span className="font-bold">Xiaoman Tools</span> creates professional-grade tools for the global market. We are not just a supplier; we are <span className="font-bold">builders of precision.</span>
          </p>
          <p className="mb-4">
            Our manufacturing facility integrates state-of-the-art <span className="font-bold">CNC grinding technology</span> with proprietary heat treatment processes to produce tools that withstand the toughest industrial applications. We specialize in High-Speed Steel (HSS) metallurgy and advanced abrasive bonding systems.
          </p>
          <p className="mb-4">
            By controlling the entire production cycle—from the initial CAD design to the final coating—we ensure that our drill bits and abrasives meet strict <span className="font-bold">DIN and ISO standards.</span> When you choose us, you are buying directly from the source of quality.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Core Strengths</h3>
          <div className="mb-8">
            <h4 className="text-lg font-bold text-gray-900"> <FcSearch className="inline-block mr-2" />Advanced Manufacturing</h4>
            <p className="mb-4">
              Our automated production lines ensure micron-level accuracy and consistent geometry for superior concentricity.
            </p>
          </div>
          <div className="mb-8">
            <h4 className="text-lg font-bold text-gray-900"> <FcRadarPlot className="inline-block mr-2" />Materials Science</h4>
            <p className="mb-4">
              We use only premium-grade HSS and industrial diamonds/abrasives to guarantee maximum hardness and heat resistance.
            </p>
          </div>
          <div className="mb-8">
            <h4 className="text-lg font-bold text-gray-900"> <FcApproval className="inline-block mr-2" />In-House Quality Lab</h4>
            <p className="mb-4">
              Every batch undergoes rigorous torque testing, hardness verification, and optical inspection in our own laboratory before leaving our factory.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Engineered for Professional Applications</h3>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li><strong>High-Performance Cutting Tools:</strong> We manufacture a comprehensive range of HSS Twist Drills, Cobalt Heavy-Duty Bits, and Masonry Tools. Our drill bits feature fully ground flutes and split-point tips for faster penetration and reduced walking. Designed for precision metalworking and concrete drilling.</li>
            <li><strong>Industrial Abrasives:</strong> Our abrasive division produces durable grinding wheels and cutting discs with optimized bonding matrices. Engineered for high material removal rates and extended service life on steel, stainless steel, and stone.</li>
          </ul>

          {/* 增加一个行动呼吁块 */}
          <div className="mt-12 bg-blue-50 p-8 rounded-xl border border-blue-100 text-center shadow-sm">
            <h3 className="text-xl font-bold text-blue-900 mb-2">Ready to work with us?</h3>
            <p className="mb-6 text-blue-800">We offer flexible OEM services and Low MOQ for new partners.</p>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg transition">
              Contact Our Sales Team
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}