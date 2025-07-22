import IconCard from '@/components/IconCard';
import { BookOpenIcon, TargetIcon, UsersIcon } from 'lucide-react';
import React from 'react';

const CardList = [
  {
    key: 1,
    icon: <TargetIcon />,
    title: 'Mission Driven',
    description: 'Passionate about creating positive change in education',
  },

  {
    key: 2,
    icon: <UsersIcon />,
    title: 'Community Driven',
    description: 'Building a strong, supportive network of educators.',
  },

  {
    key: 3,
    icon: <BookOpenIcon />,
    title: '10+ Years',
    description: 'Of continuous growth and innovation in education',
  },
];

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-8 py-10 px-20">
      <h2 className="text-3xl font-bold text-red-900 text-center">About</h2>
      <div className="text-center text-gray-800">
        VITeach is a non-profit organization founded and run by a group of
        motivated students from Vellore Institute of Technology, Chennai, who
        are driven by the passion for change. With an assortment of{' '}
        <span className="font-bold text-red-900">250+</span> active members, the
        club has been able to directly impact the lives of over{' '}
        <span className="font-bold text-red-900">5 lakh</span> students along
        the years.
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
        {CardList.map((card) => (
          <IconCard
            key={card.key}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
