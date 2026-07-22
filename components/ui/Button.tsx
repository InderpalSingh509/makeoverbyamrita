"use client";

import Link from "next/link";
import clsx from "clsx";
import { Loader2 } from "lucide-react";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  loading?: boolean;
  external?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: () => void;
  disabled?: boolean;
  "aria-label"?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  loading = false,
  external = false,
  type = "button",
  onClick,
  disabled = false,
  ...rest
}: ButtonProps) {
  // Pure CSS for hover/tap feedback — deliberately NOT wrapped in a Framer
  // Motion gesture layer. Motion's whileTap on an element that also wraps a
  // Link/native click target can eat subsequent taps on mobile Safari once a
  // scroll gesture starts nearby (touch-action conflict). CSS transforms are
  // bulletproof for a simple pill button and cost nothing on the main thread.
  const classes = clsx(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold",
    "transition-transform duration-200 ease-out active:scale-95",
    "disabled:cursor-not-allowed disabled:opacity-60 disabled:active:scale-100",
    size === "md" ? "px-8 py-4 text-sm" : "px-10 py-5 text-base",
    {
      "bg-[#D4AF37] text-black hover:bg-[#bf9830] hover:scale-[1.02]":
        variant === "primary",
      "border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black":
        variant === "secondary",
      "text-current hover:text-[#D4AF37] underline-offset-4 hover:underline":
        variant === "ghost",
    },
    className
  );

  const content = (
    <>
      {loading && <Loader2 size={18} className="animate-spin" aria-hidden />}
      {children}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        onClick={onClick}
        {...rest}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={classes}
      {...rest}
    >
      {content}
    </button>
  );
}
