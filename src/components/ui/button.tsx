import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-bg)] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-white text-black hover:bg-white/90 hover:-translate-y-0.5",
        accent:
          "bg-[color:var(--color-accent)] text-black hover:brightness-110 hover:-translate-y-0.5 shadow-[0_10px_40px_-10px_color-mix(in_oklch,var(--color-accent)_60%,transparent)] hover:shadow-[0_18px_50px_-12px_color-mix(in_oklch,var(--color-accent)_75%,transparent)]",
        outline: "border border-white/20 text-white hover:bg-white/5 hover:border-white/40",
        ghost: "text-white/80 hover:bg-white/5 hover:text-white",
        link: "text-white underline-offset-4 hover:underline",
        destructive: "bg-red-500 text-white hover:bg-red-500/90",
      },
      size: {
        default: "h-10 px-5",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-7 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
export { buttonVariants };
