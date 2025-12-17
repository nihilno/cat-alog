import Arrow from "./arrow";
import Badges from "./badges";
import Grid from "./grid";
import HeroForm from "./hero-form";
import Title from "./title";

function Hero() {
  return (
    <section className="flex flex-col items-center gap-8 py-16 text-center">
      <Badges />
      <Title />
      <HeroForm />
      <Arrow href="#grid" />
      <Grid />
      <h1>sponsors</h1>
      <Arrow href="#" />
      <HeroForm />
    </section>
  );
}

export default Hero;
