function switchExample() {
    let animal = "Dog";
    let message;

    switch (animal) {
        case "Dog":
            message = "Dogs are loyal and friendly.";
            break;
        case "Cat":
            message = "Cats are independent and curious.";
            break;
        case "Bird":
            message = "Birds love to sing and fly.";
            break;
        case "Fish":
            message = "Fish swim peacefully in water.";
            break;
        default:
            message = "I don't know that animal.";
    }

    document.getElementById("Switch_Output").innerHTML = message;
}

switchExample();
function classExample() {
    let items = document.getElementsByClassName("example");
    let result = "";

    for (let i = 0; i < items.length; i++) {
        result += items[i].innerHTML + "<br>";
    }

    document.getElementById("Class_Output").innerHTML = result;
}

classExample();
