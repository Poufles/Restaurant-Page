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

export  {createCoffeeSVG, createGitHubSVG, createTwitterSVG, createInstagramSVG};