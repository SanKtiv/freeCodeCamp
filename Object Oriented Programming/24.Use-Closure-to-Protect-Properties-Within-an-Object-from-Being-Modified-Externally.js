//DESCRIPTION:
//Change how weight is declared in the Bird function so it is a private variable. Then, create a method getWeight that returns the value of weight 15.
//The weight property should be a private variable and should be assigned the value of 15.
// Passed:Your code should create a method in Bird called getWeight that returns the value of the private variable weight.
// Passed:Your getWeight function should return the private variable weight.

//SOLUTION:
function Bird() {
    let weight = 15;
    this.getWeight = () => weight;
}