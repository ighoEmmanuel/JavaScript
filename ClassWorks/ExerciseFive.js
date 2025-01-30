function arranger(numberOne, numberTwo, numberThree) {
  let arrange = "";
  
  if (numberOne <= numberTwo && numberTwo <= numberThree) {
    arrange = numberOne + "," + numberTwo + "," + numberThree;
  } else if (numberOne <= numberThree && numberThree <= numberTwo) {
    arrange = numberOne + "," + numberThree + "," + numberTwo;
  } else if (numberTwo <= numberOne && numberOne <= numberThree) {
    arrange = numberTwo + "," + numberOne + "," + numberThree;
  } else if (numberTwo <= numberThree && numberThree <= numberOne) {
    arrange = numberTwo + "," + numberThree + "," + numberOne;
  } else if (numberThree <= numberOne && numberOne <= numberTwo) {
    arrange = numberThree + "," + numberOne + "," + numberTwo;
  } else {
    arrange = numberThree + "," + numberTwo + "," + numberOne;
  }

  return arrange;
}

import promptSync from "prompt-sync"
let prompt = promptSync();


let userInput = prompt("Enter three different numbers with comma in between:")
let numbers = userInput.split(",").map(Number)

if(numbers.length == 3){
  console.log(arranger(numbers[0],numbers[1],numbers[2]));
}else{
 console.log("Three numbers with comma in between each of them")
}