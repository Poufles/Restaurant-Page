const image = function () {
    let image;
    
    function createImage(path) {
        image = document.createElement('img');
        image.src = path;

        return image;
    };

    const deleteImage = (parent) => {
        parent.removeChild(image);
    }

    return {
        createImage,
        deleteImage,
    };
}();

export default image;