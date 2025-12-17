import { Cat } from "lucide-react";
import { Button } from "./ui/button";

function Logo() {
  return (
    <Button
      size="icon-lg"
      variant="outline"
      className="bg-foreground button-hover size-8 cursor-pointer rounded-full border"
    >
      <Cat className="size-5" />
    </Button>
  );
}

export default Logo;
