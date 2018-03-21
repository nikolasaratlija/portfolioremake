$(".forFadeIn").each(function () {
    $(this).waypoint(function () {
        $(this.element).addClass('fadein')
    }, {offset: '80%'})
});

$("#mobilenav").on("click", function () {
    $(this).toggleClass('mobilenavblack');
    $("#nav").slideToggle()
});

function slideLeft() {
    $(".slides").animate({'margin-left': '+=100%'}, 300, function () {
        $(".slide:first").before($(".slide:last"));
        $(".slides").css({'margin-left': '-100%'})
    });
}

function slideRight() {
    $(".slides").animate({'margin-left': '-=100%'}, 300, function () {
        $(".slide:last").after($(".slide:first"));
        $(".slides").css({'margin-left': '-100%'})
    });
}

$("element").on('click', function () {
    
});