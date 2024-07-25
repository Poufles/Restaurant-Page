const content = function () {
    const body = document.querySelector('body');

    const contentBody = document.createElement('div');
    contentBody.setAttribute('id', 'content');
    body.appendChild(contentBody);

    const appendContentPage = (page) => {
        contentBody.appendChild(page);
    };
    
    const prependContentPage = (page) => {
        contentBody.prepend(page);
    };

    const removeContentPage = (page) => {
        contentBody.removeChild(page);
    };

    return {
        appendContentPage,
        prependContentPage,
        removeContentPage,
    }
}();

export default content;