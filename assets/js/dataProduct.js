const productArr = [
    new Product(
        "Samsung Galaxy S23 Ultra 256GB",
        31990000.0,
        22190000.0,
        ['https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-s23-ultra.png'],
        "Samsung",
        ["8 GB","12 GB"],
        ["512 GB", "256 GB", "1 TB"],
        31

    ),
    new Product(
        "Nubia Neo 8GB 256GB",
        4990000.0,
        4690000.0,
        ['https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/n/u/nubia-neo-5g_2_1.png'],
        "Nubia",
        ["8 GB"],
        ["256 GB"],
        6

    ),
    new Product(
        "Samsung Galaxy S23 Ultra 256GB",
        31990000.0,
        22190000.0,
        ['https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png'],
        "Samsung",
        ["8 GB","12 GB"],
        ["512 GB", "256 GB", "1 TB"],
        3

    ),
    // Xiaomi
    new Product(
        "Xiaomi 13T 12GB 256GB",
        11990000.0,
        12990000.0,
        ['https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/x/i/xiaomi-13t_1_2.png'],
        "Xiaomi",
        ["12 GB"],
        [ "256 GB"],
        8

    ),
    new Product(
        "Xiaomi Redmi Note 12 8GB 128GB",
        4990000.0,
        5790000.0,
        ['https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/x/i/xiaomi-redmi-note-12-8gb-128gb_1__1_2.png'],
        "Xiaomi",
        [" 8 GB"],
        [ "128 GB"],
        14
    ),
    new Product(
        "Xiaomi Redmi Note 12 4GB 128GB",
        3990000.0,
        4990000.0,
        ['https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/x/i/xiaomi-redmi-note-12.png'],
        "Xiaomi",
        ["4 GB "],
        [ "128 GB"],
        20
    ),
    new Product(
        "Xiaomi 13T Pro 5G (12GB - 512GB)",
        15990000.0,
        16990000.0,
        ['https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/x/i/xiaomi-13-pro-thumb-xanh-la9.jpg'],
        "Xiaomi",
        ["12 GB "],
        [ "512 GB"],
        6
    ),
    new Product(
        "Xiaomi Redmi Note 12 Pro 5G",
        8490000.0,
        9490000.0,
        ['https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/g/t/gtt7766.jpg'],
        "Xiaomi",
        ["8 GB "],
        [ "256 GB"],
        11
    ),
    new Product(
        "Xiaomi 13 8GB 256GB",
        18090000.0,
        22990000.0,
        ['https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/p/m/pms_1670745783.80967984.png'],
        "Xiaomi",
        ["8 GB "],
        [ "256 GB"],
        21
    ),
    new Product(
        "Xiaomi Redmi 12C 4GB 64GB",
        2390000.0,
        3590000.0,
        ['https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/f/5/f5677.jpg'],
        "Xiaomi",
        ["4 GB "],
        [ "64 GB"],
        33
    ),
    new Product(
        "Xiaomi Redmi Note 12 Pro 4G 8GB 256GB",
        7190000.0,
        7990000.0,
        ['https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/r/e/redmi-note-12-pro-4g-1-den.jpg'],
        "Xiaomi",
        ["8 GB "],
        [ "256 GB"],
        10
    ),
    new Product(
        "Xiaomi Redmi Note 12S",
        5890000.0,
        6690000.0,
        ['https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/x/i/xiaomi-redmi-note-12s.jpg'],
        "Xiaomi",
        ["8 GB "],
        [ "256 GB"],
        12
    ),
    new Product(
        "Xiaomi 13 Lite",
        8990000.0,
        11490000.0,
        ['https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/1/3/13_liteee.jpg'],
        "Xiaomi",
        ["8 GB "],
        [ "256 GB"],
        12
    ),
    // Nokia
    new Product(
        "Nokia C21 Plus 2GB 32GB",
        1540000.0,
        2390000.0,
        ['https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/n/o/nokia-c21-plus-600x600_6.jpg'],
        "Nokia",
        ["2 GB "],
        [ "32 GB"],
        36
    ),
    new Product(
        "Nokia C32 4GB 128GB",
        2890000.0,
        3290000.0,
        ['https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/n/o/nokia-c32_3_.png'],
        "Nokia",
        ["4 GB "],
        [ "128 GB"],
        12
    ),
    new Product(
        "Nokia C21 Plus 2GB 64GB - Đã Kích Hoạt",
        1590000.0,
        2890000.0,
        ['https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/n/o/nokia-c21-plus-600x600_5.jpg'],
        "Nokia",
        ["2 GB "],
        [ "64 GB"],
        45
    ),
    new Product(
        "Nokia T21 4GB 128GB",
        5750000.0,
        5990000.0,
        ['https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/n/o/nokia-t21.png'],
        "Nokia",
        ["4 GB "],
        [ "128 GB"],
        4
    ),
    new Product(
        "Nokia C30 3GB 32GB - Cũ Trầy Xước",
        1690000.0,
        345000.0,
        ['https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/6/3/637649100605269420_nokia-c30-xanh-1_4_2.jpg'],
        "Nokia",
        ["3 GB "],
        [ "32 GB"],
        51
    )



]

