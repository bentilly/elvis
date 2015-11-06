$(function () {

    $(".dlp-action").click(function () {
        //remove all onstate classes
        $(".dlp-action").removeClass("active");
        //apply onstate to clicked element
        $(this).addClass("active");
    });
    
});