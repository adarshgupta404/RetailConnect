'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ShoppingBag,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';

export function Footer() {
  return (
    <footer className='border-t bg-gray-50 dark:border-gray-800 dark:bg-gray-900'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-4'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='col-span-1 md:col-span-2'
          >
            <div className='mb-4 flex items-center space-x-2'>
              <ShoppingBag className='h-6 w-6 text-primary' />
              <span className='text-xl font-bold dark:text-white'>
                RetailConnect
              </span>
            </div>
            <p className='mb-4 max-w-md text-gray-600 dark:text-gray-300'>
              Powering local businesses by connecting retailers with customers
              through exclusive offers and rewards.
            </p>
            <div className='flex space-x-4'>
              <Link
                href='#'
                className='text-gray-500 transition-colors hover:text-primary dark:text-gray-400 dark:hover:text-primary'
              >
                <Facebook className='h-5 w-5' />
              </Link>
              <Link
                href='#'
                className='text-gray-500 transition-colors hover:text-primary dark:text-gray-400 dark:hover:text-primary'
              >
                <Twitter className='h-5 w-5' />
              </Link>
              <Link
                href='#'
                className='text-gray-500 transition-colors hover:text-primary dark:text-gray-400 dark:hover:text-primary'
              >
                <Instagram className='h-5 w-5' />
              </Link>
              <Link
                href='#'
                className='text-gray-500 transition-colors hover:text-primary dark:text-gray-400 dark:hover:text-primary'
              >
                <Linkedin className='h-5 w-5' />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h3 className='mb-4 text-lg font-semibold dark:text-white'>
              For Retailers
            </h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='#'
                  className='text-gray-600 transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-primary'
                >
                  Sign Up
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-gray-600 transition-colors hover:text-primary'
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-gray-600 transition-colors hover:text-primary'
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-gray-600 transition-colors hover:text-primary'
                >
                  Success Stories
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 className='mb-4 text-lg font-semibold dark:text-white'>
              Company
            </h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='#'
                  className='text-gray-600 transition-colors hover:text-primary'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-gray-600 transition-colors hover:text-primary'
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-gray-600 transition-colors hover:text-primary'
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-gray-600 transition-colors hover:text-primary'
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className='mt-12 border-t pt-6 text-center text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400'
        >
          &copy; {new Date().getFullYear()} RetailConnect. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
