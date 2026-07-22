"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import { siteConfig } from "@/lib/site-config";

const services = ["Bridal Makeup", "Reception Makeup", "Engagement Makeup", "Party Makeup"];

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  service: services[0],
  message: "",
};

function buildMessage(form: FormState) {
  const lines = [
    `Hi Amrita, I'd like to enquire about a booking.`,
    ``,
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    form.email ? `Email: ${form.email}` : null,
    `Service: ${form.service}`,
    form.message ? `Details: ${form.message}` : null,
  ].filter(Boolean);
  return lines.join("\n");
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange =
    (field: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!form.phone.trim()) nextErrors.phone = "Please enter a phone number.";
    if (form.email.trim() && !/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = buildMessage(form);
    window.open(
      `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSubmitted(true);
  };

  const mailtoHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    `Makeup enquiry from ${form.name || "website"}`
  )}&body=${encodeURIComponent(buildMessage(form))}`;

  return (
    <section
      id="contact"
      className="relative overflow-hidden section-padding bg-[var(--black)] text-white"
    >
      <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-pink-400/5 blur-[140px]" />

      <div className="container-width relative grid gap-16 lg:grid-cols-2">
        {/* Left */}
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let's Create Your"
            highlight="Perfect Look"
            description="Whether you're planning your wedding, reception, engagement or another special occasion, we'd love to discuss your makeup requirements."
            align="left"
            theme="dark"
          />

          {/* Contact Cards */}
          <div className="mt-12 space-y-5">
            <div className="glass flex items-center gap-5 rounded-3xl p-6">
              <Phone className="text-[#D4AF37]" size={24} aria-hidden />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <a href={siteConfig.phone.href} className="text-lg hover:text-[#D4AF37]">
                  {siteConfig.phone.display}
                </a>
              </div>
            </div>

            <div className="glass flex items-center gap-5 rounded-3xl p-6">
              <Mail className="text-[#E3B0AB]" size={24} aria-hidden />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="break-all text-lg hover:text-[#E3B0AB]"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div className="glass flex items-center gap-5 rounded-3xl p-6">
              <MapPin className="text-[#D4AF37]" size={24} aria-hidden />
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p>{siteConfig.location.display}</p>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="mt-10 flex gap-5">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow on Instagram"
              className="glass hover-lift flex h-14 w-14 items-center justify-center rounded-full"
            >
              <FaInstagram size={22} aria-hidden />
            </a>

            <a
              href={`https://wa.me/${siteConfig.whatsapp.number}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="glass hover-lift flex h-14 w-14 items-center justify-center rounded-full"
            >
              <FaWhatsapp size={22} aria-hidden />
            </a>
          </div>
        </div>

        {/* Right */}
        <FadeIn delay={0.15} className="glass rounded-[2rem] p-8 sm:p-10">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center py-12 text-center">
              <CheckCircle2 className="text-[#D4AF37]" size={48} aria-hidden />
              <h3 className="mt-6 text-2xl font-semibold">WhatsApp is opening…</h3>
              <p className="mt-3 max-w-sm text-gray-400">
                If it didn&apos;t open automatically, you can also{" "}
                <a href={mailtoHref} className="gold-text underline">
                  send your enquiry by email
                </a>
                .
              </p>
              <button
                type="button"
                onClick={() => {
                  setForm(initialState);
                  setSubmitted(false);
                }}
                className="mt-8 text-sm uppercase tracking-[0.2em] text-gray-400 hover:text-[#D4AF37]"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <>
              <h3 className="text-3xl font-semibold">Book Your Consultation</h3>
              <p className="mt-4 text-gray-400">
                Fill in your details — this opens a pre-filled WhatsApp message so we can reply
                quickly.
              </p>

              <form className="mt-10 space-y-6" onSubmit={handleSubmit} noValidate>
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-gray-400">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange("name")}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none transition focus:border-[#D4AF37]"
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-2 text-sm text-red-400">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-gray-400">
                    Email Address <span className="text-gray-600">(optional)</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange("email")}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none transition focus:border-[#D4AF37]"
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-2 text-sm text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm text-gray-400">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={handleChange("phone")}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none transition focus:border-[#D4AF37]"
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-2 text-sm text-red-400">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="service" className="mb-2 block text-sm text-gray-400">
                    Service
                  </label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={handleChange("service")}
                    className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none transition focus:border-[#D4AF37]"
                  >
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-black">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm text-gray-400">
                    Tell us about your event{" "}
                    <span className="text-gray-600">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange("message")}
                    className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none transition focus:border-[#D4AF37]"
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send via WhatsApp
                </Button>

                <p className="text-center text-sm text-gray-500">
                  or{" "}
                  <a href={mailtoHref} className="gold-text underline">
                    send by email instead
                  </a>
                </p>
              </form>
            </>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
