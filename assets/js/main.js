// review slider
$(".owl-carousel2").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
      dots: true,
    },
    600: {
      items: 1,
      nav: false,
      dots: true,
    },
    1000: {
      items: 1,
      nav: true,
      dots: true,
    },
  },
});

// client carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 30,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 2,
      nav: false,
      dots: false,
    },
    600: {
      items: 3,
      nav: false,
      dots: false,
    },
    1000: {
      items: 5,
      nav: false,
      dots: false,
    },
  },
});
