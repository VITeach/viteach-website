import React from 'react';

type NumtextProps = {
  num: string;
  text: string;
};

const Numtext = ({ num, text }: NumtextProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-x-2 p-4">
      <div className="text-xl font-extrabold text-red-900">{num}</div>
      <div className="text-sm font-bold text-red-900">{text}</div>
    </div>
  );
};

export default Numtext;
