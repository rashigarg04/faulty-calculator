let random = Math.random();
let a = prompt("Enter the first number");
let c = prompt("Enter the operation (+, -, *, /)");
let b = prompt("Enter the second number");

let obj = {
    "+": "-",
    "-": "/",
    "*": "+",
    "/": "**",
};

console.log(random);

if (random > 0.1) {
    // perform correct calculation
    let result = eval(`${a} ${c} ${b}`);
    alert(`The result is ${result}`);
    console.log(`The result is ${result}`);
} else {
    // perform wrong calculation
    c = obj[c];
    let result = eval(`${a} ${c} ${b}`);
    alert(`The result is ${result}`);
    console.log(`The result is ${result}`);
}
