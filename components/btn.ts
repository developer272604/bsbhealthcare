import { cn } from "@/lib/cn";

// Pure class helper (no content imports) so client components can use it without bundling site content.
export type Variant = "red" | "outline" | "green" | "navy" | "white" | "ghost" | "gold";

export const btnClass = (variant: Variant = "red", size: "md" | "lg" = "md") =>
  cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0",
    size === "lg" ? "px-7 py-3.5 text-base" : "px-5 py-2.5 text-sm",
    variant === "red" && "bg-brand-red text-white shadow-md shadow-brand-red/25 hover:bg-brand-red-dark",
    variant === "green" && "bg-brand-green-dark text-white hover:bg-[#0f6a2e]",
    variant === "navy" && "bg-navy text-white hover:bg-navy-800",
    variant === "gold" && "bg-gold text-navy hover:bg-[#ffc61a]",
    variant === "white" && "bg-white text-navy hover:bg-mint",
    variant === "outline" && "border-2 border-navy text-navy hover:bg-navy hover:text-white",
    variant === "ghost" && "border-2 border-white/80 text-white hover:bg-white hover:text-navy",
  );

