import Image from 'next/image';
import * as motion from 'motion/react-client';
import CustomButton from './CustomButton';

const Card = ({
  title,
  description,
  image,
  link,
}: {
  title: string;
  description: string;
  image: string;
  link: string;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col items-center justify-center gap-y-5 rounded-lg p-4 border border-red-200 w-72"
    >
      <div className="text-xl font-bold text-red-900">{title}</div>

      <div className="py-4 border-b border-red-900">
        <Image src={image} alt={title} width={250} height={250} />
      </div>
      <div className="text-md text-gray-500 max-w-60 py-4 flex flex-col gap-y-4">
        <div>{description}</div>
        <div>
          <CustomButton text="Read More" onClickRoute={link} />
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
