import { capitalize, reverseString } from "./script.js";

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
