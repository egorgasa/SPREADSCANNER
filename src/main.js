import "./index.css";

const faq = document.querySelectorAll(".question__item");
const faqItems = document.querySelectorAll(".question__item-text");
const faqArrow = document.querySelectorAll(".question__item-arrow");

if (faq.length > 0) {
  faq.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      faqItems[index].classList.toggle("!grid-rows-1");
      faqItems[index].classList.toggle("md:mt-10");
      faqItems[index].classList.toggle("mt-2.5");
      faqArrow[index].classList.toggle("rotate-90");
    });
  });
}

const burger = document.querySelector(".burger__btn");
const sectionBurger = document.querySelector(".nav__menu");
const menuItem = document.querySelectorAll(".nav_item");

if (burger != null) {
  burger.addEventListener("click", () => {
    sectionBurger.classList.toggle("nav__menu--active");
    burger.classList.toggle("burger__btn--active");
    document.querySelector("body").classList.toggle("overflowHid");
  });
  menuItem.forEach((item, index) =>
    item.addEventListener("click", () => {
      burger.classList.toggle("burger__btn--active");
      sectionBurger.classList.toggle("nav__menu--active");
      document.querySelector("body").classList.toggle("overflowHid");
    })
  );
}
