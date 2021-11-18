import { motion } from 'framer-motion';

import Heading from './Heading.client';

import styles from 'styles/Logo.module.css';

export default function Logo() {
  return (
    <Heading className={styles.container} element="h1">
      <motion.span className={styles.firstName}>Christian</motion.span>
      <motion.span className={styles.lastName}>de Botton</motion.span>
    </Heading>
  );
}
