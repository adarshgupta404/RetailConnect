'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Store, Download } from 'lucide-react';

export function Cta() {
  return (
    <section className='py-16 md:py-24'>
      <div className='container mx-auto px-4'>
        <motion.div
          className='mx-auto max-w-4xl rounded-3xl bg-primary/10 p-8 text-center dark:bg-primary/20 md:p-12'
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className='mb-6 text-3xl font-bold dark:text-white md:text-4xl'
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Get Started Today!
          </motion.h2>

          <motion.p
            className='mx-auto mb-8 max-w-2xl text-xl text-gray-700 dark:text-gray-300'
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Be the first to transform your retail business! Join RetailConnect
            and start building stronger connections with your customers.
          </motion.p>

          <motion.div
            className='flex flex-col justify-center gap-4 sm:flex-row'
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Button size='lg' className='gap-2'>
              <Store className='h-5 w-5' />
              Sign Up as a Retailer
            </Button>
            <Button size='lg' variant='outline' className='gap-2'>
              <Download className='h-5 w-5' />
              Download App for Customers
            </Button>
          </motion.div>

          <motion.p
            className='mt-6 text-sm text-gray-600 dark:text-gray-400'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            📢 Be the first to transform your retail business! 🚀
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
