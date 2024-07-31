// const navbar = function() {
//     let component;

//     // Create component function
//     const createComponent = (parent = document.querySelector('body')) => {
//         const header = document.createElement('header');
//         const nav = document.createElement('nav');
//         const wrapperArr = [];
//         const itemArr = []

//         // Creating the button
//         for (let iter = 0; iter < 3; ++iter) {
//             let item = document.createElement('button');
//             item.classList.add('items');
//             item.setAttribute('id', `item-${iter + 1}`);
//             itemArr.push(item);
//         };

//         // Creating variables for each button item
//         const home = itemArr[0];
//         const product = itemArr[1];
//         const about = itemArr[2];
//         // Adding text for each button
//         home.textContent = 'H';
//         product.textContent = 'C';
//         about.textContent = 'A';
//         // Adding listeners
//         home.addEventListener('mouseover', () => {
//             home.textContent = 'Home';
//         });
//         home.addEventListener('mouseout', () => {
//             setTimeout(() => {
//                 home.textContent = 'H';
//             }, 150);
//         });

//         product.addEventListener('mouseover', () => {
//             product.textContent = 'Cuppies';
//         });
//         product.addEventListener('mouseout', () => {
//             setTimeout(() => {
//                 product.textContent = 'C';
//             }, 150);
//         });

//         about.addEventListener('mouseover', () => {
//             about.textContent = 'About';
//         });
//         about.addEventListener('mouseout', () => {
//             setTimeout(() => {
//                 about.textContent = 'A';
//             }, 150);
//         });

//         // Creating the wrapper for the buttons
//         for (let iter = 0; iter < 3; ++iter) {
//             let wrapper = document.createElement('div');
//             wrapper.classList.add('wrapper-button');
//             // Appending button items to their wrapper
//             wrapper.appendChild(itemArr[iter]);
//             wrapperArr.push(wrapper);
//         }

//         // Appending each wrapper to the nav
//         for (let iter = 0; iter < wrapperArr.length; ++iter) {
//             nav.appendChild(wrapperArr[iter]);
//         };

//         // Adding class(es) to the header
//         header.classList.add('comp_nav');
//         // Appending nav to the header
//         header.appendChild(nav)

//         // Putting all to the component variable
//         component = header;

//         parent.appendChild(component);
//     };

//     const deleteComponent = (parent = document.querySelector('body')) => {
//         parent.removeChild(component);
//         component = undefined;
//     };

//     const getComponent = () => component;

//     return {
//         createComponent,
//         deleteComponent,
//         getComponent,
//     };
// }();

//************** ABOVE IS OLD NAV ***************//


//************** LOGIC ***************//


// const navBackdrop = document.querySelector('.nav-backdrop');
// const action = document.querySelector('.comp_nav .action .page-container');
// const pageButtons = document.querySelectorAll('.comp_nav .pages .item');

// action.addEventListener('mouseup', () => {
//     pageButtons.forEach(button => {
//         if (!button.classList.contains('hide')) {
//             navBackdrop.classList.add('inactive')
//             button.classList.add('hide');
//         } else {
//             navBackdrop.classList.remove('inactive')
//             button.classList.remove('hide');
//         }
//     });
// });

// navBackdrop.addEventListener('mouseup', () => {
//     pageButtons.forEach(button => {
//         navBackdrop.classList.add('inactive')
//         button.classList.add('hide');
//     });
// });



//************** LOGIC ***************//



import { createCoffeeSVG, createHomeSVG, createInfoSVG } from "../../src/scripts/createSVG.js";

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
            itemButton.classList.add(`${textArr[iter].toLowerCase()}`);

            // Append item button to pages container
            item.appendChild(itemButton);
            // Add class(es) to item
            item.classList.add('item');
            item.classList.add('hide');

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
        const pages = navbar.querySelectorAll('.comp_nav .pages .item');
        console.log(pages);
        console.log(pageButton);
        pages.forEach(page => {
            pageButton.addEventListener('mouseup', () => {
                if (!page.classList.contains('hide')) {
                    backdrop.classList.add('inactive');
                    page.classList.add('hide');
                } else {
                    backdrop.classList.remove('inactive');
                    page.classList.remove('hide');
                };
            });
            
            // Add event listener to backdrop
            backdrop.addEventListener('mouseup', () => {
                backdrop.classList.add('inactive');
                page.classList.add('hide');
            });

            
            page.addEventListener('mouseup', () => {
                pagesSwitch
            })
        })
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


navbar.createComponent()
const body = document.querySelector('body');
body.appendChild(navbar.getBackdrop());
body.appendChild(navbar.getNavbar());