'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

const BlogCard = ({
  title,
  description,
  date,
  author,
  image,
  link,
}: {
  title: string;
  description: string;
  date: string;
  author: string;
  image: string;
  link: string;
}) => {
  const router = useRouter();

  return (
    <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:border-red-200 w-full max-w-md">
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Container */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-xl font-bold text-red-900 line-clamp-2 group-hover:text-gray-900 transition-colors duration-200">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Meta Information */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span className="font-medium text-red-900">{author}</span>
          <span className="italic">{date}</span>
        </div>

        {/* Read More Button */}
        <Button
          variant="outline"
          className="w-full"
          onClick={() => router.push(link)}
        >
          Read More
        </Button>
      </div>
    </div>
  );
};

export default BlogCard;
