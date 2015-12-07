$(document).ready(function () {

    //the following are includes to assist in common elements for mockup
    //these elements should be removed and templated


    //### START HEADER
    $("#common-include-header").load("includes/header.html", function () {

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
    //### END HEADER


    //### START FOOTER
    $("#common-include-footer").load("includes/footer.html");
    //### END FOOTER




    //end include elements
    //remove all elements up to here


    //$(".dlp-action").click(function () {
    //    //remove all onstate classes
    //    $(".dlp-action").removeClass("active");
    //    //apply onstate to clicked element
    //    $(this).addClass("active");
    //});

});