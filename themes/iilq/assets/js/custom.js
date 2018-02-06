//@prepros-prepend libs/bootstrap.min.js
//@prepros-prepend easing.js
//@prepros-prepend libs/jquery-ui.min.js
//@prepros-prepend libs/slick.min.js
//@prepros-prepend jquery.matchHeight.js
//@prepros-prepend wow.min.js


$(document).ready(function(){

new WOW().init();

/* Init slick slider homepage top */
var activeClass = 'slick-active',
    ariaAttribute = 'aria-hidden';
$( '#hero-slider' )
.on( 'init', function() {
    $( '.slick-dots li:first-of-type' ).addClass( activeClass ).attr( ariaAttribute, false );
} )
.on( 'afterChange', function( event, slick, currentSlide ) {
    var $dots = $( '.slick-dots' );
    $( 'li', $dots ).removeClass( activeClass ).attr( ariaAttribute, true );
    $dots.each( function() {
        $( 'li', $( this ) ).eq( currentSlide ).addClass( activeClass ).attr( ariaAttribute, false );
    } );
} );

    $('#hero-slider').on('init', function(e, slick) {
        var $firstAnimatingElements = $('div.hero-slide:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);    
    });
    $('#hero-slider').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
              var $animatingElements = $('div.hero-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
              doAnimations($animatingElements);    
    });
    $('#hero-slider').slick({
      arrows:true,
      dots: false,
      fade: true,
      autoplay: true,
      autoplaySpeed: 10000,
      pauseOnFocus: false,
      pauseOnHover:false,
      pauseOnDotsHover: false     
    });
    function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function() {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationType = 'animated ' + $this.data('animation');
            $this.css({
                'animation-delay': $animationDelay,
                '-webkit-animation-delay': $animationDelay
            });
            $this.addClass($animationType).one(animationEndEvents, function() {
                $this.removeClass($animationType);
            });
        });
    }



    $('.projects-slider').on('init', function(e, slick) {
        var $firstAnimatingElements = $('div.project-slide:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);    
    });
    $('.projects-slider').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
              var $animatingElements = $('div.project-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
              doAnimations($animatingElements);    
    });
    $('.projects-slider').slick({
       autoplay: true,
       autoplaySpeed: 10000,
       arrows:true,
       dots: false,
       fade: true,
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnFocus: false,
        pauseOnHover:false,
        pauseOnDotsHover: false,     
    });
    function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function() {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationType = 'animated ' + $this.data('animation');
            $this.css({
                'animation-delay': $animationDelay,
                '-webkit-animation-delay': $animationDelay
            });
            $this.addClass($animationType).one(animationEndEvents, function() {
                $this.removeClass($animationType);
            });
        });
    }


  // caring slider
  $(".testimonial-slider").slick({
    // normal options...
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    centerMode: false,
    arrows:false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnFocus: false,
    pauseOnHover:false,    
  });



  // Remove placeholder
  $('input,textarea').focus(function(){
     $(this).data('placeholder',$(this).attr('placeholder'))
     $(this).attr('placeholder','');
  });
  $('input,textarea').blur(function(){
     $(this).attr('placeholder',$(this).data('placeholder'));
  });

});

$(".popular-articles-slider").slick({
  // normal options...
  infinite: true,
  dots: true,
  arrows:false,
  slidesToShow: 4,
  slidesToScroll: 4,

  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnFocus: false,
        pauseOnHover:false,
        pauseOnDotsHover: false,   
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnFocus: false,
        pauseOnHover:false,
        pauseOnDotsHover: false,   
      }
    },    
    {
      breakpoint: 410,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnFocus: false,
        pauseOnHover:false,
        pauseOnDotsHover: false,     
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]


});


// Menu
$('.menu-btn').click(function(){
    $('.main-menu-sidebar').addClass("menu-active");
    $('.menu-overlay').addClass("active-overlay");
    $('body').toggleClass('body-scroll');
    $(this).toggleClass('open');
});

// Menu
  $('.close-menu-btn').click(function(){
    $('.main-menu-sidebar').removeClass("menu-active");
    $('.menu-overlay').removeClass("active-overlay");
    $('body').toggleClass('body-scroll');
});

    $(function() {
  
      var menu_ul = $('.nav-links > li.has-menu > ul'),
           menu_a  = $('.nav-links > li.has-menu > a');
           menu_span = $('.nav-links > li.has-menu > a > span');
      
      menu_ul.hide();
    
      menu_span.click(function(e) {
        e.preventDefault();
        if(!$(this).hasClass('active')) {
          menu_a.removeClass('active');
          menu_ul.filter(':visible').slideUp('normal');
          $(this).addClass('active').parent().next().stop(true,true).slideDown('normal');
        } else {
          $(this).removeClass('active');
          $(this).parent().next().stop(true,true).slideUp('normal');
        }
      });
    
    });
    
 $(function() {
  $('a[href*="#mas-header"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

 jQuery('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('srcset');

    jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

});

if ($("#blog-sidebar")){
  $(function() {
    var $blogSidebar      = $("#blog-sidebar"),
        $blogFooter       = $('#page-footer') ,
        $blogWindow       = $(window),
        blogSidebarHeight = $blogSidebar.height(),
        blogFooterOffset  = $blogFooter.offset(),
        sidebarOffset     = $blogSidebar.offset(),
        sidebarWidth      = $blogSidebar.width();
    $blogWindow.scroll(function() {
        if ($blogWindow.scrollTop() > sidebarOffset.top && (blogFooterOffset.top - blogSidebarHeight) > $blogWindow.scrollTop()) {
            $blogSidebar.addClass('fixed-sidebar');
            $blogSidebar.width(sidebarWidth);
            $blogSidebar.removeClass('over-footer');
        } else if ($blogWindow.scrollTop() > (blogFooterOffset.top - blogSidebarHeight)) {
            $blogSidebar.addClass('over-footer');
        }  else {
            $blogSidebar.removeClass('fixed-sidebar');
            $blogSidebar.removeClass('over-footer');
        }
    });
  });
}