"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

// FadeUp: already exists
export const FadeUp = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut", delay }}
  >
    {children}
  </motion.div>
);

// Stagger: wrapper for staggered children animation
export const Stagger = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: 0.12 } },
    }}
  >
    {children}
  </motion.div>
);

// Item: child element for Stagger
export const Item = ({ children }: { children: ReactNode }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 18 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    }}
  >
    {children}
  </motion.div>
);
