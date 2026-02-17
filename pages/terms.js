import { NextSeo } from 'next-seo';
import Link from 'next/link';

export default function Terms() {
  const companyName = "Shanghai Daoge Xiaoman Tools Co., Ltd.";

  return (
    <>
      <NextSeo
        title={`Terms of Service - Xiaoman Tools`}
        description="Terms and conditions for using Daoge Xiaoman Tools website and services."
        noindex={true}
      />

      <div className="bg-gray-50 py-12">
        <div className="container-custom bg-white p-8 md:p-12 rounded-lg shadow-sm border border-gray-200">
          <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
          <p className="text-gray-500 mb-8">Last Updated: February 2026</p>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Agreement to Terms</h2>
              <p>
                These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and <strong>{companyName}</strong> ("we," "us" or "our"), concerning your access to and use of our website. By accessing the site, you agree that you have read, understood, and agree to be bound by all of these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. Intellectual Property Rights</h2>
              <p>
                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. Product Representations</h2>
              <p>
                We make every effort to display as accurately as possible the colors, features, specifications, and details of the products available on the Site. However, we do not guarantee that the colors, features, specifications, and details of the products will be accurate, complete, reliable, current, or free of other errors, and your electronic display may not accurately reflect the actual colors and details of the products.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Governing Law</h2>
              <p>
                These Terms shall be governed by and defined following the laws of China. <strong>{companyName}</strong> and yourself irrevocably consent that the courts of Shanghai, China shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Limitations of Liability</h2>
              <p>
                In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Contact Us</h2>
              <p>
                In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: info@daogetools.com
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