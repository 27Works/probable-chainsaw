import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function YellowButton({ className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "bg-gradient-to-r from-[#F2CB13] to-[#FF9900]",
        "text-black font-bold",
        "py-4 px-3",
        "rounded-[5px]",
        className
      )}
      {...props}
    />
  );
}
