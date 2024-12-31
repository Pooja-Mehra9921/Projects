const loginData = {name :"", password :""};

const nameField = document.getElementById("namefield");
const passwordField = document.getElementById("password");
const submitbtn = document.getElementById("submit-btn");

nameField.addEventListener("change", handlename);
passwordField.addEventListener("change", handlepassword);
submitbtn.addEventListener("click", handlesubmitbtn);

function handlename (event){
    loginData.name = event.target.value;
    console.log(loginData.name);
};

function handlepassword (event){
loginData.password = event.target.value;
console.log(loginData.password);

};

function handlesubmitbtn (){
console.log(loginData);
};

