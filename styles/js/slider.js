var slides = document.getElementById("slides");
var slide = document.querySelectorAll(".slide");

var iterationLeft = 2;
var iterationRight = 0;

function slideLeft() {
    TweenMax.to(slides, .3, {
        'margin-left': '+=100%',
        onComplete: function () {
            slides.insertBefore(slide[iterationLeft], slides.childNodes[0]);
            TweenMax.set(slides, {'margin-left': '-100%'});
            iterationLeft++
        }
    });
    if(iterationLeft > 2){
        iterationLeft = 0;
    }
}

function slideRight() {
    TweenMax.to(slides, .3, {
        'margin-left': '-=100%',
        onComplete: function () {
            slides.appendChild(slide[iterationRight]);
            TweenMax.set(slides, {'margin-left': '-100%'});
            iterationRight++
        }
    });
    if(iterationRight > 2){
        iterationRight = 0;
    }
}