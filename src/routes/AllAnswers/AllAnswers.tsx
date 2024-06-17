import { useLoaderData } from "react-router-dom";
import { AnswerType } from "helpers/customTypes";
import { TEST_IDS } from "helpers/constants";
import AnswerCard from "components/AnswerCard";

export default function AllAnswers() {
  const allAnswers = useLoaderData() as AnswerType[];
  return (
    <div
      className={
        "mt-11 p-4 w-full " +
        "grid grid-cols-1 gap-4 " +
        "sm:grid-cols-2 " +
        "items-stretch"
      }
      data-testid={TEST_IDS.ANSWER_LIST}
    >
      {allAnswers.map((answer) => (
        <AnswerCard answer={answer} key={answer.id} />
      ))}
    </div>
  );
}
