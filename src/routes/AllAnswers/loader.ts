import { LoaderFunctionArgs } from "react-router-dom";
import { fetchAnswers } from "routes/AllAnswers/api";
import { AnswerType } from "helpers/customTypes";

export const getAllAnswers = async ({ params }: LoaderFunctionArgs) => {
  const { status, data } = await fetchAnswers(params.questionId || "");

  if (status !== 200) {
    throw data.errors[0];
  }

  return data as AnswerType[];
};
