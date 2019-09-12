$(function() {
  console.log("loading jquery");
  $(window).on("scroll", function() {
    if ($(window).scrollTop() > 50) {
      $(".header").addClass("active");
    } else {
      $(".header").removeClass("active");
    }
  });
});
