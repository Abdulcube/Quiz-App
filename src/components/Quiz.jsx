import { useCallback, useRef, useState } from "react";
import QUESTIONS from "../questions";
import Question from "./Question";
import Summary from "./Summary";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestion = userAnswers.length;
  const isQuizComplete = activeQuestion === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    (selectedAnswer) => {
      setUserAnswers((prevAnswer) => [...prevAnswer, selectedAnswer]);
    },
    [activeQuestion]
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (isQuizComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestion}
        index={activeQuestion}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
