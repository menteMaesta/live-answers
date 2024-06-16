import { useLoaderData } from "react-router-dom";
import { QuestionType } from "helpers/customTypes";
import { STRINGS } from "helpers/constants";

export default function UserAnswer() {
  const question = useLoaderData() as QuestionType;
  return (
    <div className="mt-11 w-full h-full p-4 flex items-center flex-col">
      <p className="text-xl sm:text-3xl font-medium my-4">{question.title}</p>
      <textarea
        className={
          "w-full " +
          "rounded-md resize-none " +
          "mt-14 p-4 h-2/4 sm:h-1/3 " +
          "focus-visible:outline-0 " +
          "tracking-wide text-md sm:text-xl"
        }
        placeholder={STRINGS.USER_ANSWERS.TYPE_ANSWER}
      />
      <button
        className={
          "rounded-full px-4 py-1 " +
          "bg-gradient-to-r from-amber-300 to-lime-300 " +
          "hover:from-amber-400 hover:to-lime-400 " +
          "mt-11 " +
          "dark:text-gray-100 " +
          "dark:from-amber-600 dark:to-lime-600 " +
          "dark:hover:from-amber-700 dark:hover:to-lime-700 "
        }
      >
        {STRINGS.USER_ANSWERS.ANSWER}
      </button>
    </div>
  );
}
