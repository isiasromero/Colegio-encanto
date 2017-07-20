new WOW().init();
$(document).ready(function () {

        $('.slider').slider();




    $(".dropdown-button").mouseout(function () {

        var getdropdown = $(this).attr("data-activates");
        if ($("#" + getdropdown).is(":visible")) {
            console.log("mouseout");

        } else {
            $("#" + getdropdown).css({"opacity": "0", "display": "none"});
        }

    });


    /*fancybox-thumb
    $(".fancybox-thumb").fancybox({
        prevEffect: 'none',
        nextEffect: 'none',
        helpers: {
            title: {
                type: 'outside'
            },
            thumbs: {
                width: 50,
                height: 50
            }
        }
    });*/
    var wd = $(window).width();
    if (wd < 600) {
    } else if (wd > 599) {
        $('.highlight.myAccordeon article').click(function () {
            $(this).addClass('myAccordeon-active')
            $(this).prevAll('article').removeClass('myAccordeon-active')
            $(this).nextAll('article').removeClass('myAccordeon-active')
        });
    }
    $(window).scroll(function () {
        var bodt = $(window).scrollTop();
        if (bodt > 0) {
            $('header').addClass('fix');
            $('togglesearch,search').addClass('fix');
        } else {
            $('header').removeClass('fix');
            $('togglesearch,search').removeClass('fix');
        }
    });

    $('body').on('click', 'a.dir', function (event) {
        event.preventDefault();
        $('.dr').slideToggle();
        var text = $('span', this).text();
        $('span', this).text(text == "Cerrar Directorio" ? "Abrir Directorio" : "Cerrar Directorio");
    });
});
$(window).load(function () {
    $('.parallax').parallax();
});
$('.testimonios').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})
$('.aliados').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});

/*VIDEO GALERIA FANCYBOX*/

jQuery(document).ready(function () {
    $(".IT .video").click(function () {
        $.fancybox({'padding': 0, 'autoScale': false, 'transitionIn': 'none', 'transitionOut': 'none', 'title': this.title, 'width': 640, 'height': 385, 'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'), 'type': 'swf', 'swf': {'wmode': 'transparent', 'allowfullscreen': 'true'}});
        return false;
    });
});

/*js menu mobile*/
$(document).on("click", "#nav-mobile a.dropdownmobile", function (event) {
    event.preventDefault();

    if ($($(this).attr("href")).is(":visible")) {
        $($(this).attr("href")).css("display", "none");
    } else {
        $($(this).attr("href")).css({"display": "block", "position": "static"});
    }

});

$(function () {






    /*submenu*/
    $('.dropdown').hover(
            function () {
                $(this).children('.sub-menu').slideDown(200);
            },
            function () {
                $(this).children('.sub-menu').slideUp(200);
            }
    );

});

