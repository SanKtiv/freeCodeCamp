//DESCRIPTION:
//An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignments.
//You should not replace const keyword.
// Passed:s should be a constant variable (by using const).
// Passed:You should not change the original array declaration.
// Passed:s should be equal to [2, 5, 7].

//SOLUTION:
const s = [5, 7, 2];
function editInPlace() {
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
editInPlace();