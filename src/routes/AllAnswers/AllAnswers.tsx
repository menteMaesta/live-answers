import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { AnswerType } from "helpers/customTypes";
import { TEST_IDS } from "helpers/constants";
import { transmit } from "helpers/transmitHelper";
import AnswerCard from "components/AnswerCard";

export default function AllAnswers() {
  const allAnswers = useLoaderData() as AnswerType[];
  const [answers, setAnswers] = useState<AnswerType[]>(allAnswers);

  useEffect(() => {
    let unsubscribe;
    const subscription = transmit.subscription("newAnswer");

    subscription.create();
    unsubscribe = subscription.onMessage((data: string) => {
      const newAnswer = JSON.parse(data.replace("data: ", ""));
      setAnswers((prevAnswers) => [newAnswer, ...prevAnswers]);
    });

    return () => {
      unsubscribe();
      subscription.delete();
    };
  }, []);

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
      {answers.map((answer) => (
        <AnswerCard answer={answer} key={answer.id} />
      ))}
    </div>
  );
}
