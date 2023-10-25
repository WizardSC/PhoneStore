class Product {
    static lastProductId = 0;
    constructor(name, price_old, price_current, img, brand, ram, rom) {
        this.productId = ++Product.lastProductId;
        this.name = name;
        this.price_old = price_old;
        this.price_current = price_current;
        this.img = img;
        this.brand = brand.toLowerCase();
        this.ram = ram
        this.rom = rom
    }
}