import Header from './Header';
import Footer from './Footer';
// 1. 引入我们刚写好的悬浮组件
import FloatingContact from './FloatingContact';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* main 占据剩余空间，确保 Footer 沉底 */}
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      {/* <WhatsAppFloat /> */}
      {/* 2. 把组件放在这里，它会自动固定在屏幕右侧 */}
      <FloatingContact />
    </div>
  );
}