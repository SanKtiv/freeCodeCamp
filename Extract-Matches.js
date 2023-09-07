//DESCRIPTION:
//The result should have the string coding
// Waiting:Your regex codingRegex should search for the string coding
// Waiting:You should use the .match() method.

//SOLUTION:
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);