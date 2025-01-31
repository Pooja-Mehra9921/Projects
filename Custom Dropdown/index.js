const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownOptions = document.getElementById("dropdown-options");
const list = document.querySelector(".dropdown-list");

let show = false;  


const handleSelectedBtn = () => {
    console.log("Dropdown clicked");
    show = !show;
    dropdownOptions.style.display = show ? "block" : "none";
};


list.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {  
        dropdownBtn.textContent = event.target.textContent;
        console.log("Selected item:", event.target.textContent);
        
        dropdownOptions.style.display = "none"; 
        show = false; 
    }
});


document.addEventListener("click", (event) => {
    if (!dropdownBtn.contains(event.target) && !dropdownOptions.contains(event.target)) {
        dropdownOptions.style.display = "none";
        show = false; 
    }
});
