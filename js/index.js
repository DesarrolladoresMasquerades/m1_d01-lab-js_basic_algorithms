console.log("im ready!")


// Iteration 1: Names and Input
// 
let hacker1 = "Pedro"

console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Fernando"

console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)}
 else {console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)}


// Iteration 3: Loops
let upperName = hacker1.toUpperCase()
let upperSpaced = ""
for (i = 0; i < upperName.length; i++){
upperSpaced += upperName[i] + " "   
}  
console.log(upperSpaced)

let reverseNav = ""
for (i = hacker2.length - 1; i >= 0; i--){
    reverseNav += hacker2[i]
} console.log(reverseNav)

if (hacker1 < hacker2) {console.log(`The driver's name goes first.`)}
else if (hacker1 > hacker2) {console.log(`Yo, the navigator goes first definitely.`)}
else {console.log("What? you both have the same name?")}
