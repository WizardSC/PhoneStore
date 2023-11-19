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
}
class User{
    static userID = 0;
    constructor(username, password, email, phone, full_name, address, ngay_lap, is_admin){
        this.userID = ++User.userID;
        this.username = username;
        this.password = password;
        this.email = email;
        this.phone = phone;
        this.full_name = full_name;
        this.address = address;
        this.ngay_lap = Date.now();
        this.isAdmin = is_admin;
    }
    static loadUsers(listUser){
        localStorage.listUsers = JSON.stringify(listUser);
        if(localStorage.listUsers){
            return true;
        }
        return false;
    }
    static setLoginState(userid){
        if(userid == null || userid == undefined) {
            localStorage.loginID = 0;
        } else {
            if(Number.isInteger(userid)){
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
}
// Load data users lên localStorage
class cart{
    static getCartList(userID){
        const myUser = user.getUserID(userID);
        if(myUser){
            return myUser.cartList;
        }
        return [];
    }
}
class money {
    static formatCurrencytoVND(tien) {
        let nf = new Intl.NumberFormat('en-US');
        let formattedTien = nf.format(tien);
        return formattedTien.replace(/,/g, ".") + "₫";
    }
}

