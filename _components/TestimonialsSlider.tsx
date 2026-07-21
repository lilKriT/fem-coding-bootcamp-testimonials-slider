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
    <div className="bg-blue-200 grid grid-cols-[6fr_5fr]">
      {/* Quote */}
      <blockquote className="relative z-10 grid grid-rows-[1fr_auto_1fr] mr-[-4ch] font-light">
        <span className="row-start-2">{testimonials[index].text}</span>
        <footer className="row-start-3 flex gap-2">
          <cite>{testimonials[index].name}</cite>
          <span>{testimonials[index].title}</span>
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
          duration-1000 animate-slide"
        />

        {/* Control Buttons */}
        <div className="absolute bg-white flex gap-2 rounded-full">
          <button
            onClick={prevSlide}
            className="bg-white pl-4 pr-6 py-3 rounded-l-full cursor-pointer"
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
            className="bg-white pl-6 pr-4 py-3 rounded-r-full cursor-pointer"
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
