import { motion } from 'framer-motion';

type Props = {
  _id: string;
  name: string;
};

export default function Post({ name }: Props) {
  return (
    <motion.li
      variants={{
        initial: { opacity: 0, y: -20 },
        enter: { opacity: 1, y: 0 },
      }}
    >
      {name}
    </motion.li>
  );
}
