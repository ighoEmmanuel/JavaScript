function reverse(input){
let total = 0;
while (input > 0){
 total = total * 10 + (input % 10)
 input = Math.floor(input / 10);

}

return total

}

console.log(reverse(25))

function palindrome(input) {
  let reversed = reverse(input);
  if (input === reversed) {
    return true;
  } else {
    return false;
  }
}
console.log(palindrome(454))



// Exerice 4
var prompt = require('prompt-sync')();
let userInput = prompt("Enter a number: ");
console.log(reverse(3456))
