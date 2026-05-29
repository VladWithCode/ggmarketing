import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-bg)] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[color:var(--color-accent)] text-white hover:brightness-105 hover:-translate-y-0.5 shadow-[0_14px_34px_-14px_color-mix(in_oklab,var(--color-accent)_70%,transparent)]",
        accent:
          "grad-brand text-white hover:brightness-105 hover:-translate-y-0.5 shadow-[0_16px_40px_-14px_color-mix(in_oklab,var(--color-accent-2)_70%,transparent)]",
        outline:
          "border border-[color:var(--color-accent)]/30 bg-white text-[color:var(--color-accent)] hover:border-[color:var(--color-accent)]/60 hover:bg-[color:var(--color-accent)]/5",
        ghost: "text-[color:var(--color-fg)]/70 hover:bg-[color:var(--color-accent)]/8 hover:text-[color:var(--color-fg)]",
        link: "text-[color:var(--color-accent)] underline-offset-4 hover:underline",
        destructive: "bg-[color:var(--color-price)] text-white hover:brightness-105",
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
