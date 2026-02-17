import Link from 'next/link';
import { NextSeo } from 'next-seo';
import posts from '../../data/posts.json';

export default function BlogIndex({ allPosts }) {
  return (
    <>
      <NextSeo 
        title="Blog - Xiaoman Tools"
        description="Latest news and guides about hardware tools, drill bits, and market trends."
      />
      <div className="bg-gray-50 py-12">
        <div className="container-custom">
          <h1 className="text-3xl font-bold text-center mb-12">Industry Insights</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {allPosts.map(post => (
              <div key={post.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-xl font-bold mb-3 hover:text-blue-600 transition">{post.title}</h2>
                </Link>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-blue-600 font-medium hover:underline">
                  Read More &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { allPosts: posts },
  };
}