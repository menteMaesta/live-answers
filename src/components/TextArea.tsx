import { TextareaHTMLAttributes } from "react";
import classnames from "classnames";

type Props = {
  hasError?: boolean;
  errorMessage?: string;
  labelClassName?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function TextArea({
  className,
  hasError = false,
  errorMessage = "This field is required",
  labelClassName = "",
  ...props
}: Props) {
  return (
    <div className={labelClassName + " relative mb-14"}>
      <textarea
        className={classnames(
          "border border-transparent",
          "rounded-md resize-none",
          "focus-visible:outline-0",
          "tracking-wide text-md sm:text-xl",
          "dark:bg-zinc-800 dark:text-zinc-50",
          "w-full h-full",
          {
            "active:border-amber-300 focus:border-amber-300": !hasError,
            "hover:border-amber-300": !hasError,
            "dark:active:border-zinc-500 dark:focus:border-zinc-500": !hasError,
            "dark:hover:border-zinc-500": !hasError,
          },
          className
        )}
        {...props}
      />
      {hasError && (
        <p className="w-full text-red-500 absolute -end-7 left-0">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
