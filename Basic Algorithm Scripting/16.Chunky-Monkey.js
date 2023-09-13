//DESCRIPTION:
//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
//chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
// Waiting:chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
// Waiting:chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
// Waiting:chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
// Waiting:chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
// Waiting:chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
// Waiting:chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].

//SOLUTIONS:
function chunkArrayInGroups(arr, size) {
    let arrRes = [];
    while (arr.length > 0) {
        let arrInclude = [];
        for (let i = 0; i < size && arr.length > 0; i++) {
            arrInclude.push(arr.shift());
        }
        arrRes.push(arrInclude);
    }
    return arrRes;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d", 'k'], 2));