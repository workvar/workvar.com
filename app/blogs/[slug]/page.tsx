import { notFound } from 'next/navigation';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { General } from '@/components';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import Link from 'next/link';
import { getBlogContent } from '@/lib/blogContent';

interface BlogPost {
  id: string;
  category: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
  content: string;
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const fileContents = getBlogContent(slug);
    
    if (!fileContents) {
      console.error(`Blog post not found: ${slug}`);
      return null;
    }

    const { data, content } = matter(fileContents);

    // Convert markdown to HTML
    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    return {
      id: data.id || '',
      category: data.category || '',
      title: data.title || '',
      date: data.date || '',
      readTime: data.readTime || '',
      summary: data.summary || '',
      content: contentHtml,
    };
  } catch (error) {
    console.error('Error reading blog post:', error);
    return null;
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blogPost = await getBlogPost(slug);

  if (!blogPost) {
    notFound();
  }

  return (
    <>
      <General.BlogSectionComponent background="sand" className="pt-20 pb-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blogs"
            className="inline-flex items-center text-stone-600 hover:text-stone-900 mb-8 transition-colors group"
          >
            <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Library
          </Link>

          <div className="mb-8">
            <span className="font-serif text-forest-800 font-bold text-sm tracking-widest uppercase">
              {blogPost.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif text-stone-900 mb-6 leading-tight">
            {blogPost.title}
          </h1>

          <div className="flex items-center space-x-6 text-stone-500 text-sm">
            <div className="flex items-center">
              <Calendar size={16} className="mr-2" />
              {blogPost.date}
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-2" />
              {blogPost.readTime}
            </div>
          </div>
        </div>
      </General.BlogSectionComponent>

      <General.BlogSectionComponent background="white" className="pt-8 pb-24">
        <article className="max-w-4xl mx-auto">
          <div
            className="prose prose-lg prose-stone max-w-none
              prose-headings:font-serif prose-headings:text-stone-900
              prose-p:text-stone-600 prose-p:leading-relaxed prose-p:font-light
              prose-a:text-forest-800 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-stone-900 prose-strong:font-medium
              prose-ul:text-stone-600 prose-ol:text-stone-600
              prose-li:leading-relaxed
              prose-blockquote:border-l-forest-200 prose-blockquote:border-l-4
              prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-stone-700
              prose-code:text-forest-800 prose-code:bg-stone-50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-stone-900 prose-pre:text-stone-100"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />
        </article>
      </General.BlogSectionComponent>
    </>
  );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const { getBlogs } = await import('@/lib/blogs');
  const blogs = getBlogs();

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

