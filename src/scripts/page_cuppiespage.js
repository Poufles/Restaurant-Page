import contentpage from './contentPage.js';

const cuppiespage = function () {
    let container;

    const createPage = () => {
        container = document.createElement('div');
        const hero = createHero();
        const productSection = createProductSection();
        
        // Append children
        container.appendChild(hero.textureOverlay);
        container.appendChild(hero.heroContainer);
        container.appendChild(productSection);

        // Add attribute(s) and class(es) to container
        container.classList.add('page');
        container.classList.add('cuppiespage');
        contentpage.appendContentPage(container);
    };

    const removePage = () => {
        contentpage.removeContentPage(container);
        container = undefined;
    };

    return {
        createPage,
        removePage,
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
    const bubbleContainer = document.createElement('div');
    const bubbleDetail = document.createElement('div');
    const bubbleName = document.createElement('p');
    const bubblePrice = document.createElement('p');
    const bubbleDesc = document.createElement('p');
    const bubbleAction = document.createElement('button');
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

    // Add text to bubble action
    bubbleAction.textContent = 'Order Now';

    // Add attribute(s) and class(es) to the action button
    bubbleAction.setAttribute('type', 'button');
    bubbleAction.classList.add('bubble-action');

    // Add text to bubble desc
    bubbleDesc.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores quisquam velit assumenda harum. Officiis nostrum quibusdam et nisi recusandae in?';

    // Add attribute(s) and class(es) to the action button
    bubbleDesc.classList.add('featured-desc');

    // Add text to bubble price
    bubblePrice.textContent = '| $4.99';

    // Add attribute(s) and class(es) to bubble price
    bubblePrice.classList.add('featured-price');

    // Add text to bubble name
    bubbleName.textContent = 'Iced Caramel Cuppychino';

    // Add attribute(s) and class(es) to bubble name
    bubbleName.classList.add('featured-name');

    // Append details to bubble details
    bubbleDetail.appendChild(bubbleName);
    bubbleDetail.appendChild(bubblePrice);
    bubbleDetail.appendChild(bubbleDesc);
    bubbleDetail.appendChild(bubbleAction);

    // Add attribute(s) and class(es) to bubble detail
    bubbleDetail.classList.add('bubble-text');

    // Append detail to its container
    bubbleContainer.appendChild(bubbleDetail);

    // Attribute(s) and class(es) to bubble container
    bubbleContainer.classList.add('wrapper-bubble-text');

    // Create buttons for each featured item
    for (let iter = 0; iter < 3; ++iter) {
        const button = document.createElement('button');
        const image = document.createElement('img');

        // Set image source
        image.src = '/src/assets/pexels-oznur-taskan-172633297-12896257.jpg';
        
        // Set attribute(s) and class(es) to image
        image.setAttribute('style', `featured-img img-${iter + 1}`);
        image.classList.add('featured');

        // Append image to the button
        button.appendChild(image);

        // Add attribute(s) and class(es) to button
        button.dataset.featureNo = iter + 1;
        // Create an initialized active button
        if (iter === 0) {
            button.classList.add('active');
        } ;
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
    topContainer.appendChild(bubbleContainer);
    topContainer.appendChild(bubbleListContainer); 

    // Add attribute(s) and class(es) to top container
    topContainer.classList.add('top-container');

    // Append top container to top layer
    topLayer.appendChild(topContainer);

    // Add attribute(s) and class(es) to top layer
    topLayer.classList.add('top-layer');

    // Create featured images
    for (let iter = 0; iter < 3; ++iter) {
        const image = document.createElement('img');

        // Set image source
        image.src = '/src/assets/pexels-oznur-taskan-172633297-12896257.jpg';

        // Set attribute(s) and class(es) to image
        image.setAttribute('style', `featured-img img-${iter + 1}`);
        image.dataset.featuredNo = iter + 1;
        image.classList.add('featured-banner');
        
        // Append image to its hero container
        heroContainer.appendChild(image);
    };

    // Append top layer to hero container
    heroContainer.appendChild(topLayer);

    // Add attribute(s) and class(es) to hero container
    heroContainer.classList.add('hero')

    // Add attribute(s) and class(es) to texture overlay
    textureOverlay.classList.add('texture-overlay');

    return {
        textureOverlay,
        heroContainer,
    }
};

function createProductSection() {
    const productSection = document.createElement('section');

    // Add attribute(s) and class(es) to product section
    productSection.classList.add('product-section');

    return productSection;
};

export default cuppiespage;