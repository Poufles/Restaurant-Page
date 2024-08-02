// Cuppyccino photos
import c1 from '../assets/pexels-oznur-taskan-172633297-12896257.jpg';
import c2 from '../assets/pexels-tyler-nix-1259808-2396220.jpg';
import c3 from '../assets/pexels-dilan-aktay-287423754-14464236.jpg';
import c4 from '../assets/pexels-rachel-claire-5865232.jpg';
import c5 from '../assets/pexels-chevanon-312418.jpg';
import c6 from '../assets/pexels-fallon-michael-1928485-3551717.jpg';
import c7 from '../assets/pexels-marta-dzedyshko-1042863-2067399.jpg';

// Macchiee photos
import m1 from '../assets/pexels-nikita-krasnov-5999644-10267950.jpg';
import m2 from '../assets/moein-moradi-mDnp0CxgU3c-unsplash.jpg';
import m3 from '../assets/nathan-dumlao-llib1mkWXlE-unsplash.jpg';
import m4 from '../assets/jeanie-de-klerk-hmLY7GiNFyE-unsplash.jpg';

// Expressiee photos
import e1 from '../assets/pexels-ryan-horn-1218656-2318017.jpg';
import e2 from '../assets/pexels-vovaflame-3704460.jpg';
import e3 from '../assets/front-view-cup-cappuccino-with-sugar.jpg';
import e4 from '../assets/pexels-rachel-claire-5865232.jpg';
import e5 from '../assets/pexels-nerosable-7692252.jpg';
import e6 from '../assets/pexels-esra-yilmaz-314919781-14661807.jpg';

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