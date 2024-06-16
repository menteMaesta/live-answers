import { fetchQuestion } from "routes/UserAnswer/api";

export const getQuestion = async () => {
  const { status, data } = await fetchQuestion();

  if (status !== 200) {
    throw data.errors[0];
  }

  return data;
};
