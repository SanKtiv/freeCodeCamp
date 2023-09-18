//DESCRIPTION:
//Add a numLegs property to the prototype of Dog
//beagle should have a numLegs property.
// Waiting:beagle.numLegs should be a number.
// Waiting:numLegs should be a prototype property not an own property.

//SOLUTION:
function Dog(name) {
    this.name = name;
}
Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");