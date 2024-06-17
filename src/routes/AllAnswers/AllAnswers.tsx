import { useLoaderData } from "react-router-dom";
import moment from "moment";
import { AnswerType } from "helpers/customTypes";

export default function UserAnswer() {
  const allAnswers = useLoaderData() as AnswerType[];
  return (
    <div
      className={
        "mt-11 p-4 w-full " +
        "grid grid-cols-1 gap-4 " +
        "sm:grid-cols-2 " +
        "items-stretch"
      }
    >
      {allAnswers.map((answer) => (
        <div
          className={
            "bg-white p-4 rounded " +
            "min-h-40 " +
            "drop-shadow relative " +
            "dark:bg-zinc-800 dark:text-zinc-50 " +
            "pb-8"
          }
          key={answer.id}
        >
          <p>{answer.message}</p>
          <p
            className={
              "absolute bottom-2 right-2 " +
              "text-sm text-zinc-400 " +
              "font-medium"
            }
          >
            {moment(answer.created_at).format("LLL")}
          </p>
        </div>
      ))}
    </div>
  );
}
