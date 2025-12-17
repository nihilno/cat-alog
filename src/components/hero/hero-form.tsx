import { Button } from "../ui/button";
import { Input } from "../ui/input";

function HeroForm() {
  return (
    <form className="w-full space-y-4">
      <Input
        type="text"
        placeholder="Paste product link..."
        className="h-16 w-full px-4 text-base!"
      />
      <Button type="button" className="h-16 w-full text-base">
        Track Now
      </Button>
      <h2 className="mt-2 text-base">Your watchlist for the web.</h2>
    </form>
  );
}

export default HeroForm;
