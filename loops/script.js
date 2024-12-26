document.write("<h1>This Is For Loops Practice</h1>");


// For Loop

for(let i =10; i >= 1; i--){
    
    document.write(`5 * ${i} = ${i*5} <br>`);
    
}


// For Loops With Start Patterns

document.write("<h1> Start Pattern With For Loop </h1>");

for(let i = 1; i<=5; i++){
    for(let j=1; j<=i; j++){
    document.write(`*`);
}
document.write("<br>");
}

// For Loops With Reverse Start Patterns

document.write("<h1> Start Pattern With For Loop </h1>");

let i , j, k;

for(let i=1; i<=5; i++){
    for(let k=1; k<=5-i; k++){
        document.write("&nbsp&nbsp");
    }
    for(let j=1; j<=i; j++){
       
        document.write("*");

    }
    document.write("<br>");
}

// For Loops With Piramend Patterns

document.write("<h1> Start Pattern With For Loop </h1>");

let I , J, K;

for(let I=1; I<=5; I++){
    for(let K=1; K<=5-I; K++){
        document.write("&nbsp");
    }
    for(let J=1; J<=I; J++){
       
        document.write("*");

    }
    document.write("<br>");
}

// For Loops With Reverse Piramend Patterns

document.write("<h1> Start Pattern With For Loop </h1>");

let x , y, z;

for(let x=5; x<=1; x--){
    for(let z=5; z<=1-x; z--){
        document.write("&nbsp");
    }
    for(let y=5; y>=x; y--){
       
        document.write("*");

    }
    document.write("<br>");
}


// ForEach Loop with Array

let FruitName =['apple', 'bnana', 'graphns'];

FruitName.forEach((e, index)=>{
console.log(e, index);
});


//Map loop with array

let colorsName =['red', 'green', 'yellow', 'black'];

colorsName.map((value, index)=>{
 console.log(value, index);
});
