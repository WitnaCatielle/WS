$(function () {
//preloader
    $(window).preloader({
        delay: 500
    });
//shrink header
    $(document).on("scroll", function () {
        if
                ($(document).scrollTop() > 60) {
            $(".header-transparent").addClass("sticky-header");
        } else
        {
            $(".header-transparent").removeClass("sticky-header");
        }
    });
//back to top
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
                backToTop = function () {
                    var scrollTop = $(window).scrollTop();
                    if (scrollTop > scrollTrigger) {
                        $('#back-to-top').addClass('show');
                    } else {
                        $('#back-to-top').removeClass('show');
                    }
                };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
//Animation scroll
    wow = new WOW(
            {
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 0,
                mobile: true,
                live: true
            }
    );
    wow.init();
//smooth scroll
    smoothScroll.init({
        selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
        speed: 1000, // Integer. How fast to complete the scroll in milliseconds
        easing: 'easeInOutCubic', // Easing pattern to use
        offset: 55, // Integer. How far to offset the scrolling anchor location in pixels
        callback: function (anchor, toggle) {} // Function to run after scrolling
    });
//portfolio filter
    $(document).ready(function () {
        if ($('.filter-row').length) {
            var $galleryFilter = $('.filter-row').isotope({
                itemSelector: '.filter-item',
                masonry: {
                    columnWidth: '.filter-item'
                }
            });
            $('.filter-list').on('click', 'li', function () {
                var filterValue = $(this).attr('data-filter');
                $('.filter-list').find('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
                $galleryFilter.isotope({filter: filterValue});
            });

            $galleryFilter.imagesLoaded().progress(function () {
                $galleryFilter.isotope('layout');
            });
        }
    });
    /*****maginific popup **/
    $('.popup-row').each(function () {
        $(this).magnificPopup({
            delegate: 'a.popup-gallery',
            type: 'image',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: false
            }
        });
    });
    //textanimations
    $('.tlt').textillate({
        loop: true
    });
    //owl carousel news slider
    $('.owl-news').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
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
        }
    });
    //owl testimonials and image slider
    $('.owl-feedback,.owl-img').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
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
    //magnific modal for videos
    $('.video-modal').magnificPopup({
  type:'iframe'
  
});
//sticky header used into agency demo
    $(".sticky").sticky({topSpacing: 0});
//auto close navbar on click mobile devices
    $('a.nav-link').on('click', function () {
        $('.navbar-toggler:visible').click();
    });
});

