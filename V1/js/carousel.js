function carousel() {
    //Carousell related functions
    var imagesUrl = [
        "4.jpg",
        "3.jpg",
        "2.jpg",
        "1.jpg"
    ];
    var index = 0;

    function loader(index) {
        var imgPreload = new Image();
        $(imgPreload).load("images/carousel/" + imagesUrl[index], function(response, status, xhr) {
            if (status == 'error') {
                carouselNext();
            } else {
                $(".imageMiddle.main-container").css("background-image", "url('" + "images/carousel/" + imagesUrl[index] + "')");
                $("#overlay-carousel").animate({
                    backgroundColor: "rgba(59, 32, 17, 0.70)"
                }, 1000, function() {
                    // Animation complete.
                });
            }
        });
    }

    function carousellChange(index) {
        $("#overlay-carousel").animate({
                backgroundColor: "black",
            },
            2000,
            "linear",
            function() {
                loader(index);
            }
        )
    }

    function carouselNext() {
        var change = carousellChange;
        if (index === imagesUrl.length - 1) {
            index = 0;
        } else {
            index++;
        }
        change(index);
    }

    function carouselPrev() {
        var change = carousellChange;
        if (index === 0) {
            index = imagesUrl.length - 1;
        } else {
            index--;
        }
        change(index);
    }


    $("#landing-carousel-right")
        .on("click",
            function() {
                carouselNext();
            }
        );

    $("#landing-carousel-left")
        .on("click",
            function() {
                carouselPrev();
            }
        );

    var interval = window.setInterval(function() {
        carouselNext();
    }, 7000);
}