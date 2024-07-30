const productData = function() {
    const productArr = [];
    
    const addProduct = (product) => {
        const productNumber = productArr.length;
        const rating = Math.round((Math.random() * (5.001 - 3) + 3) * 10) / 10;

        const newProduct = {
            productNumber,
            img : product.productImage,
            category: product.productCategory,
            name : product.productName,
            price : product.productPrice,
            desc : product.productDesc,
            rating,
        };

        productArr.push(newProduct);
    };
    
    function refresh () {
        const currentLength = productArr.length;
        
        for (let productNumber = 0; productNumber < currentLength; ++productNumber) {
            productArr[productNumber].productNumber = productNumber;
        };
    };
    
    const deleteProduct = (product) => {
        const currentLength = productArr.length;

        for (let iter = 0; iter < currentLength; ++iter) {
            if (productArr[iter].name === product.productName) {
                productArr.splice(iter, 1);
                refresh();
                return;
            }
        }
    };

    const getProduct = () => productArr;

    return {
        addProduct,
        refresh,
        deleteProduct,
        getProduct,
    };
}();

function Product(image, category, name, price, desc) {
    const productImage = image;
    const productCategory = category;
    const productName = name;
    const productPrice = price;
    const productDesc = desc;

    const getProduct = () => {
        return {
            productImage,
            productCategory,
            productName,
            productPrice,
            productDesc,
        };
    };

    return {
        getProduct,
    }
};

export { productData, Product };