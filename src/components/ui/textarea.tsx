import * as React from "react";
import { cn } from "@/lib/utils";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-[120px] w-full rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-bg)] px-5 py-4 text-sm text-[color:var(--color-fg)] shadow-[inset_0_2px_6px_rgba(30,58,138,0.06)] placeholder:text-[color:var(--color-muted)]/60 focus:border-[color:var(--color-accent)]/50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[color:var(--color-accent)]/10 disabled:opacity-50",
        className,
      )}
      {...props}
    />
  ),
);
Textarea.displayName = "Textarea";
