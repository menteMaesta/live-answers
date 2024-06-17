import { ActionFunctionArgs } from "react-router-dom";
import { AnswerBase } from "helpers/customTypes";
import { STRINGS } from "helpers/constants";
import { postAnswer } from "routes/UserAnswer/api";

export const answerActions = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const answerAction = formData.get("answerAction");
  switch (answerAction) {
    case "create":
      return handleCreate(formData);
    default:
      break;
  }
};

const handleCreate = async (formData: FormData) => {
  const newAnswer = JSON.parse(formData.get("answer") as string) as AnswerBase;

  const { data: response, status } = await postAnswer(newAnswer);
  if (status !== 200) {
    return response.errors ? response.errors[0] : response;
  } else {
    return { message: STRINGS.USER_ANSWERS.SUCCESS };
  }
};
