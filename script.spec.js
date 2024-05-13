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

test("ceaserCipher() codes string", () => {
  const testCases = [
    {case: ["hello", 4], result: "LHOOR"}
  ];
  testCases.forEach( (testCase) => {
    expect(caeserCipher(testCase.case[0], testCase.case[1])).toBe(testCase.result)
  })
})
