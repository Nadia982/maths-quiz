import { useState } from "react";

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIndex, setAnswerIndex] = useState(null);
  const [answer, setAnswer] = useState(null);
  const { question, choices, correctAnswer } = questions[currentQuestion];
  
  const onAnswerClick = (answer, index) => {
    setAnswerIndex(index);
    if (answer === correctAnswer) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };

const onClickNext = () => {

}

  return (
    <>
      <div className="quiz-container">
        <>
          <span className="active-question-no">{currentQuestion + 1}</span>
          <span className="total-questions">/{questions.length}</span>
          <h2>{question}</h2>
          <div className="choices-container">
            {choices.map((answer, index) => (
              <button
                onClick={() => onAnswerClick(answer, index)}
                key={answer}
                className={answerIndex === index ? "selected-answer" : null}
              >
                {answer}
              </button>
            ))}
          </div>
          <div className="footer">
            <button onClick = {onClickNext} disabled={answerIndex === null}>
              {currentQuestion ===questions.length -1 ? "Finish" : "Next"}
            </button>
          </div>
        </>
      </div>
      <p class="attribution">
        The questions on this website contain public sector information licensed
        under <pre>the </pre>
        <a
          class="attribution-link"
          tabindex="-1"
          href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"
        >
          Government Licence v3.0
        </a>
      </p>
    </>
  );
};

export default Quiz;
