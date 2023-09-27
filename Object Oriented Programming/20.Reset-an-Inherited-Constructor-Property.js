//DESCRIPTION:
//Fix the code so duck.constructor and beagle.constructor return their respective constructors.
//Bird.prototype should be an instance of Animal.
// Failed:duck.constructor should return Bird.
// Passed:Dog.prototype should be an instance of Animal.
// Failed:beagle.constructor should return Dog.

//SOLUTION:
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

let duck = new Bird();
let beagle = new Dog();
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;