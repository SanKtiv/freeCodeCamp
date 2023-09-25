//DESCRIPTION:
//Use Object.create to make two instances of Animal named duck and beagle.
//The duck variable should be defined.
// Passed:The beagle variable should be defined.
// Passed:The duck variable should be initialised with Object.create.
// Passed:The beagle variable should be initialised with Object.create.
// Passed:duck should have a prototype of Animal.
// Passed:beagle should have a prototype of Animal.

//SOLUTION:
function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
};
let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);
