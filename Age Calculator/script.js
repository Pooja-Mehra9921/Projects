const inputdate = document.querySelector("#date-field");
const calculate = document.querySelector("#calbtn");
const day = document.querySelector("#dayNumber");
const month = document.querySelector("#monthNumber");
const year = document.querySelector("#yearNumber");
const errorMessage = document.querySelector(".error")


calculate.addEventListener("click", handlecalculateAge);

function handlecalculateAge(){
    console.log("calculate agee-------");

    const inputValue = new Date(inputdate.value);
    console.log("--------", inputValue.toLocaleString());

// input date values

    const indate = inputValue.getDate();
    const inmonth = inputValue.getMonth();
    const inyear = inputValue.getFullYear();

// cuurent date values

    const currentDate = new Date();
    console.log("--------", currentDate.toLocaleString());

    const currentdate = currentDate.getDate();
    const currentmonth = currentDate.getMonth();
    const currentyear = currentDate.getFullYear();


//results 

const finaldate = currentdate - indate;
console.log("=================",finaldate);

const finalMonth = currentmonth - inmonth;
console.log("=================",finalMonth);

const finalyear = currentyear - inyear;
console.log("=================",finalyear);


    if(inputdate.value == ""){
        errorMessage.style.display = "block" ;
        console.error("please enter your date");



    } else if(inputdate.value !== ""){
        console.log("this is currect");
        errorMessage.style.display = "none" ;
        day.innertext = finaldate;
        month.innertext = finalMonth;
        year.innertext = finalyear;


    }else{
console.log("-----------something went wrong");
    }

  
    

}


