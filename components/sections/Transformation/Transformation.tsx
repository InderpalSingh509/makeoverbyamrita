"use client";

import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";

export default function Transformation() {
  return (
    <section
      id="transformation"
      className="relative overflow-hidden section-padding bg-[var(--black)] text-white"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[160px]" />

      <div className="container-width relative">
        <SectionHeading
          eyebrow="The Transformation"
          title="See The"
          highlight="Difference For Yourself"
          description="Drag the slider to reveal the transformation — from a natural base to a full bridal look."
          theme="dark"
        />

        <FadeIn delay={0.1} className="mx-auto mt-14 max-w-3xl">
          <BeforeAfterSlider
            before="/images/transformation/before.jpg"
            after="/images/transformation/after.jpg"
            beforeAlt="Client's natural look before makeup application"
            afterAlt="Finished bridal makeup look by Makeover by Amrita"
          />
        </FadeIn>
      </div>
    </section>
  );
}
