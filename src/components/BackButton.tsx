import { ButtonHTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";
import { STRINGS } from "helpers/constants";

export default function BackButton({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  const navigate = useNavigate();
  return (
    <button
      className={
        "flex items-center " +
        "space-x-1 font-medium " +
        "text-slate-700 " +
        "dark:text-slate-200 " +
        className
      }
      onClick={() => navigate(-1)}
      {...props}
    >
      <i
        className={
          "fa-solid fa-chevron-left " +
          "text-lg text-slate-700 " +
          "ml-3 dark:text-slate-300 "
        }
      />
      <p>{STRINGS.BACK}</p>
    </button>
  );
}
