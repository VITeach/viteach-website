import React from 'react';
import BlogCard from '@/components/BlogCard';
import { blogsMetaData } from '@/constants/blogs-meta-data';

const Blogs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {blogsMetaData.map((blog) => (
        <BlogCard
          key={blog.key}
          title={blog.title}
          description={blog.description}
          date={blog.date}
          author={blog.author}
          image={blog.image}
          link={blog.link}
        />
      ))}
    </div>
  );
};

export default Blogs;
