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
    const c1 = Product(img[0], 'Cuppyccino', 'Caramelized Chilly Cuppyccino', 5.99, 'A tantalizing blend of caramel sweetness with a kick of chili heat, creating a unique and addictive flavor profile.');
    const c2 = Product(img[1], 'Cuppyccino', 'Amer-Doux Cuppyccino', 5.99, 'Smooth and mellow, with a subtle bitterness that complements its creamy texture, making it a soothing choice.');
    const c3 = Product(img[2], 'Cuppyccino', 'Warm Fantasy Cuppyccino', 5.49, 'Like a cozy daydream, this coffee envelops you in creamy warmth and hints of vanilla, perfect for a relaxing moment.');
    const c4 = Product(img[3], 'Cuppyccino', 'Chocoholic Delight Cuppyccino', 5.49, 'Indulge in rich cocoa notes fused seamlessly into velvety espresso, satisfying the deepest chocolate cravings.');
    const c5 = Product(img[4], 'Cuppyccino', 'Noble Elegance Cuppyccino', 5.49, 'A refined blend with a touch of hazelnut sophistication, offering a smooth and luxurious coffee experience.');
    const c6 = Product(img[5], 'Cuppyccino', 'Dark Desire Cuppyccino', 4.99, 'Bold and intense, this coffee is a passionate affair of deep, dark flavors that linger on the palate.');
    const c7 = Product(img[6], 'Cuppyccino', 'Bachelor\'s Cuppychino', 4.59, 'Uncomplicated yet robust, ideal for those who appreciate straightforward coffee with a strong character.');

    // Macchiee
    const m1 = Product(img[7], 'Macchiee', 'Graceful Touch Macchiee', 5.49, 'Delicately balanced with a subtle espresso base, adorned with a gentle frothy milk touch for a harmonious taste.');
    const m2 = Product(img[8], 'Macchiee', 'Cloudy Sun Macchiee', 4.99, 'Bright and uplifting, combining the zest of citrus with the smoothness of coffee for a refreshing twist.');
    const m3 = Product(img[9], 'Macchiee', 'Hazel Hug Macchiee', 4.99, 'Embrace the comforting warmth of hazelnut essence delicately infused into every sip, like a heartfelt hug.');
    const m4 = Product(img[10], 'Macchiee', 'Macchiee-ing Taste', 4.49, 'A bold statement of coffee excellence, marked by its intense flavor that resonates with every discerning palate.');

    // Expressie
    const e1 = Product(img[11], 'Expressie', 'Ame-Sœur Expressie', 5.49, 'An enchanting blend that intertwines flavors with grace and charm, capturing the essence of a soulful connection.');
    const e2 = Product(img[12], 'Expressie', 'Serene Warmth Expressie', 5.49, 'Find peace in each sip of this calming coffee, soothing the senses with its gentle warmth and smooth texture.');
    const e3 = Product(img[13], 'Expressie', 'Happy Hour Expressie', 4.99, 'A lively and vibrant coffee that brings joy with its bright flavors and invigorating aroma, perfect for any time of day.');
    const e4 = Product(img[14], 'Expressie', 'Zenful Sip Expressie', 4.49, 'Achieve balance and tranquility with this harmonious blend, offering a serene coffee experience that rejuvenates the spirit.');
    const e5 = Product(img[15], 'Expressie', 'Lover\'s Touch Expressie', 4.49, 'Passionate and intense, this coffee ignites the senses with its deep, captivating flavors and intimate allure.');
    const e6 = Product(img[16], 'Expressie', 'Breaking Point Expressie', 3.99, 'Pushing the boundaries of coffee enjoyment, this bold brew challenges the palate with its powerful and exhilarating taste.');

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