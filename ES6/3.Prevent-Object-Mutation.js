//DESCRIPTION:
//In this challenge you are going to use Object.freeze to prevent mathematical constants from changing. You need to
// freeze the MATH_CONSTANTS object so that no one is able to alter the value of PI, add, or delete properties.
//You should not replace the const keyword.
// Waiting:MATH_CONSTANTS should be a constant variable (by using const).
// Waiting:You should not change the original declaration of MATH_CONSTANTS.
// Waiting:PI should equal 3.14.

//SOLUTION:
function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    // Only change code below this line
    Object.freeze(MATH_CONSTANTS);
    // Only change code above this line
    try {
        MATH_CONSTANTS.PI = 99;
    } catch(ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
