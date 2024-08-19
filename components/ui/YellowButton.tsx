import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function YellowButton({ className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "bg-gradient-to-r from-[#F2CB13] to-[#FF9900]",
        "text-black text-[14px]",
        "py-4 px-3 max-h-[35px] flex items-center",
        "rounded-[5px]",
        className
      )}
      {...props}
    />
  );
}
