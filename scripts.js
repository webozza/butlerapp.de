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
setInterval(function() {
    $('.kunden-slide:not(.active)') {
        $(this).addClass('active');
    });
}, 5000);









}); //end