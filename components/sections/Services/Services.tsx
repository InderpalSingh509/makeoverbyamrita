"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";
import FadeIn from "@/components/ui/FadeIn";

const services = [
  {
    title: "Bridal",
    image: "/images/services/bridal.jpg",
    description: "Elegant looks that last all day.",
    accent: "from-[#D4AF37]/40",
  },
  {
    title: "Reception",
    image: "/images/services/reception.jpg",
    description: "Evening glamour with timeless polish.",
    accent: "from-[#E3B0AB]/40",
  },
  {
    title: "Engagement",
    image: "/images/services/engagement.jpg",
    description: "Fresh, radiant pre-wedding looks.",
    accent: "from-[#F4DE88]/40",
  },
  {
    title: "Party",
    image: "/images/services/party.jpg",
    description: "Bold, festive & camera-ready.",
    accent: "from-[#C98A83]/40",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[var(--black)] py-16 text-white lg:py-24"
    >
      <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-[140px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/5 blur-[140px]" />

      <div className="container-width relative">
        <SectionHeading
          eyebrow="Services"
          title="Luxury Makeup"
          highlight="Tailored For Every Occasion"
          description="Every occasion deserves a different look — personalized to your style and celebration."
          theme="dark"
        />

        <StaggerGroup className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-5 lg:grid-cols-4">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <div className="group relative h-full overflow-hidden rounded-xl sm:rounded-2xl">
                <div className="relative aspect-square sm:aspect-[3/4]">
                  <Image
                    src={service.image}
                    alt={`${service.title} makeup by Makeover by Amrita`}
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 45vw, 23vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />

                  <div
                    className={`absolute inset-0 bg-gradient-to-b ${service.accent} to-transparent opacity-50`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-500 group-hover:from-black/90" />

                  <div className="absolute bottom-0 left-0 w-full p-3 sm:p-5">
                    <div className="mb-2 h-1 w-8 rounded-full gold-gradient transition-all duration-500 group-hover:w-14 sm:mb-3 sm:w-10" />
                    <h3 className="text-sm font-semibold sm:text-xl">{service.title}</h3>
                    <p className="mt-1 hidden text-xs leading-5 text-gray-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:mt-2 sm:block sm:text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <FadeIn className="mt-10 text-center sm:mt-14">
          <Button href="#contact">Book Consultation</Button>
        </FadeIn>
      </div>
    </section>
  );
}
