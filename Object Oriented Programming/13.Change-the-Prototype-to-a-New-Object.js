//DESCRIPTION:
//Add the property numLegs and the two methods eat() and describe() to the prototype of Dog by setting the prototype to a new object.
//Dog.prototype should be set to a new object.
// Waiting:Dog.prototype should have the property numLegs.
// Waiting:Dog.prototype should have the method eat().
// Waiting:Dog.prototype should have the method describe().

//SOLUTION:
function Dog(name) {
    this.name = name;
}
Dog.prototype = {
    numLegs: 2,
    eat: function() {
    },
    describe: function() {
    }
};
