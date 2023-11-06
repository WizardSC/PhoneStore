const navbar=document.querySelector(".header__navbar-list ");
console.log(navbar);
const exit=document.querySelector(".header__navbar-list button");
console.log(exit);
const menu=document.getElementById("head_menu");
console.log(menu);

menu.addEventListener('click',function(){
    navbar.classList.toggle('active');
});
exit.addEventListener('click',function(){
    navbar.classList.remove('active');
});





