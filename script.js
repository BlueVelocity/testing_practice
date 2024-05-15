function capitalize(string) {
  if (typeof string !== "string") throw new Error("Invalid input type, must be string");
  if (string.length === 0) throw new Error("Invalid Input: Empty string")
  return string[0].toUpperCase() + string.slice(1, string.length);
}

function reverseString(string) {
  if (typeof string !== "string") throw new Error("Invalid input type, must be string");
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
}

const calculator = {
  checkForNumber(a, b) {
    if (typeof a !== "number" || typeof b !== "number") throw new Error("Invalid input type, must be number");
  },
  add(a, b) {
    this.checkForNumber(a, b);
    return a + b;
  },

  subtract(a, b) {
    this.checkForNumber(a, b);
    return a - b;
  },
  
  multiply(a, b) {
    this.checkForNumber(a, b);
    return a * b;
  },

  divide(a, b) {
    if (b == 0) throw new Error("Cannot divide by 0");
    this.checkForNumber(a, b);
    return a / b;
  }
}

function caesarCipher(string, cipherKey) {
  if (string === undefined || cipherKey === undefined) throw new Error("Invalid Input: Missing argument");
  if (typeof string !== "string") throw new Error("Invalid Input: First argument requires a string");
  if (typeof cipherKey !== "number") throw new Error("Invalid Input: Second argument requires a number");
  if (string.length === 0) throw new Error("Invalid Input: Empty string");

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const shift = cipherKey % 26;
  let codedString = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      codedString += " ";
      continue;
    }

    if (!alphabet.includes(string[i].toUpperCase())) {
      codedString += string[i];
      continue;
    }

    const currentLetterIndex = alphabet.indexOf(string[i].toUpperCase());
    const codedLetterIndex = currentLetterIndex + shift;
    const codedLetter = codedLetterIndex > 26 ? alphabet[(codedLetterIndex) - 26] : alphabet[codedLetterIndex];
    
    if (string[i] === string[i].toUpperCase()) {
      codedString += codedLetter;
    } else {
      codedString += codedLetter.toLowerCase();
    }
  }

  return codedString;
}

function analyzeArray(arr) {
  return {
    average: arr.reduce( (acc, input) => (acc + input)) / arr.length,
    min: arr.reduce( (acc, input) => acc > input ? input : acc),
    max: arr.reduce( (acc, input) => acc < input ? input : acc),
    length: arr.length
  }
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
