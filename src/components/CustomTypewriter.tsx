'use client';
import Typewriter from 'typewriter-effect';

type CustomTypewriterProps = {
  strings: string[];
  loop?: boolean;
  delay?: number;
  autoStart?: boolean;
};

const CustomTypewriter = ({
  strings,
  loop = true,
  delay = 100,
  autoStart = true,
}: CustomTypewriterProps) => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        strings.forEach((str) => {
          typewriter.typeString(str).pauseFor(delay).deleteAll();
        });
        typewriter.start();
      }}
      options={{
        loop,
        delay,
        autoStart,
      }}
    />
  );
};

export default CustomTypewriter;
