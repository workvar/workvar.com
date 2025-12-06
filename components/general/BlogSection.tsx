import React from 'react';

interface BlogSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'sand';
}

const BlogSection: React.FC<BlogSectionProps> = ({
  children,
  className = '',
  id,
  background = 'sand'
}) => {
  let bgClass = '';
  switch (background) {
    case 'white':
      bgClass = 'bg-white';
      break;
    case 'gray':
      bgClass = 'bg-stone-100';
      break;
    case 'sand':
    default:
      bgClass = 'bg-stone-50';
      break;
  }

  return (
    <section id={id} className={`w-full ${bgClass} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default BlogSection;

