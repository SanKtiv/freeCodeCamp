//DESCRIPTION:
//Write a joinDogFraternity function that takes a candidate parameter and, using the constructor property, return true
// if the candidate is a Dog, otherwise return false.
//joinDogFraternity should be defined as a function.
// Waiting:joinDogFraternity should return true if candidate is an instance of Dog.
// Waiting:joinDogFraternity should use the constructor property.

//SOLUTION:
function Dog(name) {
    this.name = name;
}

function joinDogFraternity(candidate) {
    return candidate.constructor === Dog ? true : false;
}