$(document).ready(function () {
    $(".images").css("background-image", "url(\"/f2.jpg\")")
    $(window).scroll(function () {
        if ($(this).scrollTop() >= $(window).height()) {
            $(".mainBackground").addClass("backgroundImage1");
        } else {
            $(".mainBackground").removeClass("backgroundImage1");
        }
        if ($(this).scrollTop() >= $(window).height() * 3) {
            $(".mainBackground").addClass("backgroundImage2");
        } else {
            $(".mainBackground").removeClass("backgroundImage2");
        }

    });

    //slider:
    $(".myImages").css("background-image", `url(\"f1.jpg\")`)
    var index = 1;
    var body = document.querySelector("body");
    body.addEventListener("keydown", function (e) {
        if (e.keyCode == 37) {
            slideLeft()
        };
        if (e.keyCode == 39) {
            slideRight()
        };
    })

    function slideLeft() {
        index -= 1;
        if (index < 1) {
            index = 2;
        }
        if (index > 2) {
            index = 1;
        }
        console.log(index);
        $(".myImages").css("background-image", `url(\"f${index}.jpg\")`)
    }

    function slideRight() {

        index += 1;
        if (index < 1) {
            index = 2;
        }
        if (index > 2) {
            index = 1;
        }
        console.log(index);
        $(".myImages").css("background-image", `url(\"f${index}.jpg\")`)
    }
    $(".slideLeft").click(function () {
        slideLeft();
    });
    $(".slideRight").click(function () {
        slideRight();
    });
    $("a").click(function () {
        var href = this.getAttribute("href");
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 1000);
    });

});
