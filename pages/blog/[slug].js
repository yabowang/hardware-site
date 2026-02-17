import { NextSeo } from 'next-seo';
import Link from 'next/link';
import posts from '../../data/posts.json';

export default function BlogPost({ post }) {
  if (!post) return <div>Loading...</div>;

  return (
    <>
      <NextSeo 
        title={`${post.title} | Blog`}
        description={post.excerpt}
      />
      
      <div className="container-custom py-16">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="text-blue-600 hover:underline mb-4 inline-block">&larr; Back to Blog</Link>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <p className="text-gray-500 mb-8 pb-8 border-b">Published on {post.date}</p>
          
          {/* 这里为了演示简单，直接渲染 HTML，实际项目中可以用 markdown 渲染库 */}
          <article className="prose prose-lg text-gray-700" dangerouslySetInnerHTML={{ __html: post.content }} />
          
          <div className="mt-12 pt-8 border-t bg-gray-50 p-6 rounded-lg">
             <h3 className="font-bold mb-2">Looking for quality tools mentioned in this article?</h3>
             <Link href="/products" className="btn-primary">Check Our Catalog</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = posts.find((p) => p.slug === params.slug);
  return { props: { post } };
}