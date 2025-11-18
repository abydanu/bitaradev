import React from 'react';
import { motion } from 'framer-motion';
import { testimoniData } from '@/app/data/testimoniData';
import TestimoniCard from '../ui/TestimoniCard';
import { RateReview } from '@mui/icons-material';

const TestimonialsSection: React.FC = () => {
  const firstRow = [...testimoniData, ...testimoniData];
  const secondRow = [...[...testimoniData].reverse(), ...[...testimoniData].reverse()];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden mt-20 scroll-mt-9" id='testimoni'>
      <motion.div className="max-w-9/12 mx-auto px-4 mb-16 text-center">
        <motion.div
          className="inline-flex items-center space-x-2 bg-blue-50 text-bitara-primary px-3 md:px-4 py-2 rounded-full text-sm font-medium will-change-transform"
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror"
          }}
        >
          <RateReview className="w-2 md:w-4 h-2 md:h-4" />
          <span className='text-[12px] md:text-base text-bitara-5'>Testimoni Klien Kami</span>
        </motion.div>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
          Apa Kata Klien Kami
        </h2>
        <p className="text-gray-600 md:text-lg text-[15px]">
          Kepuasan klien adalah bukti kualitas kerja kami. Lihat apa yang dikatakan klien <span className='md:block'>tentang pengalaman mereka bekerja dengan kami.</span>
        </p>
      </motion.div>

      <div className="absolute left-0 top-1/3 bottom-0 w-32 md:w-3/12 bg-linear-to-r from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-1/3 bottom-0 w-32 md:w-3/12 bg-linear-to-l from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none"></div>

      <div className="max-w-9/12 mx-auto">
        <div className="mb-8">
          <motion.div
            className="flex"
            animate={{
              x: [0, -2000]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear"
              }
            }}
          >
            {firstRow.map((testimonial, index) => (
              <TestimoniCard key={`first-${index}`} testimonial={testimonial} />
            ))}
          </motion.div>
        </div>

        <div>
          <motion.div
            className="flex"
            animate={{
              x: [-2000, 0]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear"
              }
            }}
          >
            {secondRow.map((testimonial, index) => (
              <TestimoniCard key={`second-${index}`} testimonial={testimonial} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;