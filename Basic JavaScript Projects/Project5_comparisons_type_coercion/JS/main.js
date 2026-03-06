// This script demonstrates the "typeof" operator

var myVariable = 42;  // You can choose any value

// Display the data type of the variable
document.write("The data type of myVariable is: " + typeof myVariable);

// This demonstrates type coercion in JavaScript

// When a number is added to a string, JavaScript converts the number into a string
var result = "5" + 10;

// Display the coerced result
document.write("Type coercion result: " + result);

// This demonstrates Infinity and -Infinity in JavaScript
function infinityFunction() {

    // A number too large for JavaScript to handle becomes Infinity
    var bigNumber = 2E310;   // 2 × 10^310

    // A very large negative number becomes -Infinity
    var negativeBigNumber = -2E310;

    // Display both results
    document.getElementById("Infinity").innerHTML =
        "Infinity: " + bigNumber + "<br>" +
        "-Infinity: " + negativeBigNumber;
}
// This function demonstrates Boolean logic using comparison operators
function booleanFunction() {

    // Boolean comparisons
    var trueResult = 10 > 5;     // true
    var falseResult = 3 > 8;     // false

    // Display both results
    document.getElementById("Boolean").innerHTML =
        "10 > 5 is: " + trueResult + "<br>" +
        "3 > 8 is: " + falseResult;
}
// This demonstrates using console.log() to perform a math operation
console.log("5 + 7 = " + (5 + 7));
// This function demonstrates the == operator returning true and false
function doubleEqualsFunction() {

    // True comparison
    var trueResult = (10 == "10");   // true because == allows type coercion

    // False comparison
    var falseResult = (5 == 8);      // false

    // Display both results
    document.getElementById("DoubleEquals").innerHTML =
        "10 == '10' is: " + trueResult + "<br>" +
        "5 == 8 is: " + falseResult;
}
// This function demonstrates the === operator returning true and false
function tripleEqualsFunction() {

    // TRUE: same data type AND same value
    var trueResult = (10 === 10);

    // FALSE: different data type AND different value
    var falseResult1 = ("5" === 10);

    // FALSE: different data type BUT same value
    var falseResult2 = ("10" === 10);

    // FALSE: same data type BUT different value
    var falseResult3 = (20 === 10);

    // Display all results
    document.getElementById("TripleEquals").innerHTML =
        "10 === 10 is: " + trueResult + "<br>" +
        "'5' === 10 is: " + falseResult1 + "<br>" +
        "'10' === 10 is: " + falseResult2 + "<br>" +
        "20 === 10 is: " + falseResult3;
}
// This function demonstrates the AND (&&) and OR (||) operators
function logicOperatorsFunction() {

    // AND operator examples
    var andTrue = (10 > 5 && 8 > 3);     // true AND true = true
    var andFalse = (10 > 5 && 2 > 9);    // true AND false = false

    // OR operator examples
    var orTrue = (10 > 5 || 2 > 9);      // true OR false = true
    var orFalse = (3 > 10 || 1 > 5);     // false OR false = false

    // Display results
    document.getElementById("Logic").innerHTML =
        "AND true example (10 > 5 && 8 > 3): " + andTrue + "<br>" +
        "AND false example (10 > 5 && 2 > 9): " + andFalse + "<br><br>" +
        "OR true example (10 > 5 || 2 > 9): " + orTrue + "<br>" +
        "OR false example (3 > 10 || 1 > 5): " + orFalse;
}
// This function demonstrates the NOT (!) operator returning true and false
function notOperatorFunction() {

    // NOT operator examples
    var notTrue = !(10 > 5);     // !(true) becomes false
    var notFalse = !(3 > 10);    // !(false) becomes true

    // Display results
    document.getElementById("Not").innerHTML =
        "!(10 > 5) is: " + notTrue + "<br>" +
        "!(3 > 10) is: " + notFalse;
}
