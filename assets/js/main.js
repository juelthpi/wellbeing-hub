jQuery(document).ready(function ($) {
  $(document).on("click", function (event) {
    const $div = $("#outside-click");
    const $navbarText = $("#navbarText");
    if (!$div.is(event.target) && $div.has(event.target).length === 0) {
      $navbarText.removeClass("show");
    }
  });
  // service slider
  $(".service-slider").slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 3000, // Slide transition duration
    slidesToShow: 3,
    adaptiveHeight: true,
    autoplay: false,
    autoplaySpeed: 1, // Minimum delay between slides
    cssEase: "linear", // Smooth easing (no acceleration)
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
