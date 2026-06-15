import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const columns = 5;

const expandVariants = {
  initial: { top: "0%", height: "100%" },
  animate: (i: number) => ({
    top: "0%",
    height: "0%",
    transition: { duration: 0.5, delay: 0.05 * i, ease: [0.76, 0, 0.24, 1] },
  }),
  exit: (i: number) => ({
    top: ["100%", "0%"],
    height: ["0%", "100%"],
    transition: { duration: 0.5, delay: 0.05 * i, ease: [0.76, 0, 0.24, 1] },
  }),
};

export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="fixed inset-0 z-[9998] pointer-events-none flex">
        {[...Array(columns)].map((_, i) => (
          <div key={i} className="relative w-full h-full">
            <motion.div
              custom={i}
              variants={expandVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute w-full bg-[var(--color-teal)]"
            />
          </div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}
