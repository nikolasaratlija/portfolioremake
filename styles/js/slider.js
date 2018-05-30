let slides = document.getElementById("slides");
let slide = document.querySelectorAll(".slide");

let iterationLeft = 2;
let iterationRight = 0;

let transitionSpeed = .3;

function slideLeft() {
    TweenLite.to(slides, transitionSpeed, {
        'margin-left': '+=100%',
        onComplete: function () {
            slides.insertBefore(slide[iterationLeft], slides.firstChild);
            TweenLite.set(slides, {'margin-left': '-100%'});
            (iterationLeft === 0 ? iterationLeft = 2 : iterationLeft--);
        }
    });
}

function slideRight() {
    TweenLite.to(slides, transitionSpeed, {
        'margin-left': '-=100%',
        onComplete: function () {
            slides.appendChild(slide[iterationRight]);
            TweenLite.set(slides, {'margin-left': '-100%'});
            (iterationRight === 2 ? iterationRight = 0 : iterationRight++);
        }
    });
}