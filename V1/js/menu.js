function menu() {
    //Menu related functions
    var menuOpen = false;
    var menu = $(".menu-overlay,.menu-bar");

    function hidder() {
        menu.toggleClass("no-show").removeClass("show");
        $(".menu-bar").removeClass("w3-out-right");
    }

    function openMenu() {
        hidder();
        setTimeout(toogleMenu, 10);
    }

    function closeMenu() {
        if (menuOpen) {
            $(".menu-bar").addClass("w3-out-right");
            setTimeout(hidder, 1000)
            $(".menu-bar").toggleClass("w3-animate-right w3-animate-opacity");
            $("a#menu-icon-trigger").fadeIn();
            menuOpen = false;
        };
    }

    function toogleMenu() {
        menuOpen = true;
        menu.addClass("show");
        $(".menu-bar").toggleClass("w3-animate-right w3-animate-opacity");
        $("a#menu-icon-trigger").fadeOut();
        $(".close-button,.menu-bar>li>a").on("click", closeMenu);
    };

    $("a#menu-icon-trigger").on("click", openMenu);
}