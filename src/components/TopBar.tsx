import { Link, useMatch, useLoaderData } from "react-router-dom";
import { ROUTES, TEST_IDS, STRINGS } from "helpers/constants";
import { QuestionType } from "helpers/customTypes";
import BackButton from "components/BackButton";

export default function TopBar() {
  const isDashboard = useMatch(ROUTES.DASHBOARD);
  const question = useLoaderData() as QuestionType;

  return (
    <div
      className={
        "w-screen h-11 items-center " +
        "shadow shadow-slate-100 bg-white " +
        "flex items-center space-x-2 " +
        "absolute top-0 z-10 " +
        "dark:shadow-zinc-800 " +
        "bg-gradient-to-r from-amber-300 to-lime-300 " +
        "dark:from-amber-600 dark:to-lime-600 "
      }
      data-testid={TEST_IDS.TOP_BAR}
    >
      {isDashboard && (
        <Link
          to={ROUTES.ANSWERS.replace(":questionId", question.id)}
          className={"flex items-center space-x-1"}
          data-testid={TEST_IDS.ALL_ANSWERS_LINK}
        >
          <i
            className={
              "fa-solid fa-message " +
              "text-lg text-zinc-950 dark:text-white " +
              "ml-3"
            }
          />
          <p className="font-medium text-zinc-950 dark:text-white">
            {STRINGS.ALL_ANSWERS}
          </p>
        </Link>
      )}
      {!isDashboard && <BackButton data-testid={TEST_IDS.BACK_BUTTON} />}
    </div>
  );
}
