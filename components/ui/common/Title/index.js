import { motion } from "framer-motion";

const variants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.33,
    },
  },
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
};

export default function Title({ children }) {
  return (
    <motion.h1
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
      className="sm:text-9xl text-5xl font-bold py-3 text-center"
    >
      {children}
    </motion.h1>
  );
}
