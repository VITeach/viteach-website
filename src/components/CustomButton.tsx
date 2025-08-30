'use client';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

type CustomButtonProps = {
  text: string;
  onClickRoute?: string;
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
};

const CustomButton = ({
  text,
  onClickRoute,
  variant = 'default',
  size = 'default',
  className,
}: CustomButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (onClickRoute) {
      router.push(onClickRoute);
    }
  };
  return (
    <Button
      onClick={handleClick}
      variant={variant}
      size={size}
      className={className}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
