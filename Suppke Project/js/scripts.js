const hamburgerContainer = document.querySelector("#header__main-nav");
const hamburger = document.querySelector(".header__main-nav--hamburger");
const links = document.querySelectorAll(".header__main-nav--links li");

hamburger.addEventListener("click", () => {
    hamburgerContainer.classList.toggle("clicked");
    links.forEach((link) => {
        link.classList.toggle("fade");
    });
});

var orderSliderThumbs = new Swiper('.order_slider-thumbs', {
    slidesPerView: 4,
    spaceBetween: 20,
    breakpoints: {
      320: {
        spaceBetween: 5
      },
      568: {
        spaceBetween: 10
      },
      768: {
        spaceBetween: 20
      }
    }
  });

  var orderSlider = new Swiper('.order_slider', {
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
      srossFade: true
    },
    thumbs: {
      swiper: orderSliderThumbs
    }
  });
  
  var bradsSlider = new Swiper('.brands_slider', {
    slidesPerView: 5,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      576: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
      992: {
        slidesPerView: 4
      },
      1200: {
        slidesPerView: 5
      }
    }
  });

  $(document).ready(function () {
    var show = true;
    var countbox = ".counter-totals";
    $(window).on("scroll load resize", function () {
        if (!show) return false;
        var w_top = $(window).scrollTop();
        var e_top = $(countbox).offset().top;
        var w_height = $(window).height();
        var d_height = $(document).height();
        var e_height = $(countbox).outerHeight();
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.counter__span1').css('opacity', '1');
            $('.counter__span1').spincrement({
                thousandSeparator: "",
                duration: 1500
            });
            show = false;
        }
    });
});

$(".ingredients__content--link-title").click(function () {
  $(this).siblings(".ingredients__content--link-para").slideToggle("slow");
});


$(function() {
  $('.scrollup').click(function() {
    $("html, body").animate({
      scrollTop:0
    },1000);
  })
})

$(window).scroll(function() {
  if ($(this).scrollTop()>200) {
 
    $('.scrollup').fadeIn();
  }
  else {
    $('.scrollup').fadeOut();
  }
});