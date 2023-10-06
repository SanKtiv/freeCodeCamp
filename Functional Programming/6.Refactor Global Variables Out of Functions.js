//DESCRIPTION:
//Rewrite the code so the global array bookList is not changed inside either function. The add function should add the
// given bookName to the end of the array passed to it and return a new array (list). The remove function should remove the given bookName from the array passed to it.
//
// Note: Both functions should return an array, and any new parameters should be added before the bookName parameter.
//bookList should not change and still equal ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"].
// Passed:add(bookList, "A Brief History of Time") should return ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"].
// Passed:remove(bookList, "On The Electrodynamics of Moving Bodies") should return ["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"].
// Passed:remove(add(bookList, "A Brief History of Time"), "On The Electrodynamics of Moving Bodies"); should equal ["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"].

//SOLUTION:
// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(arr, bookName) {
    let bookListAdd = [];
    bookListAdd.push(...arr);
    bookListAdd.push(bookName);
    return bookListAdd;

    // Change code above this line
}

// Change code below this line
function remove(arr, bookName) {
    const bookListRemove = [];
    bookListRemove.push(...arr);
    const book_index = bookListRemove.indexOf(bookName);
    if (book_index >= 0) {
        bookListRemove.splice(book_index, 1);
        return bookListRemove;

        // Change code above this line
    }
}