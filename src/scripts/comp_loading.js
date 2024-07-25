const loading = function () {
    let component;

    // Create SVG function
    const createCoffeeSVG = () => {
        // Please note that this svg is taken from  https://www.iconfinder.com

        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        const path1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
        const path2 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
        const path3 = document.createElementNS("http://www.w3.org/2000/svg", 'path');

        // Create svg attribute(s) and clas(es)
        svg.setAttribute("id", "Layer_1");
        svg.setAttribute("style", "enable-background:new 0 0 32 32");
        svg.setAttribute('viewBox', '0 0 32 32');

        // Create path 1
        path1.classList.add('st0');
        path1.setAttribute('d', 'M23,24c0.7,0.3,1.4,0.5,2.1,0.5c2.6,0,4.9-2.3,4.9-4.9c0-2.7-2.1-4.9-4.7-5c0,0,0,0,0,0H4.2   C3,14.6,2,15.5,2,16.6c0,0,0,0.1,0,0.1c0,5.2,3.4,9.6,8.1,11.1h-7c-0.6,0-1.1,0.5-1.1,1.1C2,29.5,2.5,30,3.1,30h23.2   c0.6,0,1.1-0.5,1.1-1.1c0-0.6-0.5-1.1-1.1-1.1h-8.8C19.6,27.2,21.5,25.8,23,24z M25.5,16.8L25.5,16.8c1.6,0.2,2.7,1.8,2.3,3.5   c-0.3,1.2-1.4,2-2.6,2c-0.3,0-0.7,0-1-0.1C25,20.5,25.5,18.7,25.5,16.8z');
        
        // Create path 2
        path2.classList.add('st0');
        path2.setAttribute('d', 'M9.4,10.1c-1.5,0.5-0.8,2.8,0.6,2.3c1.7-0.6,2.3-2.3,1.9-4c-0.2-0.8-0.7-1.6-1.1-2.4c-0.2-0.4-0.7-1.4-0.1-1.8   c1.3-0.8,0.1-2.9-1.2-2.1C8.1,3.1,7.8,4.8,8.3,6.3C8.5,6.8,10.5,9.8,9.4,10.1z');
        
        // Create path 3
        path3.classList.add('st0');
        path3.setAttribute('d', 'M16,11c-1.5,0.5-0.8,2.8,0.6,2.3c1.7-0.6,2.3-2.3,1.9-4c-0.2-0.8-0.7-1.6-1.1-2.4c-0.2-0.4-0.7-1.4-0.1-1.8   c1.3-0.8,0.1-2.9-1.2-2.1c-1.4,0.9-1.7,2.6-1.2,4.1C15.1,7.7,17.1,10.6,16,11z');

        // Append paths to svg
        svg.appendChild(path1);
        svg.appendChild(path2);
        svg.appendChild(path3);

        return svg;
    }

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