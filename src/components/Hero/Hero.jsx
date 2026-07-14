import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

function Hero() {
  return (
   <section
  id="home"
  className=" bg-white mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-12 px-6 md:flex-row"
>
      <HeroContent />
      <HeroImage />
    </section>
  );
}

export default Hero;