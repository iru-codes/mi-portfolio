// components/ui/Button.tsx
import { cn } from "@/lib/utils.ts";
import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";

type Variant = "default" | "outline";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: string;
  children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ className, variant = "default", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition-colors shadow-sm";

    const variantStyles = {
      default: "bg-primary hover:bg-secondary text-white",
      outline:
        "border border-primary dark:border-bg-light bg-white dark:bg-not-blue text-primary dark:text-bg-light hover:bg-zinc-100 dark:hover:bg-zinc-700",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";