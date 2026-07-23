"use client";

import testimonials from "@/data/testimonials";
import Image from "next/image";
import { useState } from "react";

type Phase = "idle" | "leaving" | "entering";

const animationTime = 300;

const TestimonialsSlider = () => {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("idle");

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  const slide = async (lambda: () => void) => {
    if (phase !== "idle") return;

    setPhase("leaving");
    // await new Promise((r) => setTimeout(r, animationTime));
    await sleep(animationTime);

    setPhase("entering");
    // Lambda runs here
    lambda();
    await sleep(animationTime);

    setPhase("idle");
  };

  const next = async () => {
    setIndex((index + 1) % testimonials.length);
  };

  const prev = async () => {
    setIndex((index - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="grid grid-cols-[6fr_5fr]">
      {/* Quote */}
      <blockquote
        className="relative z-10 grid grid-rows-[1fr_auto_1fr]
      bg-[url(/pattern-quotes.svg)] bg-no-repeat bg-position-[left_20%_top_25%]
      mr-[-4ch] font-light"
      >
        <span
          className={`${phase === "entering" && "animate-enter"} ${phase === "leaving" && "animate-leave"} row-start-2`}
        >
          {testimonials[index].text}
        </span>
        <footer
          className={`${phase === "entering" && "animate-slideright"} ${phase === "leaving" && "animate-slideleft"} row-start-3 flex gap-2 text-lg mt-8`}
        >
          <cite className="font-bold not-italic">
            {testimonials[index].name}
          </cite>
          <span className="font-medium text-gray-400">
            {testimonials[index].title}
          </span>
        </footer>
      </blockquote>

      {/* Image */}
      <div className="relative">
        <div
          className={`${phase === "entering" && "animate-fadein"} ${phase === "leaving" && "animate-fadeout"}`}
        >
          <Image
            src={testimonials[index].imageURL}
            alt={`Picture of ${testimonials[index].name}`}
            width={540}
            height={540}
            className={`w-full animate-slide shadow-[15px_15px_45px_1px] hover:shadow-[15px_25px_45px_5px] shadow-black/30 hover:rounded-xl motion-safe:duration-300 ease-in-out`}
          />
        </div>

        {/* Control Buttons */}
        <div className="absolute z-10 -translate-y-1/2 left-12 bg-white flex gap-2 rounded-full">
          <button
            onClick={() => slide(prev)}
            className="btn pl-4 pr-4 py-3 rounded-l-full  
            "
          >
            <Image
              src={"/icon-prev.svg"}
              alt="Previous slide"
              width={12}
              height={18}
            />
          </button>
          <button
            onClick={() => slide(next)}
            className="btn pl-4 pr-4 py-3 rounded-r-full"
          >
            <Image
              src={"/icon-next.svg"}
              alt="Next slide"
              width={13}
              height={18}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
