import cx from 'classnames';
import type { ReactNode } from 'react';

import Logo from './Logo.client';

import styles from 'styles/Layout.module.css';

type Props = {
  children?: ReactNode;
  className?: string;
};

export default function Layout({ children, className }: Props) {
  return (
    <div className={cx(styles.container, className)}>
      <header className={styles.header}>
        <Logo />
      </header>
      {children}
    </div>
  );
}
