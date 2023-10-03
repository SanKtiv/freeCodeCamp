//DESCRIPTION:
//Create a module named funModule to wrap the two mixins isCuteMixin and singMixin. funModule should return an object.
//funModule should be defined and return an object.
// Passed:funModule.isCuteMixin should access a function.
// Passed:funModule.singMixin should access a function.

//SOLUTION:
let funModule = (function() {
    return {
        isCuteMixin: function(obj) {
            obj.isCute = function() {
                return true;
            };
        },
        singMixin: function(obj) {
            obj.sing = function() {
                console.log("Singing to an awesome tune");
            };
        }
    }
})();

funModule.isCuteMixin;
funModule.singMixin;