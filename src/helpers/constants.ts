export const ROUTES = {
  DASHBOARD: "/",
  ANSWERS: "/answers",
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
