//DESCRIPTION:
//Return the length of the longest word in the provided sentence.
//
// Your response should be a number.
//findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number.
// Passed:findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.
// Passed:findLongestWordLength("May the force be with you") should return 5.
// Passed:findLongestWordLength("Google do a barrel roll") should return 6.
// Passed:findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8.
// Passed:findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19.

//SOLUTION:
function findLongestWordLength(str) {
    let strSplitToArray = str.split(' ');
    let longestStr = strSplitToArray[0];

    for (let i of strSplitToArray) {
        longestStr = i.length >= longestStr.length ? i : longestStr;
    }

    return longestStr.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");