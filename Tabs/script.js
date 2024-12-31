const FirstTab = document.getElementById("first-tab");
const SecondTab = document.getElementById("second-tab");
const ThirdTab = document.getElementById("third-tab");
const FourthTab = document.getElementById("fourth-tab");
const FirstContent = document.getElementById("first");
const secondContent = document.getElementById("second");
const thirdContent = document.getElementById("third");
const FourthContent = document.getElementById("forth");

function hideAllContent (){
    FirstContent.classList.add("display-none");
    secondContent.classList.add("display-none");
    thirdContent.classList.add("display-none");
    FourthContent.classList.add("display-none");
}

function handleFirstTab (){
    console.log("i got First");
    hideAllContent();
    FirstContent.classList.remove("display-none");

    };

function handleSecondTab (){
    console.log("i got second");
    hideAllContent();
    secondContent.classList.remove("display-none");
    };

function handleThirdTab (){
     console.log("i got third");
     hideAllContent();
     thirdContent.classList.remove("display-none");
     };

            
function handleFourthTab (){
     console.log("i got fourth");
     hideAllContent();
     FourthContent.classList.remove("display-none");
    };

    FirstTab.addEventListener("click", handleFirstTab);
SecondTab.addEventListener("click", handleSecondTab);
ThirdTab.addEventListener("click", handleThirdTab);
FourthTab.addEventListener("click", handleFourthTab);