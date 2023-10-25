/*------------slider--------*/

const prevbtn = document.querySelector('.prev-btn');
const nextbtn = document.querySelector('.next-btn');
const imgNumber = document.querySelectorAll('.slider-product-one-content-items');
let index = 0;
let isHover = false;

nextbtn.addEventListener("click", function () {
  index = index + 1;
  if (index > imgNumber.length - 1) {
    index = 0;
  }
  document.querySelector(".slider-product-one-content-items-content").style.right = index * 100 + "%";
});

prevbtn.addEventListener("click", function () {
  index = index - 1;
  if (index < 0) {
    index = imgNumber.length - 1;
  }
  document.querySelector(".slider-product-one-content-items-content").style.right = index * 100 + "%";
});

let index1 = 0;
changeSlider = function () {
  if (isHover) return;

  index1 = index1 + 1;
  if (index1 > imgNumber.length - 1) {
    index1 = 0;
  }
  if (index1 < 0) {
    index1 = imgNumber.length - 1;
  }
  document.querySelector(".slider-product-one-content-items-content").style.right = index1 * 100 + "%";
};

prevbtn.addEventListener('mouseenter', () => {
  isHover = true; 
})

prevbtn.addEventListener('mouseleave', ()=>{
  isHover = false;
});

setInterval(changeSlider, 2000);