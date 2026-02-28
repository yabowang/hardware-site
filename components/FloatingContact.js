import { useState } from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaTimes, FaCommentDots } from 'react-icons/fa';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // 外层容器：绝对固定在屏幕最右侧居中
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex items-center">
      
      {/* 1. 呼出按钮 (闭合时紧贴右边缘，展开时向右隐藏) */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`absolute right-0 bg-amber-500 text-gray-900 p-3 rounded-l-xl shadow-[-4px_0_15px_rgba(0,0,0,0.1)] hover:bg-amber-400 transition-all duration-300 ease-in-out flex items-center justify-center ${
          isOpen ? 'translate-x-full opacity-0 pointer-events-none' : 'translate-x-0 opacity-100'
        }`}
        title="Contact Us"
      >
        <FaCommentDots size={24} />
      </button>

      {/* 2. 社交面板 (闭合时向右滑出屏幕外，展开时紧贴右边缘) */}
      <div 
        className={`bg-white shadow-[-5px_5px_20px_rgba(0,0,0,0.15)] rounded-l-2xl border border-r-0 border-gray-200 p-3 flex flex-col items-center gap-4 transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <button 
          onClick={() => setIsOpen(false)} 
          className="text-gray-400 hover:text-gray-900 transition-colors mb-1 p-1"
          title="Close"
        >
          <FaTimes size={20} />
        </button>

        <a 
          href="https://wa.me/8615618076867"
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-[#25D366] text-white p-3 rounded-full hover:scale-110 hover:shadow-lg transition-all" 
          title="WhatsApp"
        >
          <FaWhatsapp size={24} />
        </a>

        <a 
          href="https://www.facebook.com/xiaomantools" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-[#1877F2] text-white p-3 rounded-full hover:scale-110 hover:shadow-lg transition-all" 
          title="Facebook"
        >
          <FaFacebook size={24} />
        </a>

        <a 
          href="https://www.instagram.com/xiaomantools" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white p-3 rounded-full hover:scale-110 hover:shadow-lg transition-all" 
          title="Instagram"
        >
          <FaInstagram size={24} />
        </a>
      </div>
    </div>
  );
}