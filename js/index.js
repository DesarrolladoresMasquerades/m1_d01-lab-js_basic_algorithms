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

// Bonus 1
const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula gravida ipsum sed consectetur. Fusce tincidunt aliquam dignissim. Donec cursus mauris eu aliquam sagittis. Morbi et suscipit magna. Duis sagittis commodo arcu, et lobortis magna semper at. Vivamus rhoncus faucibus nibh sit amet ornare. Nulla bibendum malesuada ultrices. Suspendisse dapibus gravida est, non dignissim sem. Nulla non felis ut diam laoreet ornare at vitae lacus. Integer id tincidunt ante, nec vulputate urna. Donec faucibus ipsum non sagittis iaculis. Maecenas pulvinar lacinia nunc, et aliquam leo mollis in. Morbi sed odio eu sem interdum semper. Aenean maximus lobortis augue, eget auctor lacus tempor vel. Pellentesque neque orci, vestibulum eu tortor id, mattis auctor neque. Sed sit amet lobortis eros.

Aliquam ac sem sit amet risus interdum euismod in at augue. Pellentesque vitae neque non dui semper vulputate. Integer volutpat venenatis neque, sed bibendum ligula pharetra eu. Fusce ullamcorper, nisl eget condimentum sollicitudin, elit est pulvinar ex, in congue nunc purus vel lacus. Fusce mauris elit, efficitur a vehicula ut, faucibus at mauris. Cras a nisl aliquet, eleifend elit vitae, finibus arcu. Maecenas convallis ut nunc vitae congue. Cras sit amet vulputate lectus.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque interdum dui nec sapien porttitor, sed sagittis velit viverra. Maecenas hendrerit enim non luctus pretium. Nunc lobortis maximus metus, ac sollicitudin mauris luctus a. Fusce dictum blandit turpis. Etiam et suscipit libero. Pellentesque porttitor ullamcorper condimentum. Nulla placerat ante nisi, quis pellentesque augue pulvinar vel. Aenean id sapien lectus. Etiam et magna vitae arcu tempus tempor a eget enim. Praesent non tristique leo. Donec ullamcorper aliquam neque, vitae congue lorem mattis et.`;

let wordCount = 0;
let etCount = 0;

for (let i=0; i<text.length; ++i){
    if(text[i]===" ") wordCount ++;
    else wordCount = wordCount;
}

const textArr = text.split(' ');

for (let j=0; j<textArr.length; ++j){
    switch(textArr[j]){
        case "et": etCount ++;
        break;
        case "Et": etCount ++;
        break;
        case "et.": etCount ++;
        break;
        default: etCount = etCount;
        break;
    }
}


// Bonus 2
const phreaseToCheck = "Hello, my name is Aleix."