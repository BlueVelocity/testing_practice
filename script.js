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

function caeserCipher() {

}

export { capitalize, reverseString, calculator, caeserCipher };
