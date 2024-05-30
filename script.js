/*для слайда изображений сверху*/ 
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const slideInterval = 5000;
 
function changeSlide() {
  slides[currentIndex].style.opacity = 0;
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].style.opacity = 1;
}
 
setInterval(changeSlide, slideInterval);

/*кнопка для пролистывания вверх сайта */
document.addEventListener("DOMContentLoaded", function () {
  const backToTop = document.getElementById("back-to-top");

  // Показать/скрыть кнопку при прокрутке страницы
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  // Плавная прокрутка при клике на кнопку
  backToTop.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

/*для пролистывания до нужного момента */
const product = document.querySelector(".product");
const adres = document.querySelector(".adres");
const menu = document.querySelector(".menu")
const map = document.querySelector(".map")
const cakes = document.querySelector(".cakes")
const namePurchase = document.querySelector(".namePurchase")
const btnOffer = document.querySelector(".btnOffer")


product.addEventListener("click", function() {
    menu.scrollIntoView({ block: "start", behavior: "smooth" });
});
adres.addEventListener("click", function() {
    map.scrollIntoView({ block: "start", behavior: "smooth" });
});
cakes.addEventListener("click", function() {
  namePurchase.scrollIntoView({ block: "start", behavior: "smooth" });
});
btnOffer.addEventListener("click", function() {
  namePurchase.scrollIntoView({ block: "start", behavior: "smooth" });
});
