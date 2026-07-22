"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { whatsappHref } from "@/lib/site-config";

export default function FloatingWhatsApp() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Amrita on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: prefersReducedMotion ? 0 : 1, duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.92 }}
      className="fixed bottom-6 right-6 z-50 hidden h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] lg:flex"
    >
      <FaWhatsapp size={34} aria-hidden />
    </motion.a>
  );
}
