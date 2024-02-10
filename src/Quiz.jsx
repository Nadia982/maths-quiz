import {useState} from "react";

const Quiz = ({questions}) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const {question, choices, correctAnswer} = questions[currentQuestion];

  return (
    <div className="quiz-container">
        <>
        <span className="active-question-no">{currentQuestion + 1}</span>
        <span className="total-questions">/{questions.length}

        </span>
        </>
    <p class="attribution">
      The questions on this website contain public sector information licensed
      under <pre>the </pre> 
      <a
        class="attribution-link"
        tabindex="-1"
        href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/">Government Licence v3.0</a>      
    </p>
    </div>
  )
}

export default Quiz