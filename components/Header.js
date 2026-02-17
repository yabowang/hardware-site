import Link from 'next/link';
import { useRouter } from 'next/router'; // 相当于 Vue 的 this.$route

export default function Header() {
  const router = useRouter();
  
  // 1. 定义菜单列表 (相当于 Vue data 里的 menuItems)
  const menuList = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    // { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container-custom flex justify-between items-center h-16">
        <Link href="/" className="text-2xl font-bold text-blue-900">
          XIAOMAN TOOLS
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {/* 2. 循环渲染菜单 (相当于 Vue 的 v-for) */}
          {menuList.map((item) => (
            <Link 
              key={item.name} 
              href={item.path}
              className={`font-medium hover:text-blue-600 transition ${
                router.pathname === item.path ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}