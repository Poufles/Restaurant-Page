import images from './images.js';
import '../styles/main.scss';
// Importing components
import loading from './comp_loading.js';
import navbar from './comp_navbar.js';

// Importing pages
import contentpage from './contentPage.js';
import homepage from './page_homepage.js';

// Importing Products
import { productData as pd, Product } from './products.js';
import aboutpage from './page_aboutpage.js';
import cuppiespage from './page_cuppiespage.js';

// Initial load
window.addEventListener('load', () => {
    loading.createComponent();
    loading.playAnimation();

    setTimeout(() => {
        homepage.createPage();
        navbar.createComponent();
        contentpage.prependContentPage(navbar.getNavbar())
        contentpage.prependContentPage(navbar.getBackdrop())
    }, 2000);

    /*
        Initializing coffee as there is no database.
        This simply acts as the "database" but array
        and objects are utilized.
    */

    // Get images
    const img = images.getImages();

    // Cuppyccino
    const c1 = Product(img[0], 'Cuppyccino', 'Caramelized Chilly Cuppyccino', 5.99, 'desc');
    const c2 = Product(img[1], 'Cuppyccino', 'Amer-Doux Cuppyccino', 5.99, 'desc');
    const c3 = Product(img[2], 'Cuppyccino', 'Warm Fantasy Cuppyccino', 5.49, 'desc');
    const c4 = Product(img[3], 'Cuppyccino', 'Chocoholic Delight Cuppyccino', 5.49, 'desc');
    const c5 = Product(img[4], 'Cuppyccino', 'Noble Elegance Cuppyccino', 5.49, 'desc');
    const c6 = Product(img[5], 'Cuppyccino', 'Dark Desire Cuppyccino', 4.99, 'desc');
    const c7 = Product(img[6], 'Cuppyccino', 'Bachelor\'s Cuppychino', 4.59, 'desc');

    // Macchiee
    const m1 = Product(img[7], 'Macchiee', 'Graceful Touch Macchiee', 5.49, 'desc');
    const m2 = Product(img[8], 'Macchiee', 'Cloudy Sun Macchiee', 4.99, 'desc');
    const m3 = Product(img[9], 'Macchiee', 'Hazel Hug Macchiee', 4.99, 'desc');
    const m4 = Product(img[10], 'Macchiee', 'Macchiee-ing Taste', 4.49, 'desc');

    // Expressie
    const e1 = Product(img[11], 'Expressie', 'Ame-Sœur Expressie', 5.49, 'desc');
    const e2 = Product(img[12], 'Expressie', 'Serene Warmth Expressie', 5.49, 'desc');
    const e3 = Product(img[13], 'Expressie', 'Happy Hour Expressie', 4.99, 'desc');
    const e4 = Product(img[14], 'Expressie', 'Zenful Sip Expressie', 4.49, 'desc');
    const e5 = Product(img[15], 'Expressie', 'Lover\'s Touch Expressie', 4.49, 'desc');
    const e6 = Product(img[16], 'Expressie', 'Breaking Point Expressie', 3.99, 'desc');

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

// Check if user has reached the bottom of the screen
window.addEventListener('scroll', () => {
    const d = document.documentElement;
    const offset = d.scrollTop + window.innerHeight;
    const height = d.offsetHeight * 0.95;
    const nav = navbar.getNavbar();

    if (cuppiespage.getComponent() != undefined) {
        if (offset >= height) {
            nav.classList.add('nav-hide-animation');
        } else {
            nav.classList.remove('nav-hide-animation');
        };
    } else {
        nav.classList.remove('nav-hide-animation');
    }
});