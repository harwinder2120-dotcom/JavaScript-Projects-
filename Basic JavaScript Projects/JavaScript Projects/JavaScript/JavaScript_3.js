function showCar() {
    let items = document.getElementsByClassName("carItem");

    // Choose one item (you can customize this)
    let selected = items[1]; // Ford Mustang

    let carName = selected.getAttribute("data-car");

    document.getElementById("Output").innerHTML =
        "Selected Car: " + carName;
}
