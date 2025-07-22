'use client';
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

const Essence = () => {
  const images = [
    {
      key: 1,
      src: '/root/image-1.jpg',
      alt: 'Essence 1',
    },

    {
      key: 2,
      src: '/root/image-2.png',
      alt: 'Essence 2',
    },

    {
      key: 3,
      src: '/root/image-3.jpg',
      alt: 'Essence 3',
    },

    {
      key: 4,
      src: '/root/image-4.jpg',
      alt: 'Essence 4',
    },

    {
      key: 5,
      src: '/root/image-5.jpg',
      alt: 'Essence 5',
    },

    {
      key: 6,
      src: '/root/image-6.jpg',
      alt: 'Essence 6',
    },

    {
      key: 7,
      src: '/root/image-7.jpg',
      alt: 'Essence 7',
    },

    {
      key: 8,
      src: '/root/image-8.png',
      alt: 'Essence 8',
    },
  ];

  // You can configure the plugin as needed
  const autoScrollOptions = { speed: 1, stopOnInteraction: false };
  const plugins = [AutoScroll(autoScrollOptions)];

  return (
    <div className="flex flex-col items-center justify-center gap-y-8 py-10 px-20">
      <h2 className="text-3xl font-bold text-red-900 text-center">
        Our Essence
      </h2>
      <div className="w-full">
        <Carousel plugins={plugins} className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {images.map((img) => (
              <CarouselItem key={img.key} className="basis-1/3">
                <div className="embla__slide" key={img.key}>
                  <div className="w-[400px] h-[300px] relative">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 640px) 100vw, 400px"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div>mission, vision and impact</div>
    </div>
  );
};

export default Essence;
