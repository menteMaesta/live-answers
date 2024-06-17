import { ButtonHTMLAttributes } from "react";

export default function Button({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={
        "rounded-full " +
        "bg-gradient-to-r from-amber-300 to-lime-300 " +
        "hover:from-amber-400 hover:to-lime-400 " +
        "dark:text-gray-100 " +
        "dark:from-amber-600 dark:to-lime-600 " +
        "dark:hover:from-amber-700 dark:hover:to-lime-700 " +
        className
      }
      {...props}
    />
  );
}
