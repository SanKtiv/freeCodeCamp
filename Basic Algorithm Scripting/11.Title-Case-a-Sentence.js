//DESCRIPTION:
//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
//
// For the purpose of this exercise, you should also capitalize connecting words like the and of.
//titleCase("I'm a little tea pot") should return a string.
// Passed:titleCase("I'm a little tea pot") should return the string I'm A Little Tea Pot.
// Passed:titleCase("sHoRt AnD sToUt") should return the string Short And Stout.
// Passed:titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return the string Here Is My Handle Here Is My Spout.

//SOLUTION:
function titleCase(str) {
    let strToArr = str.toLowerCase().split(/\s/);
    let arrRes = strToArr.map((a) => a.replace(/^./, a[0].toUpperCase()));
    return arrRes.join(' ');
}

console.log(titleCase("I'm a little tea pot"));