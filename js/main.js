$(document).ready(function(){
    $(".nav-dropdown").mouseenter(function() {
        $(this).children(".nav-dropdownMenu").show();
    });

    $(".nav-dropdown").mouseleave(function() {
        $(this).children(".nav-dropdownMenu").hide();
    });

    $(".hidden-nav .fa-bars").click(function(){
        $(".hidden-content").show(1000);
        $(".hidden-nav").hide(1000);
        $("#main").hide();
    });

    $(".hidden-nav-content .fa-times").click(function(){
        $(".hidden-nav").show(1000);
        $(".hidden-content").hide(1000);
        $("#main").show();
    });

    $(".dropdown-links").click(function(){
        $(this).children(".ciao")();
    })
});

