//DESCRIPTION:
//Create a new instance of the House constructor, calling it myHouse and passing a number of bedrooms. Then, use instanceof to verify that it is an instance of House.
//myHouse should have a numBedrooms attribute set to a number.
// Waiting:You should verify that myHouse is an instance of House using the instanceof operator.

//SOLUTION:
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}
let myHouse = new House(3);
myHouse instanceof House;