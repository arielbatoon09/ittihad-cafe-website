import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const ButtonV2 = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ children, className, variant = "primary", ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-full p-3.5 px-12 text-center transition-all !text-white font-medium",
        variant === "primary"
          ? "bg-gradient-to-r from-brand-500 to-brand-800 border border-brand-800"
          : "bg-[#141414] border border-[#262626]",
        className,
      )}
      {...props}
    >
      <div className="flex items-center justify-center gap-2">
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-active:translate-x-12 group-hover:opacity-0 group-active:opacity-0">
          {children}
        </span>
      </div>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-11 group-hover:opacity-100 group-active:-translate-x-11 group-active:opacity-100">
        <span>{children}</span>
        <ArrowRight />
      </div>
    </button>
  );
});

ButtonV2.displayName = "InteractiveHoverButton";