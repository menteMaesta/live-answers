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
        "text-zinc-950 " +
        className
      }
      onClick={() => navigate(-1)}
      {...props}
    >
      <i
        className={
          "fa-solid fa-chevron-left " + "text-lg text-zinc-950 " + "ml-3 "
        }
      />
      <p>{STRINGS.BACK}</p>
    </button>
  );
}
