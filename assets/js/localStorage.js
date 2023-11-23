
class user {
    static loadUsers(listUser){
        localStorage.listUsers = JSON.stringify(listUser);
        if(localStorage.listUsers){
            return true;
        }
        return false;
    }
}
//Load data lên localStorage
if (Product.getProducts() === null) {
    Product.loadProducts(productArr);
}
if (User.getUsers() === null) {
    User.loadUsers(userArr);
}
if(User.checkLoginId() === null){
    User.setLoginState()
    User.setIsAdmin()
}

if(Invoice.getInvoices() === null){
    Invoice.loadInvoices([])
    //truyền vào 1 mảng rỗng
}

function redirectToOrderPage() {
    location.href = './checkout.html'
}

function redirectToAdminPage() {
    location.href = './admin.html'
}

