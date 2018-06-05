(function () {

    const fadeInElements = document.getElementsByClassName('forFadeIn');

    for (let i = 0; i < fadeInElements.length; i++) {
        new Waypoint({
            element: fadeInElements[i],
            handler: function () {
                this.element.classList.add('fadein')
            }, offset: '80%'
        });
    }
})();


(function () {

    let navIsShown = false;
    const nav = document.getElementById("nav");

    document.getElementById('mobilenav').addEventListener('click', function () {
        this.classList.toggle('mobilenavblack');

        if (!navIsShown) {
            TweenLite.set(nav, {'display': 'block', margin: '2vh'});
            TweenLite.to(nav, .25, {height: '26vh'});
            navIsShown = true;
        } else {
            TweenLite.to(nav, .25, {
                    height: '0',
                    margin: '0',
                    onComplete: function () {
                        TweenLite.set(nav, {display: 'none'});
                    }
                }
            );
            navIsShown = false;
        }
    });
})();


(function () {

    const button = document.getElementById("button");

    if (button) {
        button.addEventListener("click", function (ev) {
            ev.preventDefault();
            TweenLite.to(window, 1, {scrollTo: this.getAttribute("href")})
        })
    }
})();


(function () {

    const anchorsNodeList = document.querySelectorAll("header a");
    const anchorsArray = Array.from(anchorsNodeList);

    anchorsArray.forEach(function (e) {
        if (e.getAttribute("href") === "#") {
            e.classList.add("disabled");
            e.removeAttribute("href");
            e.parentElement.classList.remove("li-hover")
        }
    });
})();

