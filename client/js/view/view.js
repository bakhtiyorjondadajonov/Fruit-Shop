const navBarCarousel = document.querySelector(".navigation__bar__carousel");
const bestSellerCarousel = document.querySelector(".carousel-bestseller");
const pressCarousel = document.querySelector(".carousel-press");
const previousButton = document.querySelector(".btn--nav-left");
const nextButton = document.querySelector(".btn--nav-right");
const btnBestsellerRight = document.querySelector(".btn--bestseller-right");
const btnBestsellerLeft = document.querySelector(".btn--bestseller-left");

export const carouselFn = (elem, btnLeft, btnRight, pageDots) => {
  if (elem) {
    const flkty = new Flickity(elem, {
      // options
      cellAlign: "left",
      contain: true,
      prevNextButtons: false,
      pageDots: pageDots,
    });

    // previous
    if (btnLeft && btnRight) {
      btnLeft.addEventListener("click", function () {
        flkty.previous(true);
      });
      // next
      btnRight.addEventListener("click", function () {
        flkty.next(true);
      });
    }
  }
};
carouselFn(navBarCarousel, ...[previousButton, nextButton], false);
carouselFn(
  bestSellerCarousel,
  ...[btnBestsellerLeft, btnBestsellerRight],
  false
);
carouselFn(pressCarousel, ...[false, false], true);
