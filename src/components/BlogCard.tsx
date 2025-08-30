import React from 'react';
import Image from 'next/image';
import CustomButton from './CustomButton';

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
  return (
    <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:border-red-200 w-full">
      {/* Image Container */}
      <div className="relative h-40 sm:h-48 w-full overflow-hidden">
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
      <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-red-900 line-clamp-2 group-hover:text-red-800 transition-colors duration-200">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Meta Information */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500 space-y-1 sm:space-y-0">
          <span className="font-medium text-red-900">{author}</span>
          <span className="italic">{date}</span>
        </div>

        {/* Read More Button */}
        <CustomButton text="Read More" onClickRoute={link} />
      </div>
    </div>
  );
};

export default BlogCard;
