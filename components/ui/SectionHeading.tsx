"use client";

import { ReactNode } from "react";
import clsx from "clsx";
import FadeIn from "@/components/ui/FadeIn";
import Badge from "@/components/ui/Badge";

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  theme = "light",
  className,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: ReactNode;
  align?: "center" | "left";
  theme?: "light" | "dark";
  className?: string;
}) {
  return (
    <FadeIn
      className={clsx(
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl",
        className
      )}
    >
      <Badge tone={theme === "dark" ? "gold" : "gold-on-light"}>{eyebrow}</Badge>

      <h2
        className={clsx(
          "mt-6 text-4xl leading-tight text-balance md:text-5xl",
          theme === "dark" ? "text-white" : "text-gray-900"
        )}
      >
        {title}
        {highlight && (
          <span
            className={clsx(
              "mt-1 block",
              theme === "dark" ? "gold-text" : "gold-text-on-light"
            )}
          >
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p
          className={clsx(
            "mt-6 text-lg leading-8 text-balance md:mt-8",
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          )}
        >
          {description}
        </p>
      )}
    </FadeIn>
  );
}
