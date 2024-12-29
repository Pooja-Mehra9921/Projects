const container = document.getElementById("container");

const hideshowbtn = document.getElementById("hide-show-btn");

let ishide =false;

const handleHideShowbtn =()=>{
console.log("hello");
ishide = !ishide;
if(ishide){
    container.style.display="none";
    container.innerText ="heyyy evryone welcomeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";

}else{
    container.style.display="block";

}
}

hideshowbtn.addEventListener("click", handleHideShowbtn);