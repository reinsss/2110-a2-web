$(window).load(function() {
    $("body").css({"background-size":"100% "+$(document).height()+"px"});
})
$(window).resize(function () {
    $("body").css({"background-size":"100% "+$(document).height()+"px"});
});