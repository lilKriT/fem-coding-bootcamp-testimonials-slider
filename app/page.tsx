import TestimonialsSlider from "@/_components/TestimonialsSlider";

export default function Home() {
  return (
    <section
      className="min-h-dvh flex justify-center items-center
      bg-[url(/pattern-curve.svg),url(/pattern-bg.svg)] bg-position-[bottom_left,center_right_10%] 
      bg-size-[40%_auto,auto_70%] bg-no-repeat"
    >
      <div className="w-full max-w-6xl">
        <TestimonialsSlider />
      </div>
    </section>
  );
}
