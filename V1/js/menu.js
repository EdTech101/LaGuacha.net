function menu() {
    $("#float-menu-mobile,#float-menu").draggable();
    //Menu related functions
    var menuOpen = false;
    var menu = $(".menu-overlay,.menu-bar");
    $(".menu-overlay-mobile").hide();
    menu.hide();

    function getScroll() {
        if (window.pageYOffset != undefined) {
            return [pageXOffset, pageYOffset];
        } else {
            var sx, sy, d = document,
                r = d.documentElement,
                b = d.body;
            sx = r.scrollLeft || b.scrollLeft || 0;
            sy = r.scrollTop || b.scrollTop || 0;
            return [sx, sy];
        }
    }

    function hidder() {
        menu.toggleClass("no-show").delay(1000).hide();
        $(".menu-bar").removeClass("w3-out-right");
        $("#float-menu")[0].dataset.aos = "fade-down";
    }

    function openMenu() {
        hidder();
        setTimeout(toogleMenu, 10);
    }

    function closeMenu() {
        if (menuOpen) {
            var scrolled = getScroll()[1];
            $(".menu-bar").addClass("w3-out-right");
            menu.removeClass("show").addClass("off");
            setTimeout(hidder, 900)
            $(".menu-bar").toggleClass("w3-animate-right w3-animate-opacity");
            $("a#menu-icon-trigger").fadeIn(1000);
            if (scrolled >= 200) {
                $("#float-menu")[0].dataset.aos = "fade-right";
                $("#float-menu").addClass("aos-animate");
            }
            menuOpen = false;
        };
    }

    function openMenuMobile() {
        if (!menuOpen) {
            $(".menu-overlay-mobile").fadeIn(1000);
            $(".menu-item").on("click", function() {
                if (menuOpen) {
                    openMenuMobile();
                }
            })
            menuOpen = true;
        } else {
            $(".menu-overlay-mobile").fadeOut(1000);
            menuOpen = false;
        }
    }

    function toogleMenu() {

        menuOpen = true;
        $("#float-menu")[0].dataset.aos = "fade-right";
        $("#float-menu").removeClass("aos-animate");
        menu.show().removeClass("off").addClass("show");
        $(".menu-bar").toggleClass("w3-animate-right w3-animate-opacity");
        $("a#menu-icon-trigger").fadeOut(1000);
        $(".close-button,.menu-bar>li>a").on("click", closeMenu);
    };

    $("#menu-icon-trigger,#float-menu").on("click", openMenu);
    $("#float-menu-mobile").on("click", openMenuMobile);

}