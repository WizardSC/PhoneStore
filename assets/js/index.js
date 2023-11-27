const container = document.querySelector('.content__product-container');
console.log(container);

function renderProductIndex(listProductIndex) {
    
    // Sắp xếp mảng theo giảm dần của thuộc tính sale
    listProductIndex.sort((a, b) => b.sale - a.sale);

    // Lấy ra 8 sản phẩm đầu tiên
    const top8Products = listProductIndex.slice(0, 8);
    console.log(top8Products)

const container=document.querySelector('.content__product-container')
console.log(container)

function renderProduct(top8Products){
    const htmls=top8Products.map(function(product){
        const money1 = money.formatCurrencytoVND(product.price_current)
        const money2 = money.formatCurrencytoVND(product.price_old)

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
    attachClickEventToProducts()
}

// Gọi hàm renderProductIndex với danh sách sản phẩm từ hàm Product.getProducts()
renderProductIndex(Product.getProducts());

function attachClickEventToProducts() {
    const productItems = document.querySelectorAll('.pro');
    console.log(productItems)
    productItems.forEach(item => {
        item.addEventListener('click', () => {
            const productId = item.dataset.id;
            console.log(productId)
            openProductSide(productId);
        });
    });
}

function openProductSide(productId) {
    // Chuyển hướng đến trang product.html với tham số id
    window.location.href = `product.html?id=${productId}`;
    console.log(productId)
}
function getDetailProductIndex() {
    const productItem = $$('.pro')
    productItem.forEach(item => {
        item.addEventListener('click', () => {
            openDetailProduct(item.dataset.id)
        })
    })
}





