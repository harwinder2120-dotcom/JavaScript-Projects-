// This function demonstrates deleting a value from a dictionary
function dictionaryFunction() {

    // Creating a dictionary (object) with key-value pairs
    var Car = {
        Make: "Honda",
        Model: "Civic",
        Year: 2020,
        Color: "Blue"
    };

    // Delete one key-value pair
    delete Car.Color;

    // Display the deleted value (will show 'undefined')
    document.getElementById("Dictionary").innerHTML = Car.Color;
}
