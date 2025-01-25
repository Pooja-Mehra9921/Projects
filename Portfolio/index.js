const userName = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#write-message");
const send = document.querySelector("#send-btn");

console.log("---------name", userName);
console.log("---------email", email);

const user={
    name:"",
    email:"",
    message:""
};

userName.addEventListener("input", handlename);
email.addEventListener("input", handleemail);
message.addEventListener("input", handlemessage);
send.addEventListener("click", handlesubmit);

function handlename(e){
console.log("---name",e.target.value);
}

function handleemail(e){
    console.log("---name",e.target.value);
    }

    function handlemessage(e){
        console.log("---name",e.target.value);
        }
    function handlesubmit(){
        let user = userName.value;
        console.log("--------",user);
        console.log("clickessss");
    }