window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

//Main Slider
$(document).ready(function () {
    $(".slider").slick({
        dots: false,
        autoplay: false,
        arrows: true,
        autoplaySpeed: 5000,
    });
});

// Alumni Slider

$(document).ready(function () {
    $(".alumni-slider").slick({
        dots: false,
        autoplay: false,
        arrows: true,
        autoplaySpeed: 5000,
    });
});

// Presenter Slider

$(document).ready(function () {
    $(".team_slider").slick({
        dots: false,
        autoplay: false,
        arrows: true,
        autoplaySpeed: 3000,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});
