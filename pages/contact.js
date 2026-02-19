import { NextSeo } from 'next-seo';
import { FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook } from 'react-icons/fa';

export default function Contact() {
  return (
    <>
      <NextSeo
        title="Contact Us - Xiaoman Tools"
        description="Get in touch with us for inquiries about drill bits and hardware tools. We provide OEM services and global shipping."
      />

      {/* ================= 1. 头部 Banner (工业风背景图) ================= */}
      <div className="relative py-24 md:py-32 flex items-center justify-center overflow-hidden border-b-4 border-amber-500">
        {/* 背景图：建议用一张带电话客服、或者工厂外景的照片 */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/about-bg.jpg')" }}
        ></div>
        {/* 遮罩层 */}
        <div className="absolute inset-0 bg-gray-900/85"></div>

        <div className="relative z-10 container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
            Contact Factory
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Ready to elevate your hardware supply chain? Reach out to our Shanghai team today for catalogs, latest  prices, and OEM inquiries.
          </p>
        </div>
      </div>
      {/* ================================================================ */}

      <div className="bg-gray-50 py-16 md:py-24">
        <div className="container-custom">

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">

            {/* ================= 左侧：联系信息 (可点击) ================= */}
            {/* 占据 2 列宽度，使用深色背景对比 */}
            <div className="lg:col-span-2 bg-gray-900 text-white p-10 md:p-12 flex flex-col justify-between relative overflow-hidden">
              {/* 右下角的装饰性大图标水印 */}
              <FaWhatsapp className="absolute -bottom-10 -right-10 text-gray-800 opacity-50 w-64 h-64 pointer-events-none" />

              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4 text-white">Get In Touch</h2>
                <p className="text-gray-400 mb-12 text-lg">
                  Fill up the form or click the links below to connect with us instantly.
                </p>

                <div className="space-y-8">
                  {/* 电话: 使用 tel: 协议，手机点击直接拨号 */}
                  <a href="tel:+8615618076867" className="flex items-start group">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mr-4 group-hover:bg-amber-500 transition-colors">
                      <FaPhone className="text-amber-500 group-hover:text-gray-900 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-300 group-hover:text-amber-500 transition-colors">Phone</h3>
                      <p className="text-white text-lg font-medium">+86 156 1807 6867</p>
                    </div>
                  </a>

                  {/* 邮箱: 使用 mailto: 协议，点击唤起邮件客户端 */}
                  <a href="mailto:info@xiaomantools.com" className="flex items-start group">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mr-4 group-hover:bg-amber-500 transition-colors">
                      <FaEnvelope className="text-amber-500 group-hover:text-gray-900 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-300 group-hover:text-amber-500 transition-colors">Email</h3>
                      <p className="text-white text-lg font-medium">info@xiaomantools.com</p>
                    </div>
                  </a>

                  {/* WhatsApp: 新标签页打开聊天窗口 */}
                  <a
                    href="https://wa.me/8615618076867"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start group"
                  >
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mr-4 group-hover:bg-green-500 transition-colors">
                      <FaWhatsapp className="text-green-500 group-hover:text-white text-2xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-300 group-hover:text-green-400 transition-colors">WhatsApp / WeChat</h3>
                      <p className="text-white text-lg font-medium">+86 156 1807 6867</p>
                    </div>
                  </a>

                  {/* Facebook: 新标签页打开主页 */}
                  <a
                    href="https://www.facebook.com/profile.php?id=61587991158000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start group"
                  >
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors">
                      <FaFacebook className="text-blue-500 group-hover:text-white text-2xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-300 group-hover:text-blue-400 transition-colors">Facebook</h3>
                      <p className="text-white text-lg font-medium">Follow our page</p>
                    </div>
                  </a>

                  {/* 地址: 新标签页打开 Google 地图 */}
                  <a
                    href="https://maps.google.com/?q=Shanghai,China"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start group"
                  >
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mr-4 group-hover:bg-amber-500 transition-colors">
                      <FaMapMarkerAlt className="text-amber-500 group-hover:text-gray-900 text-2xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-300 group-hover:text-amber-500 transition-colors">Headquarters</h3>
                      <p className="text-white text-lg font-medium">No. 1000 Zhenchen Road, Baoshan District, Shanghai, China</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* ================= 右侧：表单 ================= */}
            {/* 占据 3 列宽度 */}
            <div className="lg:col-span-3 p-10 md:p-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>
              <form action="https://formspree.io/f/mqedbnoa" method="POST" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                    <input type="text" name="name" id="name" required className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
                    <input type="email" name="email" id="email" required className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none" placeholder="john@company.com" />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-bold text-gray-700 mb-2">Company Name</label>
                  <input type="text" name="company" id="company" className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none" placeholder="Your Company Ltd." />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Message / Requirement</label>
                  <textarea name="message" id="message" rows="5" required className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none resize-none" placeholder="I am interested in HSS twist drill bits. Please send me your product catalog and FOB price list..."></textarea>
                </div>

                <button type="submit" className="w-full inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-gray-900 bg-amber-500 rounded-lg hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/30">
                  Send Inquiry Now
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}