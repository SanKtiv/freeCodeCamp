//DESCRIPTION:
//Modify the code to show the correct prototype chain.
//Your code should show that Object.prototype is the prototype of Dog.prototype

//SOLUTION:
function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);