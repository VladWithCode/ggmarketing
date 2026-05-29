import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-[color:var(--color-border)] bg-white px-3 py-1 text-xs text-[color:var(--color-muted)]",
        className,
      )}
      {...props}
    />
  );
}
