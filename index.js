const navBar = $("nav");
var lastScrollTop = 0;
$(window).on("scroll", function () {
  var scrollTop = $(this).scrollTop();
  if (scrollTop > lastScrollTop) {
    navBar.css("top", "-200px");
     sideBar.removeClass("slide");
    
  } else {
    navBar.css("top", "0px");
    navBar.addClass("scrolled");
    sideBar.removeClass("slide");
  }
  if (scrollY === 0) {
    navBar.removeClass("scrolled");
  }
  lastScrollTop = scrollTop;
});

const toggle = $("#land i");
const sideBar = $(".sideBar");
$(toggle).on("click", function() {
    sideBar.toggleClass("slide");
})


$(document).on("click", function (e) {
  if (
    e.target.className !== "fa-solid fa-bars" && e.target.className !== "sideBar") {
    sideBar.removeClass("slide");
  }
});
