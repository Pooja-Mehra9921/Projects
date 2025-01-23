import React, { useState } from "react";


const App =()=>{
const [count, setcount] = useState(0);

  return(
    <>
    <div className="main-container">
        <div className="container">
            <p className="number">{count}</p>
            <div className="button-container">
            <button className="btn" onClick={()=>{
                setcount(count + 1);
            }}>Increment</button>
            <button className="btn" onClick={()=>{
if(count <=0){
    count === 0
}else{
    setcount(count - 1);

}



            }}>Decrement</button>
            </div>
           
        </div>
    </div>
    </>
  )
};

export default App;