"use client";

import { Button } from "@/components/ui/button";
import { useDeleteProduct } from "@/hooks/useDeleteProduct";
import { cn, normalizeUrl, slugify } from "@/lib/utils";
import { Info, Loader2Icon, Tag, XIcon } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

function Item({ product }: { product: Product }) {
  const { name, url, image_url, id } = product;
  const { isDeleting, handleDelete } = useDeleteProduct();
  const [isConfirming, setIsConfirming] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 375 });
  const btnRef = useRef<HTMLButtonElement>(null);

  async function onDelete(id: string) {
    if (!isConfirming) {
      setIsConfirming(true);
      setTimeout(() => {
        setIsConfirming(false);
      }, 3000);
    } else {
      await handleDelete(id);
      setIsConfirming(false);
    }
  }

  return (
    <article className="group hover:bg-background hover:border-muted-foreground/30 grid grid-cols-1 gap-y-3 border p-2 text-sm backdrop-blur-3xl transition-all duration-300 ease-in-out sm:grid-cols-4 md:px-4 md:text-base">
      <div className="flex items-center gap-4 sm:col-span-3">
        <h3 className="line-clamp-1 text-left lg:text-xl">{name}</h3>
      </div>
      <div className="col-1 flex h-fit w-fit items-center gap-2">
        <Link href={`/watchlist/${slugify(name)}?id=${id}`}>
          <Button
            size="sm"
            className="rounded-sm text-xs md:text-base!"
            variant="outline"
            disabled={isDeleting}
          >
            <Info className="size-3 shrink-0 lg:size-4" />
            <span className={cn(isMobile ? "hidden" : "block")}>More</span>
          </Button>
        </Link>
        <a href={normalizeUrl(url)} target="_blank">
          <Button
            size="sm"
            className="rounded-sm text-xs md:text-base!"
            variant="outline"
            disabled={isDeleting}
          >
            <Tag className="size-3 shrink-0 lg:size-4" />
            <span className={cn(isMobile ? "hidden" : "block")}>
              View Product
            </span>
          </Button>
        </a>
        <Button
          size="sm"
          ref={btnRef}
          className={cn(
            "border-destructive/25! bg-destructive/10! hover:border-destructive/20! hover:bg-destructive/15! rounded-sm",
            isConfirming &&
              "border-destructive/60! bg-destructive/30! hover:border-destructive/60! hover:bg-destructive/30!",
          )}
          variant="outline"
          disabled={isDeleting}
          onClick={() => onDelete(id)}
        >
          <div>
            {isDeleting ? (
              <div className="flex w-fit items-center gap-1">
                <Loader2Icon className="size-3 shrink-0 animate-spin lg:size-4" />
              </div>
            ) : (
              <div className="flex w-fit items-center gap-1">
                <XIcon className="size-3 shrink-0 lg:size-4" />
              </div>
            )}
          </div>
        </Button>
      </div>

      {image_url ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image_url}
          alt={name.slice(0, 10)}
          className="absolute top-2 right-2 col-start-4 h-16 w-16 justify-self-end overflow-hidden rounded-sm bg-white object-cover object-top md:right-4"
          loading="lazy"
          decoding="async"
          width={64}
          height={64}
        />
      ) : (
        <div className="absolute top-2 col-start-4 hidden size-16 justify-self-end border backdrop-blur-3xl sm:block md:right-4" />
      )}
    </article>
  );
}

export default Item;
