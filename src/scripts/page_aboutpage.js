import contentpage from './contentPage.js';

const aboutpage = function () {
    let container;

    const createPage = () => {
        // Define page
        container = document.createElement('div');

        container.textContent = 'About Page';

        // Add attribute(s) and class(es) to page
        container.classList.add('page');
        container.classList.add('aboutpage');
        
        contentpage.appendContentPage(container);
    };

    const removePage = () => {
        contentpage.removeContentPage(container);
        container = undefined;
    };

    return {
        createPage,
        removePage,
    }
}();

export default aboutpage;