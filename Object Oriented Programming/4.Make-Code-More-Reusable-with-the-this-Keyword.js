//DESCRIPTION:
//Modify the dog.sayLegs method to remove any references to dog. Use the duck example for guidance.
//dog.sayLegs() should return the given string.
// Passed:Your code should use the this keyword to access the numLegs property of dog.

//SOLUTION:
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};
dog.sayLegs();