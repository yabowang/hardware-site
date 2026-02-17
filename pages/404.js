import Link from 'next/link';

export default function Custom404() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">The drill bit you are looking for does not exist.</p>
        <Link href="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
}