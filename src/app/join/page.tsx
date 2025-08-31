import React from 'react';
import Image from 'next/image';
import * as motion from 'motion/react-client';
import CustomButton from '@/components/CustomButton';

const Join = () => {
  return (
    <div>
      <div className="py-6 sm:py-8 lg:py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row items-center justify-between px-5 sm:px-10 lg:px-20 xl:pb-10 pt-20 gap-8 lg:gap-0"
          >
            <div className="flex flex-col items-center lg:items-start justify-center gap-y-5 text-center lg:text-left">
              <motion.div
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-red-900"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Something amazing is brewing...
              </motion.div>

              <div className="text-xl sm:text-2xl flex items-center gap-x-2 justify-center lg:justify-start">
                <span className="font-light">Join</span>
                <span className="text-xl sm:text-2xl font-bold text-red-900">
                  VITeach
                </span>
              </div>

              <Image
                src="/announce.svg"
                alt="Coming Soon"
                width={200}
                height={200}
                className="w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 lg:hidden opacity-60"
              />

              <div className="max-w-md text-gray-800 text-sm sm:text-base">
                We&apos;re working hard to create an incredible experience for
                you. Our team is crafting something special that will make
                joining VITeach an unforgettable journey. Stay tuned for
                updates!
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-y-3 sm:gap-y-0 gap-x-2">
                <CustomButton
                  text="Back to Home"
                  onClickRoute="/"
                  variant="outline"
                />
                <CustomButton text="Learn More" onClickRoute="/about" />
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200"
              >
                <div className="text-sm text-red-800 font-medium">
                  Under Construction
                </div>
                <div className="text-xs text-red-600 mt-1">
                  Expected launch: Coming Soon
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 1, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: 'spring',
                stiffness: 8,
                damping: 2,
              }}
              whileHover={{ scale: 1.1 }}
              className="p-10 sm:p-16 lg:p-20 rounded-full"
            >
              <Image
                src="/announce.svg"
                alt="Coming Soon"
                width={200}
                height={200}
                className="w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 max-lg:hidden opacity-60"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Join;
