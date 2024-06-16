import { useRouteError, Link } from "react-router-dom";
import { ErrorType } from "helpers/customTypes";
import { ROUTES, TEST_IDS } from "helpers/constants";

export default function ErrorPage() {
  const error = useRouteError() as ErrorType;
  console.error(error);

  return (
    <div
      className={
        "w-screen h-screen " +
        "flex items-center " +
        "justify-center flex-col " +
        "dark:bg-zinc-800"
      }
      data-testid={TEST_IDS.ERROR.PAGE}
    >
      <div
        className={
          "w-32 h-32 " +
          "flex rounded-md " +
          "bg-gradient-to-r from-amber-300 to-lime-300 " +
          "items-center justify-center " +
          "mb-7 " +
          "dark:from-amber-600 dark:to-lime-600 "
        }
        data-testid={TEST_IDS.ERROR.ICON}
      >
        <i
          className={
            "fa-solid fa-bug " +
            "text-8xl " +
            "text-white dark:text-zinc-800 " +
            "animate-wiggle "
          }
        />
      </div>
      <h1
        className="text-3xl dark:text-gray-100"
        data-testid={TEST_IDS.ERROR.TITLE}
      >
        An error occurred
      </h1>
      <p
        className="text-base dark:text-gray-300"
        data-testid={TEST_IDS.ERROR.MESSAGE}
      >
        {error.error?.message}
      </p>
      <Link
        to={ROUTES.DASHBOARD}
        className={
          "rounded-full px-4 py-1 " +
          "bg-gradient-to-r from-amber-300 to-lime-300 " +
          "hover:from-amber-400 hover:to-lime-400 " +
          "mt-11 " +
          "dark:text-gray-100 " +
          "dark:from-amber-600 dark:to-lime-600 " +
          "dark:hover:from-amber-700 dark:hover:to-lime-700 "
        }
        data-testid={TEST_IDS.ERROR.BACK_BUTTON}
      >
        Go back
      </Link>
    </div>
  );
}
