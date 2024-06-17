import moment from "moment";
import { AnswerType } from "helpers/customTypes";
import { TEST_IDS } from "helpers/constants";

export default function AnswerCard({ answer }: { answer: AnswerType }) {
  return (
    <div
      className={
        "bg-white p-4 rounded " +
        "min-h-40 " +
        "drop-shadow relative " +
        "dark:bg-zinc-800 dark:text-zinc-50 " +
        "pb-8"
      }
      key={answer.id}
      data-testid={TEST_IDS.ANSWER_CARD.CARD}
    >
      <p>{answer.message}</p>
      <p
        className={
          "absolute bottom-2 right-2 " +
          "text-sm text-zinc-400 " +
          "font-medium"
        }
        data-testid={TEST_IDS.ANSWER_CARD.DATE}
      >
        {moment(answer.created_at).format("LLL")}
      </p>
    </div>
  );
}
