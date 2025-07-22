import React from 'react';

const IconCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 p-8 rounded-lg border border-red-200 w-64 h-40 text-center">
      <div className="text-2xl text-red-900 bg-red-100 p-2 rounded-xl">
        {icon}
      </div>
      <div className="text-lg font-bold text-red-900">{title}</div>
      <div className="text-sm text-gray-500 text-wrap">{description}</div>
    </div>
  );
};

export default IconCard;
