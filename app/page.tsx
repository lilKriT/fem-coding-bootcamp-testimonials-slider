import TestimonialsSlider from "@/_components/TestimonialsSlider";

export default function Home() {
  return (
    <section
      className="min-h-dvh flex justify-center items-start md:items-center
      bg-[url(/pattern-curve.svg),url(/pattern-bg.svg)] 
      bg-position-[bottom_left,center_top_2rem] md:bg-position-[bottom_left,center_right_10%]
      bg-size-[80%_auto,90%_auto] md:bg-size-[40%_auto,auto_70%] bg-no-repeat"
    >
      <div className="w-full max-w-6xl px-8 py-12">
        <TestimonialsSlider />
      </div>
    </section>
  );
}
