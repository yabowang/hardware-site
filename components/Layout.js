import Header from './Header';
import Footer from './Footer';
import WhatsAppFloat from './WhatsAppFloat';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* main 占据剩余空间，确保 Footer 沉底 */}
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}