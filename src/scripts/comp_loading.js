import { createCoffeeSVG } from "./createSVG.js";

const loading = function () {
    let component;

    // Create component function
    const createComponent = () => {
        const wrapperScreen = document.createElement('div');
        const loadingScreen = document.createElement('div');
        const loadingStripArr = [];
        const coffeeSVG = createCoffeeSVG();
        const loadingText = document.createElement('p');

        // Create loading strips
        for (let iter = 0; iter < 5; ++iter) {
            let strip = document.createElement('div');
            // Adding attribute(s) and class(es)
            strip.classList.add('strip');
            strip.setAttribute('style', `--_strip-delay: 0.${iter * 2}s`);
            // Add strip to array
            loadingStripArr.push(strip);
        };

        // For strip 3, add coffee svg
        loadingStripArr[2].appendChild(coffeeSVG);
        // Add text component attribute(s) and class(es)
        loadingText.classList.add('loading-text');
        loadingText.textContent = 'We are brewing...';
        // Add text
        loadingStripArr[2].appendChild(loadingText);

        // Add attribute(s) and class(es) to loading screen
        loadingScreen.classList.add('loading-screen');
        // Append strips to the loading screen
        for (let iter = 0; iter < 5; ++iter) {
            loadingScreen.appendChild(loadingStripArr[iter]);
        };
        
        // Add attribute(s) and class(es) to wrapper
        wrapperScreen.classList.add('wrapper-loading-screen');
        // Append loading screen to its wrapper
        wrapperScreen.appendChild(loadingScreen);

        // Add element to component variable
        component = wrapperScreen; 
        document.querySelector('body').prepend(wrapperScreen)
    };

    // Get component function
    const getComponent = () => component;

    // Play animation function
    const playAnimation = () => {
        const wrapper = component;
        const strips = wrapper.querySelectorAll('.strip');
        const coffeSVG = wrapper.querySelector('svg');

        // Adding animation classes
        wrapper.classList.add('active');
        wrapper.classList.add('loading_strip');
        strips.forEach(strip => {
            strip.classList.add('loading_strip');
        });
        coffeSVG.classList.add('coffee_bounce')
        
        // Removing animation classes
        setTimeout(() => {
            wrapper.classList.remove('active');
            wrapper.classList.remove('loading_strip');
            strips.forEach(strip => {
                strip.classList.remove('loading_strip');
            });
            coffeSVG.classList.remove('coffee_bounce')
        }, 5000);
    };

    return {
        createComponent,
        getComponent,
        playAnimation,
    };
}();

export default loading