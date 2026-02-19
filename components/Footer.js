import Link from 'next/link';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-blue-900">
      <div className="container-custom grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {/* 公司简介 */}
        <div className="md:col-span-1">
          <Link href="/" className="text-2xl font-bold text-white mb-4 block">
            XIAOMAN TOOLS
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            A premier provider of precision cutting tools and industrial hardware based in Shanghai. We are dedicated to strict quality standards, technical innovation, and reliable global service.
          </p>

        </div>

        {/* 产品链接 */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-blue-400">Products</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link href="/products" className="hover:text-white transition">HSS Twist Drills</Link></li>
            <li><Link href="/products" className="hover:text-white transition">Masonry Drill Bits</Link></li>
            <li><Link href="/products" className="hover:text-white transition">SDS Plus Hammer Drills</Link></li>
            <li><Link href="/products" className="hover:text-white transition">Saw Blades</Link></li>
          </ul>
        </div>

        {/* 快速链接 */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-blue-400">Quick Links</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link href="/products" className="hover:text-white transition">Products</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
            {/* <li><Link href="/blog" className="hover:text-white transition">Industry News</Link></li> */}
            <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
            {/* <li><a href="/catalog.pdf" className="hover:text-white transition" target="_blank">Download Catalog</a></li> */}
          </ul>
        </div>

        {/* 联系方式 */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-blue-400">Contact Us</h4>
          <ul className="space-y-4 text-sm text-gray-400">

            <li className="flex items-center">
              <FaEnvelope className="mr-3 text-blue-500 shrink-0" />
              <a href="mailto:info@xiaomantools.com" className="hover:text-white">info@xiaomantools.com</a>
            </li>
            <li className="flex items-center">
              <FaWhatsapp className="mr-3 text-blue-500 shrink-0" />
              <a href="https://wa.me/8615618076867" target="_blank" className="hover:text-white">+86 156 1807 6867</a>
            </li>
            <li className="flex items-center">
              <FaFacebook className="mr-3 text-blue-500 shrink-0" />
              {/* 社交媒体链接 */}
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=61587991158000" className="text-gray-400 hover:text-white transition">Xiaoman Tools</a>
            </li>
            <li className="flex items-start">
              <FaMapMarkerAlt className="mt-1 mr-3 text-blue-500 shrink-0" />
              <span>No. 1000 Zhenchen Road, Baoshan District, Shanghai, China</span>
            </li>
          </ul>
        </div>
      </div>

      {/* 版权信息 */}
      <div className="container-custom pt-8 border-t border-gray-800 text-center md:text-left md:flex justify-between items-center text-xs text-gray-500">
        <p>&copy; {currentYear} Shanghai Daoge Xiaoman Tools Co., Ltd. All rights reserved.</p>
        <div className="mt-4 md:mt-0 space-x-4">
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}