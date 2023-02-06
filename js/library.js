// carousel
$('.my__carousel').owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    autoplayTimeout: 8000,
    dots: false,
    autoplay: true,

    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

$('.my2__carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    // autoplayTimeout: 8000,
    autoplay: true,
   dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
$('.my3__carousel').owlCarousel({
    loop: true,
    margin: 5,
    nav: false,
    autoplay: true,
    autoplayTimeout: 8000,
   dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        800: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});

$('.my4__carousel').owlCarousel({
    loop: false,
    margin: 5,
    nav: false,
    autoplay: true,
   dots: false,
   autoplayTimeout: 8000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        800: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});
//  magnific popup
$(document).ready(function () {
    $(".popup-with-zoom-anim").magnificPopup({
        type: "inline",
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: "auto",
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: "my-mfp-zoom-in"
    });
});