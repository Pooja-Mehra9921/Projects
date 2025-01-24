import React from "react";
import "./style.css"

const Card = (prop)=>{
    return(
        <>
        <div className="card-content-conatiner">
            <div className="card">
        <p>{prop.question} </p>
        <p>{prop.answer} </p>
            </div>
            </div>
        </>
    )
};

export default Card;