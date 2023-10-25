const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const listFilterItems = $$('.filter__item')
const filterBrand = $('.filter__brand')
const filterPrice = $('.filter__price')
const filterRAM = $('.filter__ram')
const filterROM = $('.filter__rom')
console.log(listFilterItems)
//Hiển thị các thẻ filter khi nhấn vào từng item lọc
Array.from(listFilterItems).forEach(function (filterItem, index) {
    filterItem.addEventListener('click', function (e) {
        listFilterItems.forEach(function (item, i) {
            if (i !== index) {
                item.classList.remove('filter__item--has-brand');
                item.classList.remove('filter__item--has-price');
                item.classList.remove('filter__item--has-ram');
                item.classList.remove('filter__item--has-rom');
            }
        });

        if (index === 0) {
           filterItem.classList.toggle('filter__item--has-brand')
        } else if (index === 1) {
            filterItem.classList.toggle('filter__item--has-price');
        } else if (index === 2) {
            filterItem.classList.toggle('filter__item--has-ram');
        } else if (index === 3) {
            filterItem.classList.toggle('filter__item--has-rom');
        }

    });
    // Ngăn chặn sự kiện "click" từ việc lan truyền lên từ các phần tử con trong .filter__brand
    

});
//Ngăn chăn hành vi nổi bọt của các popup filter
(function stopPropagationFilter() {
    filterBrand.onclick = function(e){
        e.stopPropagation();
    }
    filterPrice.onclick = function(e){
        e.stopPropagation();
    }
    filterRAM.onclick = function(e){
        e.stopPropagation();
    }
    filterROM.onclick = function(e){
        e.stopPropagation();    
    }
})();
