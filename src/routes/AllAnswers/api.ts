export async function fetchAnswers(questionId: string) {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/questions/${questionId}/answers`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }
  );
  const data = await response.json();
  return { data, status: response.status };
}
