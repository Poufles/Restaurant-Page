const productData = function() {
    const productArr = [];
    
    const addProduct = (product) => {
        const productNumber = productArr.length;
        const rating = Math.floor(Math.random() * 5);
        
        const newProduct = {
            productNumber,
            img : product.productImage,
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

    const view = () => console.log(productArr);

    return {
        addProduct,
        refresh,
        deleteProduct,
        view,
    };
}();

function Product(image, name, price, desc) {
    const productImage = image;
    const productName = name;
    const productPrice = price;
    const productDesc = desc;

    const getProduct = () => {
        return {
            productImage,
            productName,
            productPrice,
            productDesc,
        };
    };

    return {
        getProduct,
    }
};