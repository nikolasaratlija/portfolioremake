var fadeInElements = document.getElementsByClassName('forFadeIn');

for (var i = 0; i < fadeInElements.length; i++) {
    new Waypoint({
        element: fadeInElements[i],
        handler: function () {
            this.element.classList.add('fadein')
        }, offset: '80%'
    });
}

var navIsShown = false;
var nav = document.getElementById("nav");

document.getElementById('mobilenav').addEventListener('click', function () {
    this.classList.toggle('mobilenavblack');

    if (!navIsShown) {
        TweenMax.set(nav, {'display': 'block', margin: '2vh'});
        TweenMax.to(nav, .25, {height: '26vh'});
        navIsShown = true;
    } else {
        TweenMax.to(
            nav, .25,
            {
                height: '0',
                margin: '0',
                onComplete: function () {
                    TweenMax.set(nav, {display: 'none'});
                }
            }
        );
        navIsShown = false;
    }
});

