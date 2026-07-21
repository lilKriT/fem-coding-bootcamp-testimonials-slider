"use client";

import testimonials from "@/data/testimonials";
import Image from "next/image";
import { useState } from "react";

const TestimonialsSlider = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((index + 1) % testimonials.length);
  };

  const prevSlide = () => {
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
        <span className="row-start-2">{testimonials[index].text}</span>
        <footer className="row-start-3 flex gap-2 text-lg mt-8">
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
        <Image
          src={testimonials[index].imageURL}
          alt={`Picture of ${testimonials[index].name}`}
          width={540}
          height={540}
          className="w-full 
          duration-1000 animate-slide shadow-[15px_15px_45px_1px] shadow-black/30"
        />

        {/* Control Buttons */}
        <div className="absolute z-10 -translate-y-1/2 left-12 bg-white flex gap-2 rounded-full">
          <button
            onClick={prevSlide}
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
            onClick={nextSlide}
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
