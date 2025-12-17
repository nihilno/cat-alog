import { Button } from "../ui/button";
import { Input } from "../ui/input";

function HeroForm() {
  return (
    <form className="w-full max-w-2xl space-y-4 px-2 md:px-4">
      <Input
        type="text"
        placeholder="Paste product link..."
        className="bg-background! h-13 w-full px-4 text-sm md:h-16 md:text-base!"
      />
      <Button
        type="button"
        className="h-13 w-full text-sm md:h-16 md:text-base"
      >
        Track Now
      </Button>
      <h2 className="mt-2 text-sm md:text-base">Your watchlist for the web.</h2>
    </form>
  );
}

export default HeroForm;
