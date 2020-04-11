var introSlider = $("#intro-slider");

introSlider.slick({
  arrows: false,
  dots: false,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1
});



$("#intro-arrow-next").on("click", function (event) {
  event.preventDefault();

  introSlider.slick('slickNext');
});

$("#intro-arrow-prev").on("click", function (event) {
  event.preventDefault();


  introSlider.slick('slickPrev');
});
