import { NextSeo } from 'next-seo';
import { FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
// import ContactForm from '../components/ContactForm'; // 如果之前有这个组件，这里直接引用；如果没有，可以直接把表单写在下面

export default function Contact() {
  return (
    <>
      <NextSeo 
        title="Contact Us - Xiaoman Tools"
        description="Get in touch with us for inquiries about drill bits and hardware tools." 
      />

      <div className="bg-gray-50 py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-center mb-12">Get In Touch</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-xl shadow-sm overflow-hidden">
            {/* 左侧：联系信息 */}
            <div className="bg-blue-900 text-white p-10">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="text-blue-200 mb-8">Fill up the form and our team will get back to you within 24 hours.</p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <FaPhone className="mt-1 mr-4 text-blue-400 text-xl" />
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p className="text-blue-100">+86 156 1807 6867</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaEnvelope className="mt-1 mr-4 text-blue-400 text-xl" />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-blue-100">info@xiaomantools.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaWhatsapp className="mt-1 mr-4 text-blue-400 text-xl" />
                  <div>
                    <h3 className="font-bold">WhatsApp / WeChat</h3>
                    <p className="text-blue-100">+86 156 1807 6867</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaMapMarkerAlt className="mt-1 mr-4 text-blue-400 text-xl" />
                  <div>
                    <h3 className="font-bold">Address</h3>
                    <p className="text-blue-100">No. 1000 Zhenchen Road, Baoshan District, Shanghai, China</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 右侧：表单 */}
            <div className="p-10">
              <form action="https://formspree.io/f/mqedbnoa" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" name="name" id="name" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" name="email" id="email" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea name="message" id="message" rows="4" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="I am interested in..."></textarea>
                </div>
                <button type="submit" className="w-full btn-primary py-3">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}