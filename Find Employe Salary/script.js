const FindTheSalary =()=>{
    let g = prompt("Enter Your Gender");
    let Yos = prompt("Enter Your Years Of Services");
    let Q = prompt("Enter Your Qualification");
    
    let gender = g.toUpperCase();
    let YearOfServices = Number(Yos);
    let Qualification = Q.toString();

    if((gender !== "MALE" && gender !== "M" && gender !== "F" && gender !== "FEMALE")){
        return document.write('<h1 style="color:red">Please Enter Valid Gender</h1>');
        }




if((gender == "male" || gender == "m") && YearOfServices >= 10 && Qualification == "pg"){
    document.write("Your Salary Is 15000");
} else if((gender == "male" || gender == "m") && YearOfServices >= 10 && Qualification == "g"){
    document.write("Your Salary Is 10000");
}else if((gender == "male" || gender == "m") && YearOfServices < 10 && Qualification == "pg"){
    document.write("Your Salary Is 10000");
}else if((gender == "male" || gender == "m") && YearOfServices > 10 && Qualification == "g"){
    document.write("Your Salary Is 7000");
}else if((gender == "female" || gender == "f") && YearOfServices >= 10 && Qualification == "pg"){
    docuent.write("Your Salary Is 12000");
}else if((gender == "feale" || gender == "f") && YearOfServices >= 10 && Qualification == "g"){
    document.write("Your Salary Is 9000");
}else if((gender == "female" || gender == "f") && YearOfServices < 10 && Qualification == "pg"){
    document.write("Your Salary Is 10000");
}else if((gender == "female" || gender == "f") && YearOfServices < 10 && Qualification == "g"){
    document.write("Your Salary Is 6000");
}else{
    document.write("You Are not Eligible to find salary");
}
};

/**
 * Making A ATM MACHINE
 */


const Atm =()=>{
    const name = "Pooja";
 const acc = 123456;
 const money =12000;

 let accNo = Number(prompt("Enter Your Account Number"));
 if(accNo == acc){
document.write(`Hii ${name} Welcome`);
 }else if(isNaN(accNo) && String(accNo).length != 6 && String(accNo).length < 6){
    document.write("Please Enter Valid Account Number ");
 }
 else{
    document.write('<h1 style="color:red">oops! Your Account Number is not Correct</h1>');
 }

};

Atm();