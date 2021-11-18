import cx from 'classnames';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

import styles from 'styles/Heading.module.css';

type H = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type Props = {
  element?: H;
  className?: string;
  children?: ReactNode;
};

export default function Heading({
  children,
  className,
  element = 'h2',
}: Props) {
  let Element = motion[element];
  return (
    <Element className={cx(styles[element], className)}>{children}</Element>
  );
}
