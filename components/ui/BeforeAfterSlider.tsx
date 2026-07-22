"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

export default function BeforeAfterSlider({
  before,
  after,
  beforeAlt,
  afterAlt,
  beforeLabel = "Before",
  afterLabel = "After",
  className = "",
}: {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}) {
  const [pos, setPos] = useState(50);
  const id = useId();

  return (
    <div
      className={`relative aspect-[4/5] w-full select-none overflow-hidden rounded-[1.5rem] border border-white/10 sm:aspect-[16/10] sm:rounded-[2rem] ${className}`}
    >
      {/* After — base layer, full image */}
      <Image
        src={after}
        alt={afterAlt}
        fill
        sizes="(max-width: 1024px) 90vw, 800px"
        className="object-cover"
        draggable={false}
      />

      {/* Before — revealed by clip-path based on slider position */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={before}
          alt={beforeAlt}
          fill
          sizes="(max-width: 1024px) 90vw, 800px"
          className="object-cover"
          draggable={false}
        />
      </div>

      {/* Divider line + handle (purely visual, driven by the same pos state) */}
      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.4)]"
        style={{ left: `${pos}%` }}
      />
      <div
        className="pointer-events-none absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-xl"
        style={{ left: `${pos}%` }}
      >
        <MoveHorizontal size={18} aria-hidden />
      </div>

      {/* Corner labels */}
      <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur-sm">
        {beforeLabel}
      </span>
      <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-[#F4DE88] backdrop-blur-sm">
        {afterLabel}
      </span>

      {/* Native range input — the actual interactive control. Using a real
          <input type="range"> (rather than custom pointer/drag handling)
          gives us free keyboard support, screen-reader support, and
          reliable touch behaviour without any gesture-recognition risk. */}
      <label htmlFor={id} className="sr-only">
        Drag to compare before and after
      </label>
      <input
        id={id}
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
