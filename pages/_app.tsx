import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import type { AppProps } from 'next/app';
import React, { Suspense } from 'react';

import Layout from 'components/Layout.client';

import 'styles/base.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Suspense fallback={null}>
        <Layout>
          <motion.div
            style={{ display: 'contents' }}
            initial="initial"
            exit="exit"
            animate="enter"
          >
            <AnimateSharedLayout>
              <Component {...pageProps} />
            </AnimateSharedLayout>
          </motion.div>
        </Layout>
      </Suspense>
    </AnimatePresence>
  );
}
