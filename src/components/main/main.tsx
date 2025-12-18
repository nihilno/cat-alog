import About from "@/components/main/about";
import Arrow from "../global/arrow";
import Grid from "./grid";
import MainForm from "./main-form";
import MainMarquee from "./marquee";
import Title from "./title";

function Main() {
  return (
    <section className="bg-background/50 flex flex-col items-center gap-8 border-r-2 border-l-2 px-2 py-16 text-center backdrop-blur-md">
      <Title />
      <MainForm />
      <Arrow href="#" />
      <Grid />
      <Arrow href="#" />
      <About />
      <MainMarquee />
      <Title />
      <MainForm />
    </section>
  );
}

export default Main;
