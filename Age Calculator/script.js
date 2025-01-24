const inputdate = document.querySelector("#date-field");
const calculate = document.querySelector("#calbtn");
const errorMessage = document.querySelector(".error")
const result = document.querySelector(".result");


calculate.addEventListener("click", handlecalculateAge);

function handlecalculateAge(){
    console.log("calculate agee-------");

    const inputValue = new Date(inputdate.value);
    const todayDate = new Date();




//results 

let finaldate = todayDate.getDate() - inputValue.getDate();
let finalMonth = todayDate.getMonth() - inputValue.getMonth();
let finalyear = todayDate.getFullYear() - inputValue.getFullYear();

if (!inputdate.value) {
    // Show error if no date is entered
    errorMessage.style.display = "block";
    errorMessage.textContent = "Please enter your date of birth.";
    result.textContent = ""; 
    return;
  } else {
    errorMessage.style.display = "none"; 
  }

  
  if (finaldate < 0) {
    finalMonth--; // Borrow days from the previous month
    finaldate += new Date(todayDate.getFullYear(), todayDate.getMonth(), 0).getDate();
  }

  if (finalMonth < 0) {
    finalyear--; // Borrow months from the previous year
    finalMonth += 12;
  }

  // Display the result
  result.textContent = `You are ${finalyear} years, ${finalMonth} months, and ${finaldate} days old.`;


}


