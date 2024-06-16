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
