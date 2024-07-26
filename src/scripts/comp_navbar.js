import loading from './comp_loading.js';
import homepage from './page_homepage.js';
import cuppiespage from './page_cuppiespage.js';
import aboutpage from './page_aboutpage.js';

const navbar = function () {
    let component;

    // Create component function
    const createComponent = () => {
        const header = document.createElement('header');
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
        // Appending nav to the header
        header.appendChild(nav)

        // Add event listeners to navbar buttons
        const navButtons = nav.querySelectorAll('button.items');
        navButtons.forEach(navButton => {
            navButton.addEventListener('mousedown', () => {
                navButton.classList.add('button-press');
            });
            
            navButton.addEventListener('mouseup', () => {
                navButton.classList.remove('button-press');
            });
            
            navButton.addEventListener('mouseleave', () => {
                navButton.classList.remove('button-press');
            });
        });

        home.addEventListener('mouseup', () => {
            if (document.querySelector('.homepage') === null) {
                const cuppies = document.querySelector('.page.cuppiespage');

                const currentPage = cuppies !== null ? cuppiespage : aboutpage;

                loading.playAnimation()
                setTimeout(() => {
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

    // Get component
    const getComponent = () => component;

    return {
        createComponent,
        deleteComponent,
        getComponent,
    };
}();

export default navbar;