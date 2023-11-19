const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const productContainer = $('.product.row')

//Render product lên giao diện
function renderProduct(listProduct) {

    if (listProduct == null || listProduct.length == 0) {
        productContainer.innerHTML =
            `<div class="product__not-found">
            <img class="product__not-found-img" src="assets/img/sad-face.png" alt="Không có ảnh">
            <p class="product__not-found-label">Không có sản phẩm phù hợp với tiêu chí bạn tìm</p> 
        </div>
        `
        return;
    }
    const htmls = listProduct.map(function (product, index) {
        return `
        <div class="col l-2-4 m-4 c-6">
        <div class="product-item" data-id="${product.productID}">
            <div class="product-item__img-wrap">
                <img class="product-item__img"
                    src="${product.img}"
                    alt="" width="358" height="358">
            </div>
            <div class="product-item__name">
                <h3>${product.name}</h3>

            </div>
            <div class="product-item__price">
                <div class="product-item__price-new">${money.formatCurrencytoVND(product.price_current)}</div>
                <div class="product-item__price-old">${money.formatCurrencytoVND(product.price_old)}</div>

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

    //Add sự kiện cho những sản phẩm được render lên giao diện
    getDetailProduct();


}
renderProduct(data.getProducts())

function getDetailProduct() {
    const productItem = $$('.product-item')
    productItem.forEach(item => {
        item.addEventListener('click', () => {
            openDetailProduct(item.dataset.id)
        })
    })
}



let thisPage = 1; //trang hiện tại
let limit = 10; //giới hạn sản phẩm 1 trang
function loadItem() {
    //Giới hạn sản phẩm trong 1 trang 
    listItem = document.querySelectorAll('.product-item');
    let beginGet = limit * (thisPage - 1);
    let endGet = limit * thisPage - 1;
    listItem.forEach((item, key) => {
        if (key >= beginGet && key <= endGet) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
    listPage(listItem);

}
loadItem();
function listPage(listItem) {
    let count = Math.ceil(listItem.length / limit);

    document.querySelector('.pagination__list').innerHTML = '';

    if (thisPage != 1) {
        document.querySelector('.pagination__list').innerHTML =
            `<li class="pagination__item button pagination__item-btn-prev" onclick="changePage(${thisPage - 1})">
            <span>
                <i class="fa-solid fa-angle-left"></i>Trước đó
            </span>
        </li>`
    }

    if (count <= 4) {
        for (let i = 1; i <= count; i++) {
            const newPage = document.createElement('li');
            newPage.classList.add('pagination__item', 'numb');
            newPage.innerText = i;
            if (i === thisPage) {
                newPage.classList.add('active');
            }
            newPage.setAttribute('onclick', `changePage(${i})`);
            document.querySelector('.pagination__list').appendChild(newPage);
        }
    } else {
        if (thisPage > 2) {
            const pageOne = document.createElement('li');
            pageOne.classList.add('pagination__item', 'numb');
            pageOne.innerText = 1;
            pageOne.setAttribute('onclick', `changePage(1)`);
            document.querySelector('.pagination__list').appendChild(pageOne);
        }

        if (thisPage > 3) {
            const dot = document.createElement('li');
            dot.classList.add('pagination__item', 'dots');
            dot.innerHTML = `<span>...</span>`;
            document.querySelector('.pagination__list').appendChild(dot);
        }

        for (let i = thisPage - 1; i <= thisPage + 1; i++) {
            if (i > 0 && i <= count) {
                const newPage = document.createElement('li');
                newPage.classList.add('pagination__item', 'numb');
                newPage.innerText = i;
                if (i === thisPage) {
                    newPage.classList.add('active');
                }
                newPage.setAttribute('onclick', `changePage(${i})`);
                document.querySelector('.pagination__list').appendChild(newPage);
            }
        }

        if (thisPage < count - 2) {
            const dot = document.createElement('li');
            dot.classList.add('pagination__item', 'dots');
            dot.innerHTML = `<span>...</span>`;
            document.querySelector('.pagination__list').appendChild(dot);
        }

        if (thisPage < count - 1) {
            const lastPage = document.createElement('li');
            lastPage.classList.add('pagination__item', 'numb');
            lastPage.innerText = count;
            lastPage.setAttribute('onclick', `changePage(${count})`);
            document.querySelector('.pagination__list').appendChild(lastPage);
        }
    }

    if (thisPage < count) {
        const next = document.createElement('li');
        next.classList.add('pagination__item', 'button', 'pagination__item-btn-next');
        next.innerHTML = `
        <span>
            Kế tiếp<i class="fa-solid fa-angle-right"></i>
        </span>
        `;
        next.setAttribute('onclick', `changePage(${thisPage + 1})`);
        document.querySelector('.pagination__list').appendChild(next);
    }
}


function changePage(i) {
    thisPage = i;
    loadItem();
}

//Filter sản phẩm
const listFilterItems = $$('.filter__item')
const filterBrand = $('.filter__brand')
const filterPrice = $('.filter__price')
const filterRAM = $('.filter__ram')
const filterROM = $('.filter__rom')
const listBrandItems = $$('.filter__brand-item')
const listRAMItems = $$('.filter__ram-item')
const listROMItems = $$('.filter__rom-item')
const minPriceInput = $('#filter__price-min-price')
const maxPriceInput = $('#filter__price-max-price')

//Array các giá trị filter của brand, ram, rom
let myChoiceBrand = []
let myChoiceRAM = []
let myChoiceROM = []
let myPriceRange = [NaN, NaN]
let mySearchProduct = "";
let mySort = "";
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
minPriceInput.addEventListener('keyup', function (e) {
    let inputValue = minPriceInput.value;
    inputValue = inputValue.replace(/[^0-9]/g, '');
    minPriceInput.value = inputValue;
});

maxPriceInput.addEventListener('keyup', function (e) {
    let inputValue = maxPriceInput.value;
    inputValue = inputValue.replace(/[^0-9]/g, '');
    maxPriceInput.value = inputValue;
});

function checkPriceRange(value) {
    let minPrice = parseInt(minPriceInput.value);
    let maxPrice = parseInt(maxPriceInput.value);

    if (minPrice < 300000) {
        minPriceInput.value = 300000;
        myPriceRange[0] = 300000;
    } else if (maxPrice > 48000000) {
        maxPriceInput.value = 48000000;
        myPriceRange[1] = 48000000;
    } else if (minPrice > maxPrice) {
        if (value === "minPrice") {
            minPriceInput.value = 300000;
            myPriceRange[0] = 300000;
        } else if (value === "maxPrice") {
            maxPriceInput.value = 48000000;
            myPriceRange[1] = 48000000;
        }
    } else {
        myPriceRange[0] = minPrice;
        myPriceRange[1] = maxPrice;
    }
}
minPriceInput.addEventListener('blur', function (e) {
    checkPriceRange("minPrice");
    console.log(myPriceRange[0], myPriceRange[1]);


    applyFilters();


});

maxPriceInput.addEventListener('blur', function (e) {
    checkPriceRange("maxPrice");
    console.log(myPriceRange[0], myPriceRange[1]);
    applyFilters();

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


// Duyệt qua các brand item, khi click vào thì add active
Array.from(listBrandItems).forEach(function (brand) {
    brand.addEventListener("click", function (e) {
        brand.classList.toggle('active');
        let itemValue = brand.getAttribute("data-value");
        if (brand.classList.contains('active')) {
            let isExist = false;
            for (let i = 0; i < myChoiceBrand.length; i++) {
                if (myChoiceBrand[i] === itemValue) {
                    isExist = true;
                    break;
                }
            }
            if (!isExist) {
                myChoiceBrand.push(itemValue);
            }
        } else {
            for (let i = 0; i < myChoiceBrand.length; i++) {
                if (myChoiceBrand[i] === itemValue) {
                    myChoiceBrand.splice(i, 1);
                }
            }
        }
        applyFilters();
    });
});

// Duyệt qua các RAM item, khi click vào thì add active
Array.from(listRAMItems).forEach(function (ram) {
    ram.addEventListener("click", function (e) {
        ram.classList.toggle('active');
        let itemValue = ram.getAttribute("data-value");
        if (ram.classList.contains('active')) {
            let isExist = false;
            for (let i = 0; i < myChoiceRAM.length; i++) {
                if (myChoiceRAM[i] === itemValue) {
                    isExist = true;
                    break;
                }
            }
            if (!isExist) {
                myChoiceRAM.push(itemValue);
            }
        } else {
            for (let i = 0; i < myChoiceRAM.length; i++) {
                if (myChoiceRAM[i] === itemValue) {
                    myChoiceRAM.splice(i, 1);
                    break; // Thêm break để ngăn xóa nhiều phần tử
                }
            }
        }
        applyFilters();
    });
});
Array.from(listROMItems).forEach(function (rom) {
    rom.addEventListener("click", function (e) {
        rom.classList.toggle('active');
        let itemValue = rom.getAttribute("data-value");
        if (rom.classList.contains('active')) {
            let isExist = false;
            for (let i = 0; i < myChoiceROM.length; i++) {
                if (myChoiceROM[i] === itemValue) {
                    isExist = false;
                    break;
                }
            }
            if (!isExist) {
                myChoiceROM.push(itemValue);
            }
        } else {
            for (let i = 0; i < myChoiceROM.length; i++) {
                if (myChoiceROM[i] === itemValue) {
                    myChoiceROM.splice(i, 1);
                }
            }
        }
        applyFilters();

    })
})

function applyFilters() {
    let result = data.getProducts();
    if (!isNaN(myPriceRange[0]) && !isNaN(myPriceRange[1])) {
        let tempListProduct = [];

        tempListProduct = tempListProduct.concat(filterProductPrice(result, myPriceRange[0], myPriceRange[1]));
        result = tempListProduct;
    }
    if (searchProduct !== "") {
        let tempListProduct = [];
        tempListProduct = tempListProduct.concat(searchProduct(result, mySearchProduct))
        result = tempListProduct
    }
    if (myChoiceBrand.length > 0) {
        let tempListProduct = [];
        for (let i = 0; i < myChoiceBrand.length; i++) {
            tempListProduct = tempListProduct.concat(filterProductBrand(result, myChoiceBrand[i]));
        }
        result = tempListProduct;
    }
    if (myChoiceRAM.length > 0) {
        let tempProductSet = {};
        for (let i = 0; i < myChoiceRAM.length; i++) {
            const filteredProducts = filterProductRam(result, myChoiceRAM[i]);
            filteredProducts.forEach(product => {
                tempProductSet[product.name] = product;
            });
        }
        result = Object.values(tempProductSet);
    }

    if (myChoiceROM.length > 0) {
        let tempProductSet = {};
        for (let i = 0; i < myChoiceROM.length; i++) {
            const filteredProducts = filterProductRom(result, myChoiceROM[i]);
            filteredProducts.forEach(product => {
                tempProductSet[product.name] = product;
            })

        }
        result = Object.values(tempProductSet);
    }
    if(mySort !== "") {
        let tempListProduct = [];
        tempListProduct = tempListProduct.concat(sortProduct(result, mySort))
        result = tempListProduct
    }



    // Tương tự, áp dụng bộ lọc cho myChoiceROM nếu cần


    renderProduct(result);
    loadItem();
}
function filterProductBrand(productArr, productBrand) {
    let result = []
    productBrand = productBrand.toLowerCase();
    productArr.forEach(item => {
        if (item.brand === (productBrand)) {
            result.push(item)
        }
    })
    return result;
}
function filterProductPrice(productArr, productMinPrice, productMaxPrice) {
    let result = []
    productArr.forEach(item => {
        if (item.price_current >= productMinPrice && item.price_current <= productMaxPrice) {
            result.push(item)
        }
    })
    return result;
}
function filterProductRam(productArr, productRAM) {
    let result = [];
    productArr.forEach(item => {
        if (Array.isArray(item.ram)) {
            if (item.ram.some(ram => ram.toLowerCase().trim() === productRAM.toLowerCase().trim())) {
                result.push(item);
            }
        }
    });
    return result;
}

function filterProductRom(productArr, productROM) {
    let result = [];
    productArr.forEach(item => {
        if (Array.isArray(item.rom)) {
            if (item.rom.some(rom => rom.toLowerCase().trim() === productROM.toLowerCase().trim())) {
                result.push(item);
            }
        }
    })
    return result
}

function searchProduct(productArr, input) {
    let result = [];
    input = input.toLowerCase(); // Chuyển đổi input và item.name thành chữ thường (không phân biệt chữ hoa/chữ thường)

    productArr.forEach(item => {
        if (item.name.toLowerCase().includes(input)) {
            result.push(item);
        }
    });
    return result;
}

// Duyệt qua sort item

const sortItems = $$('.sort__item')
Array.from(sortItems).forEach(sortItem => {
    sortItem.addEventListener('click', () => {
        if (sortItem.classList.contains('active')) {
            // Nếu sortItem đã active, thì loại bỏ active và đặt mySort thành rỗng
            sortItem.classList.remove('active');
            mySort = '';
        } else {
            // Nếu sortItem chưa active, loại bỏ active từ tất cả các item khác và thêm active cho sortItem
            sortItems.forEach(item => {
                item.classList.remove('active');
            });
            sortItem.classList.add('active');
            mySort = sortItem.getAttribute('data-value');
        }
        applyFilters();
    })
})

function sortProduct(productArr, type) {
    let result = [];
    if (type === 'asc') {
        result = productArr.sort((a, b) => a.price_current - b.price_current)
    } else if (type === 'desc') {
        result = productArr.sort((a, b) => b.price_current - a.price_current)

    }
    return result;
}

// console.log(filterProductRom(productArr, "256 GB"))

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


//Khi cuộn quá filter thì đặt filter là position fixed
const filter = document.querySelector('.filter')
const filterLabel = document.querySelector('.filter__label')

const filterTopOffset = filter.offsetTop;
console.log(filterTopOffset)
window.addEventListener("scroll", () => {
    if (window.scrollY >= filterTopOffset) {
        filter.style.position = "fixed";
        filter.style.top = "0";

        filter.style.marginTop = "88" + "px";

    } else {
        filter.style.position = "static";
        filter.style.marginTop = "20" + "px";
    }
});
// JS cho thanh search

const searchInput = $('.search__input')
const searchIconClose = $('.search__icon-close')


searchInput.addEventListener('input', function (e) {
    if (searchInput.value !== "") {
        searchIconClose.classList.add('active')
    } else {
        searchIconClose.classList.remove('active')
    }
})

searchIconClose.addEventListener('click', function () {
    if (searchIconClose.classList.contains('active')) {
        searchIconClose.classList.remove('active')
        searchInput.value = ""
    }
})

searchInput.addEventListener('keydown', function (e) {
    if (e.key === "Enter") {
        mySearchProduct = searchInput.value;
    }

    applyFilters()

})

// Thay đổi số lượng sản phẩm trên 1 trang
const filterLimitProduct = $('.filter__limit-product-input')

filterLimitProduct.addEventListener('keydown', function (e) {
    if (e.key === "Enter") {
        limit = filterLimitProduct.value
        loadItem();
    }
})
// const filterItems = document.querySelectorAll(".filter__item");
//     filterItems.forEach(item => {
//         item.addEventListener("click", () => {
//             // Cuộn tới vị trí filterTopOffset
//             window.scrollTo({
//                 top: filterTopOffset - 1,
//                 behavior: "smooth" // Thêm hiệu ứng cuộn mượt
//             });
//         });
//     });

const navbarLogin = document.querySelector(".login")
const navbarUser = document.querySelector(".user")

console.log(navbarLogin)
console.log(navbarUser)

navbarLogin.addEventListener('click', function (e) {
    e.preventDefault()
    if (navbarLogin.classList.contains('active1')) {
        navbarUser.classList.add('active1')
        navbarLogin.classList.remove('active1')
    }
})

const navbarLogin1 = document.querySelector(".login1")
const navbarUser1 = document.querySelector(".user1")

console.log(navbarLogin1)
console.log(navbarUser1)

// login1.addEventListener('click',function(e){
//     e.preventDefault()
//     if(login1.classList.contains('active2')){
//         user1.classList.add('active2')
//         login1.remove('active2')
//     }
// })











