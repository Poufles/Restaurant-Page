const navbar = function() {
    let component;

    // Create component function
    const createComponent = (parent = document.querySelector('body')) => {
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
        home.textContent = 'H';
        product.textContent = 'C';
        about.textContent = 'A';
        // Adding listeners
        home.addEventListener('mouseover', () => {
            home.textContent = 'Home';
        });
        home.addEventListener('mouseout', () => {
            setTimeout(() => {
                home.textContent = 'H';
            }, 150);
        });

        product.addEventListener('mouseover', () => {
            product.textContent = 'Cuppies';
        });
        product.addEventListener('mouseout', () => {
            setTimeout(() => {
                product.textContent = 'C';
            }, 150);
        });

        about.addEventListener('mouseover', () => {
            about.textContent = 'About';
        });
        about.addEventListener('mouseout', () => {
            setTimeout(() => {
                about.textContent = 'A';
            }, 150);
        });

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

        // Putting all to the component variable
        component = header;

        parent.appendChild(component);
    };

    const deleteComponent = (parent = document.querySelector('body')) => {
        parent.removeChild(component);
        component = undefined;
    };

    const getComponent = () => component;

    return {
        createComponent,
        deleteComponent,
        getComponent,
    };
}();