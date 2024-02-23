import { useState } from "react";
import { resultInitialState } from "./constants";



const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIndex, setAnswerIndex] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState(resultInitialState);
  const [showResult, setShowResult] = useState(false);

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
  setAnswerIndex(null)
  setResult((prev) => 
    answer? {
      ...prev, score: prev.score + 1, correctAnswers: prev.correctAnswers + 1 
    } : {
      ...prev, wrongAnswers: prev.wrongAnswers + 1
    }
  )

  if(currentQuestion !== questions.length - 1) {
    setCurrentQuestion((prev)=> prev + 1)
  } else {
    setCurrentQuestion(0);
    setShowResult(true);
  }
}

const onTryAgain = () => {
  setResult(resultInitialState);
  setShowResult(false);
}

  return (
    <>
      <div className="quiz-container">
        {!showResult ? (<>
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
        </>) : <div className="result">
          <h3>Result</h3>
          <p>Total questions: <span>{questions.length}</span></p>
          <p>Total correct answers: <span>{result.score}</span></p>
          <p>Total incorrect answers: <span>{result.wrongAnswers}</span></p>
              <button onClick={onTryAgain} className="try-again">Try again</button>
        </div>}
        
      

      
            <p id="attribution">
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
          </div>
          </>
  );
};

export default Quiz;
