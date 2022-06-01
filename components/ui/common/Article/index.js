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

export default function Article({ children }) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
      className="mt-12 flex flex-col items-center"
    >
      {children}
    </motion.article>
  );
}
