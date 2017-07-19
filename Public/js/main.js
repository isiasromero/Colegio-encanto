new WOW().init();
$(document).ready(function () {

    var url = window.location.pathname;

    var spliturl = url.split('/');

    $(document).on("click", ".categoty_ext_act", function () {
        var slug = $(this).data('slug');
        var base_url = $(this).data('base_url');
        $.ajax({
            type: "POST",
            url: base_url + 'extracurricular_activities/filter',
            data: {slug: slug},
            beforeSend: function () {
                $('#new_data').html('<img src="' + base_url + 'uploads/default/AjaxLoader.gif" width="20" height="20"/>');
            },
            success: function (json) {
                $('#new_data').html(json);
            }
        });
    });



    //Sort random function
    function random(owlSelector) {
        owlSelector.children().sort(function () {
            return Math.round(Math.random()) - 0.5;
        }).each(function () {
            $(this).appendTo(owlSelector);
        });
    }


    //var url_completa = location.href;
    //$("nav li a, #nav-mobile li a").each(function() {
    //var h = $(this).attr('href');
    //if (url_completa.indexOf(h) > -1) {
    //$(this).addClass("activo");
    //}
    //});
    var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);

    var spliturl = pgurl.split('#');

    $('#bienestar .sub-bienestar li a, ._sub-bienestar li a').click(function () {
        if (spliturl[0] == 'bienestar') {
            var urlnav = $(this).attr('href').split('#');
//alert($("ul.tabs li a[href='#"+urlnav[1]+"']").length);
            $("#sidenav-overlay").trigger("click");
            $("#sidenav-overlay").trigger("click");
            $("ul.tabs li a[href='bienestar#" + urlnav[1] + "']").trigger("click");
        }
    });

    $('#nav-mobile .bienestar li a').click(function () {
        if (spliturl[0] == 'bienestar') {
            var urlnav = $(this).attr('href').split('#');
//            alert(urlnav);
//alert($("ul.tabs li a[href='#"+urlnav[1]+"']").length);
            $("#sidenav-overlay").trigger("click");
            $("#sidenav-overlay").trigger("click");
            $("ul.tabs li a[href='#" + urlnav[1] + "']").trigger("click");
        }
    });

//    alert(spliturl[0]);

    $("nav.myMenu ul li > a").each(function () {


        if ($(this).attr("href") == pgurl) {
            $(this).parent().addClass("activo");

            return false;
        } else {

            if ($(this).data("href") == pgurl) {
                $(this).parent().addClass("activo");

                return false;
            } else {
                if (pgurl.length == 0) {
                    //$(this).parent().parent().find("li:eq(0) ").addClass("active");

                    return false;
                }
            }
        }
    });
    $('h2.h2cont').each(function () {
        $(this).html(function () {
            var $h1 = $(this).text().split(" "),
                    last = $h1.pop();
            return $h1.join(" ") + ($h1.length > 0 ? " <span>" + last + "</span>" : last);
        });
    });

    $('.team select').material_select();

    $('.team .input-field').each(function () {
        var c = $(this).find('.select-dropdown').attr('data-activates'),
                d = $(this).find('.select-wrapper');
        $('#' + c).detach().appendTo(d);
    });
    ;
    $('.team .input-field').on('click', 'ul li', function (event) {
        var v = $(this).find('span').text();
        if (v != '') {
            $(this).parents('.input-field').find('label').hide();
        } else {
            $(this).parents('.input-field').find('label').show();
        }
    });


    $(function () {
        $(' #da-thumbs .myBox ').each(function () {
            $(this).hoverdir();
        });
        $('.blg').on('click', 'h3', function (event) {
            $(this).siblings('h3').removeClass('active');
            $(this).addClass('active');
            var sh = $(this).data('t');
            if ($('.psico').length > 0) {
                $(sh).siblings('.item').slideUp();
                $(sh).removeClass('hide').slideDown();
            } else {
                $(sh).siblings('.item').addClass('hide');
                $(sh).removeClass('hide');
            }
        });
    });


    $(".button-collapse").sideNav();
    $('.slider').slider({
        interval: 5000,
        indicators: true,
        full_width: true
    });
    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 7000,
        animateOut: 'slideInLeft',
        animateOut: 'slideOutLeft',
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
        },
        beforeInit: function (elem) {
            //Parameter elem pointing to $("#owl-demo")
            random($(".owl-carousel"));
        }
    });
    $('.owl-carousel2').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: false,
        dots: false,
        autoplayTimeout: 5000,
        animateOut: 'slideInLeft',
        animateOut: 'slideOutLeft',
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
    $('.owl-carousel3').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4500,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        },
        onInitialized: callback,
        onTranslated: callback,
    });
    function callback() {
        $('.owl-item.middle').removeClass('middle');
        $('.owl-carousel3 .active').eq(1).addClass('middle');
    }
    ;
    $('.modal').detach().appendTo('body');
    $('#nav-mobile').detach().appendTo('body');
    $('.modal-trigger').leanModal();
    /*dropdown menu*/
    /*$('.dropdown-button').dropdown({
     inDuration: 300,
     outDuration: 225,
     constrain_width: true,
     hover: true,
     gutter: 0,
     belowOrigin: false
     });*/
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

    /*tab custom*/

    var numtabs = $(".tab-custom").length;
    var cal = 100 / parseInt(numtabs);
    $(".tab-custom").parent().css({"width": cal + "%"})

    $(document).on("click", ".tab-custom", function (e) {
        e.preventDefault();

        $(".tab-custom-content div").removeClass("active");
        $(".tab-custom-content " + $(this).attr("href")).addClass("active");
    });

    setNavigation();
    /*search form*/
    $(document).on("click", ".togglesearch", function (e) {
        e.preventDefault();
        if ($(".search").is(":visible")) {
            $(".togglesearch i:eq(0)").addClass("active");
            $(".togglesearch i:eq(1)").removeClass("active");
        } else {

            $(".togglesearch i:eq(0)").removeClass("active");
            $(".togglesearch i:eq(1)").addClass("active");
        }
        $(".search").toggle("slow", function () {


        });
    });



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

function setNavigation() {
    var url = window.location.pathname,
            urlRegExp = new RegExp(url.replace(/\/$/, '') + "$"); // create regexp to match current url pathname and remove trailing slash if present as it could collide with the link in navigation in case trailing slash wasn't present there
    // now grab every link from the navigation

    $("nav a").each(function () {
        var href = $(this).attr('href');
        if (urlRegExp.test(this.href.replace(/\/$/, ''))) {
            $(this).parent().addClass('activo');
            $("body").addClass(href);


        }

    });
}