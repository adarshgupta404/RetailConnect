'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Menu, ShoppingBag, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from '../layout/ThemeToggle/theme-toggle';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className='sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/90'
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
    >
      <div className='container mx-auto flex items-center justify-between px-4 py-4'>
        <Link href='/' className='flex items-center space-x-2'>
          <ShoppingBag className='h-6 w-6 text-primary' />
          <span className='text-xl font-bold dark:text-white'>
            RetailConnect
          </span>
        </Link>

        <nav className='hidden items-center space-x-8 md:flex'>
          <Link
            href='#features'
            className='text-sm font-medium transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-primary'
          >
            Features
          </Link>
          <Link
            href='#benefits'
            className='text-sm font-medium transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-primary'
          >
            Benefits
          </Link>
          <Link
            href='#testimonials'
            className='text-sm font-medium transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-primary'
          >
            Testimonials
          </Link>
          <div className='flex items-center space-x-3'>
            <Button variant='outline' size='sm'>
              Download App
            </Button>
            <Button size='sm'>Get Early Access</Button>
            <ThemeToggle />
          </div>
        </nav>

        <button className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          className='md:hidden'
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className='container mx-auto flex flex-col space-y-4 bg-white px-4 py-4 dark:bg-gray-900'>
            <Link
              href='#features'
              className='py-2 text-sm font-medium transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-primary'
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              href='#benefits'
              className='py-2 text-sm font-medium transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-primary'
              onClick={() => setIsOpen(false)}
            >
              Benefits
            </Link>
            <Link
              href='#testimonials'
              className='py-2 text-sm font-medium transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-primary'
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </Link>
            <div className='flex flex-col space-y-3 pt-2'>
              <Button variant='outline' size='sm' className='w-full'>
                Download App
              </Button>
              <Button size='sm' className='w-full'>
                Get Early Access
              </Button>
              <div className='mb-2 flex justify-center'>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
