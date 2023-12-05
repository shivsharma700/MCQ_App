import { useState } from "react"
import { MCQData } from "../Data/Data"
import Result from "./Result";

const Quiz = () => {

    const [questionNum, setQuestionNum] = useState(0);
    const [score, setScore] = useState(0);
    const [optionClicked, setOptionClicked] = useState(0);
    const [showScore, setShowScore] = useState(false);

    function onNextClick(){
        updateScore()
        setOptionClicked(0)
        if(questionNum < MCQData.length-1){
            setQuestionNum(questionNum + 1);
        }else{
            setShowScore(true);
        }
    }

    function updateScore(){
        if(optionClicked == MCQData[questionNum].answer){
            setScore(score + 1);
        }
    }

    const resetAll =()=> {
        setShowScore(false);
        setQuestionNum(0);
        setOptionClicked(0);
        setScore(0);
        console.log("clicked")
    }

  return (
    <div>
        <p className="heading-txt" >MCQ APP</p>
        <div className="container">
        {
            showScore ? (
                <Result score={score} totalScore={MCQData.length} playAgain={resetAll} />
            ) : (
            <>
            <div className="question">
                <span id="question-number" >{questionNum + 1}.</span>
                <span id="question-txt" >{MCQData[questionNum].question}</span>
            </div>
            <div className="option-container">
                {
                    MCQData[questionNum].options.map((option, idx) => {
                        return (
                            <button 
                              key={idx}
                              className={`option-btn ${
                                optionClicked == idx+1?"checked":null
                              }`}
                              onClick={()=>setOptionClicked(idx + 1)}
                             >
                                {option}
                            </button>
                        )
                    })
                }
            </div>
            <button onClick={onNextClick} id="next-button" >
                {(questionNum == MCQData.length-1) ? "SUBMIT" : "NEXT"}
            </button>
            </>)
        }
        </div>
    </div>
  )
}

export default Quiz