function combineText() {
    // Assign two variables
    var part1 = "Hello, ";
    var part2 = "this text came from a function!";

    // Use getElementById to display the result in the paragraph
    document.getElementById("output").innerHTML = part1 + part2;
}

// Operator Assignment
var sentence = "This is the first part.";
sentence += " This part was added using the += operator.";

// Display the result in the HTML paragraph
document.getElementById("operatorOutput").innerHTML = sentence;

