$(document).ready(function () {
    $(".nav-dropdown").mouseenter(function () {
        $(this).children(".nav-dropdownMenu").show();
    });

    $(".nav-dropdown").mouseleave(function () {
        $(this).children(".nav-dropdownMenu").hide();
    });

    $(".hidden-nav .fa-bars").click(function () {
        $(".hidden-content").show(1000);
        $(".hidden-nav").hide(1000);
        $("#main").hide();
    });

    $(".hidden-nav-content .fa-times").click(function () {
        $(".hidden-nav").show(1000);
        $(".hidden-content").hide(1000);
        $("#main").show();
    });

    $(".submenu-links-container").click(function () {
        $(this).children(".submenu-ul").show(500);
        $(this).find(".hidden-menu-link .fas").addClass('fa-chevron-up');
    });

    $(".submenu-links-container").mouseleave(function () {
        $(this).children(".submenu-ul").hide(500);
        $(this).find(".hidden-menu-link .fas").removeClass('fa-chevron-up');
    });

});

