
console.log(productArr)
// Sắp xếp giảm dần theo sale
productArr.sort((a,b)=>b.sale-a.sale)
for( let i=0;i<productArr.length;i++){
    console.log(productArr[i])
}
// Lấy ra 8 phần tử đầu
const top8Products = productArr.slice(0, 8);
console.log(top8Products)

const container=document.querySelector('.content__product-container')
console.log(container)

function renderProduct(top8Products){
    const htmls=top8Products.map(function(product){
        const money1 = money.formatCurrencytoVND(product.price_current)
        const money2 = money.formatCurrencytoVND(product.price_old)

        return `
        <div class="pro">
                            <img src="${product.img}"
                                alt="">
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
        `
    })
    container.innerHTML=htmls.join('')
  

}
renderProduct(top8Products)

