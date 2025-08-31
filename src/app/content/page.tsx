import React from 'react';
import * as motion from 'motion/react-client';
import CustomButton from '@/components/CustomButton';

const Content = () => {
  return (
    <div className="py-6 sm:py-8 lg:py-10 my-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center gap-y-6 sm:gap-y-8"
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-900 text-center">
            Our Content
          </h1>

          <div className="text-center text-gray-800 text-sm sm:text-base max-w-4xl mx-auto px-4">
            <p className="mb-6">
              At VITeach, every idea, lesson, and story is carefully crafted
              into resources that inspire learning and sharing. Our content is
              more than just material—it is a reflection of the passion and
              creativity that drives our mission.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
            {/* The Digital Library */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-500"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-red-900 mb-4">
                The Digital Library
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                Known as our War-Room, this is where imagination meets
                structure. A team of dedicated creators design worksheets,
                presentations, and videos that bring clarity and joy to young
                learners. With resources spanning grades 1 to 8, the Digital
                Library stands as a living archive of knowledge—accessible,
                evolving, and always ready to empower classrooms.
              </p>
              <CustomButton
                text="Explore Library"
                onClickRoute="/digital-library"
                variant="ghost"
                size="sm"
                className="w-full sm:w-auto"
              />
            </motion.div>

            {/* The YouTube Channel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">
                The YouTube Channel
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                Learning goes beyond walls when stories and lessons are shared
                through moving pictures. Our YouTube channel transforms concepts
                into engaging visuals, extending the reach of VITeach to anyone
                with curiosity and a screen. It is a window into how we teach,
                learn, and grow together.
              </p>
              <CustomButton
                text="Watch Videos"
                onClickRoute="https://youtube.com"
                variant="ghost"
                size="sm"
                className="w-full sm:w-auto"
              />
            </motion.div>

            {/* VITeach Tales */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-green-900 mb-4">
                VITeach Tales
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                Every member carries a story, and every child leaves an
                impression. VITeach Tales is our canvas for voices—personal
                journeys, reflections, and moments that define who we are. They
                remind us that education is not just about subjects, but about
                people and experiences that change us along the way.
              </p>
              <CustomButton
                text="Read Stories"
                onClickRoute="/viteacher-tales"
                variant="ghost"
                size="sm"
                className="w-full sm:w-auto"
              />
            </motion.div>

            {/* The Blog */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-purple-900 mb-4">
                The Blog
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                Thoughts become lasting words in our blog. It is a space for
                reflection, ideas, and insights—where students and mentors
                document lessons not only from books but also from life. Each
                article adds a chapter to VITeach&apos;s ongoing story, ensuring
                our learnings ripple far beyond the classroom.
              </p>
              <CustomButton
                text="Read Blog"
                onClickRoute="/blogs"
                variant="ghost"
                size="sm"
                className="w-full sm:w-auto"
              />
            </motion.div>
          </div>

          <div className="text-center text-gray-800 text-sm sm:text-base max-w-4xl mx-auto px-4 mt-8">
            <p>
              Together, these platforms form the heartbeat of VITeach&apos;s
              creative spirit—bridging effort with expression, and turning
              simple contributions into a legacy of learning.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Content;
