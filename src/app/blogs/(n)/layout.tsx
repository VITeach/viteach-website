import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <article className="max-w-4xl mx-auto px-4 py-8 my-10">
        <div className="max-w-none">{children}</div>
      </article>
      <Footer />
    </div>
  );
};

export default BlogLayout;
