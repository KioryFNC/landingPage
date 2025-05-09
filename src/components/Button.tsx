import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const Button = ({
  variant = "primary",
  size = "md",
  children,
  className,
  fullWidth = false,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";

  const variantStyles = {
    primary: "bg-accent hover:bg-accent/90 text-accent-foreground",
    secondary: "bg-secondary hover:bg-secondary/90 text-secondary-foreground",
    outline: "border border-input hover:bg-muted hover:text-accent",
    ghost: "hover:bg-muted hover:text-accent",
  };

  const sizeStyles = {
    sm: "h-9 px-4 py-2 text-sm",
    md: "h-10 px-5 py-2.5 text-base",
    lg: "h-12 px-8 py-3 text-lg",
  };

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        fullWidth ? "w-full" : "",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
