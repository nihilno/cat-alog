"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

function Highlight() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(
      "#highlight",
      { opacity: 0, xPercent: 20 },
      {
        scrollTrigger: {
          trigger: "#highlight",
          start: "top bottom",
          end: "center center",
          scrub: 1,
        },
        opacity: 1,
        xPercent: 0,
        ease: "power1.inOut",
      },
    );
  }, []);

  return (
    <section
      id="highlight"
      className="text-background relative container mx-auto flex h-dvh max-h-100 max-w-300 scroll-mt-32 flex-col items-center gap-8 overflow-hidden rounded-xl border border-dashed px-4 py-16 text-center lg:max-h-140"
    >
      <Image
        src="/highlight.webp"
        alt="Highlight"
        fill
        className="object-cover"
        priority
        quality={50}
      />
      <div className="highlight-content absolute inset-0 grid place-items-center bg-black/60 p-8 text-white">
        <h2 className="text-3xl font-semibold md:text-5xl">
          Meet Your Price Guardian
        </h2>
        <h3>
          This regal feline watches your wishlist and pounces when prices drop.
        </h3>
        <p className="mt-4 max-w-[40ch]">
          Pin the products you care about, let the guardian track their prices,
          and receive instant email notifications the moment they drop below
          your target. No more missed discounts or endless refreshing — just
          effortless savings.
        </p>
        <div className="flex items-center gap-4 md:gap-8">
          <Button
            size="lg"
            className="button-hover size-30 hover:-rotate-10 hover:shadow-[0px_0px_40px_10px_#e4832d50]"
          >
            Learn <br /> More
          </Button>
          <Link href="#hero">
            <Button
              size="lg"
              className="button-hover size-30 hover:rotate-10 hover:shadow-[0px_0px_40px_10px_#e4832d50]"
            >
              Start <br /> Tracking
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Highlight;
