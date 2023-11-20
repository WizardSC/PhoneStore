
const modal = $('.modal__body')
const header = document.querySelector('.header');
const productDetail = $('.product-detail')
const productDetailClose = $('.product-detail__btn-close')
const btnAddToCart = $('.product-detail__btn-add-to-cart')
const btnBuyNow = $('.product-detail__btn-buy-now')

const productCart = $('.modal__cart')
console.log(productCart)

const toast = $('.toast__wrapper')
const btnCloseToast = $('.toast__icon-close')
const toastProgress = $('.toast__progress')
function showModal() {
    modal.classList.add('active')
    //Sửa lỗi filterLabel, next prev btn ở slider bị z-index cùng cấp với chi tiết sản phẩm
    filterLabel.classList.add('inactive')
    prevbtn.style.zIndex = '0'
    nextbtn.style.zIndex = '0'

    // filterLabel.style.zIndex = '-1'
}
function hideModal() {
    modal.classList.remove('active')
    //Sửa lỗi filterLabel, next prev btn ở slider bị z-index cùng cấp với chi tiết sản phẩm

    filterLabel.classList.remove('inactive')
    prevbtn.style.zIndex = '1'
    nextbtn.style.zIndex = '1'



}
//Mở chi tiết sản phẩm lên
function openDetailProduct(productID) {
    showModal()
    productDetail.classList.add('active')
    if (!productID) return;
    const list = data.getProducts()
    if (!list || list.length == 0) return null;
    let product = null;

    list.forEach(item => {
        if (item.productID == productID) {
            product = item
        }
    })


    const name = $('.product-detail__info-name')
    const priceOld = $('.product-detail__info-price-old')
    const priceCurrent = $('.product-detail__info-price-current')
    const img = $('.product-detail__body img')
    const rom = $('.product-detail__info-label--rom')
    const ram = $('.product-detail__info-label--ram');
    ram.innerHTML = '';
    const ramLabel = document.createElement('span');
    ramLabel.classList.add('product-detail__info-label-name');
    ramLabel.innerText = 'RAM';
    ram.appendChild(ramLabel);

    if (Array.isArray(product.ram)) {
        product.ram.forEach(ramValue => {
            const newItemRAM = document.createElement('div');
            newItemRAM.classList.add('product-detail__info-ram');
            newItemRAM.innerText = ramValue; // Hiển thị giá trị RAM
            ram.appendChild(newItemRAM); // Thêm phần tử RAM vào phần tử RAM container
        });
    }
    rom.innerHTML = '';

    const romLabel = document.createElement('span');
    romLabel.classList.add('product-detail__info-label-name');
    romLabel.innerText = 'ROM';
    rom.appendChild(romLabel);
    if (Array.isArray(product.rom)) {
        product.rom.forEach(romValue => {
            const newItemROM = document.createElement('div');
            newItemROM.classList.add('product-detail__info-rom');
            newItemROM.innerText = romValue; // Hiển thị giá trị RAM
            rom.appendChild(newItemROM); // Thêm phần tử RAM vào phần tử RAM container
        });
    }

    name.innerText = product.name
    priceOld.innerText = money.formatCurrencytoVND(product.price_old)
    priceCurrent.innerText = money.formatCurrencytoVND(product.price_current)
    img.setAttribute("src", product.img)



}
productDetailClose.addEventListener("click", closeDetailProduct)
function closeDetailProduct() {
    hideModal()
    productDetail.classList.remove('active')

}
function showToastMessage(icon, title, description, color) {
    const toastWrapper = document.querySelector('.toast__wrapper')
    if (toastWrapper) {
        const toastMsgTitle = toastWrapper.querySelector('.toast__message-title')
        const toastMsgDesc = toastWrapper.querySelector('.toast__message-desc')
        const toastIconInfo = toastWrapper.querySelector('.toast__icon-info')
        const toastProgress = toastWrapper.querySelector('.toast__progress')

        toastWrapper.style.zIndex = "4";

        toastIconInfo.className = icon + " toast__icon-info";
        toastMsgTitle.innerText = title
        toastMsgDesc.innerText = description
        toastIconInfo.style.backgroundColor = color
        toastWrapper.style.borderLeftColor = color
        // toastProgress.style.backgroundColor = color
        toastProgress.style.setProperty('--progress-color', color)
        toastWrapper.classList.add('active')
        toastProgress.classList.add('active')
        setTimeout(() => {
            toastWrapper.classList.remove('active')
        }, 3000);
        setTimeout(() => {
            toastProgress.classList.remove('active')
        }, 3300);
    }

}
btnAddToCart.addEventListener("click", () => {
    const loginID = User.checkLoginId()
    if (loginID) {
        closeDetailProduct()
        openCartModal()

    }
    else {
        showToastMessage(
            "fa-solid fa-circle-exclamation",
            "Thêm thất bại",
            "Bạn phải đăng nhập để thêm hàng vào giỏ",
            "#FF4444"
        )
    }
})
btnBuyNow.addEventListener('click', () => {
    const loginID = User.checkLoginId()
    if (loginID) {
        hideModal()

    } else {
        showToastMessage(
            "fa-solid fa-circle-exclamation",
            "Mua thất bại",
            "Bạn phải đăng nhập mới có thể chọn mua sản phẩm",
            "#FF4444"
        )
    }
})

const productCartClose = $('.modal__cart-close')
productCartClose.addEventListener('click', () => {
    closeCartModal()
})
// Cart
function openCartModal() {
    showModal()
    productCart.classList.add('active')
    renderProductCart()
}
function closeCartModal() {
    hideModal()
    productCart.classList.remove('active')
}
function renderProductCart() {
    const userID = User.checkLoginId()
    const userCart = cart.getCartList(userID)
    const cartContainer = $('.modal__cart-container')
    let html = '';
    userCart.forEach(cartItem => {
        html += `
        <div class="modal__cart-item" data-value="${cartItem.cartID}">
            <div class="modal__cart-left">
                <img src="${cartItem.productIMG}"
                    alt="" class="modal__cart-item-img">
            </div>
            <div class="model__cart-right">
                <div class="modal__cart-item-title">
                    ${cartItem.storeProduct.name}
                </div>
                <div class="modal__cart-item-counter">
                    <div class="modal__cart-item-decrease">
                        <i class="fa-solid fa-angle-left"></i>
                    </div>
                    <div class="modal__cart-item-quantity">${cartItem.quantity}</div>
                    <div class="modal__cart-item-increase">
                        <i class="fa-solid fa-angle-right"></i>
                    </div>
                </div>

                <div class="modal__cart-item-price">
                    ${money.formatCurrencytoVND(cartItem.product_price)}
                </div>
            </div>
            <div class="modal__cart-item-close">
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>
        `
    })

    cartContainer.innerHTML = html;
    const totalPriceCart = $('.modal__cart-info-price')
    totalPriceCart.innerText = money.formatCurrencytoVND(cart.getTotalMoney(userID))
    const listCartItems = $$('.modal__cart-item')
    listCartItems.forEach(cartItem => {
        const cartID = parseInt(cartItem.getAttribute('data-value'))
        const btnIncrease = cartItem.querySelector('.modal__cart-item-increase')
        const btnDecrease = cartItem.querySelector('.modal__cart-item-decrease')
        const btnDeleteItem = cartItem.querySelector('.modal__cart-item-close')
        btnDecrease.addEventListener('click', () => {
            const myCart = cart.getCartID(userID, cartID)
            if (myCart.quantity > 1) {
                cart.updateCartItemQuantity(userID, cartID, -1)
                renderProductCart()
            }
        })
        btnIncrease.addEventListener('click', () => {
            cart.updateCartItemQuantity(userID, cartID, 1)
            renderProductCart()
        })
        console.log(cartID)
    })

}
// Toast
btnCloseToast.addEventListener("click", () => {
    toast.classList.remove('active')
    setTimeout(() => {
        toastProgress.classList.remove('active')

    }, 300);
})
// Đăng nhập
const btnDangNhap = document.getElementById('btnDangNhap')

btnDangNhap.addEventListener("click", e => {
    e.preventDefault();
    // LoginPopupOpen();
});

User.setLoginState(1)





