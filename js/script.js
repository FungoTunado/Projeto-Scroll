function scrollChangeColor(){
    var header = document.querySelector("header");
    var seta = document.querySelector(".fa-solid");
    if(scrollY > 180){
        header.classList.add("style-background");
        seta.classList.add("active");
    }
    else{
        header.classList.remove("style-background");
        seta.classList.remove("active");
    }
}

window.addEventListener('scroll', scrollChangeColor);