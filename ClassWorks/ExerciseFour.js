//var prompt = require('prompt-sync')();
import promptSync from "prompt-sync"
let prompt = promptSync();

let userInput = prompt("Enter a number: ");
console.log(reverse(userInput))

function reverse(input){
let total = 0;
while (input > 0){
 total = total * 10 + (input % 10)
 input = Math.floor(input / 10);

}

return total

}
