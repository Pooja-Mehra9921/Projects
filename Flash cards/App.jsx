import React, { useState } from "react";
import { Line } from "rc-progress";

const questions = [{
    id: 0,
    question: "what is the difference between var, let, const?",
    answer: "In JavaScript, var, let, and const are all used to declare variables, but they differ in their scope, use, and hoisting."
},
{
    id: 1,
    question: "what is javascript",
    answer: "avaScript is a programming language that allows developers to make interactive web pages. It's a client-side scripting language that's a core technology of the World Wide Web."
}]

const App = () => {

const [percentage, setpercentage] = useState(0);
console.log("perchangfeee-----", percentage);


const handlepercentage = () => {
    if(percentage <=19){
    setpercentage(percentage+1);
} else{
    setpercentage(0);
}};

  return (
    <>
      <div className="main-conatiner">
        <div className="card-conatiner">
          <p style={{ fontSize: "20px", fontWeight: "600", margin: "20px" }}>
            {" "}
            Flash cards
          </p>
          <div className="progressbar">
            <Line
              percent={percentage/19 * 100}
              strokeColor={"black"}
              strokeWidth={5}
              trailWidth={8}
              style={{
                width: "420px",
                marginRight: "10px",
                borderRadius: "200px",
              }}
            />
            <div className="question-numbers">{percentage}/20</div>
          </div>

          <div className="card-content-conatiner">
            <div className="card">
        <p>hello {questions[0].question}</p>
        <p>hello {questions[0].answer}</p>
            </div>


            <button onClick={handlepercentage}>increase</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
