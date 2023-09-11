//DESCRIPTION:
//Complete the regex waldoRegex to find "Waldo" in the string waldoIsHiding with a literal match.
//Your regex waldoRegex should find the string Waldo
// Waiting:Your regex waldoRegex should not search for anything else.
// Waiting:You should perform a literal string match with your regex.

//SOLUTION:
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let result = waldoRegex.test(waldoIsHiding);