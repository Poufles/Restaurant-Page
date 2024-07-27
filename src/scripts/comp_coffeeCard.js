function coffeeCard () {

};

const card = document.querySelector('.card');
const modal = document.querySelector('dialog.buy-screen');

card.addEventListener('mouseup', () => {
    modal.showModal()
});