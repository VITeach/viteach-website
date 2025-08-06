'use client';
import Image from 'next/image';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center gap-y-5">
      <div className="text-xl font-bold text-red-900">{title}</div>

      <div className="py-4">
        <Image src={image} alt={title} width={250} height={250} />
      </div>
      <div className="text-md text-gray-500 max-w-60 py-4 flex flex-col gap-y-4">
        <div>{description}</div>
        <div>
          <Button onClick={() => router.push(link)}>Read More</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
