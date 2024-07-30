import { createGitHubSVG, createInstagramSVG, createTwitterSVG } from "./createSVG.js";

function createFooter() {
    const year = new Date().getFullYear();
    const footer = document.createElement('footer');
    const disclaimerDetail = document.createElement('div');
    const disclaimer = document.createElement('p');
    const disclaimerText = document.createElement('p');
    const brandName = document.createElement('span');
    const authorDetail = document.createElement('div');
    const copyrightAuthor = document.createElement('p');
    const socialContainer = document.createElement('ul');

    // Create svgs
    // Twitter / X
    const xSVG = createTwitterSVG();
    // Instagram
    const iSVG = createInstagramSVG();
    // Github
    const gitSVG = createGitHubSVG();

    // Put svgs to an array
    const svgArr = [];
    svgArr.push(gitSVG);
    svgArr.push(iSVG);
    svgArr.push(xSVG);

    // Create links
    const twitter = 'https://x.com/Vqliant';
    const instagram = 'https://www.instagram.com/poufsadev/';
    const github = 'https://github.com/Poufles';

    // Put links to an array
    const linkArr = [];
    linkArr.push(github);
    linkArr.push(instagram);
    linkArr.push(twitter);

    // Create social items
    for (let iter = 0; iter < svgArr.length; ++iter) {
        const anchor = document.createElement('a');
        const item = document.createElement('li');

        // Append svg to anchor
        anchor.appendChild(svgArr[iter]);
        // Append attribute(s) and class(es) to the anchor
        anchor.href = linkArr[iter];
        anchor.classList.add('active');

        // Append anchor to item
        item.appendChild(anchor)
        // Add attribute(s) and class(es) to the item
        item.classList.add(`item-${iter + 1}`);

        // Append item to its socials
        socialContainer.appendChild(item);
    };

    // Add attribute(s) and class(es) to the socials
    socialContainer.classList.add('socials');

    // Add text to the copyright author
    copyrightAuthor.textContent = 
        `All Rights Reserved @ poufsadev ${year}`;
    
    // Add attribute(s) and class(es) to the copyright author
    copyrightAuthor.classList.add('copyright-author');

    // Append each container to the author detial
    authorDetail.appendChild(copyrightAuthor);
    authorDetail.appendChild(socialContainer);
    authorDetail.appendChild(disclaimer)

    // Add attribute(s) and class(es) to the author detail
    authorDetail.classList.add('author-detail');

    // Create text for the disclaimer text
    const brand = 'Cuppy';
    const text = 
        'is a work of fiction. Any names, products, places, and incidents either are products of the author’s imagination or are used fictitiously. Any resemblance to actual events or locales names is entirely coincidental';
    const textArr = [];
    textArr.push(brand);
    textArr.push(text);

    // Add attribute(s) and class(es) to the brand name
    brandName.classList.add('brand-name');

    // Append brand name to the disclaimer text
    disclaimerText.appendChild(brandName);
    // Add the rest of the text to the disclaimer text
    disclaimerText.innerHTML = `<span class="brand-name">${textArr[0]}</span> ${textArr[1]}`;

    // Add attribute(s) and class(es) to the disclaimer text
    disclaimerText.classList.add('disclaimer-text');

    // Add text to disclaimer
    disclaimer.textContent = 'Disclaimer';

    // Add attribute(s) and class(es) to the disclaimer
    disclaimer.classList.add('disclaimer');

    // Append disclaimer texts to the detail
    disclaimerDetail.appendChild(disclaimer);
    disclaimerDetail.appendChild(disclaimerText);

    // Add attribute(s) and class(es) to the disclaimer detail
    disclaimerDetail.classList.add('disclaimer-detail');

    // Append all to the footer
    footer.appendChild(disclaimerDetail);
    footer.appendChild(authorDetail);

    return footer;
};

export default createFooter;