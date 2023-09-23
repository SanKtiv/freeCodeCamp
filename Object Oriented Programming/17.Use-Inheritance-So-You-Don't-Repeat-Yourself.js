//DESCRIPTION:
//The eat method is repeated in both Cat and Bear. Edit the code in the spirit of DRY by moving the eat method to the Animal supertype.
//Animal.prototype should have the eat property.
// Passed:Bear.prototype should not have the eat property.
// Passed:Cat.prototype should not have the eat property.

//SOLUTION:
function Cat(name) {
    this.name = name;
}

Cat.prototype = {
    constructor: Cat
};

function Bear(name) {
    this.name = name;
}

Bear.prototype = {
    constructor: Bear
};

function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
};
