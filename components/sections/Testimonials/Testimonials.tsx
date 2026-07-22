"use client";

import { Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";

// SAMPLE testimonials — these are illustrative placeholders to show the
// design, not real client quotes. Each is tagged "Sample review" on the
// card itself so nothing here could be mistaken for a genuine testimonial.
// Replace every entry with real client feedback (name + photo, with their
// permission) before launch, and remove the "sample" tag once they're real.
const testimonials = [
  {
    name: "Sample Review",
    occasion: "Bridal Makeup",
    initials: "BR",
    tint: "from-[#D4AF37] to-[#F4DE88]",
    quote:
      "This is a placeholder in the exact tone a bridal client review might take — warm, specific, and mentioning how the look lasted the whole event.",
  },
  {
    name: "Sample Review",
    occasion: "Reception Makeup",
    initials: "RM",
    tint: "from-[#E3B0AB] to-[#F4DE88]",
    quote:
      "A placeholder reception review — real ones should mention the glam factor, punctuality and how photos turned out.",
  },
  {
    name: "Sample Review",
    occasion: "Engagement Makeup",
    initials: "EM",
    tint: "from-[#C98A83] to-[#E3B0AB]",
    quote:
      "A placeholder engagement review — real feedback here often highlights how natural and fresh the look felt on camera.",
  },
  {
    name: "Sample Review",
    occasion: "Party Makeup",
    initials: "PM",
    tint: "from-[#D4AF37] to-[#C98A83]",
    quote:
      "A placeholder party-makeup review — swap in a real client quote about the vibe, longevity and overall experience.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden section-padding bg-[var(--beige)]">
      <div className="pointer-events-none absolute -left-40 top-10 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/[0.08] blur-[140px]" />

      <div className="container-width relative">
        <SectionHeading
          eyebrow="Testimonials"
          title="Kind Words"
          highlight="From Happy Clients"
          description="The cards below are sample placeholders showing how real reviews will look — genuine client feedback replaces them as bookings come in."
        />

        <StaggerGroup className="mt-14 grid gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6">
          {testimonials.map((item) => (
            <StaggerItem key={item.occasion}>
              <div className="hover-lift relative h-full rounded-3xl bg-white p-6 shadow-sm sm:p-8">
                <span className="absolute right-5 top-5 rounded-full bg-gray-100 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-gray-500">
                  Sample review
                </span>

                <div className="flex gap-1 text-[var(--gold)]" aria-hidden>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>

                <p className="mt-5 leading-7 text-gray-600">&ldquo;{item.quote}&rdquo;</p>

                <div className="mt-6 flex items-center gap-4 border-t border-gray-100 pt-5">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${item.tint} text-sm font-semibold text-black`}
                  >
                    {item.initials}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.name}</h4>
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                      {item.occasion}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
