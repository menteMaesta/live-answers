export type ErrorType = {
  statusText: string;
  message: string;
  data?: string;
  error?: { message: string; stack: string };
};
