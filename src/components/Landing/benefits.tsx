'use client';

import { motion } from 'framer-motion';
import { Users, Award, Clock, Wallet, Heart, Gift } from 'lucide-react';

const retailerBenefits = [
  {
    icon: <Users className='h-8 w-8 text-primary' />,
    title: 'More Footfall',
    description: 'Drive customers directly to your store.'
  },
  {
    icon: <Award className='h-8 w-8 text-primary' />,
    title: 'Loyalty & Rewards',
    description: 'Strengthen customer relationships.'
  },
  {
    icon: <Clock className='h-8 w-8 text-primary' />,
    title: 'Easy to Use',
    description: 'No tech skills needed, set up in minutes!'
  }
];

const shopperBenefits = [
  {
    icon: <Wallet className='h-8 w-8 text-secondary' />,
    title: 'Save More',
    description: 'Get the best local deals in real-time.'
  },
  {
    icon: <Heart className='h-8 w-8 text-secondary' />,
    title: 'Support Local Businesses',
    description: 'Enjoy personalized shopping experiences.'
  },
  {
    icon: <Gift className='h-8 w-8 text-secondary' />,
    title: 'Exclusive Rewards',
    description: 'Unlock loyalty benefits and special discounts.'
  }
];

export function Benefits() {
  return (
    <section id='benefits' className='py-16 md:py-24'>
      <div className='container mx-auto px-4'>
        <motion.div
          className='mx-auto mb-16 max-w-3xl text-center'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className='mb-4 text-3xl font-bold dark:text-white md:text-4xl'>
            Why Join RetailConnect?
          </h2>
          <p className='text-xl text-gray-600 dark:text-gray-300'>
            A platform that benefits both retailers and shoppers
          </p>
        </motion.div>

        <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className='rounded-2xl bg-primary/5 p-8 dark:bg-primary/10'>
              <h3 className='mb-6 text-center text-2xl font-bold dark:text-white'>
                For Retailers
              </h3>
              <div className='space-y-6'>
                {retailerBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className='flex items-start gap-4'
                  >
                    <div className='rounded-lg bg-white p-3 shadow-sm dark:bg-gray-800'>
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className='text-lg font-semibold dark:text-white'>
                        {benefit.title}
                      </h4>
                      <p className='text-gray-600 dark:text-gray-300'>
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className='rounded-2xl bg-secondary/5 p-8 dark:bg-secondary/10'>
              <h3 className='mb-6 text-center text-2xl font-bold dark:text-white'>
                For Shoppers
              </h3>
              <div className='space-y-6'>
                {shopperBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className='flex items-start gap-4'
                  >
                    <div className='rounded-lg bg-white p-3 shadow-sm dark:bg-gray-800'>
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className='text-lg font-semibold dark:text-white'>
                        {benefit.title}
                      </h4>
                      <p className='text-gray-600 dark:text-gray-300'>
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
