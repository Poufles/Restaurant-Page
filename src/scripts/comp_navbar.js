import loading from './comp_loading.js';
import homepage from './page_homepage.js';
import cuppiespage from './page_cuppiespage.js';
import aboutpage from './page_aboutpage.js';

const navbar = function () {
    let component;
    const header = document.createElement('header');

    // Create component function
    const createComponent = () => {
        const nav = document.createElement('nav');
        const wrapperArr = [];
        const itemArr = []

        // Creating the button
        for (let iter = 0; iter < 3; ++iter) {
            let item = document.createElement('button');
            item.classList.add('items');
            item.setAttribute('id', `item-${iter + 1}`);
            itemArr.push(item);
        };

        // Creating variables for each button item
        const home = itemArr[0];
        const product = itemArr[1];
        const about = itemArr[2];
        // Adding text for each button
        home.textContent = 'Home';
        product.textContent = 'Cuppies';
        about.textContent = 'About';

        // Creating the wrapper for the buttons
        for (let iter = 0; iter < 3; ++iter) {
            let wrapper = document.createElement('div');
            wrapper.classList.add('wrapper-button');
            // Appending button items to their wrapper
            wrapper.appendChild(itemArr[iter]);
            wrapperArr.push(wrapper);
        }

        // Appending each wrapper to the nav
        for (let iter = 0; iter < wrapperArr.length; ++iter) {
            nav.appendChild(wrapperArr[iter]);
        };

        // Adding class(es) to the header
        header.classList.add('comp_nav');
        header.classList.add('nav-bm');
        // Appending nav to the header
        header.appendChild(nav)

        home.addEventListener('mouseup', () => {
            if (document.querySelector('.homepage') === null) {
                const cuppies = document.querySelector('.page.cuppiespage');

                const currentPage = cuppies !== null ? cuppiespage : aboutpage;

                loading.playAnimation()
                setTimeout(() => {
                    positionComponent('nav-bm');
                    currentPage.removePage();
                    homepage.createPage();
                }, 2000);
            };
        });

        product.addEventListener('mouseup', () => {
            if (document.querySelector('.cuppiespage') === null) {
                const home = document.querySelector('.page.homepage');

                const currentPage = home !== null ? homepage : aboutpage;

                loading.playAnimation()
                setTimeout(() => {
                    positionComponent('nav-br');
                    currentPage.removePage();
                    cuppiespage.createPage();
                }, 2000);
            };
        });

        about.addEventListener('mouseup', () => {
            if (document.querySelector('.aboutpage') === null) {
                const home = document.querySelector('.page.homepage');

                const currentPage = home !== null ? homepage : cuppiespage;

                loading.playAnimation()
                setTimeout(() => {
                    positionComponent('nav-br');
                    currentPage.removePage();
                    aboutpage.createPage();
                }, 2000);
            };
        });

        // Putting all to the component variable
        component = header;
    };

    // Delete component function
    const deleteComponent = (parent) => {
        parent.removeChild(component);
        component = undefined;
    };

    const positionComponent = (position) => {
        header.classList.remove('nav-lr');
        header.classList.remove('nav-br');
        header.classList.remove('nav-bl');
        header.classList.remove('nav-bm');
        header.classList.add(position);
    };

    // Get component
    const getComponent = () => component;

    return {
        createComponent,
        deleteComponent,
        getComponent,
        positionComponent,
    };
}();

export default navbar;