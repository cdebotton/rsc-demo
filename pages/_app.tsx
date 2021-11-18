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
          <AnimateSharedLayout>
            <motion.div
              style={{ display: 'contents' }}
              initial="initial"
              exit="exit"
              animate="enter"
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimateSharedLayout>
        </Layout>
      </Suspense>
    </AnimatePresence>
  );
}
