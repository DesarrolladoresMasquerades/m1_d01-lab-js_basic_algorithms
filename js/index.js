// Iteration 1: Names and Input

let hacker1 = "Aleix"
console.log(`The driver's name is ${hacker1}.`)

let hacker2 = "Eduard"
console.log(`The navigator's name is ${hacker2}.`)

// Iteration 2: Conditionals

    if (hacker1.length>hacker2.length){
        console.log(`The driver has de longest name, it has ${hacker1.length} characters.`);
    }else if(hacker1.length<hacker2.length){
        console.log(`It seems that the navigator has de longest name, it has ${hacker2.length} characters.`);
    }else if(hacker1.length === hacker2.length){
        console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
    }

// Iteration 3: Loops
//3.1

let hacker1Char = "";
for (let i=0; i<hacker1.length; i++){
    hacker1Char += hacker1[i].toString().toUpperCase() + " ";
}
console.log(hacker1Char);

//3.2

let hacker2Reversed = "";
for (let j=hacker2.length-1; j>=0; j--){
    hacker2Reversed += hacker2[j];
}
console.log(hacker2Reversed);

//3.3

if (hacker1[0]<hacker2[0]){
    console.log("The driver's name goes first.");
}else if(hacker1[0]>hacker2[0]){
    console.log("Yo, the navigator goes first definitely.");
} else if(hacker1[0]===hacker2[0]){
    console.log("What?! You both have the same name?");
}