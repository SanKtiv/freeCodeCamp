//DESCRIPTION:
//Complete the regex petRegex to match the pets dog, cat, bird, or fish.
//Your regex petRegex should return true for the string John has a pet dog.
// Waiting:Your regex petRegex should return false for the string Emma has a pet rock.
// Waiting:Your regex petRegex should return true for the string Emma has a pet bird.
// Waiting:Your regex petRegex should return true for the string Liz has a pet cat.
// Waiting:Your regex petRegex should return false for the string Kara has a pet dolphin.
// Waiting:Your regex petRegex should return true for the string Alice has a pet fish.
// Waiting:Your regex petRegex should return false for the string Jimmy has a pet computer.

//SOLUTION:
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);