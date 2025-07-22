import React from 'react';

type NumtextProps = {
  num: string;
  text: string;
  icon: React.ReactNode;
};

const Numtext = ({ num, text, icon }: NumtextProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-x-2 p-4">
      <div className="text-xl font-extrabold text-red-900">{num}</div>
      <div className="text-sm font-bold text-red-900">{text}</div>
    </div>
  );
};

export default Numtext;
