const themeColors = ["gray", "blue", "red"];

let body = document.querySelector("body");
let btnColorTheme = document.querySelector(".header__menu");

btnColorTheme.addEventListener("click", function () {
  let currentTheme = body.classList.value;
  themeColors.forEach((color, index) => {
    if (color === currentTheme) {
      body.classList.remove(color);
      if (index + 1 < themeColors.length) {
        body.classList.add(themeColors[index + 1]);
      } else {
        body.removeAttribute("class");
      }
    }
  });
  if (currentTheme === "") {
    body.classList.add(themeColors[0]);
  }
});

/* slider */

let imageBox = document.querySelector(".main__image__container");
let imgs = Array.from(imageBox.children); //imageBox.children;
let currentSlide = 0;
let maxWidth = imgs.map((img) => img.width).sort(function(a, b){return a-b})[imgs.length-1];
imgs.forEach((img) => {
  if (img.width < maxWidth) {
    img.style.padding = `0 ${(maxWidth - img.width) / 2}px`;
  }
});
let interval = setInterval(nextSlide, 3000);

window.addEventListener("resize", () => {
  maxWidth = imgs.map((img) => img.width).sort()[0];
  imgs.forEach((img) => {
    if (img.width < maxWidth) {
      img.style.padding = `0 ${(maxWidth - img.width) / 2}px`;
    }
  });
  clearInterval(interval);
  nextSlide();
  interval = setInterval(nextSlide, 3000);
});

function nextSlide() {
  if (currentSlide < imgs.length - 1) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }
  imageBox.style.transform = `translateX(${-maxWidth * currentSlide}px)`;
}
