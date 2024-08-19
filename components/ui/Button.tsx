import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        " text-[14px] font-futura-bold",
        "py-4 px-3 max-h-[35px] flex items-center",
        "rounded-[5px]",
        "border border-[#B1B3B3] text-[#B1B3B3]",
        className
      )}
      {...props}
    />
  );
}
