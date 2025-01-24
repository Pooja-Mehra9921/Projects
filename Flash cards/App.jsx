import React, { useState } from "react";
import { Line } from "rc-progress";
import Card from "./component/Card";
import Questions from "../Flash cards/Users"



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
{Questions.map((e, index)=>{
    return <Card key={index} question = {e.question} answer ={e.answer} />;
})};
          


            <button onClick={handlepercentage}>increase</button>
          </div>
        </div>
    </>
  );
};

export default App;
