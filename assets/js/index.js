// index.js

// Hàm xử lý sự kiện khi chuyển trang
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (productId) {
        // Nếu có tham số id trong URL, mở chi tiết sản phẩm
        openProductSide(productId);
    } else {
        // Nếu không có tham số id, gọi hàm renderProductIndex với danh sách sản phẩm từ hàm Product.getProducts()
        renderProductIndex(Product.getProducts());
    }
});

function openProductSide(productId) {
    // Chuyển hướng đến trang product.html với tham số id
    window.location.href = `product.html?id=${productId}`;
}

const container = document.querySelector('.content__product-container');

function renderProductIndex(listProductIndex) {
    // Sắp xếp mảng theo giảm dần của thuộc tính sale
    listProductIndex.sort((a, b) => b.sale - a.sale);

    // Lấy ra 8 sản phẩm đầu tiên
    const top8Products = listProductIndex.slice(0, 8);

    // Tạo HTML từ danh sách sản phẩm và hiển thị trong container
    const htmls = top8Products.map(function (product, index) {
        const money1 = money.formatCurrencytoVND(product.price_current);
        const money2 = money.formatCurrencytoVND(product.price_old);

        return `
        <div class="pro" id="${product.productID}">
            <img src="${product.img}" alt="">
            <div class="des">
                <h5>${product.name}</h5>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <div class="price">
                    <h4>${money1}</h4>
                    <p>${money2}</p>
                </div>
                <div class="notice">
                    <p>Yêu thích</p>
                    <i class="fa-regular fa-heart"></i>
                </div>
            </div>
            <div class="sale">
                <p>Giảm ${product.sale}%</p>
            </div>
        </div>
        `;
    });

    container.innerHTML = htmls.join('');
    attachClickEventToProducts();
}

function attachClickEventToProducts() {
    const productItems = document.querySelectorAll('.pro');
    productItems.forEach(item => {
        item.addEventListener('click', () => {
            const productId = item.id;
            openProductSide(productId);
        });
    });
}
