import { ReactNode } from "react";
import clsx from "clsx";

export default function Badge({
  children,
  className,
  tone = "gold",
}: {
  children: ReactNode;
  className?: string;
  tone?: "gold" | "gold-on-light" | "light";
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border px-5 py-2 text-xs font-medium uppercase tracking-[0.35em]",
        tone === "gold" && "border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37]",
        // On light (ivory/beige/white) backgrounds, #D4AF37 only reaches ~2:1
        // contrast — fails WCAG AA. Use the darker "ink" gold instead.
        tone === "gold-on-light" &&
          "border-[#8A6A1C]/25 bg-[#8A6A1C]/10 gold-ink",
        tone === "light" && "border-gray-300 bg-white text-gray-600",
        className
      )}
    >
      {children}
    </span>
  );
}
