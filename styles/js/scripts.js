var fadeInElements = document.getElementsByClassName('forFadeIn');

for (var i = 0; i < fadeInElements.length; i++) {
    new Waypoint({
        element: fadeInElements[i],
        handler: function () {
            this.element.classList.add('fadein')
        }, offset: '80%'
    });
}

$("#mobilenav").on('click', function () {
    $(this).toggleClass('mobilenavblack');
    $("#nav").slideToggle()
});

// var navIsShown = false;
//
// document.getElementById('mobilenav').addEventListener('click', function () {
//     this.classList.toggle('mobilenavblack');
//
//     if (!navIsShown) {
//         document.getElementById('nav').style.display = 'block';
//         TweenMax.to('#nav', .25, {height:'250'});
//         navIsShown = true;
//     } else {
//         document.getElementById('nav').style.display = 'none';
//         TweenMax.to('#nav', 1, {height:'0'});
//         navIsShown = false;
//     }
// });

