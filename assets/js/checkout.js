const infoAccountUser = $('.info-account')
const infoAddress = $('.info-address')
const btnConfirmInfo = $('.info-account__btn')
const inputPhone = $('#info-account__input--phone')
const inputAddress = $('#info-account__input--address')
const btnChangeInfo = $('.info-address__button')
btnChangeInfo.addEventListener('click', () => {
    infoAccountUser.classList.add('active')
    infoAddress.classList.remove('active')
})

btnConfirmInfo.addEventListener('click', () => {
    let userInfo = User.getUserID(User.checkLoginId())
    let phoneValue = inputPhone.value
    let addressValue = inputAddress.value
    User.updatePhoneAndAddress(userInfo.userID, phoneValue, addressValue)
    location.reload()
})

// Load control thông tin khách hàng
// Load control đổi địa chỉ khách hàng
let userID = User.checkLoginId()

let userData = User.getUserID(userID)
let infoPhoneData = $('.info-address__title--phone')
let infoAddressData = $('.info-address__title--address')
if (userData.address !== '' || userData.phone !== '') {
    infoAccountUser.classList.remove('active')
    infoAddress.classList.add('active')
    infoPhoneData.innerText = userData.phone
    infoAddressData.innerText = userData.address

} else {
    infoAccountUser.classList.add('active')
    infoAddress.classList.remove('active')
    infoPhoneData.innerText = ''
    infoAddressData.innerText = ''
}

function renderListInvoices() {
    let html = ''
    const list = Invoice.getInvoiceByUserID(User.checkLoginId())
    list.forEach(invoice => {
        console.log(invoice)
        html += `
        <div class="info-invoice__item">
            <div class="info-invoice__header">
                <div class="info-invoice__wrapper">
                    <span class="info-invoice__label">
                        Đơn hàng
                    </span>
                    <span class="info-invoice__number">
                        #HD${invoice.invoiceID}
                    </span>
                </div>
                <div class="info-invoice__status">
                    Chưa xử lý
                </div>
            </div>
            <div class="info-invoice__wrapper">
                <div class="info-invoice__container">
                    <div class="info-invoice__order-date-wrap">
                        <span class="info-invoice__order-date-label">
                            Ngày đặt: 
                        </span>
                        <span class="info-invoice__order-time">${time.getDateTime(invoice.orderTime)}</span>
                    </div>
                    <div class="info-invoice__total-wrap">
                        <span class="info-invoice__total-label">
                            Tổng tiền:
                        </span>
                        <span class="info-invoice__total-price">
                            ${money.formatCurrencytoVND(Invoice.getTotalPriceOfInvoice(invoice.invoiceID))}
                        </span>
                    </div>
                </div>
                <div class="info-invoice__details-btn">
                    Xem chi tiết
                </div>
            </div>
        </div>
        `

        invoice.cartList.forEach( itemCart =>{
            html += 
            `
            <div class="info-invoice__detail-item">
                                    <img class="info-invoice__detail-img"
                                        src="${itemCart.productIMG}"
                                        alt="">
                                    <div class="info-invoice__detail-content">
                                        <div class="info-invoice__detail-name">
                                            ${itemCart.storeProduct.name}
                                        </div>
                                        <div class="info-invoice__detail-price-wrapper">
                                            <span class="info-invoice__detail-label">
                                                Đơn giá:
                                            </span>
                                            <span class="info-invoice__detail-price">
                                                ${money.formatCurrencytoVND(itemCart.product_price)}
                                            </span>
                                        </div>
                                        <div class="info-invoice__detail-quantity-wrapper">
                                            <span class="info-invoice__detail-label">
                                                Số lượng:
                                            </span>
                                            <span class="info-invoice__detail-quantity">
                                                ${itemCart.quantity}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="info-invoice__detail-content-right">
                                        <span class="info-invoice__detail-price-label">
                                            Tổng tiền:
                                        </span>
                                        <span class="info-invoice__detail-total-price">
                                            ${money.formatCurrencytoVND(itemCart.totalPrice)}
                                        </span>
                                    </div>
                                </div>
            `

        })
    })

    const invoiceContainer = $('.info-invoice__content')
    invoiceContainer.innerHTML = html


}

renderListInvoices()
