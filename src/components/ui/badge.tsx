import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70",
        className,
      )}
      {...props}
    />
  );
}
