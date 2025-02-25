'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: `RetailConnect helped us increase footfall by 40%! Customers love the personalized offers.`,
    author: 'Sarah Johnson',
    business: 'Bloom Boutique'
  },
  {
    quote: `Finally, an app that brings shoppers back to physical stores. Super easy to use!`,
    author: 'Michael Chen',
    business: 'Tech Haven'
  },
  {
    quote: `Our customer retention has improved dramatically since we started using RetailConnect.`,
    author: 'Emma Rodriguez',
    business: 'Culinary Corner'
  }
];

export function Testimonials() {
  return (
    <section
      id='testimonials'
      className='bg-gray-50 py-16 dark:bg-gray-800 md:py-24'
    >
      <div className='container mx-auto px-4'>
        <motion.div
          className='mx-auto mb-16 max-w-3xl text-center'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className='mb-4 text-3xl font-bold dark:text-white md:text-4xl'>
            What Our Users Say
          </h2>
          <p className='text-xl text-gray-600 dark:text-gray-300'>
            Hear from retailers who have transformed their businesses
          </p>
        </motion.div>

        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className='relative rounded-xl bg-white p-8 shadow-md dark:bg-gray-900'
            >
              <Quote className='absolute right-4 top-4 h-10 w-10 text-primary/20' />
              <p className='relative z-10 mb-6 text-gray-700 dark:text-gray-300'>{`"${testimonial.quote}"`}</p>
              <div>
                <p className='font-semibold dark:text-white'>
                  {testimonial.author}
                </p>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  {testimonial.business}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
