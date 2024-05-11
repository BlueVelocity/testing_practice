function capitalize(string) {
  if (typeof string !== "string") throw new Error("Invalid input type");
  return string[0].toUpperCase() + string.slice(1, string.length);
}

function reverseString(string) {
  if (typeof string !== "string") throw new Error("Invalid input type");
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
}

export { capitalize, reverseString };
