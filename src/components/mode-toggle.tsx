"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { PiMoonStarsFill, PiSunDimFill } from "react-icons/pi";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === "dark";

  return (
    <Button
      size="icon-sm"
      variant="outline"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="button-hover"
    >
      {isDark ? (
        <PiSunDimFill className="size-[1.2rem]" />
      ) : (
        <PiMoonStarsFill className="size-[1.2rem]" />
      )}
      <span className="sr-only">Toggle Theme</span>
    </Button>
  );
}
