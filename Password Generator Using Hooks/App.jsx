import React, { useState } from "react";


const App =()=>{

  return(
    <>

    <div className="main-conatiner">
        <div className="conatiner">
            <p style={{color:"white", fontSize:"20px", textAlign:"center"}}>Password genrater</p>
            <div className="input-container">
            <input className="inputtext" type="text" />
            <button className="btn">Copy</button>
            </div>
           
        </div>
    </div>
    </>
    
  )
};

export default App;