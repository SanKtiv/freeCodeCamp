//DESCRIPTION:
//Add all of the own properties of beagle to the array ownProps. Add all of the prototype properties of Dog to the array prototypeProps.
//The ownProps array should only contain name.
// Passed:The prototypeProps array should only contain numLegs.
// Passed:You should solve this challenge without using the built in method Object.keys().

//SOLUTION:
function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

for (let prop in beagle) {
    beagle.hasOwnProperty(prop) ? ownProps.push(prop) : prototypeProps.push(prop);
}