$(document).ready(function () {
  //TYPED JS
  if ($('.element').length) {
    $('.element').each(function () {
      $(this).typed({
        strings: [$(this).data('text1'), $(this).data('text2'), $(this).data('text3')],
        loop: $(this).data('loop') ? $(this).data('loop') : false,
        backDelay: $(this).data('backdelay') ? $(this).data('backdelay') : 2000,
        typeSpeed: 10,
      });
    });
  }

  //HERO SLIDER JS
  var swiper = new Swiper('.swiper-container.classic', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      loop: true,
    },
  });

  //Vertical Slide
  var swiper = new Swiper('.swiper-container.upslide', {
    direction: 'vertical',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      loop: true,
    },
  });

  //Carousel Slide
  var swiper = new Swiper('.swiper-container.carousel', {
    centeredSlides: true,
    slidesPerView: 'auto',
    speed: 800,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  //Fade Slide
  var swiper = new Swiper('.swiper-container.fade-slide', {
    spaceBetween: 30,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  //COUNTER JS
  if ($('.counter').length) {
    var a = 0;
    $(window).scroll(function () {
      var oTop = $('#counter').offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function () {
          var $this = $(this),
            countTo = $this.attr('data-count');
          $({
            countNum: $this.text(),
          }).animate(
            {
              countNum: countTo,
            },
            {
              duration: 2000,
              easing: 'swing',
              step: function () {
                $this.text(Math.floor(this.countNum));
              },
              complete: function () {
                $this.text(this.countNum);
                //alert('finished');
              },
            },
          );
        });
        a = 1;
      }
    });
  }

  // OWL CAROUSEL JS
  var owlcar = $('.owl-carousel');
  if (owlcar.length) {
    owlcar.each(function () {
      var $owl = $(this);
      var itemsData = $owl.data('items');
      var autoplayData = $owl.data('autoplay');
      var autoPlayTimeoutData = $owl.data('autoplaytimeout');
      var dotsData = $owl.data('dots');
      var navData = $owl.data('nav');
      var marginData = $owl.data('margin');
      var stagePaddingData = $owl.data('stagepadding');
      var itemsDesktopData = $owl.data('items-desktop');
      var itemsTabletData = $owl.data('items-tablet');
      var itemsTabletSmallData = $owl.data('items-tablet-small');
      $owl.owlCarousel({
        items: itemsData,
        dots: dotsData,
        nav: navData,
        margin: marginData,
        loop: true,
        stagePadding: stagePaddingData,
        autoplay: autoplayData,
        autoplayTimeout: autoPlayTimeoutData,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
        responsive: {
          0: {
            items: itemsTabletSmallData,
            stagePadding: 0,
          },
          600: {
            items: itemsTabletData,
            stagePadding: 0,
          },
          1000: {
            items: itemsDesktopData,
          },
        },
      });
    });
  }

  // ONE PAGE SCROLL JS

  if ($('.hero').length) {
    $(document).on('scroll', onScroll);
  }

  function onScroll(event) {
    if ($('#hero').length) {
      var scrollPos = $(document).scrollTop();
      $('nav ul li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr('href'));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('nav ul li a').removeClass('activelink');
          currLink.addClass('activelink');
        }
      });
    }
  }

  // HEADER OPEN MENU
  $('.nav-icon, nav ol li a').on('click', function () {
    $('header').toggleClass('open');
  });

  $('.wrapper').on('click', function () {
    const headerOpen = document.querySelector('header');

    if (headerOpen.classList.contains('open')) {
      $('header').removeClass('open');
    }
  });

  //NAVBAR SHOW - HIDE
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var homeheight = $('.hero').height() - 86;

    if (scroll > homeheight) {
      $('header').addClass('fixed');
    } else {
      $('header').removeClass('fixed');
    }
  });

  // // MAGNIFIC POPUP FOR PORTFOLIO PAGE

  // SCROLL ANIMATION
  new WOW({ offset: 200, mobile: false }).init();

  //CLIENT SLIDER JS
  $('.bxslider').bxSlider({
    minSlides: 1,
    maxSlides: 4,
    slideWidth: 300,
    slideMargin: 0,
    ticker: true,
    speed: 30000,
  });

  // Modal window
  const openWindow = document.querySelector('#window');
  const overlay = document.querySelector('.modal-window');
  window.onload = onPageLoad;

  function onPageLoad() {
    overlay.classList.add('overlay');
  }

  const starVisible = setTimeout(() => {
    visible();
  }, 7000);

  const visible = () => {
    openWindow.classList.add('close');
  };

  // ---------------

  $('html, body').animate({ scrollTop: 0 }, 'slow');
}); // document read end
