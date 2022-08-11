const navBarCarousel = document.querySelector(".navigation__bar__carousel");
var previousButton = document.querySelector(".btn--nav-left");
var nextButton = document.querySelector(".btn--nav-right");
console.log("nextButton: ", nextButton);
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
};
carouselFn(navBarCarousel, previousButton, nextButton);
