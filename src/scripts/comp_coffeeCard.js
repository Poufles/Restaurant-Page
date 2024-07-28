// import { createCoffeeSVG } from './createSVG.js';

function coffeeCard(name, price, rating, desc) {
    const createCard = () => {
        const card = document.createElement('button');
        const productImg = document.createElement('img');
        const overlay = document.createElement('div');
        const productRatingContainer = document.createElement('div');
        const rating = document.createElement('p');
        const ratingSVG = undefined;
        const productDescContainer = document.createElement('div');
        const productName = document.createElement('p');
        const productPrice = document.createElement('p');
        const productActionContainer = document.createElement('div');
        const productLogoContainer = document.createElement('div');
        const logo = createCoffeeSVG();
    };

    return {
        createCard,
    }
};

const card = document.querySelector('.card');
const modal = document.querySelector('dialog.buy-screen');
const exit = document.querySelector('dialog .exit');

card.addEventListener('mouseup', () => {
    modal.showModal();
});

exit.addEventListener('mouseup', () => {
    modal.classList.add('exit_modal');
    setTimeout(() => {
        modal.close();
        modal.classList.remove('exit_modal');
    }, 300);
});