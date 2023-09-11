//DESCRIPTION:
//Write a regex fccRegex to match freeCodeCamp, no matter its case. Your regex should not match any abbreviations or variations with spaces.
//Your regex should match the string freeCodeCamp
// Waiting:Your regex should match the string FreeCodeCamp
// Waiting:Your regex should match the string FreecodeCamp
// Waiting:Your regex should match the string FreeCodecamp
// Waiting:Your regex should not match the string Free Code Camp
// Waiting:Your regex should match the string FreeCOdeCamp
// Waiting:Your regex should not match the string FCC
// Waiting:Your regex should match the string FrEeCoDeCamp
// Waiting:Your regex should match the string FrEeCodECamp
// Waiting:Your regex should match the string FReeCodeCAmp

//SOLUTION:
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i;
let result = fccRegex.test(myString);