const slides = document.querySelectorAll(".slides img");
// slides = images
let slideIndex = 0; // current slide index
let intervailId = null;

// wait for all the DOM content to load
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    // show the first image
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervailId = setInterval(nextSlide, 3000);
    }
}

function showSlide(index){

    if (index >= slides.length) {
        slideIndex = 0;
    }
    else if (index < 0){
        slideIndex = slides.length - 1;
    }

    // console.log("index: " + index);
    // console.log("slideIndex: " + slideIndex);

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    slideIndex--;
    showSlide(slideIndex);
    clearInterval(intervailId);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}