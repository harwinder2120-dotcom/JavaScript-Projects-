// This function performs an addition operation
function additionFunction() {
    var result = 10 + 5;  // Basic addition
    document.getElementById("Math").innerHTML = "10 + 5 = " + result;
}

// This function performs a subtraction operation
function subtractionFunction() {
    var result = 20 - 7;  // Basic subtraction
    document.getElementById("Math").innerHTML = "20 - 7 = " + result;
}

// This function performs a multiplication operation
function multiplicationFunction() {
    var result = 6 * 8;  // Basic multiplication
    document.getElementById("Math").innerHTML = "6 × 8 = " + result;
}

// This function performs a division operation
function divisionFunction() {
    var result = 48 / 6;  // Basic division
    document.getElementById("Math").innerHTML = "48 ÷ 6 = " + result;
}
// This function performs multiple math operations
function multipleOperations() {
    var addition = 10 + 5;
    var subtraction = 20 - 8;
    var multiplication = 4 * 6;
    var division = 40 / 5;

    // Display all results in the same paragraph
    document.getElementById("Math").innerHTML =
        "Addition: 10 + 5 = " + addition + "<br>" +
        "Subtraction: 20 - 8 = " + subtraction + "<br>" +
        "Multiplication: 4 × 6 = " + multiplication + "<br>" +
        "Division: 40 ÷ 5 = " + division;
}

// This function uses the modulus operator
function modulusFunction() {
    var result = 25 % 4;  // 25 divided by 4 leaves a remainder of 1
    document.getElementById("Math").innerHTML = "25 % 4 = " + result;
}
// This function uses the negation operator
function negationFunction() {
    var number = 15;
    var result = -number;  // Negation operator
    document.getElementById("Math").innerHTML = "The negation of 15 is " + result;
}

// This function uses the increment operator
function incrementFunction() {
    var number = 10;
    number++;  // Increment by 1
    document.getElementById("Math").innerHTML = "Incremented value: " + number;
}

// This function uses the decrement operator
function decrementFunction() {
    var number = 10;
    number--;  // Decrement by 1
    document.getElementById("Math").innerHTML = "Decremented value: " + number;
}
// This function uses Math.random() to generate a random number
function randomFunction() {
    var result = Math.random();  // Generates a number between 0 and 1
    document.getElementById("Math").innerHTML = "Random number: " + result;
}
// This function uses a Math object method
function mathObjectFunction() {
    var result = Math.sqrt(81);  // Square root of 81
    document.getElementById("Math").innerHTML = "The square root of 81 is " + result;
}

