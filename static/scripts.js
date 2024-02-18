$(function () {
    $(".gen").children().click(function () {
        if ($(this).hasClass("blue")) {
            $(this).removeClass("blue");
        } else {
            $(this).addClass("blue");
        }
    });
});