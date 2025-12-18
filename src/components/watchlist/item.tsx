"use client";

import { cn } from "@/lib/utils";
import { LineChart, Radar, Tag, XIcon } from "lucide-react";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { Button } from "../ui/button";

function Item({ product }: { product: Product }) {
  const { name, current_price, currency, url, image_url } = product;
  const isMobile = useMediaQuery({ maxWidth: 375 });

  return (
    <div className="group hover:bg-background hover:border-muted-foreground/30 grid grid-cols-1 gap-y-3 border p-2 text-sm backdrop-blur-3xl transition-all duration-300 ease-in-out sm:grid-cols-4 md:px-4 md:text-base">
      <div className="flex items-center gap-4 sm:col-span-3">
        <h3 className="group-hover:text-primary line-clamp-1 text-left lg:text-xl">
          {name}
        </h3>
        <div className="ml-auto flex shrink-0 items-center gap-1 font-bold lg:text-xl">
          <h4 className="first-letter:capitalize">{current_price}</h4>
          <h4 className="uppercase">{currency}</h4>
          <Radar className="text-primary ml-4 size-4.5 animate-pulse lg:size-6" />
        </div>
      </div>
      <div className="col-1 flex h-fit w-fit items-center gap-2">
        <Button
          size="sm"
          className="rounded-sm text-xs md:text-base!"
          variant="outline"
        >
          <LineChart className="size-3 lg:size-4" />
          <span className={cn(isMobile ? "hidden" : "block")}>View Chart</span>
        </Button>
        <Link href={url}>
          <Button
            size="sm"
            className="rounded-sm text-xs md:text-base!"
            variant="outline"
          >
            <Tag className="size-3 lg:size-4" />
            <span className={cn(isMobile ? "hidden" : "block")}>
              View Product
            </span>
          </Button>
        </Link>
        <Button
          size="sm"
          className="rounded-sm text-xs md:text-base!"
          variant="outline"
        >
          <XIcon className="size-3 lg:size-4" />
        </Button>
      </div>

      {image_url ? (
        <img
          src={image_url}
          alt={name.slice(0, 10)}
          className="absolute top-2 right-2 col-start-4 hidden h-16 w-16 justify-self-end overflow-hidden rounded-sm bg-white object-cover object-top sm:block md:right-4"
          loading="lazy"
          decoding="async"
          width={64}
          height={64}
        />
      ) : (
        <div className="absolute top-2 col-start-4 hidden size-16 justify-self-end border backdrop-blur-3xl sm:block md:right-4" />
      )}
    </div>
  );
}

export default Item;
