const navBarCarousel = document.querySelector(".navigation__bar__carousel");
const bestSellerCarousel = document.querySelector(".carousel-bestseller");
var previousButton = document.querySelector(".btn--nav-left");
var nextButton = document.querySelector(".btn--nav-right");

export const carouselFn = (elem, btnLeft, btnRight) => {
  if (elem) {
    const flkty = new Flickity(elem, {
      // options
      cellAlign: "left",
      contain: true,
      prevNextButtons: false,
      pageDots: false,
    });

    // previous
    if (btnLeft && btnRight) {
      btnLeft.addEventListener("click", function () {
        flkty.previous(true);
        console.log("btnLeft: ", btnLeft);
      });
      // next
      btnRight.addEventListener("click", function () {
        flkty.next(true);
        console.log("btnRight: ", btnRight);
      });
    }
  }
};
carouselFn(navBarCarousel, previousButton, nextButton);
carouselFn(bestSellerCarousel);
