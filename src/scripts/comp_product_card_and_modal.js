import { createCoffeeSVG, createRatingHeartSVG, createCheckoutSVG, createExitSVG } from './createSVG.js';
import content from './contentPage.js';

// Function to create the card
function createCoffeeCard(productNo, image, name, desc, price, rate) {
    const card = document.createElement('button');
    const productImg = document.createElement('img');
    const overlay = document.createElement('div');
    const productRatingContainer = document.createElement('div');
    const rating = document.createElement('p');
    const ratingSVG = createRatingHeartSVG();
    const productDescContainer = document.createElement('div');
    const productName = document.createElement('p');
    const productPrice = document.createElement('p');
    const productLogoContainer = document.createElement('div');
    const logo = createCoffeeSVG();

    // Appending logo to its container
    productLogoContainer.appendChild(logo);

    // Adding attribute(s) and class(es) for product logo container
    productLogoContainer.classList.add('product-logo');

    // Adding text to price
    productPrice.textContent = `| $${price}`;

    // Adding attribute(s) and class(es) to price
    productPrice.classList.add('price');

    // Adding text to name
    productName.textContent = name;

    // Adding attribute(s) and class(es) to name
    productName.classList.add('name');

    // Adding name and price to its container
    productDescContainer.appendChild(productName);
    productDescContainer.appendChild(productPrice);

    // Add attribute(s) and class(es) to product desc container
    productDescContainer.classList.add('product-desc');

    // Adding text to rating
    rating.textContent = `${rate} / 5`;

    // Adding attribute(s) and class(es) to rating
    rating.classList.add('rating');

    // Adding attribute(s) and class(es) to rating container
    productRatingContainer.classList.add('product-rating');

    // Adding rating and its svg to their container
    productRatingContainer.appendChild(rating);
    productRatingContainer.appendChild(ratingSVG);

    // Adding attribute(s) and class(es) to overlay
    overlay.classList.add('overlay');

    // Adding atttribute(s) and class(es) to img
    productImg.classList.add('product-img');

    // Adding image to image
    productImg.src = image;

    // Adding attribute(s) and class(es) to card
    card.dataset.product = productNo;
    card.classList.add('card');
    card.classList.add('product');

    // Appending containers to card
    card.appendChild(productImg);
    card.appendChild(overlay);
    card.appendChild(productRatingContainer);
    card.appendChild(productDescContainer);
    card.appendChild(productLogoContainer);

    // Adding event listener to show modal
    card.addEventListener('mouseup', () => {
        const modal = createModal(image, name, desc);
        content.appendContentPage(modal);
        modal.showModal();
    });

    return card;
};

// Function to create modal / dialog
function createModal(image, name, desc) {
    const dialog = document.createElement('dialog');
    const dialogContainer = document.createElement('div');
    const productImg = document.createElement('img');
    const overlay = document.createElement('div');
    const exitButton = document.createElement('button');
    const exitSVG = createExitSVG();
    const productName = document.createElement('p');
    const bottomContainer = document.createElement('div');
    const productDesc = document.createElement('div');
    const optionContainer = document.createElement('div');
    const sizeContainer = document.createElement('div');
    const sizeText = document.createElement('p');
    const sizeButtonSmall = document.createElement('button');
    const sizeButtonMedium = document.createElement('button');
    const sizeButtonLarge = document.createElement('button');
    const quantityContainer = document.createElement('div');
    const quantity = document.createElement('p');
    const quantitySVG = createCoffeeSVG();
    const quantityButtonAdd = document.createElement('button');
    const quantityButtonSub = document.createElement('button');
    const actionContainer = document.createElement('div');
    const addToCartButton = document.createElement('button');
    const checkoutButton = document.createElement('button');
    const checkoutText = document.createElement('p');
    const checkoutSVG = createCheckoutSVG();

    // Add text to checkout text
    checkoutText.textContent = 'Checkout';

    // Append checkout text and its svg to their container
    checkoutButton.appendChild(checkoutText);
    checkoutButton.appendChild(checkoutSVG);

    // Add attribute(s) and class(es) to checkout button
    checkoutButton.setAttribute('type', 'button');
    checkoutButton.classList.add('checkout');
    
    // Add text to the add to cart button
    addToCartButton.textContent = 'Add To Cart';
    
    // Add attribute(s) and class(es) to the add to cart button
    addToCartButton.setAttribute('type', 'button');
    addToCartButton.classList.add('add-to-cart');

    // Append buttons to action container
    actionContainer.appendChild(addToCartButton);
    actionContainer.appendChild(checkoutButton);

    // Add attribute(s) and class(es) to action container
    actionContainer.classList.add('item-action');

    // Add text to quantity buttons
    quantityButtonSub.textContent = '-';
    quantityButtonAdd.textContent = '+';
    
    // Add attribute(s) and class(es) to quantity buttons
    quantityButtonSub.classList.add('quantity');
    quantityButtonAdd.classList.add('quantity');

    // Add text to quantity
    quantity.textContent = '1';

    // Add attribute(s) and class(es) to quantity
    quantity.dataset.quantity = 1;
    quantity.classList.add('quantity');

    // Append quantity text, buttons, and svg to their container
    quantityContainer.appendChild(quantity);
    quantityContainer.appendChild(quantitySVG);
    quantityContainer.appendChild(quantityButtonAdd);
    quantityContainer.appendChild(quantityButtonSub);

    // Add attribute(s) and class(es) to quantity container
    quantityContainer.classList.add('item-quantity');

    // Add text to size buttons
    sizeButtonLarge.textContent = 'L'; 
    sizeButtonMedium.textContent = 'M'; 
    sizeButtonSmall.textContent = 'S'; 
    
    // Add attribute(s) and class(es) to size buttons
    sizeButtonLarge.classList.add('size'); 
    sizeButtonMedium.classList.add('size'); 
    sizeButtonSmall.classList.add('size');
    
    // Initialize active size
    sizeButtonSmall.classList.add('active');

    // Add text to size text
    sizeText.textContent = 'Cuppy Sizes: ';

    // Add attribute(s) and class(es) to size text
    sizeText.classList.add('size-text');

    // Append size text and buttons to their container
    sizeContainer.appendChild(sizeText);
    sizeContainer.appendChild(sizeButtonSmall);
    sizeContainer.appendChild(sizeButtonMedium);
    sizeContainer.appendChild(sizeButtonLarge);

    // Add attribute(s) and class(es) to size container
    sizeContainer.classList.add('item-size');

    // Append containers to option
    optionContainer.appendChild(sizeContainer);
    optionContainer.appendChild(quantityContainer);

    // Add attribute(s) and class(es) to option container
    optionContainer.classList.add('option');

    // Add text to product desc
    productDesc.textContent = desc;

    // Add attribute(s) and class(es) to product desc
    productDesc.classList.add('item-desc');

    // Append bottom parts to their container
    bottomContainer.appendChild(productDesc);
    bottomContainer.appendChild(optionContainer);
    bottomContainer.appendChild(actionContainer);

    // Add attribute(s) and class(es) to bottom container
    bottomContainer.classList.add('bottom-part');

    // Add text to product name
    productName.textContent = name;

    // Add attribute(s) and class(es) to product name
    productName.classList.add('item-name');

    // Append svg to exit button
    exitButton.appendChild(exitSVG);

    // Add attribute(s) and class(es) to exit button
    exitButton.classList.add('exit');

    // Add attribute(s) and class(es) to overlay
    overlay.classList.add('overlay');

    // Add image to product image
    productImg.src = image;

    // Appending all dialog parts to the dialog container
    dialogContainer.appendChild(productImg);
    dialogContainer.appendChild(overlay);
    dialogContainer.appendChild(exitButton);
    dialogContainer.appendChild(productName);
    dialogContainer.appendChild(bottomContainer);

    // Adding attribute(s) and class(es) to dialog container
    dialogContainer.classList.add('dialog-container')

    // Appending the dialog container to the dialog element
    dialog.appendChild(dialogContainer);

    // Add attribute(s) and class(es) to the dialog element
    dialog.classList.add('buy-screen');

    // Add event listener to close modal
    exitButton.addEventListener('mouseup', () => {
        dialog.classList.add('exit_modal');
        setTimeout(() => {
            dialog.close();
            dialog.classList.remove('exit_modal');
            content.removeContentPage(dialog);
        }, 300);
    });

    // Add event listener for the quantity buttons
    quantityButtonAdd.addEventListener('mouseup', () => {
        const el_quantity = document.querySelector('dialog p.quantity');
        let productQuantity = el_quantity.dataset.quantity;

        productQuantity++;
        el_quantity.textContent = productQuantity;
        el_quantity.dataset.quantity = productQuantity;        
    });
    
    quantityButtonSub.addEventListener('mouseup', () => {
        const el_quantity = document.querySelector('dialog p.quantity');
        let productQuantity = el_quantity.dataset.quantity;

        productQuantity--;
        if (productQuantity >= 1) {
            el_quantity.textContent = productQuantity;
            el_quantity.dataset.quantity = productQuantity;        
        };
    });

    return dialog;
};

window.addEventListener('load', () => {
    const body = document.querySelector('body');
    body.appendChild(createCoffeeCard(0, '/src/assets/pexels-rachel-claire-5865232.jpg', 'Kapeng Daks', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur provident tempore, saepe earum tenetur quis aperiam delectus cum consequuntur ut tempora optio voluptate temporibus beatae quam doloremque odit, voluptatum quas?', 6.90, 5));
    // const card = document.querySelector('.card');
    // const modal = document.querySelector('dialog.buy-screen');
    // const exit = document.querySelector('dialog .exit');

    // card.addEventListener('mouseup', () => {
    //     modal.showModal();
    // });

    // exit.addEventListener('mouseup', () => {
    //     modal.classList.add('exit_modal');
    //     setTimeout(() => {
    //         modal.close();
    //         modal.classList.remove('exit_modal');
    //     }, 300);
    // });
});

export default createCoffeeCard;