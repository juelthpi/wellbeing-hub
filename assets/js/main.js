
jQuery(document).ready(function ($) {
  // $(document).on("click", function (event) {
  //   const $div = $("#outside-click");
  //   const $navbarText = $("#navbarText");
  //   if (!$div.is(event.target) && $div.has(event.target).length === 0) {
  //     $navbarText.removeClass("show");
  //   }
  // });
  // service slider
  $(".service-slider").slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000, // Slide transition duration
    slidesToShow: 3,
    adaptiveHeight: true,
    autoplay: false,
    autoplaySpeed: 2000, // Minimum delay between slides
    cssEase: "linear", // Smooth easing (no acceleration)
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  // doctor slider
  $(".doctor-slider").slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000, // Slide transition duration
    slidesToShow: 3,
    adaptiveHeight: true,
    autoplay: false,
    autoplaySpeed: 1, // Minimum delay between slides
    cssEase: "linear", // Smooth easing (no acceleration)
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  // hostiptal slider
  $(".hostiptal-slider").slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    adaptiveHeight: true,
    autoplay: false,
    autoplaySpeed: 1,
    cssEase: "linear", // Smooth easing (no acceleration)
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  // media-slider
  $(".media-slider").slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    adaptiveHeight: true,
    autoplay: false,
    autoplaySpeed: 1,
    cssEase: "linear", // Smooth easing (no acceleration)
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  // story-slider
  $(".story-slider").slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    adaptiveHeight: true,
    autoplay: false,
    autoplaySpeed: 1,
    cssEase: "linear", // Smooth easing (no acceleration)
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  // patients-say-slider
  $(".patients-say-slider").slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    adaptiveHeight: true,
    autoplay: false,
    autoplaySpeed: 1,
    cssEase: "linear", // Smooth easing (no acceleration)
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  // blog-slider
  $(".blog-slider").slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    adaptiveHeight: true,
    autoplay: false,
    autoplaySpeed: 1,
    cssEase: "linear", // Smooth easing (no acceleration)
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  // news-slider
  $(".lates-news-slider ").slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    adaptiveHeight: true,
    autoplay: false,
    autoplaySpeed: 1,
    cssEase: "linear", // Smooth easing (no acceleration)
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

// slider height
// function setEqualHeight(sliderSelector) {
//   let maxHeight = 0;

//   // Loop through each slide inside the specific slider
//   $(sliderSelector).find('.slick-slide').each(function () {
//     let thisHeight = $(this).outerHeight();
//     if (thisHeight > maxHeight) {
//       maxHeight = thisHeight;
//     }
//   });

//   // Set height only for slides inside that slider
//   $(sliderSelector).find('.slick-slide').css('height', maxHeight + 'px');
// }

// // Run after slick is initialized
// $('.my-slider').on('setPosition', function () {
//   setEqualHeight('.my-slider');
// });



