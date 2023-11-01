const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const listFilterItems = $$('.filter__item')
const filterBrand = $('.filter__brand')
const filterPrice = $('.filter__price')
const filterRAM = $('.filter__ram')
const filterROM = $('.filter__rom')

const listBrandItems = $$('.filter__brand-item')
const listRAMItems = $$('.filter__ram-item')
const listROMItems = $$('.filter__rom-item')
const productContainer = $('.product.row')


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
    filterBrand.onclick = function (e) {
        e.stopPropagation();
    }
    filterPrice.onclick = function (e) {
        e.stopPropagation();
    }
    filterRAM.onclick = function (e) {
        e.stopPropagation();
    }
    filterROM.onclick = function (e) {
        e.stopPropagation();
    }
})();

// Duyệt qua các brand item, khi click vào thì add active
Array.from(listBrandItems).forEach(function (brand) {
    brand.addEventListener("click", function (e) {
        brand.classList.toggle('active');
    })
})

Array.from(listRAMItems).forEach(function (ram) {
    ram.addEventListener("click", function (e) {
        ram.classList.toggle('active');
    })
})

Array.from(listROMItems).forEach(function (rom) {
    rom.addEventListener("click", function (e) {
        rom.classList.toggle('active');
    })
})


//Render product lên giao diện
function renderProduct() {
    const htmls = productArr.map(function (product, index) {

        return `
        <div class="col l-2-4 m-4 c-6">
        <div class="product-item" data-index="${product.productID}">
            <div class="product-item__img-wrap">
                <img class="product-item__img"
                    src="${product.img}"
                    alt="" width="358" height="358">
            </div>
            <div class="product-item__name">
                <h3>${product.name}</h3>

            </div>
            <div class="product-item__price">
                <div class="product-item__price-new">${money.formatCurrencytoVND(product.price_old)}</div>
                <div class="product-item__price-old">${money.formatCurrencytoVND(product.price_current)}</div>

            </div>
            <div class="product-item__action">
                <div class="product-item__rating">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <div class="product-item__like">
                    <i class="fa-regular fa-heart" style="color: #d70119;"></i>
                </div>
            </div>
            <div class="product-item__sale">
                <p class="product-item__sale-detail">Giảm ${product.sale}%</p>
            </div>

        </div>
    </div>
    `
    })
    productContainer.innerHTML = htmls.join('')
}
renderProduct()
//Giới hạn sản phẩm trong 1 trang 
let thisPage = 1; //trang hiện tại
let limit = 10; //giới hạn sản phẩm 1 trang
const listItem = document.querySelectorAll('.product-item');

function loadItem() {
    let beginGet = limit * (thisPage - 1);
    let endGet = limit * thisPage - 1;
    listItem.forEach((item, key) => {
        if (key >= beginGet && key <= endGet) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
    listPage();

}
loadItem();

function listPage() {
    let count = Math.ceil(listItem.length / limit);
    let beforePages = thisPage - 1;
    let afterPages = thisPage + 1;
    console.log(count);
    document.querySelector('.pagination__list').innerHTML = '';
    if (thisPage != 1) {
        document.querySelector('.pagination__list').innerHTML =
            `<li class="pagination__item button pagination__item-btn-prev" onclick="changePage(${thisPage - 1})">
            <span>
                <i class="fa-solid fa-angle-left"></i>Trước đó
            </span>
        </li>`

    }
    if (thisPage > 2) { //Nếu page > 2 thì luôn thêm thẻ trang thứ 1
        let pageOne = document.createElement('li');
        pageOne.classList.add('pagination__item', 'numb');
        pageOne.innerText = 1;
        pageOne.setAttribute('onclick', "changePage(" + 1 + ")");

        document.querySelector('.pagination__list').appendChild(pageOne);

        if (thisPage > 3) {
            const dot = document.createElement('li')
            dot.classList.add('pagination__item', 'dots');
            dot.innerHTML = `<span>...</span>`
            document.querySelector('.pagination__list').appendChild(dot)
            document.querySelector('.pagination__list').appendChild(dot);
        }
    }
    if (thisPage == count) {
        beforePages = beforePages - 2;
    } else if (thisPage == count - 1) {
        beforePages = beforePages - 1;
    }
    if (thisPage == 1) {
        afterPages = afterPages + 2;
    } else if (this == 2) {
        afterPages = afterPages + 1;
    }
    for (i = beforePages; i <= afterPages; i++) {
        if (i > count) {
            continue;
        }
        if (i == 0) {
            i = i + 1;
        }
        if (thisPage == i) {
            activeLi = "active";
        } else {
            activeLi = "";
        }
        let newPage = document.createElement('li')
        newPage.classList.add('pagination__item', 'numb');
        newPage.innerText = i;
        if (i == thisPage) {
            newPage.classList.add('active');
        }
        newPage.setAttribute('onclick', "changePage(" + i + ")");
        document.querySelector('.pagination__list').appendChild(newPage)
    }

    if (thisPage < count - 1) {
        if (thisPage < count - 2) {
            const dot = document.createElement('li')
            dot.classList.add('pagination__item', 'dots');
            dot.innerHTML = `<span>...</span>`
            document.querySelector('.pagination__list').appendChild(dot)
        }
        let lastPage = document.createElement('li')
        lastPage.classList.add('pagination__item', 'numb');
        lastPage.innerText = count;
        if (i == thisPage) {
            lastPage.classList.add('active');
        }
        lastPage.setAttribute('onclick', "changePage(" + count + ")");
        document.querySelector('.pagination__list').appendChild(lastPage)
    }

    if (thisPage < count) {
        const next = document.createElement('li');
        next.classList.add('pagination__item', 'button', 'pagination__item-btn-next');
        next.innerHTML = `
        <span>
            Kế tiếp<i class="fa-solid fa-angle-right"></i>
        </span>
        `
        next.setAttribute('onclick', `changePage(${thisPage + 1})`);


        document.querySelector('.pagination__list').appendChild(next)

    }

}



function changePage(i) {
    thisPage = i;
    loadItem();
}



// Pagination
// const ulTag = document.querySelector('.pagination__list')
// let totalPages = 20;
// function element(totalPages, page) {
//     let liTag = '';
//     let activeLi;
//     let beforePages = page - 1; //Lấy số trang hiển thị trừ 1
//     let afterPages = page + 1; //Lấy số trang hiển thị cộng 1
//     if (page > 1) { //Nếu số trang lớn hơn 1 thì thêm 1 li để hiển thị btn prev
//         liTag += `<li class="pagination__item button pagination__item-btn-prev" onclick="element(totalPages,${page - 1})"><span><i class="fa-solid fa-angle-left"></i>Trước đó</span></li>`
//     }
//     if (page > 2) { //Nếu page > 2 thì luôn thêm thẻ trang thứ 1
//         liTag += `<li class="pagination__item numb" onclick="element(totalPages,1)""><span>1</span></li>`
//         if (page > 3) { //Nếu page > 3 thì add thêm 1 dấu chấm
//             liTag += `<li class="pagination__item dots"><span>...</span></li>`
//         }
//     }
//     if (page == totalPages) {
//         beforePages = beforePages - 2;
//     } else if (page == totalPages - 1) {
//         beforePages = beforePages - 1;
//     }

//     if (page == 1) {
//         afterPages = afterPages + 2;
//     } else if (page == 2) {
//         afterPages = afterPages + 1;
//     }
//     for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
//         if (pageLength > totalPages) {
//             continue;
//         }
//         if (pageLength == 0) {
//             pageLength = pageLength + 1;
//         }
//         if (page == pageLength) {
//             activeLi = "active";
//         } else {
//             activeLi = "";
//         }
//         liTag += `<li class="pagination__item numb ${activeLi}" onclick="element(totalPages,${pageLength})"><span>${pageLength}</span></li>`;
//     }
//     if (page < totalPages - 1) { //Nếu page > 2 thì luôn thêm thẻ trang thứ 1
//         if (page < totalPages - 2) {
//             liTag += `<li class="pagination__item dots"><span>...</span></li>`
//         }
//         liTag += `<li class="pagination__item numb" onclick="element(totalPages,${totalPages})"><span>${totalPages}</span></li>`

//     }
//     if (page < totalPages) { //Nếu trang hiển thị nhỏ hơn tổng trang thì thêm 1 li để hiển thị btn next
//         liTag += `<li class="pagination__item button pagination__item-btn-next" onclick="element(totalPages,${page + 1})"><span>Kế tiếp<i class="fa-solid fa-angle-right"></i></span></li>`

//     }
//     ulTag.innerHTML = liTag;
// }
// let count = Math.ceil(listItem.length / limit);

// element(totalPages, 1);


// Nhấn nút trang kế tiếp, trang trước đó

// Lấy tất cả các phần tử HTML cần sử dụng
// const btnNextPage = document.querySelector('.pagination__btn-next');
// const btnPrevPage = document.querySelector('.pagination__btn-prev');
// const paginationItems = document.querySelectorAll('.pagination__item');

// let currentPage = 1; // Trang hiện tại
// const maxVisiblePages = 5; // Số trang tối đa có thể hiển thị

// // Xử lý sự kiện khi nhấn nút "Trang tiếp theo"
// btnNextPage.addEventListener('click', () => {
//     if (currentPage < paginationItems.length) {
//         // Loại bỏ lớp active khỏi trang hiện tại
//         paginationItems[currentPage - 1].classList.remove('active');
//         // Tăng currentPage lên
//         currentPage++;
//         // Đặt lớp active cho trang mới
//         paginationItems[currentPage - 1].classList.add('active');
//     }
// });

// // Xử lý sự kiện khi nhấn nút "Trang trước"
// btnPrevPage.addEventListener('click', () => {
//     if (currentPage > 1) {
//         // Loại bỏ lớp active khỏi trang hiện tại
//         paginationItems[currentPage - 1].classList.remove('active');
//         // Giảm currentPage xuống
//         currentPage--;
//         // Đặt lớp active cho trang mới
//         paginationItems[currentPage - 1].classList.add('active');
//     }
// });

// // Xử lý sự kiện khi nhấn vào một trang cụ thể
// paginationItems.forEach(item => {
//     item.addEventListener('click', () => {
//         const page = parseInt(item.getAttribute('data-value'));
//         // Loại bỏ lớp active khỏi trang hiện tại
//         paginationItems[currentPage - 1].classList.remove('active');
//         // Đặt lớp active cho trang được chọn
//         item.classList.add('active');
//         currentPage = page;
//     });
// });