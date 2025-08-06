'use client';
import AutoScroll from 'embla-carousel-auto-scroll';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Image from 'next/image';

// Anyone who is reading this, please make sure to not pass in functions to from a server component to
// a client component. It will cause a hydration error.

// You can configure the plugin as needed
const autoScrollOptions = { speed: 1, stopOnInteraction: false };
const plugins = [AutoScroll(autoScrollOptions)];

const SlidingImg = ({
  images,
}: {
  images: { key: number; src: string; alt: string }[];
}) => {
  return (
    <div>
      <Carousel plugins={plugins} className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {images.map((img) => (
            <CarouselItem
              key={img.key}
              className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <div className="embla__slide" key={img.key}>
                <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] relative">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default SlidingImg;
