const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownOptions = document.getElementById("dropdown-options");
const options = document.getElementsByClassName("options");

console.log("optionsssss", options);


function changeHtml(option){
console.log("optionsssss", option);
}

options.forEach(option => {
    changeHtml(option);
});

dropdownBtn.addEventListener("click", handleDropdownBtn);

let optionShow = false;

function handleDropdownBtn(){
    optionShow = !optionShow
    console.log("clickedddddddd");
    if(optionShow){
        dropdownOptions.style.display = "block";
    }else{
        dropdownOptions.style.display = "none";
    }
}