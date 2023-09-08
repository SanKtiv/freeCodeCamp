//DESCRIPTION:
//Your regex myRegex should use the + sign to match one or more s characters.
// Passed:Your regex myRegex should match 2 items.
// Passed:The result variable should be an array with two matches of ss

//SOLUTION:
let difficultSpelling = "Mississippi";
let myRegex = /s+/g;
let result = difficultSpelling.match(myRegex);