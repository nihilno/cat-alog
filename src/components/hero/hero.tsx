import Arrow from "./arrow";
import Badges from "./badges";
import Grid from "./grid";
import HeroForm from "./hero-form";
import Sponsors from "./sponsors";
import Title from "./title";

function Hero() {
  return (
    <section className="bg-background/50 container mx-auto mt-8 flex flex-col items-center gap-8 rounded-xl border-b-2 border-l-2 px-4 py-16 text-center backdrop-blur-md">
      <Title />
      <HeroForm />
      <Arrow href="#grid" />
      <Grid />
      <Arrow href="#" />
      <Badges />
      <Sponsors />
      <HeroForm />
    </section>
  );
}

export default Hero;
