import { fetchQuestion } from "routes/UserAnswer/api";
import { QuestionType } from "helpers/customTypes";

export const getQuestion = async () => {
  const { status, data } = await fetchQuestion();

  if (status !== 200) {
    throw data.errors[0];
  }

  return data as QuestionType;
};
