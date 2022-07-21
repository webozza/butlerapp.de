jQuery(document).ready(function($) {
    // Header
    var hH = $('#masthead').outerHeight();
    $('.hero-sec').css('margin-top',-hH)

    // Mobile Menu
    $('.menu-toggle button').click(function() {
        $('.mobile-menu').toggleClass('active');
    });

    // Scrolling logos
    const root = document.documentElement;
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
    var marqueeContent = document.querySelector("ul.marquee-content");

    root.style.setProperty("--marquee-elements", marqueeContent.children.length);

    for(let i=0; i<marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }

    // Video Section
    $('.accordion').each(function() {
        $(this).on('click', function() {
            if(!$(this).hasClass('active')) {
                $(this).find('.a-body').slideDown();
                $(this).addClass('active');
            } else {
                $(this).find('.a-body').slideUp();
                $(this).removeClass('active');
            }
            var activo = $('.accordion.active').length;
            if(activo > 1) {
                $('.accordion').not(this).find('.a-body').slideUp();
                $('.accordion').not(this).removeClass('active');
            }
        });
    });

    // Kunden -- changing slides
    var kH = $('#kunden').outerHeight() + 'px';
    $('#kunden').css('height',kH);
    $('#kunden .slider-controls > button').each(function() {
        $(this).click(function() {
            $(this).addClass('active');
            $('#kunden .slider-controls > button').not(this).removeClass('active');
            if($('#kunden .slider-controls > button:last-child').hasClass('active')) {
                $('#kunden .kunden-slide:nth-child(1)').fadeOut('fast');
                $('#kunden .kunden-slide:nth-child(1)').removeClass('active');
                $('#kunden .kunden-slide:nth-child(2)').fadeIn('slow');
                $('#kunden .kunden-slide:nth-child(2)').addClass('active');
            } else {
                $('#kunden .kunden-slide:nth-child(2)').fadeOut('fast');
                $('#kunden .kunden-slide:nth-child(2)').removeClass('active');
                $('#kunden .kunden-slide:nth-child(1)').fadeIn('slow');
                $('#kunden .kunden-slide:nth-child(1)').addClass('active');
            }
        });
    });

    // Kunden -- prev and next
    var lrW = $('#kunden .bars').width();
    $('#kunden .lr-cont').css('min-width',lrW*6)
    $('.c-next, .c-prev').on('click', function() {
        if(!$('#kunden .slider-controls > button:last-child').hasClass('active')) {
            $('#kunden .slider-controls > button.active').next().addClass('active');
            $('#kunden .slider-controls > button.active').prev().removeClass('active');
        } else {
            $('#kunden .slider-controls > button.active').prev().addClass('active');
            $('#kunden .slider-controls > button.active').next().removeClass('active');
        }
        if($('#kunden .slider-controls > button:last-child').hasClass('active')) {
            $('#kunden .kunden-slide:nth-child(1)').fadeOut('fast');
            $('#kunden .kunden-slide:nth-child(1)').removeClass('active');
            $('#kunden .kunden-slide:nth-child(2)').fadeIn('slow');
            $('#kunden .kunden-slide:nth-child(2)').addClass('active');
        } else {
            $('#kunden .kunden-slide:nth-child(2)').fadeOut('fast');
            $('#kunden .kunden-slide:nth-child(2)').removeClass('active');
            $('#kunden .kunden-slide:nth-child(1)').fadeIn('slow');
            $('#kunden .kunden-slide:nth-child(1)').addClass('active');
        }
    });
    // Kunden -- Read More
    $('.kunden-read-more').click(function() {
        $('#kunden .kunden-body p').css('-webkit-line-clamp','unset');
        $('.kunden-read-more').fadeOut('slow');
    });
    // Kuden -- Auto Scroll
    // no time... skip it

    // Team Small
    var sW = $('.service-head').width();
    var sH = $('.service-head').outerHeight();
    $('.hotspot').css({
        width : sW,
        Height: sH
    });
    // Active State
    $('.service .hotspot .hotspot-btn').each(function() {
        $(this).on('click', function() {
            $('.hotspot-btn').not(this).addClass('inactive');
            $(this).removeClass('inactive');
        });
    });

    var michael = $('.hotspot .hotspot-btn:first-child').css('top');
    var kristina = $('.hotspot .hotspot-btn:nth-child(2)').css('top');
    var irina = $('.hotspot .hotspot-btn:nth-child(3)').css('top');
    var diana = $('.hotspot .hotspot-btn:nth-child(4)').css('top');
    $('.michael').css('top', michael);
    $('.kristina').css('top', kristina);
    $('.irina').css('top',irina);
    $('.diana').css('top',diana);

    $('.service-head .hotspot .hotspot-btn').each(function() {
        $(this).click(function() {
            var btnAttr = $(this).attr('data-attr');
            $(this).toggleClass('active');
            if(btnAttr == 'michael') {
                $('.member.michael').slideDown();
            } else if(btnAttr == 'kristina') {
                $('.member.kristina').slideDown();
            } else if(btnAttr == 'irina') {
                $('.member.irina').slideDown();
            } else if(btnAttr == 'diana') {
                $('.member.diana').slideDown();
            }
        });
    });
    $('.service').mouseup(function() {
        $('.member').hide();
        $('.hotspot-btn').removeClass('inactive active');
    });

    // Image Changer Function
    function smallCasual() {
        setTimeout(function() {
            $('.service .team-img').attr('src','img/team/casual-small.png');
        }, 5000);
    }
    function smallPro() {
        setTimeout(function() {
            $('.service .team-img').attr('src', 'img/team/pro-small.png')
        }, 5000);
    }
    // Change image when reaching scroll point
    function bgChanger() {
        $(window).scroll(function() {
            var wT = $(window).scrollTop();
            var oT = $('.service').offset().top;
            var sH = $('.service').height();
            var triggerPoint = oT-sH;
            if(wT > triggerPoint) {
                console.log('success');
                smallCasual();
            } else {
                console.log('offpoint');
                smallPro();
            }
        });
    }
    // bgChanger(); -- improve user experience first...

    // FAQ 
    $('.faq-body').each(function() {
        $(this).parent().on('click', function() {
            if(!$(this).hasClass('active')) {
                $(this).find('.faq-body').slideDown();
                $(this).addClass('active');
            } else {
                $(this).find('.faq-body').slideUp();
                $(this).removeClass('active');
            }
            var activo = $('.faq.active').length;
            if(activo > 1) {
                $('.faq').not(this).find('.faq-body').slideUp();
                $('.faq').not(this).removeClass('active');
            }
        });
    });
    $('.faq-close').each(function() {
        $(this).click(function() {
            $(this).parent().slideUp()
            $(this).parent().parent().removeClass('active');
        });
    });
}); //end
