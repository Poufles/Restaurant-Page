import images from './images.js';
import contentpage from './contentPage.js';
import cuppiespage from './page_cuppiespage.js';
import navbar from './comp_navbar.js';
import cloudBubble from './comp_cloudFeaturedBubble.js';
import loading from './comp_loading.js';
import { createModal } from './comp_product_card_and_modal.js';
import { createGitHubSVG, createInstagramSVG, createTwitterSVG } from './createSVG.js';
import { productData as pd } from './products.js';

const homepage = function () {
    let banner;

    const createPage = () => {
        // Define banner
        banner = document.createElement('div');

        // Side left
        const sideLeft = createSideLeft();

        // Side right
        const sideRight = createSideRight();

        // Add attribute(s) and class(es) to banner
        banner.classList.add('page');
        banner.classList.add('homepage');
        banner.dataset.page = 'homepage';
        // Append sides to banner
        banner.appendChild(sideLeft);
        banner.appendChild(sideRight);

        contentpage.appendContentPage(banner);

        // // Add event listener to order button
        orderButton()
    };

    const removePage = () => {
        contentpage.removeContentPage(banner);
        banner = undefined;
    };

    const getComponent = () => banner;

    return {
        createPage,
        removePage,
        getComponent,
    }
}();

function createSideLeft() {
    // Get product data
    const products = pd.getProduct();
    // Initialize featured being 0(First Cuppyccino)
    const c1 = products[0];

    const sideLeft = document.createElement('div');

    // Define bubble text
    const bubbleText = cloudBubble();
    bubbleText.bubbleText(c1.name, c1.price, c1.desc);

    // Get images
    const img = images.getImages();

    // Defining featured products
    const featured1 = images.createImage(img[0]);
    const featured2 = images.createImage(img[7]);
    const featured3 = images.createImage(img[11]);

    // Creating featured array
    const featuredArr = []
    // Adding all imags
    featuredArr.push(featured1);
    featuredArr.push(featured2);
    featuredArr.push(featured3);
    // Adding attribute(s) and class(es)
    for (let iter = 0; iter < featuredArr.length; ++iter) {
        let img = featuredArr[iter];
        img.setAttribute('id', `featured-img img-${iter + 1}`);
        img.dataset.featuredNo = iter + 1;
    };

    // Creating featured bubble
    const bubble = document.createElement('div');
    // Creating bubble buttons
    for (let iter = 0; iter < 3; ++iter) {
        let bubbleButton = document.createElement('button');
        // Add attribute(s) and class(es)
        bubbleButton.classList.add('bubble-item');
        bubbleButton.dataset.featuredNo = iter + 1;
        // Initialize first active bubble
        if (iter === 0) {
            bubbleButton.classList.add('active')
        };
        // Appending featured images to bubble button
        bubbleButton.appendChild(featuredArr[iter].cloneNode(true));
        // Appending bubble button to bubble
        bubble.appendChild(bubbleButton);
    };
    // Add attribute(s) and class(es) to bubble
    bubble.classList.add('featured-bubble');

    // Append images to side left
    for (let iter = 0; iter < featuredArr.length; ++iter) {
        let img = featuredArr[iter];
        // Add class to the featured img
        img.classList.add('featured-banner');
        // Initialize active featured image
        if (iter !== 0) img.classList.add('opacity-none');
        sideLeft.appendChild(featuredArr[iter]);
    };

    // Add attribute(s) and class(es) to side left
    sideLeft.classList.add('side');
    sideLeft.classList.add('left');
    // Append bubble to side left
    sideLeft.appendChild(bubble);

    // Append bubble text to side left
    sideLeft.appendChild(bubbleText.getComponent());

    // Add event listener for featured buttons
    const featuredButtons = sideLeft.querySelectorAll('.bubble-item');
    featuredButtons.forEach(button => {
        featuredBubbleListener(button, bubbleText);
    });

    return sideLeft;
};

function createSideRight() {
    const sideRight = document.createElement('div');
    const textureOverlay = document.createElement('div');
    const containerSocial = document.createElement('div');
    const gitHubLink = document.createElement('a');
    const instagramLink = document.createElement('a');
    const xLink = document.createElement('a');
    const containerTitle = document.createElement('div');
    const title = document.createElement('p');
    const containerRights = document.createElement('div');
    const copyright = document.createElement('p');
    const author = document.createElement('p');

    // Add attribute(s) and class(es) to author
    author.classList.add('author');
    // Add text to author
    author.textContent = '@ poufsadev 2024';

    // Add attribute(s) and class(es) to copyright
    copyright.classList.add('copyright');
    // Add text to copyright
    copyright.textContent = 'All Rights Reserved';

    // Add attribute(s) and class(es) to container rights
    containerRights.classList.add('container-rights');
    // Append copyright and author to container rights
    containerRights.appendChild(copyright);
    containerRights.appendChild(author);

    // Add attribute(s) and class(es) to title
    title.classList.add('title');
    title.classList.add('brand-name');
    // Add text to title
    title.textContent = 'Cuppy';

    // Add attribute(s) and class(es) to container title
    containerTitle.classList.add('container-title');
    // Append title to container title
    containerTitle.appendChild(title);

    // Define social svgs
    const gitHub = createGitHubSVG();
    const instagram = createInstagramSVG();
    const twitter = createTwitterSVG();

    // Append svgs to their links
    gitHubLink.appendChild(gitHub);
    instagramLink.appendChild(instagram);
    xLink.appendChild(twitter);

    // Add links to anchor
    gitHubLink.href = 'https://github.com/Poufles';
    instagramLink.href = 'https://www.instagram.com/poufsadev/';
    xLink.href = 'https://x.com/Vqliant';

    // Add attribute(s) and class(es) to social container
    containerSocial.classList.add('container-social');
    // Append svgs to social container
    containerSocial.appendChild(gitHubLink);
    containerSocial.appendChild(instagramLink);
    containerSocial.appendChild(xLink);

    // Add attribute(s) and class(es) to texture overlay
    textureOverlay.classList.add('texture-overlay')

    // Add attribute(s) and class(es) to side left
    sideRight.classList.add('side');
    sideRight.classList.add('right');
    // Append all to side right
    sideRight.appendChild(textureOverlay);
    sideRight.appendChild(containerSocial);
    sideRight.appendChild(containerTitle);
    sideRight.appendChild(containerRights);

    return sideRight;
};

function featuredBubbleListener(buttonEl, featuredBubble) {
    buttonEl.addEventListener('mouseup', () => {
        const side = document.querySelector('.side.left');
        const featuredImg = side.querySelectorAll('.featured-banner');
        const buttons = side.querySelectorAll('.bubble-item');

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
            orderButton();
        } else if (featuredNo == 2) {
            featuredBubble.bubbleText(m1.name, m1.price, m1.desc);
            orderButton();
        } else {
            featuredBubble.bubbleText(e1.name, e1.price, e1.desc);
            orderButton();
        };
    });
};

function orderButton() {
    // Add event listener to order button
    const orderButton = document.querySelector('.page .side.left .bubble-action');

    orderButton.addEventListener('mouseup', () => {
        loading.playAnimation();
        setTimeout(() => {
            homepage.removePage();
            cuppiespage.createPage();

            const featuredElements = cuppiespage.getComponent().querySelectorAll('.page .hero .featured-banner');
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
            setTimeout(() => {
                const modal = createModal(selectedProduct.img, selectedProduct.name, selectedProduct.desc);
                contentpage.appendContentPage(modal);
                modal.showModal();
            }, 2100);
        }, 2000);
    });
}

export default homepage;