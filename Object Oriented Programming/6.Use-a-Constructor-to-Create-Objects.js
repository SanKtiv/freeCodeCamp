//DESCRIPTION:
//Use the Dog constructor from the last lesson to create a new instance of Dog, assigning it to a variable hound.
//hound should be created using the Dog constructor.
// Failed:Your code should use the new operator to create an instance of Dog

//SOLUTION:
function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
}
let hound = new Dog();