function sumOfDigits(input){
let total = 0;
while (input > 0){
 total += input % 10
 input = Math.floor(input / 10);

}

return total

}

console.log(sumOfDigits(25));