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


/*swiper*/

let imageBox = document.querySelector(".main__image__container");
let imgs = Array.from(imageBox.children); //imageBox.children;
let minHeight = imgs.map((img) => img.height).sort(function(a, b){return a-b})[0];
let originalMinHeight = minHeight;
imgs.forEach((img) => {
    if (img.height > minHeight) {
      img.style.height = minHeight + "px";
    }
  })

const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  speed: 1600,
  height: minHeight,
});

window.addEventListener("resize", () => {
  window.location.reload();
});
/*swiper*/