//DESCRIPTION:
// Define the constructor property on the Dog prototype.
//Dog.prototype should set the constructor property.

//SOLUTION:
function Dog(name) {
    this.name = name;
}
Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function() {
        console.log("nom nom nom");
    },
    describe: function() {
        console.log("My name is " + this.name);
    }
};