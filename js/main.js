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
let minHeightElement = imgs.sort(function (a, b) { return a.height - b.height })[0];
let windowWidth = window.innerWidth;

imgs.forEach((img, index) => {
  img.id = index;
})
imgs.forEach((img) => {
  if (img.id !== minHeightElement.id) {
    img.style.height = minHeightElement.height + "px";
  }
})

const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  speed: 1600,
});

window.addEventListener("resize", () => {
  if (windowWidth !== window.innerWidth) {
    windowWidth = window.innerWidth;
    imgs.forEach((img) => {
      if (img.id !== minHeightElement.id) {
        img.style.height = minHeightElement.height + "px";
      }
    })
  }

});
/*swiper*/


/* AOS */
AOS.init();
/* AOS */