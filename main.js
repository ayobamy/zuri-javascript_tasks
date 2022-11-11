let slideIndex = 1;
slideShow(slideIndex);

function nextSlides(move) {
    slideShow(slideIndex + move);
}

function currentSlide(move) {
    slideShow(slideIndex = move);
}

function slideShow(move) {
    let slides = document.getElementsByClassName("img-slider");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (move > slides.length) {
        slideIndex = 1;
    }
    if (move < 1) {
        slideIndex = slides.length;
    }

    let click = document.getElementsByClassName("click");
    for (let i = 0; i < click.length; i++) {
        click[i].className = click[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].className += " active";
}
