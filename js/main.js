let body = document.querySelector("body");
let btnColorTheme = document.querySelector(".header__menu");

btnColorTheme.addEventListener("click", function () {
    if(body.classList.contains("gray")) {
        body.classList.remove("gray");
        body.classList.add("blue");
    } else if(body.classList.contains("blue")) {
        body.classList.remove("blue");
        body.classList.add("red");
    } else if(body.classList.contains("red")) {
        body.classList.remove("red");
        body.removeAttribute('class');
    }else{
        body.classList.add("gray");
    }
})