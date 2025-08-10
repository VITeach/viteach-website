import BlogCard from '@/components/BlogCard';
import { blogsMetaData } from '@/constants/blogs-meta-data';
import React from 'react';

// Will add this once the blog functionality is added
// Up until then, ignore this like my crush ignores me

const blogs = blogsMetaData.slice(
  blogsMetaData.length - 3,
  blogsMetaData.length
);

const Latest = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-8 py-10 px-20">
      <h2 className="text-3xl font-bold text-red-900 text-center">
        Latest Blogs
      </h2>
      <div className="text-center text-gray-900">
        Discover insights, stories, and perspectives from our passionate
        educators
      </div>
      <div className="flex justify-evenly items-center gap-x-8 w-full">
        {blogs.map((blog) => (
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
    </div>
  );
};

export default Latest;
