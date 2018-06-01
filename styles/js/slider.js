let slider = document.getElementById("slides");
let slides = document.querySelectorAll(".slide");

let slidesNodeList = Array.from(slides);

function slideLeft() {
    TweenLite.to(slider, .3, {
        'margin-left': '+=100%',
        onComplete: function () {
            TweenLite.set(slider, {'margin-left': '-100%'});
            slider.insertBefore(slidesNodeList[slidesNodeList.length - 1], slider.firstChild);
            slidesNodeList.unshift(slidesNodeList[slidesNodeList.length - 1]);
            slidesNodeList.pop();
        }
    });
}

function slideRight() {
    TweenLite.to(slider, .3, {
        'margin-left': '-=100%',
        onComplete: function () {
            TweenLite.set(slider, {'margin-left': '-100%'});
            slider.appendChild(slidesNodeList[0]);
            slidesNodeList.push(slidesNodeList[0]);
            slidesNodeList.shift();
        }
    });
}