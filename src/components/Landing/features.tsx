'use client';

import { motion } from 'framer-motion';
import {
  Ticket,
  Users,
  MessageSquare,
  Sparkles,
  BarChart3,
  ShoppingCart
} from 'lucide-react';

const features = [
  {
    icon: <Ticket className='h-10 w-10 text-primary' />,
    title: 'Create Exclusive Coupons',
    description: 'Design and distribute discount offers easily.'
  },
  {
    icon: <MessageSquare className='h-10 w-10 text-primary' />,
    title: 'Engage with Customers',
    description: 'Stay connected via in-app messaging and personalized deals.'
  },
  {
    icon: <Sparkles className='h-10 w-10 text-primary' />,
    title: 'Showcase Best Offers',
    description: `Highlight your store's best discounts and new arrivals.`
  },
  {
    icon: <BarChart3 className='h-10 w-10 text-primary' />,
    title: 'Smart Analytics',
    description: 'Track footfall and customer preferences.'
  },
  {
    icon: <ShoppingCart className='h-10 w-10 text-primary' />,
    title: 'Compete with Online Giants',
    description: 'Offer deals that make customers choose local over online!'
  },
  {
    icon: <Users className='h-10 w-10 text-primary' />,
    title: 'Loyalty Program',
    description:
      'Reward repeat customers with points, discounts, and special perks.'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Features() {
  return (
    <section
      id='features'
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
            How It Works?
          </h2>
          <p className='text-xl text-gray-600 dark:text-gray-300'>
            {`Your Customers Are Online—It's Time to Bring Them Back In-Store!`}
          </p>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'
          variants={container}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className='rounded-xl bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg dark:bg-gray-900'
            >
              <div className='mb-4'>{feature.icon}</div>
              <h3 className='mb-2 text-xl font-semibold dark:text-white'>
                {feature.title}
              </h3>
              <p className='text-gray-600 dark:text-gray-300'>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
