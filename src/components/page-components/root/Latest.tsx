import BlogCard from '@/components/BlogCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
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
    <div className="py-6 px-4 sm:py-8 sm:px-6 md:py-10 md:px-12 lg:px-20">
      <h2 className="text-2xl sm:text-3xl font-bold text-red-900 text-center pb-4 sm:pb-6">
        Latest Blogs
      </h2>
      <div className="text-center text-gray-900 pb-6 sm:pb-8 md:pb-10 px-2">
        Discover insights, stories, and perspectives from our passionate
        educators
      </div>
      <div className="flex justify-center items-start gap-x-14 max-md:hidden">
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

      <div className="md:hidden">
        <div className="relative max-w-sm mx-auto">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2">
              {blogs.map((blog) => (
                <CarouselItem key={blog.key} className="pl-2">
                  <div className="flex justify-center">
                    <BlogCard
                      title={blog.title}
                      description={blog.description}
                      date={blog.date}
                      author={blog.author}
                      image={blog.image}
                      link={blog.link}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-8 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute -right-8 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Latest;
