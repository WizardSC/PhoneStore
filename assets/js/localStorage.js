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

//Load data lên localStorage
if (data.getProducts() === null) {
    data.loadProducts(productArr);
}

