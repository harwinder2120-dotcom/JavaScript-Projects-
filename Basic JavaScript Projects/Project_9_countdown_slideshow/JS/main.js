// ----------------------
// Countdown Functionality
// ----------------------

// Countdown function
function countdown() {
    let seconds = document.getElementById("seconds").value;

    function tick() {
        seconds--;
        document.getElementById("timer").innerHTML = seconds;
        setTimeout(tick, 1000); // pause for 1 second

        if (seconds < 0) {
            alert("Time's up!");
        }
    }

    tick();
}


// ----------------------
// Slideshow Functionality
// ----------------------

let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    // Reset to first slide if past the last one
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Show the current slide
    slides[slideIndex - 1].style.display = "block";

    // Change slide every 3 seconds
    setTimeout(showSlides, 3000);
}

// Start slideshow
showSlides();
