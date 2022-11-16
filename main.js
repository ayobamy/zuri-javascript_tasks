const slide = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const click = document.querySelectorAll('.click');

let slidePosition = 0;

function showSlide(n) {
    if (slidePosition > slide.length - 1) {
        slidePosition = 0;
    }
    if (slidePosition < 0) {
        slidePosition = slide.length - 1;
    }

    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }

    slide[slidePosition].style.display = "block";
    for (let i = 0; i < click.length; i++) {
        click[i].className = click[i].className.replace(' active', "");   
    }
    click[slidePosition].className += " active";
}

prev.addEventListener('click', ()=>{
    showSlide(slidePosition -= 1);
});

next.addEventListener('click', ()=>{
    showSlide(slidePosition += 1);
});

click.forEach((item, index) => {
    item.addEventListener('click', ()=>{
            showSlide(slidePosition = index);
        })
});
 