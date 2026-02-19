import { NextSeo } from 'next-seo';
import Link from 'next/link';

export default function Privacy() {
  const companyName = "Shanghai Daoge Xiaoman Tools Co., Ltd.";
  const websiteUrl = "https://www.xiaomantools.com";
  const contactEmail = "info@xiaomantools.com";

  return (
    <>
      <NextSeo
        title={`Privacy Policy - Xiaoman Tools`}
        description="Privacy Policy for Daoge Xiaoman Tools. Learn how we collect, use, and protect your personal information."
        noindex={true} // 法律页面通常不需要被索引参与排名，但为了透明度也可以设为 false
      />

      <div className="bg-gray-50 py-12">
        <div className="container-custom bg-white p-8 md:p-12 rounded-lg shadow-sm border border-gray-200">
          <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-gray-500 mb-8">Last Updated: February 2026</p>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Introduction</h2>
              <p>
                Welcome to <strong>{companyName}</strong> ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website ({websiteUrl}) and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>
              <p className="mb-2">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers (including WhatsApp).</li>
                <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Data</h2>
              <p className="mb-2">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>To process and deliver your order (e.g., Drill Bits, Saw Blades).</li>
                <li>To manage our relationship with you (e.g., responding to inquiries via WhatsApp or Email).</li>
                <li>To improve our website, products/services, marketing and customer relationships.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Cookies</h2>
              <p>
                We use cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. You can set your browser to refuse all or some browser cookies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. Access to your personal data is limited to employees, agents, contractors and other third parties who have a business need to know.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href={`mailto:${contactEmail}`} className="text-blue-600 hover:underline">{contactEmail}</a>.
              </p>
            </section>
          </div>
          
          <div className="mt-12 pt-8 border-t">
            <Link href="/" className="text-blue-600 hover:underline">&larr; Back to Home</Link>
          </div>
        </div>
      </div>
    </>
  );
}