import { cn } from "@/lib/utils";
import React from "react";

export default function H1Gradient({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h1 className=" inline-block">
      <span
        className={cn(
          " font-bold text-lg bg-gradient-to-r from-[#F2CB13] to-[#E77003] text-transparent bg-clip-text",
          className
        )}
      >
        {children}
      </span>
    </h1>
  );
}
