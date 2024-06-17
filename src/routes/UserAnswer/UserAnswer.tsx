import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useLoaderData, useSubmit, useActionData } from "react-router-dom";
import classnames from "classnames";
import { useSnackbar } from "react-simple-snackbar";
import { QuestionType, AnswerBase, ErrorType } from "helpers/customTypes";
import { STRINGS, NOT_ALLOWED_ANSWERS, EMPTY_ANSWER } from "helpers/constants";
import TextArea from "components/TextArea";
import Button from "components/Button";

export default function UserAnswer() {
  const question = useLoaderData() as QuestionType;
  const actionData = useActionData() as ErrorType;
  const submit = useSubmit();
  const [openSnackbar] = useSnackbar();
  const [answer, setAnswer] = useState<AnswerBase>({
    ...EMPTY_ANSWER,
    questionId: question.id,
  });
  const [error, setError] = useState("");

  useEffect(() => {
    if (actionData?.message) {
      openSnackbar(actionData?.message);
    } else if (actionData) {
      openSnackbar(actionData);
    }
  }, [actionData]);

  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (error) setError("");
    setAnswer((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const sendData = () => {
    const formData = new FormData();
    formData.append("answerAction", "create");
    formData.append("answer", JSON.stringify(answer));
    submit(formData, { method: "post" });
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = answer.message.trim().toLowerCase();

    if (!message) {
      setError(STRINGS.USER_ANSWERS.EMPTY_ANSWER);
      return;
    } else if (NOT_ALLOWED_ANSWERS.includes(message)) {
      setError(STRINGS.USER_ANSWERS.NOT_ALLOWED_ANSWER.replace("_", message));
      return;
    }
    sendData();
    setAnswer({
      ...EMPTY_ANSWER,
      questionId: question.id,
    });
  };

  return (
    <form
      className="mt-11 w-full h-full p-4 flex items-center flex-col"
      onSubmit={onSubmit}
    >
      <p
        className={
          "text-xl " +
          "sm:text-3xl " +
          "font-medium my-4 " +
          "dark:text-zinc-50 dark:font-semibold"
        }
      >
        {question.title}
      </p>
      <TextArea
        className={classnames("p-4", {
          "border-red-500": error.length > 0,
        })}
        labelClassName={"w-full mt-14 h-2/4 sm:h-1/3"}
        placeholder={STRINGS.USER_ANSWERS.TYPE_ANSWER}
        name="message"
        value={answer.message}
        onChange={onChange}
        hasError={error.length > 0}
        errorMessage={error}
      />
      <Button
        className={"px-4 py-1 " + "mt-4 font-medium "}
        type="submit"
        children={STRINGS.USER_ANSWERS.ANSWER}
      />
    </form>
  );
}
