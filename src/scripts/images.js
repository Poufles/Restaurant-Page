// Cuppyccino photos
import c1 from '../assets/pexels-oznur-taskan-172633297-12896257.jpg';
import c2 from '../assets/pexels-oznur-taskan-172633297-12896257.jpg';
import c3 from '../assets/pexels-oznur-taskan-172633297-12896257.jpg';
import c4 from '../assets/pexels-oznur-taskan-172633297-12896257.jpg';
import c5 from '../assets/pexels-oznur-taskan-172633297-12896257.jpg';
import c6 from '../assets/pexels-oznur-taskan-172633297-12896257.jpg';
import c7 from '../assets/pexels-oznur-taskan-172633297-12896257.jpg';

// Macchiee photos
import m1 from '../assets/pexels-tyler-nix-1259808-2396220.jpg';
import m2 from '../assets/pexels-oznur-taskan-172633297-12896257.jpg';
import m3 from '../assets/pexels-oznur-taskan-172633297-12896257.jpg';
import m4 from '../assets/pexels-oznur-taskan-172633297-12896257.jpg';

// Expressiee photos
import e1 from '../assets/pexels-rachel-claire-5865232.jpg';
import e2 from '../assets/pexels-oznur-taskan-172633297-12896257.jpg';
import e3 from '../assets/pexels-oznur-taskan-172633297-12896257.jpg';
import e4 from '../assets/pexels-oznur-taskan-172633297-12896257.jpg';
import e5 from '../assets/pexels-oznur-taskan-172633297-12896257.jpg';
import e6 from '../assets/pexels-oznur-taskan-172633297-12896257.jpg';

const images = function images() {
    const imageArr = [];

    // Initialize all images
    imageArr.push(c1);
    imageArr.push(c2);
    imageArr.push(c3);
    imageArr.push(c4);
    imageArr.push(c5);
    imageArr.push(c6);
    imageArr.push(c7);

    imageArr.push(m1);
    imageArr.push(m2);
    imageArr.push(m3);
    imageArr.push(m4);

    imageArr.push(e1);
    imageArr.push(e2);
    imageArr.push(e3);
    imageArr.push(e4);
    imageArr.push(e5);
    imageArr.push(e6);
    
    function createImage(path) {
        let image;
        image = document.createElement('img');
        image.src = path;

        return image;
    };

    const getImages = () => imageArr;

    return {
        createImage,
        getImages
    };
}();

export default images;