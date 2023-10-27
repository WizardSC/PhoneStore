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

// Nhấn nút trang kế tiếp, trang trước đó

// Lấy tất cả các phần tử HTML cần sử dụng
const btnNextPage = document.querySelector('.pagination__btn-next');
const btnPrevPage = document.querySelector('.pagination__btn-prev');
const paginationItems = document.querySelectorAll('.pagination__item');

let currentPage = 1; // Trang hiện tại
const maxVisiblePages = 5; // Số trang tối đa có thể hiển thị

// Xử lý sự kiện khi nhấn nút "Trang tiếp theo"
btnNextPage.addEventListener('click', () => {
    if (currentPage < paginationItems.length) {
        // Loại bỏ lớp active khỏi trang hiện tại
        paginationItems[currentPage - 1].classList.remove('active');
        // Tăng currentPage lên
        currentPage++;
        // Đặt lớp active cho trang mới
        paginationItems[currentPage - 1].classList.add('active');
    }
});

// Xử lý sự kiện khi nhấn nút "Trang trước"
btnPrevPage.addEventListener('click', () => {
    if (currentPage > 1) {
        // Loại bỏ lớp active khỏi trang hiện tại
        paginationItems[currentPage - 1].classList.remove('active');
        // Giảm currentPage xuống
        currentPage--;
        // Đặt lớp active cho trang mới
        paginationItems[currentPage - 1].classList.add('active');
    }
});

// Xử lý sự kiện khi nhấn vào một trang cụ thể
paginationItems.forEach(item => {
    item.addEventListener('click', () => {
        const page = parseInt(item.getAttribute('data-value'));
        // Loại bỏ lớp active khỏi trang hiện tại
        paginationItems[currentPage - 1].classList.remove('active');
        // Đặt lớp active cho trang được chọn
        item.classList.add('active');
        currentPage = page;
    });
});