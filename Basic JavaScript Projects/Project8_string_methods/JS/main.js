// Using concat() to join multiple strings
function buildSentence() {
    let part1 = "JavaScript ";
    let part2 = "string methods ";
    let part3 = "are very useful.";

    let fullSentence = part1.concat(part2, part3);

    document.getElementById("ConcatenatedText").innerHTML = fullSentence;
}

// Call the function so it runs when the page loads
buildSentence();
// Using slice() to extract part of a string
function sliceMethod() {
    let sentence = "JavaScript string methods are powerful.";
    let section = sentence.slice(11, 24); // extracts "string methods"

    document.getElementById("ConcatenatedText").innerHTML = section;
}

// Run the function when the page loads
sliceMethod();

// Using toString() to convert a number to a string
function numberToString() {
    let number = 2026;
    let stringVersion = number.toString();

    document.getElementById("ConcatenatedText").innerHTML = stringVersion;
}

// Run the function when the page loads
numberToString();

// Using toPrecision() to format a number to a specified length
function precisionMethod() {
    let number = 12938.3012987376112;
    let preciseNumber = number.toPrecision(6);

    document.getElementById("ConcatenatedText").innerHTML = preciseNumber;
}

// Run the function when the page loads
precisionMethod();
