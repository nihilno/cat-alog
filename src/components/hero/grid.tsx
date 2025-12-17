"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function Grid() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray(".grid-item");

      gsap.set(items, {
        opacity: 0,
        y: 60,
        scale: 0.95,
      });

      gsap.to(items, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        stagger: {
          each: 0.15,
          from: "start",
          grid: "auto",
        },
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          scrub: 1,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      id="grid"
      className="grid h-120 scroll-mt-32 grid-cols-2 grid-rows-3 gap-4 px-2 text-sm md:h-160 md:px-4 md:text-base xl:h-200"
    >
      <div className="grid-item bg-foreground grid place-items-center rounded-xl p-2 text-center text-black shadow-lg transition-shadow hover:shadow-2xl">
        Precision tracking: Real&nbsp;&mdash;&nbsp;time monitoring without
        noise.
      </div>
      <div className="grid-item bg-foreground grid place-items-center rounded-xl p-2 text-center text-black shadow-lg transition-shadow hover:shadow-2xl">
        Seamless pinning: Save products in one click.
      </div>
      <div className="grid-item bg-foreground col-span-2 grid place-items-center rounded-xl p-2 text-center text-black shadow-lg transition-shadow hover:shadow-2xl">
        Smart alerts: Get notified only when prices change.
      </div>
      <div className="grid-item bg-foreground grid place-items-center rounded-xl p-2 text-center text-black shadow-lg transition-shadow hover:shadow-2xl">
        Cross&nbsp;&mdash;&nbsp;platform sync: Your watchlist, everywhere.
      </div>
      <div className="grid-item bg-foreground grid place-items-center rounded-xl p-2 text-center text-black shadow-lg transition-shadow hover:shadow-2xl">
        Privacy&nbsp;&mdash;&nbsp;first: We track products, not people.
      </div>
    </section>
  );
}

export default Grid;
