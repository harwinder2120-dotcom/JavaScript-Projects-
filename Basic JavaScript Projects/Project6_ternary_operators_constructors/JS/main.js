// Ternary operator example
function rideFunction() {
    var Height, CanRide;
    Height = document.getElementById("Ride").value;
    CanRide = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = CanRide + " to ride.";
}

// Constructor function example
function Vehicle(Make, Model, Year, Color) {
    this.VehicleMake = Make;
    this.VehicleModel = Model;
    this.VehicleYear = Year;
    this.VehicleColor = Color;
}

// Creating new Vehicle objects
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

// Displaying constructor output
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Erik drives a " + Erik.VehicleColor + "-colored " +
        Erik.VehicleModel + " manufactured in " + Erik.VehicleYear;
}

// Using 'this' and 'new'
function Person(Name, Age) {
    this.PersonName = Name;
    this.PersonAge = Age;
}

var John = new Person("John", 30);

document.getElementById("New_and_This").innerHTML =
    John.PersonName + " is " + John.PersonAge + " years old.";

// Nested function example
function countFunction() {
    document.getElementById("Nested_Function").innerHTML = count();
    function count() {
        var StartingPoint = 9;
        function plusOne() { StartingPoint += 1; }
        plusOne();
        return StartingPoint;
    }
}
// Demonstrating the use of the new keyword

// Constructor function
function Student(name, grade) {
    this.StudentName = name;
    this.StudentGrade = grade;
}

// Creating a new Student object using the 'new' keyword
var HarwinderStudent = new Student("Harwinder", "A");

// Displaying the result in the browser
document.getElementById("NewKeyword").innerHTML =
    HarwinderStudent.StudentName + " has a grade of " + HarwinderStudent.StudentGrade + ".";
// Nested function example
function nestedFunction() {
    document.getElementById("Nested").innerHTML = count();

    function count() {
        let startingNumber = 5;

        // Inner function that modifies the outer variable
        function addOne() {
            startingNumber += 1;
        }

        addOne(); // Call the inner function
        return startingNumber; // Return the updated value
    }
}
