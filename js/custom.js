$(document).ready(function () {
  $(".brand-slider").slick({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 420, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  });
});
/////////////////////////
document.querySelectorAll(".accordion-item").forEach((item) => {
  item.querySelector(".accordion-item-header").addEventListener("click", () => {
    item.classList.toggle("open");
  });
});
////////////////////////
jQuery(document).ready(function () {
  jQuery("#menu-icon").click(function () {
    jQuery(this).toggleClass("menu-open");
    jQuery(".menu-main").toggleClass("show-menu");
  });
  jQuery(".close-icon").click(function () {
    jQuery(".menu-main").toggleClass("close-sidebar");
  });
});
////////////////////////
window.onscroll = function () {
  var header = document.querySelector("header");
  if (window.pageYOffset > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};
//////////////////////////
$(document).ready(function () {
  $(".menu-main ul li").click(function () {
    $("ul li").removeClass("active");
    $(this).addClass("active");
  });
});
