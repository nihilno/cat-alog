"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Badge } from "../ui/badge";

gsap.registerPlugin(ScrollTrigger);

function Badges() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const items = gsap.utils.toArray(".badge-item");

    gsap.set(items, { opacity: 0, y: 40 });

    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.25,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        scrub: 1,
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="my-16 flex flex-col items-center gap-32 sm:my-32 sm:gap-48 lg:my-64 lg:gap-64"
    >
      <Badge className="badge-item flex items-center gap-2 opacity-100 sm:gap-4">
        <FaCheckCircle className="sm:size-6!" />
        <span className="sm:text-lg">Free to Start</span>
      </Badge>
      <Badge className="badge-item flex items-center gap-2 opacity-100 sm:gap-4">
        <FaCheckCircle className="sm:size-6!" />
        <span className="sm:text-lg">Instant notifications</span>
      </Badge>
      <Badge className="badge-item flex items-center gap-2 opacity-100 sm:gap-4">
        <FaCheckCircle className="sm:size-6!" />
        <span className="sm:text-lg">Work across major stores</span>
      </Badge>
    </section>
  );
}

export default Badges;
