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
