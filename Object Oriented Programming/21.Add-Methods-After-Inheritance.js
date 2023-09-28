//DESCRIPTION:
//Add all necessary code so the Dog object inherits from Animal and the Dog's prototype constructor is set to Dog.
// Then add a bark() method to the Dog object so that beagle can both eat() and bark(). The bark() method should print Woof! to the console.
//Animal should not respond to the bark() method.
// Passed:Dog should inherit the eat() method from Animal.
// Passed:The Dog prototype should have a bark() method.
// Passed:beagle should be an instanceof Animal.
// Passed:The constructor for beagle should be set to Dog.
// Passed:beagle.eat() should log the string nom nom nom
// Passed:beagle.bark() should log the string Woof!

//SOLUTION:
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.bark = function() {
    console.log('Woof!');
}
Dog.prototype.constructor = Dog;

// Only change code above this line

let beagle = new Dog();