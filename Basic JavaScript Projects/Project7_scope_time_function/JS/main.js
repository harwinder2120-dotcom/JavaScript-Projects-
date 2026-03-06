// GLOBAL VARIABLE EXAMPLE
var globalNumber = 25; // This variable can be accessed by any function

function showGlobal() {
    document.getElementById("Global").innerHTML =
        "Global variable value: " + globalNumber;
}

showGlobal();


// LOCAL VARIABLE EXAMPLE
function showLocal() {
    let localNumber = 10; // This variable exists ONLY inside this function

    document.getElementById("Local").innerHTML =
        "Local variable value: " + localNumber;
}

showLocal();


// INTENTIONAL ERROR FOR DEBUGGING
function errorFunction() {
    console.log("Testing error...");

    // This will cause an error because 'wrongVariable' does not exist
    console.log(wrongVariable);

    document.getElementById("ErrorTest").innerHTML =
        "Check the console for the error message.";
}

errorFunction();
// Function that uses Date().getHours() to display a message
function timeGreeting() {
    var currentHour = new Date().getHours();
    var message;

    if (currentHour < 12) {
        message = "Good morning!";
    } else if (currentHour < 18) {
        message = "Good afternoon!";
    } else {
        message = "Good evening!";
    }

    document.getElementById("Greeting").innerHTML = message;
}
// Simple IF statement example
function weatherCheck() {
    let temperature = 15; // Local variable

    if (temperature < 20) {
        document.getElementById("Weather").innerHTML =
            "It's a bit chilly today.";
    }
}
// Function using if and else
function checkAge() {
    let age = document.getElementById("AgeInput").value;
    let message;

    if (age >= 18) {
        message = "You are an adult.";
    } else {
        message = "You are not an adult yet.";
    }

    document.getElementById("AgeResult").innerHTML = message;
}
// Function using if, else if, and else
function checkAge() {
    let age = document.getElementById("AgeInput").value;
    let message;

    if (age < 13) {
        message = "You are a child.";
    }
    else if (age < 20) {
        message = "You are a teenager.";
    }
    else {
        message = "You are an adult.";
    }

    document.getElementById("AgeResult").innerHTML = message;
}
