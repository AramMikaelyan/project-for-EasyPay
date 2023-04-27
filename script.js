const menu = document.querySelector(".menu");

document.addEventListener("scroll", function(){
    menu.classList.toggle("sticky", window.scrollY > 0);
});


