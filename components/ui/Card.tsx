import { ReactNode } from "react";
import clsx from "clsx";

export default function Card({
  children,
  className,
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={clsx(
        "rounded-3xl border border-gray-200 bg-white p-6",
        hover && "hover-lift",
        className
      )}
    >
      {children}
    </div>
  );
}
