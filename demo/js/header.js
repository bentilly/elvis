$(document).ready(function () {

    //hide/show mobile search
    $(".search-toggle").on("click", function () {
        if ($(".toggle-search").hasClass('open')) {
            $(".toggle-search").removeClass("open");
        } else {
            $(".toggle-search").addClass("open");
        };
    });

    //hide/show sign in
    $(".sign-in-button").on("click", function () {
        $(".sign-in-button").addClass("hide");
        $(".user-signed-in").removeClass("hide");
    });

    //hide/show user menu
    $(".user-signed-in").on("click", function () {
        if ($(".signed-in-nav").hasClass("open")) {
            $(".signed-in-nav").removeClass("open");
            $(".user-signed-in").removeClass("open");
        } else {
            $(".signed-in-nav").addClass("open");
            $(".user-signed-in").addClass("open");
        };
    });

    //sign out
    $("button.sign-out").on("click", function () {
        $(".signed-in-nav").removeClass("open");
        $(".user-signed-in").removeClass("open");
        $(".user-signed-in").addClass("hide");
        $(".sign-in-button").removeClass("hide");
    });

});