import promptSync from "prompt-sync";
let prompt = promptSync();

function pattern(input) {
  for (let count = 1; count <= input; count++) {

    for (let counter = count; counter >= 1; counter--) {
      line += counter + " ";
    }
    console.log();
  }
}

let userInput = prompt("Enter a number: ");
let number = parseInt(userInput); // Convert input to an integer

pattern(number);
