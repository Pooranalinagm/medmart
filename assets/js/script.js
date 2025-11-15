AOS.init();


$(window).on('resize load', function() {
  const width = $(window).width();

  if (width >= 0 && width <= 991) {
    $('#register_section').appendTo('.mean-bar > .mean-nav > ul');
  } else {
    $('.mean-bar > .mean-nav > ul #register_section').appendTo('.header .head_in .col-xxl-2.col-md-2'); // or original div
  }
});



$("#offer_section").owlCarousel({
  loop: true,
  nav: false,
  items:1,
  margin: 0,
  dots:true,
  autoplay:true,
  responsiveClass:true,

});





    $(".foot_menu1 .foot_top .f-link strong").click(function(){
      if($(window).width() <= 767){
      $(this).siblings('.foot_menu1 .foot_top .f-link .flist').slideToggle();
      $(this).toggleClass('tog');
      $(this).parent().siblings().children('.foot_menu1 .foot_top .f-link .flist').slideUp();
      $(this).parent().siblings().children('.foot_menu1 .foot_top .f-link strong').removeClass('tog');
      }
    });



  $('.offers .offers_in .offers_scrl .items .cnt .review li a').click(function() {
    $(this).toggleClass('wish');
  });


   document.addEventListener('DOMContentLoaded', function () {
        const allAccordions = document.querySelectorAll('.accordion-collapse');

        allAccordions.forEach((acc) => {
            acc.addEventListener('show.bs.collapse', function () {
                allAccordions.forEach((other) => {
                    if (other !== acc) {
                        bootstrap.Collapse.getInstance(other)?.hide();
                    }
                });
            });
        });
    });















("use strict");

/* MOBILE MENU */
$("nav.menu").meanmenu({
  meanMenuClose: "X",
  meanMenuCloseSize: "18px",
  meanScreenWidth: "991",
  meanExpandableChildren: true,
  meanMenuContainer: ".mobile-menu",
  onePage: true,
});
/* WOW ANIMATION SETTING */
var wow = new WOW({
  boxClass: "wow", // default
  animateClass: "animated", // default
  offset: 0, // default
  mobile: true, // default
  live: true, // default
});

(function ($) {
  if ($(".video-btn").length) {
    $(".video-btn").on("click", function () {
      $.fancybox({
        href: this.href,
        type: $(this).data("type"),
        title: this.title,
        helpers: {
          title: { type: "inside" },
          media: {},
        },

        beforeShow: function () {
          $(".fancybox-wrap").addClass("gallery-fancybox");
        },
      });
      return false;
    });
  }

  $(window).on("load", function () {
    $(".fancybox").fancybox();

    /***** Navigation Active Class Query *****/
    $(function ($) {
      var url = window.location.href;
      $("nav ul li a").each(function () {
        if (this.href === url) {
          $(this).closest("li").addClass("active");
        }
      });
    });
  });
})(window.jQuery);
