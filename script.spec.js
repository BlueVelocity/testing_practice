import { capitalize, reverseString, calculator, caesarCipher } from "./script.js";

//capitalize funtion tests
test("capitalize() output string is capitalized", () => {
  const testStrings = [
    {case: "testString", result: "TestString"},
    {case: "this is a test sentence.", result: "This is a test sentence."}
  ];
  testStrings.forEach( (testCase) => {
    expect(capitalize(testCase.case)).toBe(testCase.result);
  })
})

test("capitalize() input is a string", () => {
  const testCases = [4, undefined, null, ["array"], {type: "object"}];
  testCases.forEach( (testCase) => {
    expect(() => capitalize(testCase)).toThrow("Invalid input type");
  })
})

test("capitilize() throws error on empty string", () => {
  expect( () => capitalize("")).toThrow("Invalid Input: Empty string");
})

//reverseString function tests
test("reverseString() output string is reversed", () => {
  const testCases = [
    {case: "singleWord", result: "droWelgnis"},
    {case: "multiple word sentence", result: "ecnetnes drow elpitlum"}
  ];
  testCases.forEach( (testCase) => {
    expect(reverseString(testCase.case)).toBe(testCase.result);
  })
})

test("reverseString() input is a string", () => {
  const testCases = [4, undefined, null, ["array"], {type: "object"}];
  testCases.forEach( (testCase) => {
    expect(() => reverseString(testCase)).toThrow("Invalid input type");
  })
})

//calculator object tests
test("calculator add() output adds numbers", () => {
  const testCases = [
    {case: [15, 5], result: 20},
    {case: [-40, 4], result: -36}
  ];
  testCases.forEach( (testCase) => {
    expect(calculator.add(testCase.case[0], testCase.case[1])).toBe(testCase.result);
  })
})

test("calculator subtract() output subtracts numbers", () => {
  const testCases = [
    {case: [15, 5], result: 10},
    {case: [-40, 4], result: -44}
  ];
  testCases.forEach( (testCase) => {
    expect(calculator.subtract(testCase.case[0], testCase.case[1])).toBe(testCase.result);
  })
})

test("calculator multiply() output multiplies numbers", () => {
  const testCases = [
    {case: [15, 5], result: 75},
    {case: [-40, 4], result: -160}
  ];
  testCases.forEach( (testCase) => {
    expect(calculator.multiply(testCase.case[0], testCase.case[1])).toBe(testCase.result);
  })
})

test("calculator divide() output divides numbers", () => {
  const testCases = [
    {case: [15, 5], result: 3},
    {case: [-40, 4], result: -10}
  ];
  testCases.forEach( (testCase) => {
    expect(calculator.divide(testCase.case[0], testCase.case[1])).toBe(testCase.result);
  })
})

test("calculator divide() throws error if divide by 0", () => {
  expect( () => calculator.divide(9, 0)).toThrow("Cannot divide by 0");
})

test("calculator functions only accept numbers", () => {
  expect( () => calculator.add("6", "12")).toThrow(Error);
  expect( () => calculator.subtract("6", "12")).toThrow(Error);
  expect( () => calculator.multiply("6", "12")).toThrow(Error);
  expect( () => calculator.divide("6", "12")).toThrow(Error);
})

test("caesarCipher() codes string", () => {
  const testCases = [
    {case: ["hello", 4], result: "LIPPS"},
    {case: ["crankedhog", 7], result: "JYHURLKOVN"},
  ];
  testCases.forEach( (testCase) => {
    expect(caesarCipher(testCase.case[0], testCase.case[1])).toBe(testCase.result)
  })
})

test("caesarCipher() codes string with spaces", () => {
  expect(caesarCipher("hello world", 7)).toBe("OLSSV DVYSK"); 
})

test("caesarCipher() throws error on missing argument", () => {
  expect( () => caesarCipher("hello")).toThrow("Invalid Input: Missing argument");
  expect( () => caesarCipher(undefined, 7)).toThrow("Invalid Input: Missing argument");
  expect( () => caesarCipher(undefined, undefined)).toThrow("Invalid Input: Missing argument");
})

test("caesarCipher() throws error on empty string", () => {
  expect( () => caesarCipher("", 4)).toThrow("Invalid Input: Empty string");
})

test("caesarCipher() throws error on invalid input types", () => {
  expect( () => caesarCipher(null, 7)).toThrow("Invalid Input: First argument requires a string");
  expect( () => caesarCipher(5, 7)).toThrow("Invalid Input: First argument requires a string");
  expect( () => caesarCipher("hello", null)).toThrow("Invalid Input: Second argument requires a number");
  expect( () => caesarCipher("hello", "hello")).toThrow("Invalid Input: Second argument requires a number");
})
