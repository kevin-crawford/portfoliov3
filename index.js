$(function () {
  console.log("loading jquery");
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $(".navbar").addClass("content-view");
    } else {
      $(".navbar").removeClass("content-view");
    }
  });
});

let mainNav = document.getElementById('js-menu');
let navBarToggle = document.querySelector('.menu-btn');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
})
