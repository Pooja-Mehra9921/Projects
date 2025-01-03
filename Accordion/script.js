const firstQuestion = document.querySelector(".first-qustion");
const secondQuestion = document.querySelector(".second-qustion");
const thirdQuestion = document.querySelector(".third-qustion");
const fourthQuestion = document.querySelector(".fourth-qustion");
const fifthQuestion = document.querySelector(".fifth-qustion");
const sixthQuestion = document.querySelector(".sixth-qustion");
const firstAnswer = document.querySelector(".first-answer");
const secondAnswer = document.querySelector(".second-answer");
const thirdAnswer = document.querySelector(".third-answer");
const fourthAnswer = document.querySelector(".fourth-answer");
const fifthAnswer = document.querySelector(".fifth-answer");
const sixthAnswer = document.querySelector(".sixth-answer");



function handleAnswers (){
    firstAnswer.classList.add("display-none");
    secondAnswer.classList.add("display-none");
    thirdAnswer.classList.add("display-none");
    fourthAnswer.classList.add("display-none");
    fifthAnswer.classList.add("display-none");
    sixthAnswer.classList.add("display-none");

}


function handleFirstQuetion(){
    console.log("------------first");
    handleAnswers();
    firstAnswer.classList.remove("display-none");

}

function handleSecondQuetion(){
    console.log("------------second");
    handleAnswers();
    secondAnswer.classList.remove("display-none");
}

function handleThirdQuetion(){
    console.log("------------third");
    handleAnswers();
    thirdAnswer.classList.remove("display-none");
}

function handleFourthtQuetion(){
    console.log("------------fourth");
    handleAnswers();
    fourthAnswer.classList.remove("display-none");
}

function handleFifthQuetion(){
    console.log("------------fifth");
    handleAnswers();
    fifthAnswer.classList.remove("display-none");
}

function handleSixthQuetion(){
    console.log("------------sixth");
    handleAnswers();
    sixthAnswer.classList.remove("display-none");
}

firstQuestion.addEventListener("click", handleFirstQuetion);
secondQuestion.addEventListener("click", handleSecondQuetion);
thirdQuestion.addEventListener("click", handleThirdQuetion);
fourthQuestion.addEventListener("click", handleFourthtQuetion);
fifthQuestion.addEventListener("click", handleFifthQuetion);
sixthQuestion.addEventListener("click", handleSixthQuetion);