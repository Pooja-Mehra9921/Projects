/**
 * Create a program to calculate number and avergae of 5 subjects
 */

let studentName = "pooja";
let eng = 99;
let hindi = 67;
let punjabi = 77;
let science = 88;
let computer =99;

function studentsMarks(studentname, eng, hindi, punjabi, science, computer){
   console.log(`Hiii ${studentname}, 
    Your marks in English : ${eng},  
    Your marks in Hindi: ${hindi}, 
    Your marks in Punjabi: ${punjabi},
    Your marks in Science: ${science},
    Your marks in Computer: ${computer}
    `)
    let sumofmarks = eng + hindi + punjabi + science + computer ;
    console.log(`your total marks in all subject is ${sumofmarks} /100`);

    let AvergeMarks = sumofmarks/5;
    console.log(`Your Averge marks are ${AvergeMarks}`);
};

studentsMarks(studentName, eng, hindi, punjabi, science, computer);
