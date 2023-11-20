class Product {
    static lastProductID = 0;
    constructor(name, price_old, price_current, img, brand, ram, rom, sale) {
        this.productID = ++Product.lastProductID;
        this.name = name;
        this.price_old = price_old;
        this.price_current = price_current;
        this.img = img;
        this.brand = brand.toLowerCase();
        this.ram = ram
        this.rom = rom
        this.sale = sale
    }
    static getProducts() {
        if (localStorage.listProducts) {
            return JSON.parse(localStorage.listProducts);
        }
        return null;
    }
    static getProductID(myProductID) {
        const list = Product.getProducts();
        if (!list || list.length === 0) return null;
        let product = null;
        list.forEach(item => {
            if (item.productID === myProductID) {
                product = item;
            }
        })
        return product;
    }
}
class ProductInCart {
    static totalCart = 0;
    constructor(productID, product_price, quantity, productIMG) {
        this.cartID = ++ProductInCart.totalCart;
        this.productID = productID;
        this.product_price = product_price;
        this.quantity = quantity;
        this.productIMG = productIMG;
        this.totalPrice = this.quantity * this.product_price;
        this.storeProduct = Product.getProductID(productID);
    }
}
class User {
    static userID = 0;
    cartList = [];
    constructor(username, password, email, phone, full_name, address, ngay_lap, is_admin, is_active) {
        this.userID = ++User.userID;
        this.username = username;
        this.password = password;
        this.email = email;
        this.phone = phone;
        this.full_name = full_name;
        this.address = address;
        this.ngay_lap = Date.now();
        this.isAdmin = is_admin;
        this.isActive = is_active;
    }
    //load danh sách user lên LocalStorage
    static loadUsers(listUser) {
        localStorage.listUsers = JSON.stringify(listUser);
        if (localStorage.listUsers) {
            return true;
        }
        return false;
    }
    // Lấy danh sách user từ LocalStorage trả về mảng
    static getUsers() {
        if (localStorage.listUsers) {
            return JSON.parse(localStorage.listUsers);
        }
        return null;
    }
    static getUserID(userID) {
        const listUsers = User.getUsers();
        if (!listUsers || listUsers.length === 0) return null;
        var accountz = null;
        listUsers.forEach(account => {
            if (account.userID === userID) {
                accountz = account;
            }
        })
        return accountz;
    }
    static setLoginState(userid) {
        if (userid == null || userid == undefined) {
            localStorage.loginID = 0;
        } else {
            if (Number.isInteger(userid)) {
                localStorage.loginID = userid;
            }
        }
    }
    static checkLoginId() {
        if (localStorage.loginID) {
            const a = parseInt(localStorage.loginID);
            if (a > 0) return a;
        }
        return null;
    }
    // Update giỏ hàng của user
    static updateUserCart(userID, newCartList) {
        const list = User.getUsers();
        if (!list || list.length == 0) return false;
        var isSet = false;
        newCartList = cart.getNoDuplicatesProducts(newCartList);
        list.forEach((item) => {
            if (item.userID == userID) {
                item.cartList = newCartList;
                User.loadUsers(list);
                isSet = true;
            }
        })
        return isSet;
    }
}
// Load data users lên localStorage
class cart {
    static getCartList(userID) {
        const myUser = User.getUserID(userID);
        if (myUser) {
            return myUser.cartList;
        }
        return [];
    }
    //Lấy ID cart muốn thực hiện các hành vi
    static getCartID(userID, cartID){
        const list = cart.getCartList(userID);
        if(!list || list.length === 0) return null;
        let myCart = null;
        list.forEach(item =>{
            if(item.cartID === cartID)
                myCart = item
        })
        return myCart
    }
    // Đảm bảo giỏ hàng không có 2 sản phẩm giống nhau
    static getNoDuplicatesProducts(list) {
        if (!list || list.length === 0)
            return [];
        var result = [];
        var hasProductId = [];
        list.forEach((myCart, i) => {
            if (hasProductId.indexOf(i) === -1) {
                var soluong = myCart.quantity;
                hasProductId.push(i);
                for (let j = i + 1; j < list.length; j++)
                    if (cart.Equals(myCart, list[j])) {
                        soluong += list[j].quantity;
                        hasProductId.push(j);
                    }
                result.push(new ProductInCart(myCart.productID, myCart.product_price, soluong, myCart.productIMG));
            }

        })
        return result;
    }
    static addItemCart(userID, productID, quantity) {
        const myList = cart.getCartList(userID)
        const myProduct = Product.getProductID(productID)

        myList.push(new ProductInCart(productID, myProduct.price_current, quantity, myProduct.img[0]));
        if (User.updateUserCart(userID, myList)) {
            return true;
        }
        return false;
    }
    static Equals(cartItemA, cartItemB) {
        if (!cartItemA || !cartItemB) return false;
        if (cartItemA.productID !== cartItemB.productID) return false;
        return true;
    }
    // Tăng/Giảm số lượng của 1 item trong cart
    static updateCartItemQuantity(userID, cartID, quantity){
        const myList = cart.getCartList(userID)
        if(!myList || myList.length === 0) return null;
        myList.forEach(item => {
            if(item.cartID === cartID){
                item.quantity = item.quantity + quantity;
                item.totalPrice = item.quantity * item.product_price
                User.updateUserCart(userID, myList)
            }
        })
    }
    // Tỉnh tổng tiền các sản phẩm trong giỏ hàng
    static getTotalMoney(userID){
        const myList = cart.getCartList(userID)
        if(!myList || myList.length === 0) return 0;
        let sum = 0;
        sum = myList.reduce((total, cartItem) => {
           return total + cartItem.totalPrice
        }, 0)
        return sum;
    }
}
class money {
    static formatCurrencytoVND(tien) {
        let nf = new Intl.NumberFormat('en-US');
        let formattedTien = nf.format(tien);
        return formattedTien.replace(/,/g, ".") + "₫";
    }
}
