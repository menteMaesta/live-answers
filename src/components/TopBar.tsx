import { Link, useMatch } from "react-router-dom";
import { ROUTES, TEST_IDS } from "helpers/constants";
import BackButton from "components/BackButton";

export default function Dashboard() {
  const isDashboard = useMatch(ROUTES.DASHBOARD);
  return (
    <div
      className={
        "w-screen h-11 items-center " +
        "shadow shadow-slate-100 bg-white " +
        "flex items-center space-x-2 " +
        "absolute top-0 z-10 " +
        "dark:bg-slate-900 " +
        "dark:shadow-slate-950"
      }
      data-testid={TEST_IDS.TOP_BAR}
    >
      {isDashboard && (
        <Link
          to={ROUTES.ANSWERS}
          className={"flex items-center space-x-1"}
          data-testid={TEST_IDS.ALL_ANSWERS_LINK}
        >
          <i
            className={
              "fa-solid fa-message " +
              "text-lg text-slate-700 " +
              "ml-3 dark:text-slate-300 "
            }
          />
          <p className="font-medium text-slate-700 dark:text-slate-200">
            All Answers
          </p>
        </Link>
      )}
      {!isDashboard && <BackButton data-testid={TEST_IDS.BACK_BUTTON} />}
    </div>
  );
}
