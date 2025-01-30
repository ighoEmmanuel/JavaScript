function getNumberShift(input) {
  let words = "";
  for (let char of input) {
    if (/[a-zA-Z]/.test(char)) {
      if (char === char.toLowerCase()) {
        let shifted = String.fromCharCode((char.charCodeAt(0) - 'a'.charCodeAt(0) + 13) % 26 + 'a'.charCodeAt(0));
        words += shifted;
      } else {
        let shifted = String.fromCharCode((char.charCodeAt(0) - 'A'.charCodeAt(0) + 13) % 26 + 'A'.charCodeAt(0));
        words += shifted;
      }
    } else {
      words += char;
    }
  }
  return words;
}


console.log(getNumberShift("Hello World!"));
