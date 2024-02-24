import "./AnswerTimer.jsx";
import { useEffect, useState, useRef } from "react";

function AnswerTimer({duration}) {
  const [counter, setCounter] = useState(0);
  const [progressLoaded, setProgressLoaded] = useState(1);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCounter((cur) => cur + 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    setProgressLoaded(100*(counter/duration));
    
    if(counter === duration){
        clearInterval(intervalRef.current);
    }
    
}, [counter]);

  return (
    <div className="answer-timer-container">
      <div className="progress">{counter}</div>
    </div>
  );
}

export default AnswerTimer;
