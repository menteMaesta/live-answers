import { AnswerBase } from "helpers/customTypes";

export async function fetchQuestion() {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/question`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  const data = await response.json();
  return { data, status: response.status };
}

export async function postAnswer(answer: AnswerBase) {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/questions/${
      answer.questionId
    }/answers`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(answer),
    }
  );
  const data = await response.json();
  return { data, status: response.status };
}
