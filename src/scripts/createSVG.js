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

// Create github SVG function
function createGitHubSVG() {
    // Please note that this svg is taken from  https://www.iconfinder.com

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');

    // Create svg attribute(s) and clas(es)
    svg.setAttribute("id", "Layer_1");
    svg.setAttribute("style", "enable-background:new 0 0 32 32");
    svg.setAttribute('viewBox', '0 0 32 32');

    // Create path 1
    path1.classList.add('st0');
    path1.setAttribute('clip-rule', 'evenodd');
    path1.setAttribute('fill-rule', 'evenodd');
    path1.setAttribute('d', 'M16.003,0C7.17,0,0.008,7.162,0.008,15.997  c0,7.067,4.582,13.063,10.94,15.179c0.8,0.146,1.052-0.328,1.052-0.752c0-0.38,0.008-1.442,0-2.777  c-4.449,0.967-5.371-2.107-5.371-2.107c-0.727-1.848-1.775-2.34-1.775-2.34c-1.452-0.992,0.109-0.973,0.109-0.973  c1.605,0.113,2.451,1.649,2.451,1.649c1.427,2.443,3.743,1.737,4.654,1.329c0.146-1.034,0.56-1.739,1.017-2.139  c-3.552-0.404-7.286-1.776-7.286-7.906c0-1.747,0.623-3.174,1.646-4.292C7.28,10.464,6.73,8.837,7.602,6.634  c0,0,1.343-0.43,4.398,1.641c1.276-0.355,2.645-0.532,4.005-0.538c1.359,0.006,2.727,0.183,4.005,0.538  c3.055-2.07,4.396-1.641,4.396-1.641c0.872,2.203,0.323,3.83,0.159,4.234c1.023,1.118,1.644,2.545,1.644,4.292  c0,6.146-3.74,7.498-7.304,7.893C19.479,23.548,20,24.508,20,26c0,2,0,3.902,0,4.428c0,0.428,0.258,0.901,1.07,0.746  C27.422,29.055,32,23.062,32,15.997C32,7.162,24.838,0,16.003,0z');

    // Append paths to svg
    svg.appendChild(path1);

    return svg;
}

// Create instagram SVG function
function createInstagramSVG() {
    // Please note that this svg is taken from  https://www.iconfinder.com

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    const path2 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')

    // Create svg attribute(s) and clas(es)
    svg.setAttribute("id", "Layer_1");
    svg.setAttribute("style", "enable-background:new 0 0 56.7 56.7");
    svg.setAttribute('viewBox', '0 0 56.7 56.7');

    // Create path 1
    path1.setAttribute('d', 'M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z');

    // Create circle
    circle.setAttribute('cx', '41.5');
    circle.setAttribute('cy', '16.4');
    circle.setAttribute('r', '2.9');

    // Create path 2
    path2.setAttribute('d', 'M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.6,39.9c0,3.1-1.1,5.6-2.9,7.3s-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3c1.7-1.7,4.3-2.6,7.3-2.6h20.6c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9L48.6,39.9z');

    // Append paths to svg
    svg.appendChild(path1);
    svg.appendChild(circle);
    svg.appendChild(path2);

    return svg;
}

// Create twitter/X SVG function
function createTwitterSVG() {
    // Please note that this svg is taken from  https://www.iconfinder.com

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');

    // Create svg attribute(s) and clas(es)
    svg.setAttribute('viewBox', '0.254 0.25 500 451.95400000000006');

    // Create path 1
    path1.setAttribute('d', 'M394.033.25h76.67L303.202 191.693l197.052 260.511h-154.29L225.118 294.205 86.844 452.204H10.127l179.16-204.77L.254.25H158.46l109.234 144.417zm-26.908 406.063h42.483L135.377 43.73h-45.59z');

    // Append paths to svg
    svg.appendChild(path1);

    return svg;
}

// Create rating heart SVG function
function createRatingHeartSVG() {
    // Please note that this svg is taken from  https://www.iconfinder.com

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    const path1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    
    // Create svg attribute(s) and clas(es)
    svg.setAttribute('height', '24');
    svg.setAttribute('width', '24');

    // Create g attribute(s) and clas(es)
    g.setAttribute('transform', 'translate(0 -1028.4)');

    // Create path 1
    path1.setAttribute('d', 'm7 1031.4c-1.5355 0-3.0784 0.5-4.25 1.7-2.3431 2.4-2.2788 6.1 0 8.5l9.25 9.8 9.25-9.8c2.279-2.4 2.343-6.1 0-8.5-2.343-2.3-6.157-2.3-8.5 0l-0.75 0.8-0.75-0.8c-1.172-1.2-2.7145-1.7-4.25-1.7z');
    path1.setAttribute('fill', '#C0392B');

    // Append path to g tag
    g.appendChild(path1);

    // Append paths to svg
    svg.appendChild(g);

    return svg;
};

// Create checkout SVG function
function createCheckoutSVG() {
    // Please note that this svg is taken from  https://www.iconfinder.com

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    
    // Create svg attribute(s) and clas(es)
    svg.setAttribute('viewBox', '0 0 576 512');

    // Create path 1
    path1.setAttribute('d', 'M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z');

    // Append paths to svg
    svg.appendChild(path1);

    return svg;
};

// Create exit SVG function
function createExitSVG() {
    // Please note that this svg is taken from  https://www.iconfinder.com

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    
    // Create svg attribute(s) and clas(es)
    svg.setAttribute('viewBox', '0 0 24 24');

    // Create path 1
    path1.setAttribute('d', 'M14.8,12l3.6-3.6c0.8-0.8,0.8-2,0-2.8c-0.8-0.8-2-0.8-2.8,0L12,9.2L8.4,5.6c-0.8-0.8-2-0.8-2.8,0   c-0.8,0.8-0.8,2,0,2.8L9.2,12l-3.6,3.6c-0.8,0.8-0.8,2,0,2.8C6,18.8,6.5,19,7,19s1-0.2,1.4-0.6l3.6-3.6l3.6,3.6   C16,18.8,16.5,19,17,19s1-0.2,1.4-0.6c0.8-0.8,0.8-2,0-2.8L14.8,12z');

    // Append paths to svg
    svg.appendChild(path1);

    return svg;
};

// Create location svg function
function createLocationSVG() {
    // Please note that this svg is taken from  https://www.iconfinder.com

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    const path2 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    
    // Create svg attribute(s) and clas(es)
    svg.setAttribute('viewBox', '0 0 48 48');
    svg.setAttribute('height', '48');
    svg.setAttribute('width', '48');

    // Create path 1
    path1.setAttribute('d', 'M24 4c-7.73 0-14 6.27-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.73-6.27-14-14-14zm0 19c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z');
    
    // Create path 2
    path2.setAttribute('d', 'M0 0h48v48h-48z');
    path2.setAttribute('fill', 'none');

    // Append paths to svg
    svg.appendChild(path1);
    svg.appendChild(path2);

    return svg;
}

// Create phone svg function
function createPhoneSVG() {
    // Please note that this svg is taken from  https://www.iconfinder.com

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    
    // Create svg attribute(s) and clas(es)
    svg.setAttribute('viewBox', '0 0 139 139');
    svg.setAttribute('enable-background', '0 0 139 139');

    // Create path 1
    path1.setAttribute('d', 'M67.317,81.952c-9.284-7.634-15.483-17.054-18.742-22.414l-2.431-4.583c0.85-0.912,7.332-7.853,10.141-11.619  c3.53-4.729-1.588-9-1.588-9S40.296,19.933,37.014,17.076c-3.282-2.861-7.06-1.272-7.06-1.272  c-6.898,4.457-14.049,8.332-14.478,26.968C15.46,60.22,28.705,78.216,43.028,92.148c14.346,15.734,34.043,31.504,53.086,31.486  c18.634-0.425,22.508-7.575,26.965-14.473c0,0,1.59-3.775-1.268-7.06c-2.86-3.284-17.265-17.688-17.265-17.688  s-4.268-5.119-8.998-1.586c-3.525,2.635-9.855,8.496-11.38,9.917C84.171,92.749,73.582,87.104,67.317,81.952z');
    
    // Append paths to svg
    svg.appendChild(path1);

    return svg;
}

// Create email svg function
function createEmailSVG() {
    // Please note that this svg is taken from  https://www.iconfinder.com

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    
    // Create svg attribute(s) and clas(es)
    svg.setAttribute('viewBox', '0 0 32 32');

    // Create path 1
    path1.setAttribute('d', 'M0 4 L0 6 L16 16 L32 6 L32 4 z M0 9 L0 28 L32 28 L32 9 L16 19 z');
    
    // Append paths to svg
    svg.appendChild(path1);

    return svg;
}

// Create home svg function
function createHomeSVG() {
    // Please note that this svg is taken from  https://www.iconfinder.com

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    
    // Create svg attribute(s) and clas(es)
    svg.setAttribute('viewBox', '0 0 24 24');

    // Create path 1
    path1.setAttribute('d', 'M12,3c0,0-6.186,5.34-9.643,8.232C2.154,11.416,2,11.684,2,12c0,0.553,0.447,1,1,1h2v7c0,0.553,0.447,1,1,1h3  c0.553,0,1-0.448,1-1v-4h4v4c0,0.552,0.447,1,1,1h3c0.553,0,1-0.447,1-1v-7h2c0.553,0,1-0.447,1-1c0-0.316-0.154-0.584-0.383-0.768  C18.184,8.34,12,3,12,3z');
    
    // Append paths to svg
    svg.appendChild(path1);

    return svg;
}

// Create info svg function
function createInfoSVG() {
    // Please note that this svg is taken from  https://www.iconfinder.com

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    
    // Create svg attribute(s) and clas(es)
    svg.setAttribute('viewBox', '0 0 16 16');

    // Create path 1
    path1.setAttribute('d', 'm9.708 6.075-3.024.379-.108.502.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325-.363 0-.494-.255-.402-.704l1.323-6.208Zm.091-2.755a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0Z');
    
    // Append paths to svg
    svg.appendChild(path1);

    return svg;
}



export  {createCoffeeSVG, createGitHubSVG, createTwitterSVG, createInstagramSVG, createRatingHeartSVG, createCheckoutSVG, createExitSVG, createLocationSVG, createPhoneSVG, createEmailSVG, createInfoSVG, createHomeSVG};