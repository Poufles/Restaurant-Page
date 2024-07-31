import loading from './comp_loading.js';
import homepage from './page_homepage.js';
import cuppiespage from './page_cuppiespage.js';
import aboutpage from './page_aboutpage.js';

import { createHomeSVG, createCoffeeSVG, createInfoSVG } from './createSVG.js';

const navbar = function () {
    let navbar;

    let backdrop = document.createElement('div');
    backdrop.classList.add('nav-backdrop');
    backdrop.classList.add('inactive');

    const createComponent = () => {
        navbar = document.createElement('header');
        const nav = document.createElement('nav');
        const actionContainer = document.createElement('div');
        const pageButton = document.createElement('button');
        const brandName = document.createElement('p');
        const pagesContainer = document.createElement('ul');

        // Create proper SVGs
        const homeSVG = createHomeSVG();
        const coffeeSVG = createCoffeeSVG();
        const infoSVG = createInfoSVG();
        // Add SVGs to an array
        const svgArr = [];
        svgArr.push(homeSVG);
        svgArr.push(coffeeSVG);
        svgArr.push(infoSVG);

        // Create text for each svg
        const home = 'Home';
        const cuppies = 'Cuppies';
        const about = 'About';
        // Add texts to an array
        const textArr = [];
        textArr.push(home);
        textArr.push(cuppies);
        textArr.push(about);

        // Create button array
        const buttonArr = [];

        // Create button item
        for (let iter = 0; iter < svgArr.length; ++iter) {
            const item = document.createElement('li');
            const itemButton = document.createElement('button');
            const text = document.createElement('p');

            // Add text to text
            text.textContent = textArr[iter];
            // Add class to text
            text.classList.add('text');

            // Append SVG and text to item button
            itemButton.appendChild(svgArr[iter]);
            itemButton.appendChild(text);
            // Add attribute(s) and class(es) to button
            itemButton.setAttribute('type', 'button');
            itemButton.dataset.page = `${textArr[iter].toLowerCase()}`;

            // Append item button to pages container
            item.appendChild(itemButton);
            // Add class(es) to item
            item.classList.add('item');
            item.classList.add('hide');

            // Add item to button array
            buttonArr.push(item);

            // Append item to pages container
            pagesContainer.appendChild(item);
        };

        // Add attribute(s) and class(es) to pages container
        pagesContainer.classList.add('pages');

        // Add text to brand name
        brandName.textContent = 'Cuppy';
        // Add attribute(s) and class(es) to brand name
        brandName.classList.add('brand-name');

        // Append brand name to page button
        pageButton.appendChild(brandName);
        // Attribute(s) and class(es) to page button
        pageButton.classList.add('page-container');

        // Append page button to action container
        actionContainer.appendChild(pageButton);
        // Add attribute(s) and class(es) to action container
        actionContainer.classList.add('action');

        // Append containers to nav
        nav.appendChild(actionContainer);
        nav.appendChild(pagesContainer);

        // Append nav to component
        navbar.appendChild(nav);
        // Add attribute(s) and class(es) to navbar
        navbar.classList.add('comp_nav');

        // Add event listener to page button
        for (let iter = 0; iter < buttonArr.length; ++iter) {
            pageButton.addEventListener('mouseup', () => {
                if (!buttonArr[iter].classList.contains('hide')) {
                    backdrop.classList.add('inactive');
                    buttonArr[iter].classList.add('hide');
                } else {
                    backdrop.classList.remove('inactive');
                    buttonArr[iter].classList.remove('hide');
                };
            });

            // Add event listener to backdrop
            backdrop.addEventListener('mouseup', () => {
                backdrop.classList.add('inactive');
                buttonArr[iter].classList.add('hide');
            });
        };

        const homeButton = buttonArr[0];
        const cuppiesButton = buttonArr[1];
        const aboutButton = buttonArr[2];

        homeButton.addEventListener('mouseup', () => {
            if (document.querySelector('.homepage') === null) {
                const cuppies = document.querySelector('.page.cuppiespage');

                const currentPage = cuppies !== null ? cuppiespage : aboutpage;

                for (let iter = 0; iter < buttonArr.length; ++iter) {
                    buttonArr[iter].classList.add('hide');
                };

                loading.playAnimation()
                setTimeout(() => {
                    backdrop.classList.add('inactive');
                    currentPage.removePage();
                    homepage.createPage();
                }, 2000);
            };
        });

        cuppiesButton.addEventListener('mouseup', () => {
            if (document.querySelector('.cuppiespage') === null) {
                const home = document.querySelector('.page.homepage');

                const currentPage = home !== null ? homepage : aboutpage;

                for (let iter = 0; iter < buttonArr.length; ++iter) {
                    buttonArr[iter].classList.add('hide');
                };

                loading.playAnimation()
                setTimeout(() => {
                    backdrop.classList.add('inactive');
                    currentPage.removePage();
                    cuppiespage.createPage();
                }, 2000);
            };
        });

        aboutButton.addEventListener('mouseup', () => {
            if (document.querySelector('.aboutpage') === null) {
                const home = document.querySelector('.page.homepage');

                const currentPage = home !== null ? homepage : cuppiespage;

                for (let iter = 0; iter < buttonArr.length; ++iter) {
                    buttonArr[iter].classList.add('hide');
                };

                loading.playAnimation()
                setTimeout(() => {
                    backdrop.classList.add('inactive');
                    currentPage.removePage();
                    aboutpage.createPage();
                }, 2000);
            };
        });
    };

    const getNavbar = () => navbar;
    const getBackdrop = () => backdrop;

    return {
        createComponent,
        getNavbar,
        getBackdrop,
    };
}();

function pagesSwitch(newPage, oldPage) {
    if (document.querySelector(`.${newPage}`) === null) {
        const buttons = document.querySelectorAll('.comp_nav .pages li');

        buttons.forEach(button => {
            button.classList.remove('hide');
        });

        setTimeout(() => {
            loading.playAnimation()
            setTimeout(() => {
                positionComponent('nav-bm');
                oldPage.removePage();
                newPage.createPage();
            }, 2000);
        }, 300);
    };
};




export default navbar;