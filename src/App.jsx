import Quiz from "./components/Quiz/Quiz";
import {mathsQuiz} from "./constants";

function App() {
  return (
        <Quiz questions = {mathsQuiz.questions}/>    
  )
}

export default App
