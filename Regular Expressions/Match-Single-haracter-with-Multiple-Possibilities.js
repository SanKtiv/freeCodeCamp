//DESCRIPTION:
//You should find all 25 vowels.
// Passed:Your regex vowelRegex should use a character class.
// Passed:Your regex vowelRegex should use the global flag.
// Passed:Your regex vowelRegex should use the case insensitive flag.
// Passed:Your regex should not match any consonants.

//SOLUTION:
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig;
let result = quoteSample.match(vowelRegex);