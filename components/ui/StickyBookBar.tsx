"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { siteConfig, whatsappHref } from "@/lib/site-config";

export default function StickyBookBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-x-0 bottom-0 z-40 flex items-stretch border-t border-white/10 bg-black/95 backdrop-blur-xl lg:hidden"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          <a
            href={siteConfig.phone.href}
            className="flex flex-1 items-center justify-center gap-2 border-r border-white/10 py-3.5 text-sm font-medium text-white active:scale-95 transition-transform"
          >
            <Phone size={18} aria-hidden />
            Call
          </a>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-[1.4] items-center justify-center gap-2 bg-[#D4AF37] py-3.5 text-sm font-semibold text-black active:scale-95 transition-transform"
          >
            <FaWhatsapp size={18} aria-hidden />
            Book on WhatsApp
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
