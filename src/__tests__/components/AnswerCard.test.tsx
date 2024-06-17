import { render } from "@testing-library/react";
import moment from "moment";
import AnswerCard from "components/AnswerCard";
import { ANSWER_STUB, TEST_IDS } from "helpers/constants";

describe("AnswerCard", () => {
  it("renders correct styles", () => {
    const { getByTestId } = render(<AnswerCard answer={ANSWER_STUB} />);

    const card = getByTestId(TEST_IDS.ANSWER_CARD.CARD);
    const date = getByTestId(TEST_IDS.ANSWER_CARD.DATE);

    expect(card).toBeInTheDocument();
    expect(card).toHaveClass(
      "bg-white p-4 rounded",
      "min-h-40",
      "drop-shadow relative",
      "dark:bg-zinc-800 dark:text-zinc-50",
      "pb-8"
    );
    expect(date).toBeInTheDocument();
    expect(date).toHaveClass(
      "absolute bottom-2 right-2",
      "text-sm text-zinc-400",
      "font-medium"
    );
  });

  it("renders the answer text", () => {
    const { getByText } = render(<AnswerCard answer={ANSWER_STUB} />);
    const answerText = getByText(ANSWER_STUB.message);

    expect(answerText).toBeInTheDocument();
  });

  it("renders the answer creation date", () => {
    const { getByText } = render(<AnswerCard answer={ANSWER_STUB} />);
    const answerDate = getByText(moment(ANSWER_STUB.created_at).format("LLL"));
    expect(answerDate).toBeInTheDocument();
  });
});
