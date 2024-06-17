import { AnswerType } from "helpers/customTypes";

export const ROUTES = {
  DASHBOARD: "/",
  ANSWERS: "/:questionId/answers",
};

export const TEST_IDS = {
  BACK_BUTTON: "back-button",
  ALL_ANSWERS_LINK: "all-answers-link",
  TOP_BAR: "top-bar",
  ERROR: {
    PAGE: "error-page",
    BACK_BUTTON: "back-error-button",
    ICON: "error-icon",
    TITLE: "error-title",
    MESSAGE: "error-message",
  },
  TEXTAREA: {
    CONTAINER: "textarea-container",
    TEXTAREA: "textarea",
    ERROR_MESSAGE: "error-message",
  },
  USER_ANSWERS: {
    PAGE: "user-answers-page",
    TITLE: "user-answers-title",
    BUTTON: "user-answers-button",
  },
  ANSWER_CARD: {
    CARD: "answer-card",
    DATE: "answer-date",
  },
  ANSWER_LIST: "answer-list",
};

export const STRINGS = {
  ERROR: {
    TITLE: "An error occurred",
    BACK: "Go back",
  },
  ALL_ANSWERS: "All Answers",
  BACK: "back",
  USER_ANSWERS: {
    ANSWER: "Answer",
    TYPE_ANSWER: "Type your answer here...",
    EMPTY_ANSWER: "Please type an answer before submitting",
    NOT_ALLOWED_ANSWER:
      "Please avoid answers containing _, and offer additional explanation instead",
    SUCCESS: "Answer submitted successfully!",
  },
};

export const NOT_ALLOWED_ANSWERS = [
  "yes",
  "i don't know",
  "i dont know",
  "no",
  "that's fine",
  "thats fine",
];

export const EMPTY_ANSWER = {
  message: "",
  questionId: "",
};

export const QUESTION_STUB = {
  id: "680d6c4e-96b0-4468-9e93-71049d5b406a",
  title: "Is a hot dog a sandwich? Why?",
  createdAt: "2024-06-13T03:23:24.726+00:00",
  updatedAt: "2024-06-13T03:23:24.726+00:00",
};

export const ANSWER_STUB = {
  id: "1",
  questionId: QUESTION_STUB.id,
  message: "This is the answer",
  created_at: "2022-01-01T12:00:00Z",
} as AnswerType;
