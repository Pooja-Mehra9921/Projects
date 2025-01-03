const textArea = document.getElementById("text-area");
const changeNumber = document.getElementById("change-number");
const fixedNumber = document.getElementById("fixed-number");
const mainContainer = document.getElementsByClassName("main-container");
const errorMsg = document.querySelector(".error-message");


function handleTeaxtArea (e){

let valuelength = e.target.value.length;
console.log(valuelength);

changeNumber.innerText = valuelength;


if(valuelength > 20){
    changeNumber.style.color = "red";
    fixedNumber.style.color = "red";
    textArea.style.border ="4px solid red";
    errorMsg.classList.remove("display-none");
   
    return;
}else{
    textArea.style.border ="1px solid black";
    changeNumber.style.color = "black";
    fixedNumber.style.color = "black";
    errorMsg.classList.add("display-none");
   
}

};



textArea.addEventListener("input", handleTeaxtArea);



