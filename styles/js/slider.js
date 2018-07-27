let slider = document.getElementById("slides");
let slides = document.querySelectorAll(".slide");
let slideAnimationDuration = .3;
let slidesNodeList = Array.from(slides);

sliderHandler.queue = [];

function sliderHandler(func) {
    if (sliderHandler.isRunning) {
        sliderHandler.queue.push(() => func());
        return
    }
    func();
    sliderHandler.isRunning = true;
}

function repeat() {
    if (sliderHandler.queue.length) {
        sliderHandler.queue[0]();
        sliderHandler.queue.shift();
        return
    }
    sliderHandler.isRunning = false;
}

function slideLeft() {
    TweenLite.to(slider, slideAnimationDuration, {
        'margin-left': '+=100%',
        onComplete: () => {
            TweenLite.set(slider, {'margin-left': '-100%'});
            slider.insertBefore(slidesNodeList[slidesNodeList.length - 1], slider.firstChild);
            slidesNodeList.unshift(slidesNodeList[slidesNodeList.length - 1]);
            slidesNodeList.pop();
            repeat();
        }
    });
}

function slideRight() {
    TweenLite.to(slider, slideAnimationDuration, {
        'margin-left': '-=100%',
        onComplete: () => {
            TweenLite.set(slider, {'margin-left': '-100%'});
            slider.appendChild(slidesNodeList[0]);
            slidesNodeList.push(slidesNodeList[0]);
            slidesNodeList.shift();
            repeat();
        }
    });
}