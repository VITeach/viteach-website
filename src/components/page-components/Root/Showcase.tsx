import Card from '@/components/Card';
import React from 'react';

const Showcase = () => {
  const cardContent = [
    {
      key: 1,
      title: 'VITeacher Tales',
      description:
        'Discover heartfelt stories from VITeachers about their inspiring experiences, favorite teachers, and the joy of making a difference. These tales will warm your heart and motivate you to join our impactful community.',
      image: 'root/showcase/image-1.svg',
      link: '/viteacher-tales',
    },
    {
      key: 2,
      title: 'Blogs',
      description:
        'Blogs are the heart of VITeach—a space where we share ideas, experiences, and insights. It’s a platform for our teachers to connect and inspire through their stories.',
      image: 'root/showcase/image-2.svg',
      link: '/blogs',
    },
    {
      key: 3,
      title: 'Digital Library',
      description:
        'The Digital Library is VITeach’s hub for planning and storing educational content. Our teams create and organize resources for students from grades 1 to 8, ensuring quality learning materials for all.',
      image: 'root/showcase/image-3.svg',
      link: '/content',
    },
  ];
  // TODO: Change the Digital library link

  return (
    <div className="py-10 px-20">
      <h2 className="text-3xl font-bold text-red-900 text-center pb-6">
        Showcase
      </h2>
      {/* I'll put here three cards components for viteacher tales, blogs and digital library*/}
      <div className="flex justify-between items-start gap-x-10 gap-y-5">
        {cardContent.map((card) => (
          <Card
            key={card.key}
            title={card.title}
            description={card.description}
            image={card.image}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Showcase;
