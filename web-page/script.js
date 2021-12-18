const menuBar = document.querySelector(".menu-bar");
    menuBar.addEventListener("click",function(){
    menuBar.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("active");
});
