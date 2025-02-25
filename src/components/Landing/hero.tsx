'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Download, Store } from 'lucide-react';

export function Hero() {
  return (
    <section className='overflow-hidden py-16 md:py-24'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='flex flex-col space-y-6'
          >
            <div>
              <motion.h1
                className='text-4xl font-bold leading-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Revive Local Shopping, Reward Your Customers!
              </motion.h1>
              <motion.p
                className='mt-4 text-xl text-gray-600 dark:text-gray-300'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                {`Boost your store's footfall, create exciting offers, and build lasting customer loyalty—powered by
                RetailConnect!`}
              </motion.p>
            </div>

            <motion.div
              className='flex flex-col gap-4 sm:flex-row'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button size='lg' className='gap-2'>
                <Store className='h-5 w-5' />
                Get Early Access
              </Button>
              <Button size='lg' variant='outline' className='gap-2'>
                <Download className='h-5 w-5' />
                Download App
              </Button>
            </motion.div>

            <motion.p
              className='text-sm text-gray-500 dark:text-gray-400'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              Available on iOS & Android
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='relative'
          >
            <div className='relative h-[400px] w-full md:h-[500px]'>
              <Image
                src='/person.png?height=900&width=900'
                alt='RetailConnect App Illustration'
                fill
                className='object-contain'
                priority
              />
            </div>

            <motion.div
              className='absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-primary/10 dark:bg-primary/20 md:h-48 md:w-48'
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 5, 0]
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 8,
                ease: 'easeInOut'
              }}
            />

            <motion.div
              className='absolute -right-6 -top-6 h-24 w-24 rounded-full bg-secondary/10 dark:bg-secondary/20 md:h-40 md:w-40'
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, -5, 0]
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 10,
                ease: 'easeInOut'
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
