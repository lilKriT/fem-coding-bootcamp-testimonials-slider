"use client";

import testimonials from "@/data/testimonials";
import Image from "next/image";
import { useState } from "react";

const TestimonialsSlider = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    // console.log(testimonials.length);
    setIndex((index + 1) % testimonials.length);
  };

  const prevSlide = () => {
    // console.log(testimonials.length);
    setIndex((index - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-blue-200">
      {/* Image */}
      <div>
        <Image
          src={testimonials[index].imageURL}
          alt={`Picture of ${testimonials[index].name}`}
          width={540}
          height={540}
          className="duration-1000 animate-slide"
        />
        <button onClick={prevSlide}>prev</button>
        <button onClick={nextSlide}>next</button>
      </div>
      {/* Quote */}
      <blockquote>
        {testimonials[index].text}
        <footer>
          <cite>{testimonials[index].name}</cite>
          {testimonials[index].title}
        </footer>
      </blockquote>
    </div>
  );
};

export default TestimonialsSlider;
