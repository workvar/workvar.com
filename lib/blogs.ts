import blogsData from '@/content/blogs/blogs.json';

export interface Blog {
  id: string;
  slug: string;
  category: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
}

export function getBlogs(): Blog[] {
  return blogsData as Blog[];
}

export function getBlogBySlug(slug: string): Blog | undefined {
  const blogs = getBlogs();
  return blogs.find((blog) => blog.slug === slug);
}

export function getBlogById(id: string): Blog | undefined {
  const blogs = getBlogs();
  return blogs.find((blog) => blog.id === id);
}

export function getSlugFromId(id: string): string | undefined {
  const blog = getBlogById(id);
  return blog?.slug;
}

