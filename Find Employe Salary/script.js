let gender = prompt("Enter Your Gender");
let YearOfServices = prompt("Enter Your Years Of Services");
let Qualification = prompt("Enter Your Qualification");


const FindTheSalary =()=>{
if(gender == "male" && YearOfServices >= 10 && Qualification == "pg"){
    document.write("Your Salary Is 15000");
} else if(gender == "male" && YearOfServices >= 10 && Qualification == "g"){
    document.write("Your Salary Is 10000");
}else if(gender == "male" && YearOfServices < 10 && Qualification == "pg"){
    document.write("Your Salary Is 10000");
}else if(gender == "male" && YearOfServices > 10 && Qualification == "g"){
    document.write("Your Salary Is 7000");
}else if(gender == "female" && YearOfServices >= 10 && Qualification == "pg"){
    document.write("Your Salary Is 12000");
}else if(gender == "female" && YearOfServices >= 10 && Qualification == "g"){
    document.write("Your Salary Is 9000");
}else if(gender == "female" && YearOfServices < 10 && Qualification == "pg"){
    document.write("Your Salary Is 10000");
}else if(gender == "female" && YearOfServices < 10 && Qualification == "g"){
    document.write("Your Salary Is 6000");
}else if(gender !== "male" && YearOfServices < 0 &&  Qualification !== "pg" ){
document.write("please enter valid values")
}
};

FindTheSalary();
