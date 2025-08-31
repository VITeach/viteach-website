import Card from '@/components/Card';
import {
  Carousel,
  CarouselPrevious,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from '@/components/ui/carousel';
import { showcaseList } from '@/constants/showcase-list-data';
import React from 'react';

const Showcase = () => {
  // TODO: Change the Digital library link

  return (
    <div className="py-6 px-4 sm:py-8 sm:px-6 md:py-10 md:px-12 lg:px-20">
      <h2 className="text-2xl sm:text-3xl font-bold text-red-900 text-center pb-4 sm:pb-6">
        Showcase
      </h2>
      <div className="text-center text-gray-900 pb-6 sm:pb-8 md:pb-10 px-2">
        Explore our platform and see how we&apos;re making a difference in
        education
      </div>
      {/* I'll put here three cards components for viteacher tales, blogs and digital library*/}
      <div className="flex justify-center items-start gap-x-14 max-md:hidden">
        {showcaseList.map((card) => (
          <Card
            key={card.key}
            title={card.title}
            description={card.description}
            image={card.image}
            link={card.link}
          />
        ))}
      </div>
      <div className="md:hidden">
        <div className="relative max-w-sm mx-auto">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2">
              {showcaseList.map((card) => (
                <CarouselItem key={card.key} className="pl-2">
                  <div className="flex justify-center">
                    <Card
                      title={card.title}
                      description={card.description}
                      image={card.image}
                      link={card.link}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-5 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute -right-5 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
