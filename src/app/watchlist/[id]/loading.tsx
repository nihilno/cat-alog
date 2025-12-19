import { CARD_STYLE } from "@/lib/consts";
import { cn } from "@/lib/utils";
import { Loader2Icon } from "lucide-react";

function Loading() {
  return (
    <section className={cn(CARD_STYLE, "relative h-dvh")}>
      <Loader2Icon className="text-primary absolute top-1/2 left-1/2 size-12 -translate-x-1/2 -translate-y-1/2 animate-spin md:size-24" />{" "}
    </section>
  );
}

export default Loading;
