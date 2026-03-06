// Simple while loop example
function countToTen() {
    let text = "";
    let i = 1;

    while (i <= 10) {
        text += i + "<br>";
        i++;
    }

    document.getElementById("Loop").innerHTML = text;
}

countToTen();

// ----------------------
// For Loop Example
// ----------------------

function forLoopExample() {
    let text = "";
    let i;

    for (i = 0; i < 10; i++) {
        text += "Number: " + i + "<br>";
    }

    document.getElementById("For_Loop").innerHTML = text;
}

forLoopExample();
// ----------------------
// Array Example
// ----------------------

function displayArray() {
    let fruits = ["Apple", "Banana", "Cherry", "Mango"];  // array

    // Display one value from the array
    document.getElementById("Array").innerHTML = fruits[2]; // Cherry
}

displayArray();
// ----------------------
// Const Keyword Example
// ----------------------

function constant_function() {
    const car = {
        make: "Toyota",
        model: "Camry",
        year: 2020
    };

    document.getElementById("Constant").innerHTML =
        "The car is a " + car.year + " " + car.make + " " + car.model + ".";
}

function constant_function() {
    const car = {
        make: "Toyota",
        model: "Camry",
        year: 2020
    };

    // Change a property
    car.model = "Corolla";

    // Add a new property
    car.color = "Blue";

    document.getElementById("Constant").innerHTML =
        "The car is a " + car.color + " " + car.make + " " + car.model +
        " from " + car.year + ".";
}

// ----------------------
// let Keyword Example
// ----------------------

function letExample() {
    let x = 10;  // let variable
    {
        let x = 20;  // block-scoped variable
        document.getElementById("Let").innerHTML =
            "Inside the block, x = " + x;
    }
}
letExample();
// ----------------------
// Object with let Example
// ----------------------

let person = {
    firstName: "Harwinder",
    lastName: "Kaur",
    age: 25,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

function displayObject() {
    document.getElementById("Object").innerHTML =
        "Name: " + person.fullName() + "<br>Age: " + person.age;
}

displayObject();

