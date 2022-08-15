const navBarCarousel = document.querySelector(".navigation__bar__carousel");
const bestSellerCarousel = document.querySelector(".carousel-bestseller");
const pressCarousel = document.querySelector(".carousel-press");
const pdpHeaderCarousel = document.querySelector(".header--pdp__carousel");
const benefitsCarousel = document.querySelector(".benefits__carousel");
const pdpHeaderCarouselMobile = document.querySelector(
  ".header--pdp__carousel-mobile"
);
const previousButton = document.querySelector(".btn--nav-left");
const nextButton = document.querySelector(".btn--nav-right");
const btnBestsellerRight = document.querySelector(".btn--bestseller-right");
const btnBestsellerLeft = document.querySelector(".btn--bestseller-left");
const btnPdpHeaderLeft = document.querySelector(".btn--pdp-left");
const btnPdpHeaderRight = document.querySelector(".btn--pdp-right");

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
carouselFn(pdpHeaderCarousel, ...[btnPdpHeaderLeft, btnPdpHeaderRight], true);
carouselFn(
  pdpHeaderCarouselMobile,
  ...[btnPdpHeaderLeft, btnPdpHeaderRight],
  true
);
carouselFn(benefitsCarousel, ...[false, false], true);
