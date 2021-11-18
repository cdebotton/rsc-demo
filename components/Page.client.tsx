import cx from 'classnames';
import Head from 'next/head';
import type { ReactNode } from 'react';

import styles from 'styles/Page.module.css';

type Props = {
  children?: ReactNode;
  className?: string;
  head?: ReactNode;
};

export default function Page({ children, className, head }: Props) {
  return (
    <>
      <Head>{head}</Head>
      <div className={cx(className, styles.container)}>{children}</div>
    </>
  );
}
