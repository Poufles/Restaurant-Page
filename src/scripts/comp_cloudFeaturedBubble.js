function createBubbleText () {
    const wrapper = document.createElement('div');
    // Add attribute(s) and class(es) to wrapper
    wrapper.classList.add('wrapper-bubble-text');

    const bubbleText = (name, price, desc) => {
        const oldBubble = wrapper.querySelector('.bubble-text');
        if (oldBubble != undefined) {
            // Delete bubble
            wrapper.removeChild(oldBubble);
        };

        // Create new variables
        const bubble = document.createElement('div');
        const featuredText = document.createElement('p');
        const featuredPrice = document.createElement('p');
        const featuredDesc = document.createElement('div');
        const bubbleAction = document.createElement('button');

        // Add attribute(s) and class(es) to bubble action
        bubbleAction.classList.add('bubble-action');
        // Add text to bubble action
        bubbleAction.textContent = 'Order Now';

        // Add attribute(s) and class(es) to featured description
        featuredDesc.classList.add('featured-desc');
        // Add text to featured description
        featuredDesc.textContent = desc;

        // Add attribute(s) and class(es) to price
        featuredPrice.classList.add('featured-price');
        featuredPrice.setAttribute('id', 'price');
        // Add text to price
        featuredPrice.textContent = `| ${price}`;

        // Add attribute(s) and class(es) to featured text
        featuredText.classList.add('featured-name');
        // Add text to featured text
        featuredText.textContent = name;

        // Add attribute(s) and class(es) to bubble
        bubble.classList.add('bubble-text');
        // Append all child to bubble 
        bubble.appendChild(featuredText);
        bubble.appendChild(featuredPrice)
        bubble.appendChild(featuredDesc);
        bubble.appendChild(bubbleAction);

        // Append bubble to wrapper
        wrapper.appendChild(bubble);
    };

    const getComponent = () => wrapper

    return {
        bubbleText,
        getComponent,
    }
};

export default createBubbleText;