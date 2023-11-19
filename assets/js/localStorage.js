class data {
    //load sản phẩm lên localstorage
    static loadProducts(listData){ //nhận tham số là 1 ds sản phẩm
        localStorage.listProducts = JSON.stringify(listData);
        if(localStorage.listProducts){
            return true;
        }
        return false;
    }
    //Lấy sản phẩm từ localStorage
    static getProducts(){
        if(localStorage.listProducts){
            return JSON.parse(localStorage.listProducts);
        }
        return null;
    }
}

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
if (data.getProducts() === null) {
    data.loadProducts(productArr);
}
User.loadUsers(productArr);

