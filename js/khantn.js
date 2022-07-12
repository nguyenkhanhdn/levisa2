$(".slider").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 767,
            settings: {
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                infinite: true,
                dots: false
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$(".testimonial-slider").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    arrows: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                infinite: true,
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                infinite: true,
                slidesToShow: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$(".blog-slider").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                infinite: true,
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                infinite: true,
                slidesToShow: 1,
                arrows: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                infinite: true,
                slidesToShow: 1,
                arrows: false
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$(".brnd-slider").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                infinite: true,
                slidesToShow: 1,
                arrows: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                infinite: true,
                slidesToShow: 1,
                arrows: false
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$("button.dl-trigger").click(function () {
    if (!$(this).hasClass("dl-active") && !$("ul.dl-menu").hasClass("dl-menuopen")) {
        $(this).addClass("dl-active");
        $(this).css("background", "#666");
        $("ul.dl-menu").addClass("dl-menuopen");
        // $("li.mg-parent-menu").click(function () {
        //     if(!$(this).hasClass("dl-subviewopen")) {
        //         $(this).addClass("dl-subviewopen");
        //     } else {
        //         $(this).removeClass("dl-subviewopen");
        //     }
        // });
    } else {
        $(this).removeClass("dl-active");
        $(this).css("background", "linear-gradient(to right, #7C52FC, #49CCFA)");
        $("ul.dl-menu").removeClass("dl-menuopen");
    }
});
// if ($(window).width() < 768) {
//     $(window).resize(function () {
//         alert($(this).width());
//     })
// } else if($(window).width() <    481) {
//     $(window).resize(function () {
//         alert("hello");
//     })
// }
// $(window).resize(function () {
//     if (window.matchMedia("(max-width: 481px)").matches) {
//         alert("khantn")
//     } else if(window.matchMedia("(max-width: 768px)").matches) {
//         alert("vip");
//     }
// });
/* jQuery(function ($) {
    // Cache a reference to $(window), for performance, and get the initial dimensions of the window
    var $window = $(window),
        previousDimensions = {
            width: $window.width(),
            height: $window.height()
        };
    var div1 = $("#filterable-item-holder-1 .div1");
    var div2 = $("#filterable-item-holder-1 .div2");
    var div3 = $("#filterable-item-holder-1 .div3");
    var div4 = $("#filterable-item-holder-1 .div4");
    var div5 = $("#filterable-item-holder-1 .div5");
    var div6 = $("#filterable-item-holder-1 .div6");
    $window.resize(function (e) {
        var newDimensions = {
            width: $window.width(),
            height: $window.height()
        };

        if (window.matchMedia("(max-width: 481px)").matches) {
            if (newDimensions.width > previousDimensions.width) {
                // scaling up
            } else {
                // scaling down
            }

            // Store the new dimensions
            previousDimensions = newDimensions;
        } else if (window.matchMedia("(max-width: 768px)").matches) {
            console.log(previousDimensions.width);
            var div1 = $("#filterable-item-holder-1 .div1");
            var previousDiv1 = {
                left: div1.css("left"),
                top: div1.css("top")
            };
            if (newDimensions.width > previousDimensions.width) {
                if (parseInt(newDimensions.width) === (parseInt(previousDimensions.width) + 2)) {
                    // console.log("previous: " + previousDimensions.width);
                    // console.log("new: " + newDimensions.width);
                    div2.css("left", parseInt(div2.css("left")) + 1);
                    div3.css("left", parseInt(div3.css("left")) + 1);
                    div5.css("left", parseInt(div5.css("left")) + 1);
                    div6.css("left", parseInt(div6.css("left")) + 1);
                    previousDimensions = newDimensions;
                }
            } else {
                // scaling down
                if ((parseInt(newDimensions.width) + 2) === parseInt(previousDimensions.width)) {
                    // console.log("previous: " + previousDimensions.width + " - " + previousDimensions.height);
                    // console.log("new: " + newDimensions.width + " - " + newDimensions.height);
                    div2.css("left", parseInt(div2.css("left")) - 1);
                    div3.css("left", parseInt(div3.css("left")) - 1);
                    div5.css("left", parseInt(div5.css("left")) - 1);
                    div6.css("left", parseInt(div6.css("left")) - 1);
                    previousDimensions = newDimensions;
                }
            }
        }
    });
}); */


