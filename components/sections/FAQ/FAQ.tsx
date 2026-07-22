"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";

const faqs = [
  {
    question: "How far in advance should I book my bridal makeup?",
    answer:
      "For weddings, it's best to book 2-3 months in advance, especially during peak wedding season, to secure your preferred date and allow time for a trial session.",
  },
  {
    question: "Do you offer a trial session before the wedding day?",
    answer:
      "Yes. A trial session is highly recommended so we can finalize your look together, taking your outfit, jewellery and venue lighting into account.",
  },
  {
    question: "Do you travel to the venue?",
    answer:
      "Yes, on-location services are available across Kolkata and nearby areas. Travel charges may apply depending on distance and will be confirmed at the time of booking.",
  },
  {
    question: "What products do you use?",
    answer:
      "Only professional, skin-friendly and long-wearing products from trusted international and premium Indian brands, suitable for photography and long events.",
  },
  {
    question: "How do I confirm my booking?",
    answer:
      "Bookings are confirmed with an advance payment once the date, package and requirements are finalized over a call or WhatsApp consultation.",
  },
  {
    question: "Can you accommodate sensitive skin or allergies?",
    answer:
      "Absolutely — please share any known allergies or skin sensitivities in advance so suitable products can be selected and, if needed, patch-tested beforehand.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden section-padding bg-[var(--ivory)]">
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/[0.06] blur-[140px]" />

      <div className="container-width relative">
        <SectionHeading
          eyebrow="FAQ"
          title="Good To Know"
          highlight="Before You Book"
          description="Answers to the questions clients ask most often. Still curious about something else? Just reach out."
        />

        <StaggerGroup className="mx-auto mt-14 max-w-3xl space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <StaggerItem key={faq.question}>
                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="font-medium text-gray-900">{faq.question}</span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="shrink-0 gold-ink"
                      >
                        <ChevronDown size={20} aria-hidden />
                      </motion.span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        role="region"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 leading-7 text-gray-600">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
