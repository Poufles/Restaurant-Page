import contentpage from './contentPage.js';
import { createLocationSVG, createPhoneSVG, createEmailSVG } from './createSVG.js';

const aboutpage = function () {
    let container;

    const createPage = () => {
        // Define page
        container = document.createElement('div');
        const page = document.createElement('div');
        const main = document.createElement('main');
        const detailContainer = document.createElement('div');
        const title = document.createElement('h1');
        const desc = document.createElement('p');
        const contacts = document.createElement('ul');

        // Create svgs
        const locationSVG = createLocationSVG();
        const phoneSVG = createPhoneSVG();
        const emailSVG = createEmailSVG();

        // Create dummy information for contact
        const location = '4019 Dogwood Road Phoenix, AZ 85012'; 
        const phone = '+1 (966) 756-8444-xxx'; 
        const email = 'cuppyisaproject@theodinproject.com';
        
        // Contain dummy info in an array
        const dummyArr = [];
        dummyArr.push(location);
        dummyArr.push(phone);
        dummyArr.push(email);

        // Contain SVGs in an array
        const svgArr = [];
        svgArr.push(locationSVG);
        svgArr.push(phoneSVG);
        svgArr.push(emailSVG);

        // Creating items of contact
        for (let iter = 0; iter < svgArr.length; ++iter) {
            // Create an item
            const item = document.createElement('li');
            const text = document.createElement('p');

            // Add text to the text
            text.textContent = dummyArr[iter];
            // Add attribute(s) and class(es) to the text
            text.classList.add('text');

            // Get contact SVG
            const svg = svgArr[iter];

            // Append SVG and text to item
            item.appendChild(svg);
            item.appendChild(text);

            // Add attribute(s) and class(es) to the item
            item.classList.add('item');

            // Append item to contacts
            contacts.appendChild(item);
        };

        // Add attribute(s) and class(es) to the contact
        contacts.classList.add('contacts');

        // Add text to desc
        desc.textContent = 
            'Welcome to Cuppy ! A cozy coffee shop born from a shared dream. Nestled in a bustling city, Cuppy offers a retreat adorned with vintage furniture and the aroma of freshly brewed coffee. Each cup is a symphony of carefully selected beans, roasted to perfection. It’s a haven where artists sketch, writers muse, and friends gather over velvety lattes and homemade pie, fostering stories, dreams, and friendships with every sip.';

        // Add attribute(s) and class(es) to desc
        desc.classList.add('desc');

        // Add text to title
        title.innerHTML =
            'A <span class="brand-name">Cuppy</span>  Knowledge !';
        
        // Add attribute(s) and class(es) to title
        title.classList.add('title');

        // Add title and desc to detail
        detailContainer.appendChild(title);
        detailContainer.appendChild(desc);

        // Add attribute(s) and class(es) to detail
        detailContainer.classList.add('detail')

        // Append detail and contact to main
        main.appendChild(detailContainer);
        main.appendChild(contacts);
        // Add attribute(s) and class(es) to main
        main.classList.add('about-container');

        // Append main to container
        container.appendChild(main);

        // Add attribute(s) and class(es) to page
        container.classList.add('page');
        container.classList.add('about-page');
        container.dataset.page = 'aboutpage';
        
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

export default aboutpage;