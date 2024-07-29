import { productData as pd, Product } from "../../src/scripts/products.js";
import createCoffeeCard from "../../src/scripts/comp_product_card_and_modal.js";

const cards = document.querySelectorAll('.card');
const modal = document.querySelector('dialog');
const exit = document.querySelector('.exit')

cards.forEach(card => {
    card.addEventListener('mouseup', () => {
        modal.showModal();
    });
});

exit.addEventListener('mouseup', () => {
    modal.classList.add('exit_modal');
    setTimeout(() => {
        modal.close();
        modal.classList.remove('exit_modal');
    }, 300);
});

// Product Section
const productSection = document.querySelector('.product-section');

// Product
const articleCategory = document.createElement('article');
articleCategory.classList.add('category-container');
articleCategory.dataset.category = 'Cuppyccino';

productSection.appendChild(articleCategory);

// Categories
const c1 = Product('src/assets/pexels-eyad-tariq-2217318-3879495.jpg', 'Cuppyccino', 'A Cuppiccino Coffe', 5.99, 'A great descript sample cause I don\'t wanna think.');
const c2 = Product('src/assets/pexels-chevanon-312418.jpg', 'Macchiee', 'A Macchiee Coffe', 5.99, 'A great descript sample cause I don\'t wanna think.');
const c3 = Product('src/assets/pexels-mike-jones-9050557.jpg', 'Expressie', 'An Expressie Coffe', 5.99, 'A great descript sample cause I don\'t wanna think.');

pd.addProduct(c1.getProduct());
pd.addProduct(c2.getProduct());
pd.addProduct(c3.getProduct());

const productArr = pd.getProduct();

for (let iter = 0; iter < productArr.length; ++iter) {
    const category = 'Cuppyccino';
    const product = productArr[iter];
    if (category === product.category) {
        const coffeeCard = createCoffeeCard(product.productNumber, product.img, product.name, product.desc, product.price, product.rating);

        articleCategory.appendChild(coffeeCard);
    }
}

const cuppyccinoButton = document.querySelector('.product-section .header-text .category .item[data-category="Cuppyccino"]');
const macchieeButton = document.querySelector('.product-section .header-text .category .item[data-category="Macchiee"]');
const expressieButton = document.querySelector('.product-section .header-text .category .item[data-category="Expressie"]');

cuppyccinoButton.addEventListener('mouseup', () => {
    if (cuppyccinoButton.classList.contains('active')) return;

    const currentActive =
        macchieeButton.querySelector('h1').classList.contains('active') ? macchieeButton : expressieButton

    currentActive.querySelector('h1').classList.remove('active');
    cuppyccinoButton.querySelector('h1').classList.add('active');

    const articleCategory = productSection.querySelector('article.category-container');

    productSection.removeChild(articleCategory);

    const newArticleCategory = document.createElement('article');
    newArticleCategory.classList.add('category-container');
    newArticleCategory.dataset.category = 'Cuppyccino';

    productSection.appendChild(newArticleCategory);
    for (let iter = 0; iter < productArr.length; ++iter) {
        const category = newArticleCategory.dataset.category;
        const product = productArr[iter];
        if (category === product.category) {
            const coffeeCard = createCoffeeCard(product.productNumber, product.img, product.name, product.desc, product.price, product.rating);
    
            newArticleCategory.appendChild(coffeeCard);
        };
    };
});

macchieeButton.addEventListener('mouseup', () => {
    if (macchieeButton.classList.contains('active')) return;

    const currentActive =
        cuppyccinoButton.querySelector('h1').classList.contains('active') ? cuppyccinoButton : expressieButton

    currentActive.querySelector('h1').classList.remove('active');
    macchieeButton.querySelector('h1').classList.add('active');

    const articleCategory = productSection.querySelector('article.category-container');

    productSection.removeChild(articleCategory);

    const newArticleCategory = document.createElement('article');
    newArticleCategory.classList.add('category-container');
    newArticleCategory.dataset.category = 'Macchiee';

    productSection.appendChild(newArticleCategory);
    for (let iter = 0; iter < productArr.length; ++iter) {
        const category = newArticleCategory.dataset.category;
        const product = productArr[iter];
        if (category === product.category) {
            const coffeeCard = createCoffeeCard(product.productNumber, product.img, product.name, product.desc, product.price, product.rating);
    
            newArticleCategory.appendChild(coffeeCard);
        };
    };
});

expressieButton.addEventListener('mouseup', () => {
    if (expressieButton.classList.contains('active')) return;

    const currentActive =
        macchieeButton.querySelector('h1').classList.contains('active') ? macchieeButton : cuppyccinoButton

    currentActive.querySelector('h1').classList.remove('active');
    expressieButton.querySelector('h1').classList.add('active');

    const articleCategory = productSection.querySelector('article.category-container');

    productSection.removeChild(articleCategory);

    const newArticleCategory = document.createElement('article');
    newArticleCategory.classList.add('category-container');
    newArticleCategory.dataset.category = 'Expressie';

    productSection.appendChild(newArticleCategory);
    for (let iter = 0; iter < productArr.length; ++iter) {
        const category = newArticleCategory.dataset.category;
        const product = productArr[iter];
        if (category === product.category) {
            const coffeeCard = createCoffeeCard(product.productNumber, product.img, product.name, product.desc, product.price, product.rating);
    
            newArticleCategory.appendChild(coffeeCard);
        };
    };
});
