import BlogCard from '@/components/BlogCard';
import { viteacherTalesMetaData } from '@/constants/viteacher-tales-meta-data';
import React from 'react';

const Vtales = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="my-16">
        <div className="text-3xl font-bold text-red-900 text-center py-6 sm:py-8 lg:py-10">
          VITeacher Tales
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {viteacherTalesMetaData.map((blog) => (
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
    </div>
  );
};

export default Vtales;
