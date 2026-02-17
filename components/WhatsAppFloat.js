import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppFloat() {
  // 替换为你的真实号码，注意要带国家代码，不要加 + 号
  // 比如中国手机号 13800138000 -> 8613800138000
  const phoneNumber = "8615618076867"; 
  const defaultMessage = "Hello, I am interested in your drill bits.";

  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#128C7E] transition-transform hover:scale-105 active:scale-95 cursor-pointer group"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
      <span className="font-bold text-sm hidden group-hover:inline-block transition-all duration-300">
        Chat Now
      </span>
    </a>
  );
}