// import '../styles/main.scss';
// Importing components
import loading from './comp_loading.js';
import navbar from './comp_navbar.js';

// Importing pages
import contentpage from './contentPage.js';
import homepage from './page_homepage.js';

// Importing Products
import { productData as pd, Product } from './products.js';

// Initial load
window.addEventListener('load', () => {
    loading.createComponent();
    loading.playAnimation();
    
    setTimeout(() => {
        homepage.createPage();
        navbar.createComponent();
        contentpage.prependContentPage(navbar.getComponent())
    }, 2000);

    /*
        Initializing coffee as there is no database.
        This simply acts as the "database" but array
        and objects are utilized.
    */
   
    // Cuppyccino
    const c1 = Product('/src/assets/pexels-oznur-taskan-172633297-12896257.jpg', 'Cuppyccino', 'Caramelized Chilly Cuppyccino', 5.99, 'desc');
    const c2 = Product('/src/assets/pexels-oznur-taskan-172633297-12896257.jpg', 'Cuppyccino', 'Amer-Doux Cuppyccino', 5.99, 'desc');
    const c3 = Product('/src/assets/pexels-oznur-taskan-172633297-12896257.jpg', 'Cuppyccino', 'Warm Fantasy Cuppyccino', 5.49, 'desc');
    const c4 = Product('/src/assets/pexels-oznur-taskan-172633297-12896257.jpg', 'Cuppyccino', 'Chocoholic Delight Cuppyccino', 5.49, 'desc');
    const c5 = Product('/src/assets/pexels-oznur-taskan-172633297-12896257.jpg', 'Cuppyccino', 'Noble Elegance Cuppyccino', 5.49, 'desc');
    const c6 = Product('/src/assets/pexels-oznur-taskan-172633297-12896257.jpg', 'Cuppyccino', 'Dark Desire Cuppyccino', 4.99, 'desc');
    const c7 = Product('/src/assets/pexels-oznur-taskan-172633297-12896257.jpg', 'Cuppyccino', 'Bachelor\'s Cuppychino');

    // Macchiee
    const m1 = Product('/src/assets/nathan-dumlao-tA90pRfL2gM-unsplash.jpg', 'Macchiee', 'Graceful Touch Macchiee', 5.49, 'desc');
    const m2 = Product('/src/assets/nathan-dumlao-tA90pRfL2gM-unsplash.jpg', 'Macchiee', 'Cloudy Sun Macchiee', 4.99, 'desc');
    const m3 = Product('/src/assets/nathan-dumlao-tA90pRfL2gM-unsplash.jpg', 'Macchiee', 'Hazel Hug Macchiee', 4.99, 'desc');
    const m4 = Product('/src/assets/nathan-dumlao-tA90pRfL2gM-unsplash.jpg', 'Macchiee', 'Macchiee-ing Taste', 4.49, 'desc');

    // Expressie
    const e1 = Product('src/assets/pexels-chevanon-312418.jpg', 'Expressie', 'Ame-Sœur Expressie', 5.49, 'desc');
    const e2 = Product('src/assets/pexels-chevanon-312418.jpg', 'Expressie', 'Serene Warmth Expressie', 5.49, 'desc');
    const e3 = Product('src/assets/pexels-chevanon-312418.jpg', 'Expressie', 'Happy Hour Expressie', 4.99, 'desc');
    const e4 = Product('src/assets/pexels-chevanon-312418.jpg', 'Expressie', 'Zenful Sip Expressie', 4.49, 'desc');
    const e5 = Product('src/assets/pexels-chevanon-312418.jpg', 'Expressie', 'Lover\'s Touch Expressie', 4.49, 'desc');
    const e6 = Product('src/assets/pexels-chevanon-312418.jpg', 'Expressie', 'Breaking Point Expressie', 3.99, 'desc');

    // Creating an array to store each variables
    const coffeeArr = [];
    coffeeArr.push(c1);
    coffeeArr.push(c2);
    coffeeArr.push(c3);
    coffeeArr.push(c4);
    coffeeArr.push(c5);
    coffeeArr.push(c6);
    coffeeArr.push(c7);
    coffeeArr.push(m1);
    coffeeArr.push(m2);
    coffeeArr.push(m3);
    coffeeArr.push(m4);
    coffeeArr.push(e1);
    coffeeArr.push(e2);
    coffeeArr.push(e3);
    coffeeArr.push(e4);
    coffeeArr.push(e5);
    coffeeArr.push(e6);

    // Add product to the array "database"
    for (let iter = 0; iter < coffeeArr.length; ++iter) {
        pd.addProduct(coffeeArr[iter].getProduct());
    }
});