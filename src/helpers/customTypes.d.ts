export type ErrorType = {
  statusText: string;
  message: string;
  data?: string;
  error?: { message: string; stack: string };
};

export type QuestionType = {
  id: string;
  title: string;
};

export interface AnswerBase {
  questionId: string;
  message: string;
}
export interface AnswerType extends AnswerBase {
  id: string;
  createdAt: string;
  updatedAt: string;
}
