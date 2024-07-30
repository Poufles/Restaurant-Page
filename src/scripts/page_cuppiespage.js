import contentpage from './contentPage.js';
import images from './images.js';
import cloudBubble from './comp_cloudFeaturedBubble.js';
import { createModal } from './comp_product_card_and_modal.js';
import { productData as pd } from './products.js';
import createCoffeeCard from './comp_product_card_and_modal.js';
import createFooter from './comp_footer.js';

const cuppiespage = function () {
    let container;

    const createPage = () => {
        container = document.createElement('div');
        const hero = createHero();
        const productSection = createProductSection();
        const footer = createFooter();

        // Append children
        container.appendChild(hero.textureOverlay);
        container.appendChild(hero.heroContainer);
        container.appendChild(productSection);
        container.appendChild(footer);

        // Add attribute(s) and class(es) to container
        container.classList.add('page');
        container.classList.add('cuppiespage');
        contentpage.appendContentPage(container);
    };

    const removePage = () => {
        contentpage.removeContentPage(container);
        container = undefined;
    };

    const getComponent = () => container;

    return {
        createPage,
        removePage,
        getComponent
    }
}();

function createHero() {
    // Create each tag
    const textureOverlay = document.createElement('texture-overlay');
    const heroContainer = document.createElement('div');
    const topLayer = document.createElement('div');
    const topContainer = document.createElement('div');
    const logoButton = document.createElement('button');
    const featuredContainer = document.createElement('div');
    const featuredTitle = document.createElement('p');
    const featuredButtonContainer = document.createElement('div');
    const bubbleListContainer = document.createElement('div');
    const bubbleList = document.createElement('ul');
    const bubbleItem1 = document.createElement('li');
    const bubbleItem2 = document.createElement('li');
    const bubbleItem3 = document.createElement('li');

    // Add text to each bubble item
    bubbleItem1.textContent = 'Authentic';
    bubbleItem2.textContent = 'Brewed';
    bubbleItem3.textContent = 'Rich';

    // Add attribute(s) and class(es) to each item
    bubbleItem1.classList.add('item');
    bubbleItem2.classList.add('item');
    bubbleItem3.classList.add('item');

    // Append each item to its list parent
    bubbleList.appendChild(bubbleItem1);
    bubbleList.appendChild(bubbleItem2);
    bubbleList.appendChild(bubbleItem3);

    // Add attribute(s) and class(es) to bubble list
    bubbleList.classList.add('featured-list');

    // Append bubble list to its container
    bubbleListContainer.appendChild(bubbleList);

    // Add attribute(s) and class(es) to bubble container
    bubbleListContainer.classList.add('wrapper-bubble-list');

    // Get products
    const products = pd.getProduct();
    // Get the first Cuppyccinno as the initialized hero product
    const c1 = products[0];
    // Get first products of each category as featured
    const m1 = products[7];
    const e1 = products[11];

    // Define bubble text
    const bubbleText = cloudBubble();
    bubbleText.bubbleText(c1.name, c1.price, c1.desc);

    // Create img element with pictures
    const featuredImages = [];
    // Get images from the products array
    const img1 = images.createImage(c1.img);
    const img2 = images.createImage(m1.img);
    const img3 = images.createImage(e1.img);
    // Put images to featured images array
    featuredImages.push(img1);
    featuredImages.push(img2);
    featuredImages.push(img3);

    // Create buttons for each featured item
    for (let iter = 0; iter < 3; ++iter) {
        const button = document.createElement('button');
        const image = featuredImages[iter];

        // Set attribute(s) and class(es) to image
        image.setAttribute('style', `featured-img img-${iter + 1}`);
        image.classList.add('featured');

        // Append image to the button
        button.appendChild(image.cloneNode());

        // Add attribute(s) and class(es) to button
        button.dataset.featuredNo = iter + 1;
        // Create an initialized active button
        if (iter === 0) {
            button.classList.add('active');
        };
        button.classList.add('bubble-item');

        // Append button to its featured bubble container
        featuredButtonContainer.appendChild(button);
    };

    // Add attribute(s) and class(es) to the featured bubble container
    featuredButtonContainer.classList.add('featured-bubble');

    // Add text for featured title
    featuredTitle.textContent = 'Featured Cuppies';

    // Add attribute(s) and class(es) to featured title
    featuredTitle.classList.add('featured-title');

    // Append featured items to its container
    featuredContainer.appendChild(featuredTitle);
    featuredContainer.appendChild(featuredButtonContainer);

    // Add attribute(s) and class(es) to featured container
    featuredContainer.classList.add('featured-item')

    // Add text to logo button
    logoButton.textContent = 'Cuppy';

    // Adding attribute(s) and class(es) to logo button
    logoButton.classList.add('logo');
    logoButton.classList.add('brand-name');

    // Append top components to top container
    topContainer.appendChild(logoButton);
    topContainer.appendChild(featuredContainer);
    topContainer.appendChild(bubbleText.getComponent());
    topContainer.appendChild(bubbleListContainer);

    // Add attribute(s) and class(es) to top container
    topContainer.classList.add('top-container');

    // Append top container to top layer
    topLayer.appendChild(topContainer);

    // Add attribute(s) and class(es) to top layer
    topLayer.classList.add('top-layer');

    // Create featured images
    for (let iter = 0; iter < 3; ++iter) {
        const image = featuredImages[iter];

        // Set attribute(s) and class(es) to image
        image.setAttribute('style', `featured-img img-${iter + 1}`);
        image.dataset.featuredNo = iter + 1;
        image.classList.add('featured-banner');

        if (image.dataset.featuredNo !== '1') {
            image.classList.add('opacity-none');
        };

        // Append image to its hero container
        heroContainer.appendChild(image.cloneNode());
    };

    // Append top layer to hero container
    heroContainer.appendChild(topLayer);

    // Add attribute(s) and class(es) to hero container
    heroContainer.classList.add('hero')

    // Add attribute(s) and class(es) to texture overlay
    textureOverlay.classList.add('texture-overlay');

    // Add event listeners to the featured items
    const featuredButtons = heroContainer.querySelectorAll('.top-layer .featured-bubble .bubble-item');
    featuredButtons.forEach(button => {
        featuredBubbleListener(button, bubbleText);
    });

    // Add event listener to order button
    const orderButton = bubbleText.getComponent().querySelector('.bubble-action');
    orderButton.addEventListener('mouseup', () => {
        orderFeatured();
    });

    return {
        textureOverlay,
        heroContainer,
    }
};

function createProductSection() {
    const productSection = document.createElement('section');
    const headerContainer = document.createElement('header');
    const detailContainer = document.createElement('div');
    const detailTitle = document.createElement('h1');
    const detailDesc = document.createElement('p');
    const categoryContainer = document.createElement('div');
    const categoryButtonMacchiee = document.createElement('button');
    const categoryButtonMacchieeText = document.createElement('h1');
    const categoryButtonCuppy = document.createElement('button');
    const categoryButtonCuppyText = document.createElement('h1');
    const categoryButtonExpress = document.createElement('button');
    const categoryButtonExpressText = document.createElement('h1');

    // Add text to each button
    categoryButtonExpressText.textContent = 'Expressie';
    categoryButtonMacchieeText.textContent = 'Macchiee';
    categoryButtonCuppyText.textContent = 'Cuppyccino';

    // Initialize button text of Cuppyccino as active
    categoryButtonCuppyText.classList.add('active');

    // Append each text button to its button
    categoryButtonExpress.appendChild(categoryButtonExpressText);
    categoryButtonMacchiee.appendChild(categoryButtonMacchieeText);
    categoryButtonCuppy.appendChild(categoryButtonCuppyText);

    // Add attribute(s) and class(es) to each button
    categoryButtonExpress.dataset.category = 'Expressie';
    categoryButtonExpress.classList.add('item');
    categoryButtonMacchiee.dataset.category = 'Macchiee';
    categoryButtonMacchiee.classList.add('item');
    categoryButtonCuppy.dataset.category = 'Cuppyccino';
    categoryButtonCuppy.classList.add('item');

    // Append each button to its container
    categoryContainer.appendChild(categoryButtonMacchiee);
    categoryContainer.appendChild(categoryButtonCuppy);
    categoryContainer.appendChild(categoryButtonExpress);

    // Add attribute(s) and class(es) to category container
    categoryContainer.classList.add('category');

    // Add text to detail desc
    detailDesc.textContent =
        'Savor Every Sip with Cuppy\'s exceptional coffee selection. From rich roasts to smooth blends, each cup promises a perfect start. Explore our curated collection and discover the essence of true coffee enjoyment, crafted for every coffee lover\'s delight.';

    // Add attribute(s) and class(es) to detail desc
    detailDesc.classList.add('desc');

    // Add text to detail title
    detailTitle.textContent = 'Commence Your Day !';

    // Add attribute(s) and class(es) to detail desc
    detailTitle.classList.add('title');

    // Add details to the detail container
    detailContainer.appendChild(detailTitle);
    detailContainer.appendChild(detailDesc);

    // Add attribute(s) and class(es) to the detail container
    detailContainer.classList.add('detail')

    // Append both containers to the header container
    headerContainer.appendChild(detailContainer);
    headerContainer.appendChild(categoryContainer);

    // Add attribute(s) and class(es) to the header container
    headerContainer.classList.add('header-text');

    // Initialize category article element to Cuppyccino
    const articleCategory = initializeArticleCategory('Cuppyccino');

    // Add header container and article category to the product section
    productSection.appendChild(headerContainer);
    productSection.appendChild(articleCategory);

    // Add attribute(s) and class(es) to product section
    productSection.classList.add('product-section');

    // Add event listeners to the category buttons
    categoryButtonListener(categoryButtonMacchiee, categoryButtonCuppy, categoryButtonExpress);

    return productSection;
};

function orderFeatured() {
    const featuredElements = document.querySelectorAll('.page .hero .featured-banner');
    const products = pd.getProduct();
    let selectedProduct;

    featuredElements.forEach(element => {
        // Validate which featured item is currently shown
        if (!element.classList.contains('opacity-none')) {
            for (let iter = 0; iter < products.length; ++iter) {
                // Compare images to get the right shown featured item
                if (products[iter].img === element.src) {
                    selectedProduct = products[iter];
                    break;
                };
            };
        };
    });

    // Create modal
    const modal = createModal(selectedProduct.img, selectedProduct.name, selectedProduct.desc);
    contentpage.appendContentPage(modal);
    modal.showModal();
};

// Event listeners for changing featured banners
function featuredBubbleListener(buttonEl, featuredBubble) {
    buttonEl.addEventListener('mouseup', () => {
        const page = document.querySelector('.cuppiespage');
        const featuredImg = page.querySelectorAll('.hero .featured-banner');
        const buttons = page.querySelectorAll('.top-layer .bubble-item');

        // Get dataset of button element
        const featuredNo = buttonEl.dataset.featuredNo;
        // Validate the proper clicked button
        buttons.forEach(button => {
            if (button.dataset.featuredNo !== featuredNo) {
                button.classList.remove('active');
            };

            buttonEl.classList.add('active');
        });

        // Depending on the button, validate the proper
        // image to be shown
        featuredImg.forEach(img => {
            if (img.dataset.featuredNo !== featuredNo) {
                img.classList.add('opacity-none');
            } else {
                img.classList.remove('opacity-none');
            };
        });

        // Get products
        const products = pd.getProduct();
        // "Featured" are as follows:
        // Cuppyccino (First in array)
        const c1 = products[0];
        // Macchiee (7th in array)
        const m1 = products[7];
        // Expressie (11th in array)
        const e1 = products[11];

        // Depending on the button, change the content
        // of the featured bubble/cloud
        if (featuredNo == 1) {
            featuredBubble.bubbleText(c1.name, c1.price, c1.desc);
        } else if (featuredNo == 2) {
            featuredBubble.bubbleText(m1.name, m1.price, m1.desc);
        } else {
            featuredBubble.bubbleText(e1.name, e1.price, e1.desc);
        };

        // Add event listener to order button
        const orderButton = featuredBubble.getComponent().querySelector('.bubble-action');
        orderButton.addEventListener('mouseup', () => {
            orderFeatured();
        });
    });
};

// Initialize article category function
function initializeArticleCategory(category) {
    const articleCategory = document.createElement('article');

    // Initialize card items to Cuppyccino category
    // Get product data
    const data = pd.getProduct();
    const length = data.length;

    // Iterate over the "database" array
    for (let iter = 0; iter < length; ++iter) {
        const item = data[iter];
        // Check if the category of each item
        // is "Cuppyccino"
        if (item.category === category) {
            // Create a card
            const coffeeCard = createCoffeeCard(item.productNumber, item.img, item.name, item.desc, item.price, item.rating);

            // Add attribute(s) and class(es) to the card
            coffeeCard.classList.add('scale-1');

            // Append card to the article element
            articleCategory.appendChild(coffeeCard);
        };
    };

    // Add attribute(s) and class(es) to article element
    articleCategory.dataset.category = category;
    articleCategory.classList.add('category-container');

    return articleCategory;
};

function categoryButtonListener(macchieeButton, cuppyccinoButton, expressieButton) {
    const macchiee = macchieeButton.querySelector('h1');
    const cuppyccino = cuppyccinoButton.querySelector('h1');
    const expressie = expressieButton.querySelector('h1');


    cuppyccinoButton.addEventListener('mouseup', () => {
        // Validate if the button is currently active
        if (cuppyccino.classList.contains('active')) return;
        changeCards(cuppyccino, macchiee, expressie);
    });

    macchieeButton.addEventListener('mouseup', () => {
        // Validate if the button is currently active
        if (macchiee.classList.contains('active')) return;
        changeCards(macchiee, cuppyccino, expressie);
    });

    expressieButton.addEventListener('mouseup', () => {
        // Validate if the button is currently active
        if (expressie.classList.contains('active')) return;
        changeCards(expressie, cuppyccino, macchiee);
    });
};

function changeCards(newActive, currentActive1, currentActive2) {
    // Get current cards
    const cards = document.querySelectorAll('.product-section article.category-container .card');

    // Check which button is currently active
    const currentActive =
        currentActive1.classList.contains('active') ? currentActive1 : currentActive2


    cards.forEach(card => {
        // Add a simple exit animation
        card.classList.add('zoom_in');
        setTimeout(() => {
            card.classList.remove('scale-1');
            card.classList.add('scale-05');
            // Remove active to the current button
            currentActive.classList.remove('active');
            // Add active to Cuppyccino
            newActive.classList.add('active');

            // Get the product section
            const productSection = document.querySelector('.product-section');
            // Get the current article category
            const articleCategory = productSection.querySelector('article.category-container');
            // Remove current article category to the product section
            productSection.removeChild(articleCategory);

            // Create a new article category
            const newArticleCategory = document.createElement('article');
            newArticleCategory.classList.add('category-container');
            newArticleCategory.dataset.category = newActive.textContent;

            // Create new coffee cards
            const productArr = pd.getProduct();
            const length = productArr.length;
            for (let iter = 0; iter < length; ++iter) {
                const category = newArticleCategory.dataset.category;
                const product = productArr[iter];
                if (category === product.category) {
                    const coffeeCard = createCoffeeCard(product.productNumber, product.img, product.name, product.desc, product.price, product.rating);

                    // Add a simple animation upon entering
                    coffeeCard.classList.add('scale-05');
                    coffeeCard.classList.add('zoom_out');

                    // Append card to the article category
                    newArticleCategory.appendChild(coffeeCard);
                    setTimeout(() => {
                        // Remove transition after
                        coffeeCard.classList.remove('scale-05');
                        coffeeCard.classList.remove('zoom_out');
                        coffeeCard.classList.add('scale-1');
                    }, 300);
                };
            };

            // Append new article category to product section
            productSection.appendChild(newArticleCategory);
        }, 300);
    });
};

export default cuppiespage;