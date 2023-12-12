const themeColors = ['gray', 'blue', 'red'];

let body = document.querySelector("body");
let btnColorTheme = document.querySelector(".header__menu");

btnColorTheme.addEventListener("click", function () {
    let currentTheme = body.classList.value;
    themeColors.forEach((color, index)=>{
        if(color === currentTheme){
            body.classList.remove(color);
            if((index + 1) < themeColors.length){
                body.classList.add(themeColors[index + 1]);
            }else{
                body.removeAttribute('class');
            }
        }
    })
    if(currentTheme===''){
        body.classList.add(themeColors[0]);
    }
})
