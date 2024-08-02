/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/comp_cloudFeaturedBubble.js":
/*!*************************************************!*\
  !*** ./src/scripts/comp_cloudFeaturedBubble.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createBubbleText() {
  var wrapper = document.createElement('div');
  // Add attribute(s) and class(es) to wrapper
  wrapper.classList.add('wrapper-bubble-text');
  var bubbleText = function bubbleText(name, price, desc) {
    var oldBubble = wrapper.querySelector('.bubble-text');
    if (oldBubble != undefined) {
      // Delete bubble
      wrapper.removeChild(oldBubble);
    }
    ;

    // Create new variables
    var bubble = document.createElement('div');
    var featuredText = document.createElement('p');
    var featuredPrice = document.createElement('p');
    var featuredDesc = document.createElement('p');
    var bubbleAction = document.createElement('button');

    // Add attribute(s) and class(es) to bubble action
    bubbleAction.classList.add('bubble-action');
    // Add text to bubble action
    bubbleAction.textContent = 'Order Now';

    // // Add attribute(s) and class(es) to featured description
    // featuredDesc.classList.add('featured-desc');
    // // Add text to featured description
    // featuredDesc.textContent = desc;

    // Add attribute(s) and class(es) to price
    featuredPrice.classList.add('featured-price');
    featuredPrice.setAttribute('id', 'price');
    // Add text to price
    featuredPrice.textContent = "$".concat(price);

    // Add attribute(s) and class(es) to featured text
    featuredText.classList.add('featured-name');
    // Add text to featured text
    featuredText.textContent = name;

    // Add attribute(s) and class(es) to bubble
    bubble.classList.add('bubble-text');
    // Append all child to bubble 
    bubble.appendChild(featuredText);
    bubble.appendChild(featuredPrice);
    // bubble.appendChild(featuredDesc);
    bubble.appendChild(bubbleAction);

    // Append bubble to wrapper
    wrapper.appendChild(bubble);
  };
  var getComponent = function getComponent() {
    return wrapper;
  };
  return {
    bubbleText: bubbleText,
    getComponent: getComponent
  };
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createBubbleText);

/***/ }),

/***/ "./src/scripts/comp_footer.js":
/*!************************************!*\
  !*** ./src/scripts/comp_footer.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createSVG_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createSVG.js */ "./src/scripts/createSVG.js");

function createFooter() {
  var year = new Date().getFullYear();
  var footer = document.createElement('footer');
  var disclaimerDetail = document.createElement('div');
  var disclaimer = document.createElement('p');
  var disclaimerText = document.createElement('p');
  var brandName = document.createElement('span');
  var authorDetail = document.createElement('div');
  var copyrightAuthor = document.createElement('p');
  var socialContainer = document.createElement('ul');

  // Create svgs
  // Twitter / X
  var xSVG = (0,_createSVG_js__WEBPACK_IMPORTED_MODULE_0__.createTwitterSVG)();
  // Instagram
  var iSVG = (0,_createSVG_js__WEBPACK_IMPORTED_MODULE_0__.createInstagramSVG)();
  // Github
  var gitSVG = (0,_createSVG_js__WEBPACK_IMPORTED_MODULE_0__.createGitHubSVG)();

  // Put svgs to an array
  var svgArr = [];
  svgArr.push(gitSVG);
  svgArr.push(iSVG);
  svgArr.push(xSVG);

  // Create links
  var twitter = 'https://x.com/Vqliant';
  var instagram = 'https://www.instagram.com/poufsadev/';
  var github = 'https://github.com/Poufles';

  // Put links to an array
  var linkArr = [];
  linkArr.push(github);
  linkArr.push(instagram);
  linkArr.push(twitter);

  // Create social items
  for (var iter = 0; iter < svgArr.length; ++iter) {
    var anchor = document.createElement('a');
    var item = document.createElement('li');

    // Append svg to anchor
    anchor.appendChild(svgArr[iter]);
    // Append attribute(s) and class(es) to the anchor
    anchor.href = linkArr[iter];
    anchor.classList.add('active');

    // Append anchor to item
    item.appendChild(anchor);
    // Add attribute(s) and class(es) to the item
    item.classList.add("item-".concat(iter + 1));

    // Append item to its socials
    socialContainer.appendChild(item);
  }
  ;

  // Add attribute(s) and class(es) to the socials
  socialContainer.classList.add('socials');

  // Add text to the copyright author
  copyrightAuthor.textContent = "All Rights Reserved @ poufsadev ".concat(year);

  // Add attribute(s) and class(es) to the copyright author
  copyrightAuthor.classList.add('copyright-author');

  // Append each container to the author detial
  authorDetail.appendChild(copyrightAuthor);
  authorDetail.appendChild(socialContainer);
  authorDetail.appendChild(disclaimer);

  // Add attribute(s) and class(es) to the author detail
  authorDetail.classList.add('author-detail');

  // Create text for the disclaimer text
  var brand = 'Cuppy';
  var text = 'is a work of fiction. Any names, products, places, and incidents either are products of the author’s imagination or are used fictitiously. Any resemblance to actual events or locales names is entirely coincidental';
  var textArr = [];
  textArr.push(brand);
  textArr.push(text);

  // Add attribute(s) and class(es) to the brand name
  brandName.classList.add('brand-name');

  // Append brand name to the disclaimer text
  disclaimerText.appendChild(brandName);
  // Add the rest of the text to the disclaimer text
  disclaimerText.innerHTML = "<span class=\"brand-name\">".concat(textArr[0], "</span> ").concat(textArr[1]);

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
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createFooter);

/***/ }),

/***/ "./src/scripts/comp_loading.js":
/*!*************************************!*\
  !*** ./src/scripts/comp_loading.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createSVG_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createSVG.js */ "./src/scripts/createSVG.js");

var loading = function () {
  var component;

  // Create component function
  var createComponent = function createComponent() {
    var wrapperScreen = document.createElement('div');
    var loadingScreen = document.createElement('div');
    var loadingStripArr = [];
    var coffeeSVG = (0,_createSVG_js__WEBPACK_IMPORTED_MODULE_0__.createCoffeeSVG)();
    var loadingText = document.createElement('p');

    // Create loading strips
    for (var iter = 0; iter < 5; ++iter) {
      var strip = document.createElement('div');
      // Adding attribute(s) and class(es)
      strip.classList.add('strip');
      strip.setAttribute('style', "--_strip-delay: 0.".concat(iter * 2, "s"));
      // Add strip to array
      loadingStripArr.push(strip);
    }
    ;

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
    for (var _iter = 0; _iter < 5; ++_iter) {
      loadingScreen.appendChild(loadingStripArr[_iter]);
    }
    ;

    // Add attribute(s) and class(es) to wrapper
    wrapperScreen.classList.add('wrapper-loading-screen');
    // Append loading screen to its wrapper
    wrapperScreen.appendChild(loadingScreen);

    // Add element to component variable
    component = wrapperScreen;
    document.querySelector('body').prepend(wrapperScreen);
  };

  // Get component function
  var getComponent = function getComponent() {
    return component;
  };

  // Play animation function
  var playAnimation = function playAnimation() {
    var wrapper = component;
    var strips = wrapper.querySelectorAll('.strip');
    var coffeSVG = wrapper.querySelector('svg');

    // Adding animation classes
    wrapper.classList.add('active');
    wrapper.classList.add('loading_strip');
    strips.forEach(function (strip) {
      strip.classList.add('loading_strip');
    });
    coffeSVG.classList.add('coffee_bounce');

    // Removing animation classes
    setTimeout(function () {
      wrapper.classList.remove('active');
      wrapper.classList.remove('loading_strip');
      strips.forEach(function (strip) {
        strip.classList.remove('loading_strip');
      });
      coffeSVG.classList.remove('coffee_bounce');
    }, 5000);
  };
  return {
    createComponent: createComponent,
    getComponent: getComponent,
    playAnimation: playAnimation
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loading);

/***/ }),

/***/ "./src/scripts/comp_navbar.js":
/*!************************************!*\
  !*** ./src/scripts/comp_navbar.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _comp_loading_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comp_loading.js */ "./src/scripts/comp_loading.js");
/* harmony import */ var _page_homepage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page_homepage.js */ "./src/scripts/page_homepage.js");
/* harmony import */ var _page_cuppiespage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page_cuppiespage.js */ "./src/scripts/page_cuppiespage.js");
/* harmony import */ var _page_aboutpage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page_aboutpage.js */ "./src/scripts/page_aboutpage.js");
/* harmony import */ var _createSVG_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createSVG.js */ "./src/scripts/createSVG.js");





var navbar = function () {
  var navbar = document.createElement('header');
  var backdrop = document.createElement('div');
  backdrop.classList.add('nav-backdrop');
  backdrop.classList.add('inactive');
  var createComponent = function createComponent() {
    navbar = document.createElement('header');
    var nav = document.createElement('nav');
    var actionContainer = document.createElement('div');
    var pageButton = document.createElement('button');
    var brandName = document.createElement('p');
    var pagesContainer = document.createElement('ul');

    // Create proper SVGs
    var homeSVG = (0,_createSVG_js__WEBPACK_IMPORTED_MODULE_4__.createHomeSVG)();
    var coffeeSVG = (0,_createSVG_js__WEBPACK_IMPORTED_MODULE_4__.createCoffeeSVG)();
    var infoSVG = (0,_createSVG_js__WEBPACK_IMPORTED_MODULE_4__.createInfoSVG)();
    // Add SVGs to an array
    var svgArr = [];
    svgArr.push(homeSVG);
    svgArr.push(coffeeSVG);
    svgArr.push(infoSVG);

    // Create text for each svg
    var home = 'Home';
    var cuppies = 'Cuppies';
    var about = 'About';
    // Add texts to an array
    var textArr = [];
    textArr.push(home);
    textArr.push(cuppies);
    textArr.push(about);

    // Create button array
    var buttonArr = [];

    // Create button item
    for (var iter = 0; iter < svgArr.length; ++iter) {
      var item = document.createElement('li');
      var itemButton = document.createElement('button');
      var text = document.createElement('p');

      // Add text to text
      text.textContent = textArr[iter];
      // Add class to text
      text.classList.add('text');

      // Append SVG and text to item button
      itemButton.appendChild(svgArr[iter]);
      itemButton.appendChild(text);
      // Add attribute(s) and class(es) to button
      itemButton.setAttribute('type', 'button');
      itemButton.dataset.page = "".concat(textArr[iter].toLowerCase());

      // Append item button to pages container
      item.appendChild(itemButton);
      // Add class(es) to item
      item.classList.add('item');
      item.classList.add('hide');

      // Add item to button array
      buttonArr.push(item);

      // Append item to pages container
      pagesContainer.appendChild(item);
    }
    ;

    // Add attribute(s) and class(es) to pages container
    pagesContainer.classList.add('pages');

    // Add text to brand name
    brandName.textContent = 'Cuppy';
    // Add attribute(s) and class(es) to brand name
    brandName.classList.add('brand-name');

    // Append brand name to page button
    pageButton.appendChild(brandName);
    // Attribute(s) and class(es) to page button
    pageButton.classList.add('page-container');

    // Append page button to action container
    actionContainer.appendChild(pageButton);
    // Add attribute(s) and class(es) to action container
    actionContainer.classList.add('action');

    // Append containers to nav
    nav.appendChild(actionContainer);
    nav.appendChild(pagesContainer);

    // Append nav to component
    navbar.appendChild(nav);
    // Add attribute(s) and class(es) to navbar
    navbar.classList.add('comp_nav');

    // Add event listener to page button
    var _loop = function _loop(_iter) {
      pageButton.addEventListener('mouseup', function () {
        if (!buttonArr[_iter].classList.contains('hide')) {
          backdrop.classList.add('inactive');
          buttonArr[_iter].classList.add('hide');
        } else {
          backdrop.classList.remove('inactive');
          buttonArr[_iter].classList.remove('hide');
        }
        ;
      });

      // Add event listener to backdrop
      backdrop.addEventListener('mouseup', function () {
        backdrop.classList.add('inactive');
        buttonArr[_iter].classList.add('hide');
      });
    };
    for (var _iter = 0; _iter < buttonArr.length; ++_iter) {
      _loop(_iter);
    }
    ;
    var homeButton = buttonArr[0];
    var cuppiesButton = buttonArr[1];
    var aboutButton = buttonArr[2];
    homeButton.addEventListener('mouseup', function () {
      if (document.querySelector('.homepage') === null) {
        var _cuppies = document.querySelector('.page.cuppiespage');
        var currentPage = _cuppies !== null ? _page_cuppiespage_js__WEBPACK_IMPORTED_MODULE_2__["default"] : _page_aboutpage_js__WEBPACK_IMPORTED_MODULE_3__["default"];
        for (var _iter2 = 0; _iter2 < buttonArr.length; ++_iter2) {
          buttonArr[_iter2].classList.add('hide');
        }
        ;
        _comp_loading_js__WEBPACK_IMPORTED_MODULE_0__["default"].playAnimation();
        setTimeout(function () {
          backdrop.classList.add('inactive');
          currentPage.removePage();
          _page_homepage_js__WEBPACK_IMPORTED_MODULE_1__["default"].createPage();
        }, 2000);
      }
      ;
    });
    cuppiesButton.addEventListener('mouseup', function () {
      if (document.querySelector('.cuppiespage') === null) {
        var _home = document.querySelector('.page.homepage');
        var currentPage = _home !== null ? _page_homepage_js__WEBPACK_IMPORTED_MODULE_1__["default"] : _page_aboutpage_js__WEBPACK_IMPORTED_MODULE_3__["default"];
        for (var _iter3 = 0; _iter3 < buttonArr.length; ++_iter3) {
          buttonArr[_iter3].classList.add('hide');
        }
        ;
        _comp_loading_js__WEBPACK_IMPORTED_MODULE_0__["default"].playAnimation();
        setTimeout(function () {
          backdrop.classList.add('inactive');
          currentPage.removePage();
          _page_cuppiespage_js__WEBPACK_IMPORTED_MODULE_2__["default"].createPage();
        }, 2000);
      }
      ;
    });
    aboutButton.addEventListener('mouseup', function () {
      if (document.querySelector('.aboutpage') === null) {
        var _home2 = document.querySelector('.page.homepage');
        var currentPage = _home2 !== null ? _page_homepage_js__WEBPACK_IMPORTED_MODULE_1__["default"] : _page_cuppiespage_js__WEBPACK_IMPORTED_MODULE_2__["default"];
        for (var _iter4 = 0; _iter4 < buttonArr.length; ++_iter4) {
          buttonArr[_iter4].classList.add('hide');
        }
        ;
        _comp_loading_js__WEBPACK_IMPORTED_MODULE_0__["default"].playAnimation();
        setTimeout(function () {
          backdrop.classList.add('inactive');
          currentPage.removePage();
          _page_aboutpage_js__WEBPACK_IMPORTED_MODULE_3__["default"].createPage();
        }, 2000);
      }
      ;
    });
  };
  var getNavbar = function getNavbar() {
    return navbar;
  };
  var getBackdrop = function getBackdrop() {
    return backdrop;
  };
  return {
    createComponent: createComponent,
    getNavbar: getNavbar,
    getBackdrop: getBackdrop
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navbar);

/***/ }),

/***/ "./src/scripts/comp_product_card_and_modal.js":
/*!****************************************************!*\
  !*** ./src/scripts/comp_product_card_and_modal.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createModal: () => (/* binding */ createModal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createSVG_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createSVG.js */ "./src/scripts/createSVG.js");
/* harmony import */ var _contentPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contentPage.js */ "./src/scripts/contentPage.js");



// Function to create the card
function createCoffeeCard(productNo, image, name, desc, price, rate) {
  var card = document.createElement('button');
  var productImg = document.createElement('img');
  var overlay = document.createElement('div');
  var productRatingContainer = document.createElement('div');
  var rating = document.createElement('p');
  var ratingSVG = (0,_createSVG_js__WEBPACK_IMPORTED_MODULE_0__.createRatingHeartSVG)();
  var productDescContainer = document.createElement('div');
  var productName = document.createElement('p');
  var productPrice = document.createElement('p');
  var productLogoContainer = document.createElement('div');
  var logo = (0,_createSVG_js__WEBPACK_IMPORTED_MODULE_0__.createCoffeeSVG)();

  // Appending logo to its container
  productLogoContainer.appendChild(logo);

  // Adding attribute(s) and class(es) for product logo container
  productLogoContainer.classList.add('product-logo');

  // Adding text to price
  productPrice.textContent = "| $".concat(price);

  // Adding attribute(s) and class(es) to price
  productPrice.classList.add('price');

  // Adding text to name
  productName.textContent = name;

  // Adding attribute(s) and class(es) to name
  productName.classList.add('name');

  // Adding name and price to its container
  productDescContainer.appendChild(productName);
  productDescContainer.appendChild(productPrice);

  // Add attribute(s) and class(es) to product desc container
  productDescContainer.classList.add('product-desc');

  // Adding text to rating
  rating.textContent = "".concat(rate, " / 5");

  // Adding attribute(s) and class(es) to rating
  rating.classList.add('rating');

  // Adding attribute(s) and class(es) to rating container
  productRatingContainer.classList.add('product-rating');

  // Adding rating and its svg to their container
  productRatingContainer.appendChild(rating);
  productRatingContainer.appendChild(ratingSVG);

  // Adding attribute(s) and class(es) to overlay
  overlay.classList.add('overlay');

  // Adding atttribute(s) and class(es) to img
  productImg.classList.add('product-img');

  // Adding image to image
  productImg.src = image;

  // Adding attribute(s) and class(es) to card
  card.dataset.product = productNo;
  card.classList.add('card');
  card.classList.add('product');
  card.classList.add('scale-1');

  // Appending containers to card
  card.appendChild(productImg);
  card.appendChild(overlay);
  card.appendChild(productRatingContainer);
  card.appendChild(productDescContainer);
  card.appendChild(productLogoContainer);

  // Adding event listener to show modal
  card.addEventListener('mouseup', function () {
    var modal = createModal(image, name, desc);
    _contentPage_js__WEBPACK_IMPORTED_MODULE_1__["default"].appendContentPage(modal);
    modal.showModal();
  });
  return card;
}
;

// Function to create modal / dialog
function createModal(image, name, desc) {
  var dialog = document.createElement('dialog');
  var dialogContainer = document.createElement('div');
  var productImg = document.createElement('img');
  var overlay = document.createElement('div');
  var exitButton = document.createElement('button');
  var exitSVG = (0,_createSVG_js__WEBPACK_IMPORTED_MODULE_0__.createExitSVG)();
  var productName = document.createElement('p');
  var bottomContainer = document.createElement('div');
  var productDesc = document.createElement('div');
  var optionContainer = document.createElement('div');
  var sizeContainer = document.createElement('div');
  var sizeText = document.createElement('p');
  var sizeButtonSmall = document.createElement('button');
  var sizeButtonMedium = document.createElement('button');
  var sizeButtonLarge = document.createElement('button');
  var quantityContainer = document.createElement('div');
  var quantity = document.createElement('p');
  var quantitySVG = (0,_createSVG_js__WEBPACK_IMPORTED_MODULE_0__.createCoffeeSVG)();
  var quantityButtonAdd = document.createElement('button');
  var quantityButtonSub = document.createElement('button');
  var actionContainer = document.createElement('div');
  var addToCartButton = document.createElement('button');
  var checkoutButton = document.createElement('button');
  var checkoutText = document.createElement('p');
  var checkoutSVG = (0,_createSVG_js__WEBPACK_IMPORTED_MODULE_0__.createCheckoutSVG)();

  // Add text to checkout text
  checkoutText.textContent = 'Checkout';

  // Append checkout text and its svg to their container
  checkoutButton.appendChild(checkoutText);
  checkoutButton.appendChild(checkoutSVG);

  // Add attribute(s) and class(es) to checkout button
  checkoutButton.setAttribute('type', 'button');
  checkoutButton.classList.add('checkout');

  // Add text to the add to cart button
  addToCartButton.textContent = 'Add To Cart';

  // Add attribute(s) and class(es) to the add to cart button
  addToCartButton.setAttribute('type', 'button');
  addToCartButton.classList.add('add-to-cart');

  // Append buttons to action container
  actionContainer.appendChild(addToCartButton);
  actionContainer.appendChild(checkoutButton);

  // Add attribute(s) and class(es) to action container
  actionContainer.classList.add('item-action');

  // Add text to quantity buttons
  quantityButtonSub.textContent = '-';
  quantityButtonAdd.textContent = '+';

  // Add attribute(s) and class(es) to quantity buttons
  quantityButtonSub.classList.add('quantity');
  quantityButtonAdd.classList.add('quantity');

  // Add text to quantity
  quantity.textContent = '1';

  // Add attribute(s) and class(es) to quantity
  quantity.dataset.quantity = 1;
  quantity.classList.add('quantity');

  // Append quantity text, buttons, and svg to their container
  quantityContainer.appendChild(quantity);
  quantityContainer.appendChild(quantitySVG);
  quantityContainer.appendChild(quantityButtonSub);
  quantityContainer.appendChild(quantityButtonAdd);

  // Add attribute(s) and class(es) to quantity container
  quantityContainer.classList.add('item-quantity');

  // Add text to size buttons
  sizeButtonLarge.textContent = 'L';
  sizeButtonMedium.textContent = 'M';
  sizeButtonSmall.textContent = 'S';

  // Add attribute(s) and class(es) to size buttons
  sizeButtonLarge.classList.add('size');
  sizeButtonMedium.classList.add('size');
  sizeButtonSmall.classList.add('size');

  // Initialize active size
  sizeButtonSmall.classList.add('active');

  // Add text to size text
  sizeText.textContent = 'Cuppy Sizes: ';

  // Add attribute(s) and class(es) to size text
  sizeText.classList.add('size-text');

  // Append size text and buttons to their container
  sizeContainer.appendChild(sizeText);
  sizeContainer.appendChild(sizeButtonSmall);
  sizeContainer.appendChild(sizeButtonMedium);
  sizeContainer.appendChild(sizeButtonLarge);

  // Add attribute(s) and class(es) to size container
  sizeContainer.classList.add('item-size');

  // Append containers to option
  optionContainer.appendChild(sizeContainer);
  optionContainer.appendChild(quantityContainer);

  // Add attribute(s) and class(es) to option container
  optionContainer.classList.add('option');

  // Add text to product desc
  productDesc.textContent = desc;

  // Add attribute(s) and class(es) to product desc
  productDesc.classList.add('item-desc');

  // Append bottom parts to their container
  bottomContainer.appendChild(productDesc);
  bottomContainer.appendChild(optionContainer);
  bottomContainer.appendChild(actionContainer);

  // Add attribute(s) and class(es) to bottom container
  bottomContainer.classList.add('bottom-part');

  // Add text to product name
  productName.textContent = name;

  // Add attribute(s) and class(es) to product name
  productName.classList.add('item-name');

  // Append svg to exit button
  exitButton.appendChild(exitSVG);

  // Add attribute(s) and class(es) to exit button
  exitButton.classList.add('exit');

  // Add attribute(s) and class(es) to overlay
  overlay.classList.add('overlay');

  // Add image to product image
  productImg.src = image;

  // Appending all dialog parts to the dialog container
  dialogContainer.appendChild(productImg);
  dialogContainer.appendChild(overlay);
  dialogContainer.appendChild(exitButton);
  dialogContainer.appendChild(productName);
  dialogContainer.appendChild(bottomContainer);

  // Adding attribute(s) and class(es) to dialog container
  dialogContainer.classList.add('dialog-container');

  // Appending the dialog container to the dialog element
  dialog.appendChild(dialogContainer);

  // Add attribute(s) and class(es) to the dialog element
  dialog.classList.add('buy-screen');

  // Add event listener to close modal
  exitButton.addEventListener('mouseup', function () {
    dialog.classList.add('exit_modal');
    setTimeout(function () {
      dialog.close();
      dialog.classList.remove('exit_modal');
      _contentPage_js__WEBPACK_IMPORTED_MODULE_1__["default"].removeContentPage(dialog);
    }, 300);
  });

  // Add event listener for the quantity buttons
  quantityButtonAdd.addEventListener('mouseup', function () {
    var el_quantity = document.querySelector('dialog p.quantity');
    var productQuantity = el_quantity.dataset.quantity;
    productQuantity++;
    el_quantity.textContent = productQuantity;
    el_quantity.dataset.quantity = productQuantity;
  });
  quantityButtonSub.addEventListener('mouseup', function () {
    var el_quantity = document.querySelector('dialog p.quantity');
    var productQuantity = el_quantity.dataset.quantity;
    productQuantity--;
    if (productQuantity >= 1) {
      el_quantity.textContent = productQuantity;
      el_quantity.dataset.quantity = productQuantity;
    }
    ;
  });
  return dialog;
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCoffeeCard);


/***/ }),

/***/ "./src/scripts/contentPage.js":
/*!************************************!*\
  !*** ./src/scripts/contentPage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var content = function () {
  var body = document.querySelector('body');
  var contentBody = document.createElement('div');
  contentBody.setAttribute('id', 'content');
  body.appendChild(contentBody);
  var appendContentPage = function appendContentPage(page) {
    contentBody.appendChild(page);
  };
  var prependContentPage = function prependContentPage(page) {
    contentBody.prepend(page);
  };
  var removeContentPage = function removeContentPage(page) {
    contentBody.removeChild(page);
  };
  return {
    appendContentPage: appendContentPage,
    prependContentPage: prependContentPage,
    removeContentPage: removeContentPage
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (content);

/***/ }),

/***/ "./src/scripts/createSVG.js":
/*!**********************************!*\
  !*** ./src/scripts/createSVG.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCheckoutSVG: () => (/* binding */ createCheckoutSVG),
/* harmony export */   createCoffeeSVG: () => (/* binding */ createCoffeeSVG),
/* harmony export */   createEmailSVG: () => (/* binding */ createEmailSVG),
/* harmony export */   createExitSVG: () => (/* binding */ createExitSVG),
/* harmony export */   createGitHubSVG: () => (/* binding */ createGitHubSVG),
/* harmony export */   createHomeSVG: () => (/* binding */ createHomeSVG),
/* harmony export */   createInfoSVG: () => (/* binding */ createInfoSVG),
/* harmony export */   createInstagramSVG: () => (/* binding */ createInstagramSVG),
/* harmony export */   createLocationSVG: () => (/* binding */ createLocationSVG),
/* harmony export */   createPhoneSVG: () => (/* binding */ createPhoneSVG),
/* harmony export */   createRatingHeartSVG: () => (/* binding */ createRatingHeartSVG),
/* harmony export */   createTwitterSVG: () => (/* binding */ createTwitterSVG)
/* harmony export */ });
// Create SVG function
var createCoffeeSVG = function createCoffeeSVG() {
  // Please note that this svg is taken from  https://www.iconfinder.com

  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  var path1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
  var path2 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
  var path3 = document.createElementNS("http://www.w3.org/2000/svg", 'path');

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
};

// Create github SVG function
function createGitHubSVG() {
  // Please note that this svg is taken from  https://www.iconfinder.com

  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  var path1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');

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

  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  var path1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
  var path2 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
  var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

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

  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  var path1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');

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

  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  var path1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');

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
}
;

// Create checkout SVG function
function createCheckoutSVG() {
  // Please note that this svg is taken from  https://www.iconfinder.com

  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  var path1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');

  // Create svg attribute(s) and clas(es)
  svg.setAttribute('viewBox', '0 0 576 512');

  // Create path 1
  path1.setAttribute('d', 'M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z');

  // Append paths to svg
  svg.appendChild(path1);
  return svg;
}
;

// Create exit SVG function
function createExitSVG() {
  // Please note that this svg is taken from  https://www.iconfinder.com

  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  var path1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');

  // Create svg attribute(s) and clas(es)
  svg.setAttribute('viewBox', '0 0 24 24');

  // Create path 1
  path1.setAttribute('d', 'M14.8,12l3.6-3.6c0.8-0.8,0.8-2,0-2.8c-0.8-0.8-2-0.8-2.8,0L12,9.2L8.4,5.6c-0.8-0.8-2-0.8-2.8,0   c-0.8,0.8-0.8,2,0,2.8L9.2,12l-3.6,3.6c-0.8,0.8-0.8,2,0,2.8C6,18.8,6.5,19,7,19s1-0.2,1.4-0.6l3.6-3.6l3.6,3.6   C16,18.8,16.5,19,17,19s1-0.2,1.4-0.6c0.8-0.8,0.8-2,0-2.8L14.8,12z');

  // Append paths to svg
  svg.appendChild(path1);
  return svg;
}
;

// Create location svg function
function createLocationSVG() {
  // Please note that this svg is taken from  https://www.iconfinder.com

  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  var path1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
  var path2 = document.createElementNS("http://www.w3.org/2000/svg", 'path');

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

  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  var path1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');

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

  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  var path1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');

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

  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  var path1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');

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

  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  var path1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');

  // Create svg attribute(s) and clas(es)
  svg.setAttribute('viewBox', '0 0 16 16');

  // Create path 1
  path1.setAttribute('d', 'm9.708 6.075-3.024.379-.108.502.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325-.363 0-.494-.255-.402-.704l1.323-6.208Zm.091-2.755a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0Z');

  // Append paths to svg
  svg.appendChild(path1);
  return svg;
}


/***/ }),

/***/ "./src/scripts/images.js":
/*!*******************************!*\
  !*** ./src/scripts/images.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_pexels_oznur_taskan_172633297_12896257_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/pexels-oznur-taskan-172633297-12896257.jpg */ "./src/assets/pexels-oznur-taskan-172633297-12896257.jpg");
/* harmony import */ var _assets_pexels_tyler_nix_1259808_2396220_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/pexels-tyler-nix-1259808-2396220.jpg */ "./src/assets/pexels-tyler-nix-1259808-2396220.jpg");
/* harmony import */ var _assets_pexels_rachel_claire_5865232_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/pexels-rachel-claire-5865232.jpg */ "./src/assets/pexels-rachel-claire-5865232.jpg");
// Cuppyccino photos








// Macchiee photos





// Expressiee photos






var images = function images() {
  var imageArr = [];

  // Initialize all images
  imageArr.push(_assets_pexels_oznur_taskan_172633297_12896257_jpg__WEBPACK_IMPORTED_MODULE_0__);
  imageArr.push(_assets_pexels_oznur_taskan_172633297_12896257_jpg__WEBPACK_IMPORTED_MODULE_0__);
  imageArr.push(_assets_pexels_oznur_taskan_172633297_12896257_jpg__WEBPACK_IMPORTED_MODULE_0__);
  imageArr.push(_assets_pexels_oznur_taskan_172633297_12896257_jpg__WEBPACK_IMPORTED_MODULE_0__);
  imageArr.push(_assets_pexels_oznur_taskan_172633297_12896257_jpg__WEBPACK_IMPORTED_MODULE_0__);
  imageArr.push(_assets_pexels_oznur_taskan_172633297_12896257_jpg__WEBPACK_IMPORTED_MODULE_0__);
  imageArr.push(_assets_pexels_oznur_taskan_172633297_12896257_jpg__WEBPACK_IMPORTED_MODULE_0__);
  imageArr.push(_assets_pexels_tyler_nix_1259808_2396220_jpg__WEBPACK_IMPORTED_MODULE_1__);
  imageArr.push(_assets_pexels_oznur_taskan_172633297_12896257_jpg__WEBPACK_IMPORTED_MODULE_0__);
  imageArr.push(_assets_pexels_oznur_taskan_172633297_12896257_jpg__WEBPACK_IMPORTED_MODULE_0__);
  imageArr.push(_assets_pexels_oznur_taskan_172633297_12896257_jpg__WEBPACK_IMPORTED_MODULE_0__);
  imageArr.push(_assets_pexels_rachel_claire_5865232_jpg__WEBPACK_IMPORTED_MODULE_2__);
  imageArr.push(_assets_pexels_oznur_taskan_172633297_12896257_jpg__WEBPACK_IMPORTED_MODULE_0__);
  imageArr.push(_assets_pexels_oznur_taskan_172633297_12896257_jpg__WEBPACK_IMPORTED_MODULE_0__);
  imageArr.push(_assets_pexels_oznur_taskan_172633297_12896257_jpg__WEBPACK_IMPORTED_MODULE_0__);
  imageArr.push(_assets_pexels_oznur_taskan_172633297_12896257_jpg__WEBPACK_IMPORTED_MODULE_0__);
  imageArr.push(_assets_pexels_oznur_taskan_172633297_12896257_jpg__WEBPACK_IMPORTED_MODULE_0__);
  function createImage(path) {
    var image;
    image = document.createElement('img');
    image.src = path;
    return image;
  }
  ;
  var getImages = function getImages() {
    return imageArr;
  };
  return {
    createImage: createImage,
    getImages: getImages
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (images);

/***/ }),

/***/ "./src/scripts/page_aboutpage.js":
/*!***************************************!*\
  !*** ./src/scripts/page_aboutpage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _contentPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contentPage.js */ "./src/scripts/contentPage.js");
/* harmony import */ var _createSVG_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createSVG.js */ "./src/scripts/createSVG.js");


var aboutpage = function () {
  var container;
  var createPage = function createPage() {
    // Define page
    container = document.createElement('div');
    var page = document.createElement('div');
    var main = document.createElement('main');
    var detailContainer = document.createElement('div');
    var title = document.createElement('h1');
    var desc = document.createElement('p');
    var contacts = document.createElement('ul');

    // Create svgs
    var locationSVG = (0,_createSVG_js__WEBPACK_IMPORTED_MODULE_1__.createLocationSVG)();
    var phoneSVG = (0,_createSVG_js__WEBPACK_IMPORTED_MODULE_1__.createPhoneSVG)();
    var emailSVG = (0,_createSVG_js__WEBPACK_IMPORTED_MODULE_1__.createEmailSVG)();

    // Create dummy information for contact
    var location = '4019 Dogwood Road Phoenix, AZ 85012';
    var phone = '+1 (966) 756-8444-xxx';
    var email = 'cuppyisaproject@theodinproject.com';

    // Contain dummy info in an array
    var dummyArr = [];
    dummyArr.push(location);
    dummyArr.push(phone);
    dummyArr.push(email);

    // Contain SVGs in an array
    var svgArr = [];
    svgArr.push(locationSVG);
    svgArr.push(phoneSVG);
    svgArr.push(emailSVG);

    // Creating items of contact
    for (var iter = 0; iter < svgArr.length; ++iter) {
      // Create an item
      var item = document.createElement('li');
      var text = document.createElement('p');

      // Add text to the text
      text.textContent = dummyArr[iter];
      // Add attribute(s) and class(es) to the text
      text.classList.add('text');

      // Get contact SVG
      var svg = svgArr[iter];

      // Append SVG and text to item
      item.appendChild(svg);
      item.appendChild(text);

      // Add attribute(s) and class(es) to the item
      item.classList.add('item');

      // Append item to contacts
      contacts.appendChild(item);
    }
    ;

    // Add attribute(s) and class(es) to the contact
    contacts.classList.add('contacts');

    // Add text to desc
    desc.textContent = 'Welcome to Cuppy ! A cozy coffee shop born from a shared dream. Nestled in a bustling city, Cuppy offers a retreat adorned with vintage furniture and the aroma of freshly brewed coffee. Each cup is a symphony of carefully selected beans, roasted to perfection. It’s a haven where artists sketch, writers muse, and friends gather over velvety lattes and homemade pie, fostering stories, dreams, and friendships with every sip.';

    // Add attribute(s) and class(es) to desc
    desc.classList.add('desc');

    // Add text to title
    title.innerHTML = 'A <span class="brand-name">Cuppy</span>  Knowledge!';

    // Add attribute(s) and class(es) to title
    title.classList.add('title');

    // Add title and desc to detail
    detailContainer.appendChild(title);
    detailContainer.appendChild(desc);

    // Add attribute(s) and class(es) to detail
    detailContainer.classList.add('detail');

    // Append detail and contact to main
    main.appendChild(detailContainer);
    main.appendChild(contacts);
    // Add attribute(s) and class(es) to main
    main.classList.add('about-container');

    // Append main to container
    container.appendChild(main);

    // Add attribute(s) and class(es) to page
    container.classList.add('page');
    container.classList.add('about-page');
    container.dataset.page = 'aboutpage';
    _contentPage_js__WEBPACK_IMPORTED_MODULE_0__["default"].appendContentPage(container);
  };
  var removePage = function removePage() {
    _contentPage_js__WEBPACK_IMPORTED_MODULE_0__["default"].removeContentPage(container);
    container = undefined;
  };
  return {
    createPage: createPage,
    removePage: removePage
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutpage);

/***/ }),

/***/ "./src/scripts/page_cuppiespage.js":
/*!*****************************************!*\
  !*** ./src/scripts/page_cuppiespage.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _contentPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contentPage.js */ "./src/scripts/contentPage.js");
/* harmony import */ var _images_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images.js */ "./src/scripts/images.js");
/* harmony import */ var _comp_cloudFeaturedBubble_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comp_cloudFeaturedBubble.js */ "./src/scripts/comp_cloudFeaturedBubble.js");
/* harmony import */ var _comp_product_card_and_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comp_product_card_and_modal.js */ "./src/scripts/comp_product_card_and_modal.js");
/* harmony import */ var _products_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products.js */ "./src/scripts/products.js");
/* harmony import */ var _comp_footer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comp_footer.js */ "./src/scripts/comp_footer.js");







var cuppiespage = function () {
  var container;
  var createPage = function createPage() {
    container = document.createElement('div');
    var hero = createHero();
    var productSection = createProductSection();
    var footer = (0,_comp_footer_js__WEBPACK_IMPORTED_MODULE_5__["default"])();

    // Append children
    container.appendChild(hero.textureOverlay);
    container.appendChild(hero.heroContainer);
    container.appendChild(productSection);
    container.appendChild(footer);

    // Add attribute(s) and class(es) to container
    container.classList.add('page');
    container.classList.add('cuppiespage');
    container.dataset.page = 'cuppiespage';
    _contentPage_js__WEBPACK_IMPORTED_MODULE_0__["default"].appendContentPage(container);
  };
  var removePage = function removePage() {
    _contentPage_js__WEBPACK_IMPORTED_MODULE_0__["default"].removeContentPage(container);
    container = undefined;
  };
  var getComponent = function getComponent() {
    return container;
  };
  return {
    createPage: createPage,
    removePage: removePage,
    getComponent: getComponent
  };
}();
function createHero() {
  // Create each tag
  var textureOverlay = document.createElement('texture-overlay');
  var heroContainer = document.createElement('div');
  var topLayer = document.createElement('div');
  var topContainer = document.createElement('div');
  var logoButton = document.createElement('button');
  var featuredContainer = document.createElement('div');
  var featuredButtonContainer = document.createElement('div');
  var bubbleListContainer = document.createElement('div');
  var bubbleList = document.createElement('ul');
  var bubbleItem1 = document.createElement('li');
  var bubbleItem2 = document.createElement('li');
  var bubbleItem3 = document.createElement('li');

  // Add text to each bubble item
  bubbleItem1.textContent = 'Authentic';
  bubbleItem2.textContent = 'Brewed';
  bubbleItem3.textContent = 'Rich';

  // Add attribute(s) and class(es) to each item
  bubbleItem1.classList.add('item');
  bubbleItem2.classList.add('item');
  bubbleItem3.classList.add('item');

  // Append each item to its list parent
  bubbleList.appendChild(bubbleItem1);
  bubbleList.appendChild(bubbleItem2);
  bubbleList.appendChild(bubbleItem3);

  // Add attribute(s) and class(es) to bubble list
  bubbleList.classList.add('featured-list');

  // Append bubble list to its container
  bubbleListContainer.appendChild(bubbleList);

  // Add attribute(s) and class(es) to bubble container
  bubbleListContainer.classList.add('wrapper-bubble-list');

  // Get products
  var products = _products_js__WEBPACK_IMPORTED_MODULE_4__.productData.getProduct();
  // Get the first Cuppyccinno as the initialized hero product
  var c1 = products[0];
  // Get first products of each category as featured
  var m1 = products[7];
  var e1 = products[11];

  // Define bubble text
  var bubbleText = (0,_comp_cloudFeaturedBubble_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  bubbleText.bubbleText(c1.name, c1.price, c1.desc);

  // Create img element with pictures
  var featuredImages = [];
  // Get images from the products array
  var img1 = _images_js__WEBPACK_IMPORTED_MODULE_1__["default"].createImage(c1.img);
  var img2 = _images_js__WEBPACK_IMPORTED_MODULE_1__["default"].createImage(m1.img);
  var img3 = _images_js__WEBPACK_IMPORTED_MODULE_1__["default"].createImage(e1.img);
  // Put images to featured images array
  featuredImages.push(img1);
  featuredImages.push(img2);
  featuredImages.push(img3);

  // Create buttons for each featured item
  for (var iter = 0; iter < 3; ++iter) {
    var button = document.createElement('button');
    var image = featuredImages[iter];

    // Set attribute(s) and class(es) to image
    image.setAttribute('style', "featured-img img-".concat(iter + 1));
    image.classList.add('featured');

    // Append image to the button
    button.appendChild(image.cloneNode());

    // Add attribute(s) and class(es) to button
    button.dataset.featuredNo = iter + 1;
    // Create an initialized active button
    if (iter === 0) {
      button.classList.add('active');
    }
    ;
    button.classList.add('bubble-item');

    // Append button to its featured bubble container
    featuredButtonContainer.appendChild(button);
  }
  ;

  // Add attribute(s) and class(es) to the featured bubble container
  featuredButtonContainer.classList.add('featured-bubble');

  // Append featured items to its container
  featuredContainer.appendChild(featuredButtonContainer);

  // Add attribute(s) and class(es) to featured container
  featuredContainer.classList.add('featured-item');

  // Add text to logo button
  logoButton.textContent = 'Cuppy';

  // Adding attribute(s) and class(es) to logo button
  logoButton.classList.add('logo');
  logoButton.classList.add('brand-name');

  // Append top components to top container
  topContainer.appendChild(logoButton);
  topContainer.appendChild(featuredContainer);
  topContainer.appendChild(bubbleText.getComponent());
  topContainer.appendChild(bubbleListContainer);

  // Add attribute(s) and class(es) to top container
  topContainer.classList.add('top-container');

  // Append top container to top layer
  topLayer.appendChild(topContainer);

  // Add attribute(s) and class(es) to top layer
  topLayer.classList.add('top-layer');

  // Create featured images
  for (var _iter = 0; _iter < 3; ++_iter) {
    var _image = featuredImages[_iter];

    // Set attribute(s) and class(es) to image
    _image.setAttribute('style', "featured-img img-".concat(_iter + 1));
    _image.dataset.featuredNo = _iter + 1;
    _image.classList.add('featured-banner');
    if (_image.dataset.featuredNo !== '1') {
      _image.classList.add('opacity-none');
    }
    ;

    // Append image to its hero container
    heroContainer.appendChild(_image.cloneNode());
  }
  ;

  // Append top layer to hero container
  heroContainer.appendChild(topLayer);

  // Add attribute(s) and class(es) to hero container
  heroContainer.classList.add('hero');

  // Add attribute(s) and class(es) to texture overlay
  textureOverlay.classList.add('texture-overlay');

  // Add event listeners to the featured items
  var featuredButtons = heroContainer.querySelectorAll('.top-layer .featured-bubble .bubble-item');
  featuredButtons.forEach(function (button) {
    featuredBubbleListener(button, bubbleText);
  });

  // Add event listener to order button
  var orderButton = bubbleText.getComponent().querySelector('.bubble-action');
  orderButton.addEventListener('mouseup', function () {
    orderFeatured();
  });
  return {
    textureOverlay: textureOverlay,
    heroContainer: heroContainer
  };
}
;
function createProductSection() {
  var productSection = document.createElement('section');
  var headerContainer = document.createElement('header');
  var detailContainer = document.createElement('div');
  var detailTitle = document.createElement('h1');
  var detailDesc = document.createElement('p');
  var categoryContainer = document.createElement('div');
  var categoryButtonMacchiee = document.createElement('button');
  var categoryButtonMacchieeText = document.createElement('h1');
  var categoryButtonCuppy = document.createElement('button');
  var categoryButtonCuppyText = document.createElement('h1');
  var categoryButtonExpress = document.createElement('button');
  var categoryButtonExpressText = document.createElement('h1');

  // Add text to each button
  categoryButtonExpressText.textContent = 'Expressie';
  categoryButtonMacchieeText.textContent = 'Macchiee';
  categoryButtonCuppyText.textContent = 'Cuppyccino';

  // Initialize button text of Cuppyccino as active
  categoryButtonCuppyText.classList.add('active');

  // Append each text button to its button
  categoryButtonExpress.appendChild(categoryButtonExpressText);
  categoryButtonMacchiee.appendChild(categoryButtonMacchieeText);
  categoryButtonCuppy.appendChild(categoryButtonCuppyText);

  // Add attribute(s) and class(es) to each button
  categoryButtonExpress.dataset.category = 'Expressie';
  categoryButtonExpress.classList.add('item');
  categoryButtonMacchiee.dataset.category = 'Macchiee';
  categoryButtonMacchiee.classList.add('item');
  categoryButtonCuppy.dataset.category = 'Cuppyccino';
  categoryButtonCuppy.classList.add('item');

  // Append each button to its container
  categoryContainer.appendChild(categoryButtonMacchiee);
  categoryContainer.appendChild(categoryButtonCuppy);
  categoryContainer.appendChild(categoryButtonExpress);

  // Add attribute(s) and class(es) to category container
  categoryContainer.classList.add('category');

  // Add text to detail desc
  detailDesc.textContent = 'Savor Every Sip with Cuppy\'s exceptional coffee selection. From rich roasts to smooth blends, each cup promises a perfect start. Explore our curated collection and discover the essence of true coffee enjoyment, crafted for every coffee lover\'s delight.';

  // Add attribute(s) and class(es) to detail desc
  detailDesc.classList.add('desc');

  // Add text to detail title
  detailTitle.textContent = 'Commence Your Day !';

  // Add attribute(s) and class(es) to detail desc
  detailTitle.classList.add('title');

  // Add details to the detail container
  detailContainer.appendChild(detailTitle);
  detailContainer.appendChild(detailDesc);

  // Add attribute(s) and class(es) to the detail container
  detailContainer.classList.add('detail');

  // Append both containers to the header container
  headerContainer.appendChild(detailContainer);
  headerContainer.appendChild(categoryContainer);

  // Add attribute(s) and class(es) to the header container
  headerContainer.classList.add('header-text');

  // Initialize category article element to Cuppyccino
  var articleCategory = initializeArticleCategory('Cuppyccino');

  // Add header container and article category to the product section
  productSection.appendChild(headerContainer);
  productSection.appendChild(articleCategory);

  // Add attribute(s) and class(es) to product section
  productSection.classList.add('product-section');

  // Add event listeners to the category buttons
  categoryButtonListener(categoryButtonMacchiee, categoryButtonCuppy, categoryButtonExpress);
  return productSection;
}
;
function orderFeatured() {
  var featuredElements = document.querySelectorAll('.page .hero .featured-banner');
  var products = _products_js__WEBPACK_IMPORTED_MODULE_4__.productData.getProduct();
  var selectedProduct;
  featuredElements.forEach(function (element) {
    // Validate which featured item is currently shown
    if (!element.classList.contains('opacity-none')) {
      for (var iter = 0; iter < products.length; ++iter) {
        // Compare images to get the right shown featured item
        if (products[iter].img === element.src) {
          selectedProduct = products[iter];
          break;
        }
        ;
      }
      ;
    }
    ;
  });

  // Create modal
  var modal = (0,_comp_product_card_and_modal_js__WEBPACK_IMPORTED_MODULE_3__.createModal)(selectedProduct.img, selectedProduct.name, selectedProduct.desc);
  _contentPage_js__WEBPACK_IMPORTED_MODULE_0__["default"].appendContentPage(modal);
  modal.showModal();
}
;

// Event listeners for changing featured banners
function featuredBubbleListener(buttonEl, featuredBubble) {
  buttonEl.addEventListener('mouseup', function () {
    var page = document.querySelector('.cuppiespage');
    var featuredImg = page.querySelectorAll('.hero .featured-banner');
    var buttons = page.querySelectorAll('.top-layer .bubble-item');

    // Get dataset of button element
    var featuredNo = buttonEl.dataset.featuredNo;
    // Validate the proper clicked button
    buttons.forEach(function (button) {
      if (button.dataset.featuredNo !== featuredNo) {
        button.classList.remove('active');
      }
      ;
      buttonEl.classList.add('active');
    });

    // Depending on the button, validate the proper
    // image to be shown
    featuredImg.forEach(function (img) {
      if (img.dataset.featuredNo !== featuredNo) {
        img.classList.add('opacity-none');
      } else {
        img.classList.remove('opacity-none');
      }
      ;
    });

    // Get products
    var products = _products_js__WEBPACK_IMPORTED_MODULE_4__.productData.getProduct();
    // "Featured" are as follows:
    // Cuppyccino (First in array)
    var c1 = products[0];
    // Macchiee (7th in array)
    var m1 = products[7];
    // Expressie (11th in array)
    var e1 = products[11];

    // Depending on the button, change the content
    // of the featured bubble/cloud
    if (featuredNo == 1) {
      featuredBubble.bubbleText(c1.name, c1.price, c1.desc);
    } else if (featuredNo == 2) {
      featuredBubble.bubbleText(m1.name, m1.price, m1.desc);
    } else {
      featuredBubble.bubbleText(e1.name, e1.price, e1.desc);
    }
    ;

    // Add event listener to order button
    var orderButton = featuredBubble.getComponent().querySelector('.bubble-action');
    orderButton.addEventListener('mouseup', function () {
      orderFeatured();
    });
  });
}
;

// Initialize article category function
function initializeArticleCategory(category) {
  var articleCategory = document.createElement('article');

  // Initialize card items to Cuppyccino category
  // Get product data
  var data = _products_js__WEBPACK_IMPORTED_MODULE_4__.productData.getProduct();
  var length = data.length;

  // Iterate over the "database" array
  for (var iter = 0; iter < length; ++iter) {
    var item = data[iter];
    // Check if the category of each item
    // is "Cuppyccino"
    if (item.category === category) {
      // Create a card
      var coffeeCard = (0,_comp_product_card_and_modal_js__WEBPACK_IMPORTED_MODULE_3__["default"])(item.productNumber, item.img, item.name, item.desc, item.price, item.rating);

      // Add attribute(s) and class(es) to the card
      coffeeCard.classList.add('scale-1');

      // Append card to the article element
      articleCategory.appendChild(coffeeCard);
    }
    ;
  }
  ;

  // Add attribute(s) and class(es) to article element
  articleCategory.dataset.category = category;
  articleCategory.classList.add('category-container');
  return articleCategory;
}
;
function categoryButtonListener(macchieeButton, cuppyccinoButton, expressieButton) {
  var macchiee = macchieeButton.querySelector('h1');
  var cuppyccino = cuppyccinoButton.querySelector('h1');
  var expressie = expressieButton.querySelector('h1');
  cuppyccinoButton.addEventListener('mouseup', function () {
    // Validate if the button is currently active
    if (cuppyccino.classList.contains('active')) return;
    changeCards(cuppyccino, macchiee, expressie);
  });
  macchieeButton.addEventListener('mouseup', function () {
    // Validate if the button is currently active
    if (macchiee.classList.contains('active')) return;
    changeCards(macchiee, cuppyccino, expressie);
  });
  expressieButton.addEventListener('mouseup', function () {
    // Validate if the button is currently active
    if (expressie.classList.contains('active')) return;
    changeCards(expressie, cuppyccino, macchiee);
  });
}
;
function changeCards(newActive, currentActive1, currentActive2) {
  // Get current cards
  var cards = document.querySelectorAll('.product-section article.category-container .card');

  // Check which button is currently active
  var currentActive = currentActive1.classList.contains('active') ? currentActive1 : currentActive2;
  cards.forEach(function (card) {
    // Add a simple exit animation
    card.classList.add('zoom_in');
    setTimeout(function () {
      card.classList.remove('scale-1');
      card.classList.add('scale-05');
      // Remove active to the current button
      currentActive.classList.remove('active');
      // Add active to Cuppyccino
      newActive.classList.add('active');

      // Get the product section
      var productSection = document.querySelector('.product-section');
      // Get the current article category
      var articleCategory = productSection.querySelector('article.category-container');
      // Remove current article category to the product section
      productSection.removeChild(articleCategory);

      // Create a new article category
      var newArticleCategory = document.createElement('article');
      newArticleCategory.classList.add('category-container');
      newArticleCategory.dataset.category = newActive.textContent;

      // Create new coffee cards
      var productArr = _products_js__WEBPACK_IMPORTED_MODULE_4__.productData.getProduct();
      var length = productArr.length;
      var _loop = function _loop() {
        var category = newArticleCategory.dataset.category;
        var product = productArr[iter];
        if (category === product.category) {
          var coffeeCard = (0,_comp_product_card_and_modal_js__WEBPACK_IMPORTED_MODULE_3__["default"])(product.productNumber, product.img, product.name, product.desc, product.price, product.rating);

          // Add a simple animation upon entering
          coffeeCard.classList.add('scale-05');
          coffeeCard.classList.add('zoom_out');

          // Append card to the article category
          newArticleCategory.appendChild(coffeeCard);
          setTimeout(function () {
            // Remove transition after
            coffeeCard.classList.remove('scale-05');
            coffeeCard.classList.remove('zoom_out');
            coffeeCard.classList.add('scale-1');
          }, 300);
        }
        ;
      };
      for (var iter = 0; iter < length; ++iter) {
        _loop();
      }
      ;

      // Append new article category to product section
      productSection.appendChild(newArticleCategory);
    }, 300);
  });
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cuppiespage);

/***/ }),

/***/ "./src/scripts/page_homepage.js":
/*!**************************************!*\
  !*** ./src/scripts/page_homepage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images.js */ "./src/scripts/images.js");
/* harmony import */ var _contentPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contentPage.js */ "./src/scripts/contentPage.js");
/* harmony import */ var _page_cuppiespage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page_cuppiespage.js */ "./src/scripts/page_cuppiespage.js");
/* harmony import */ var _comp_navbar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comp_navbar.js */ "./src/scripts/comp_navbar.js");
/* harmony import */ var _comp_cloudFeaturedBubble_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comp_cloudFeaturedBubble.js */ "./src/scripts/comp_cloudFeaturedBubble.js");
/* harmony import */ var _comp_loading_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comp_loading.js */ "./src/scripts/comp_loading.js");
/* harmony import */ var _comp_product_card_and_modal_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comp_product_card_and_modal.js */ "./src/scripts/comp_product_card_and_modal.js");
/* harmony import */ var _createSVG_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./createSVG.js */ "./src/scripts/createSVG.js");
/* harmony import */ var _products_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./products.js */ "./src/scripts/products.js");









var homepage = function () {
  var banner;
  var createPage = function createPage() {
    // Define banner
    banner = document.createElement('div');

    // Side left
    var sideLeft = createSideLeft();

    // Side right
    var sideRight = createSideRight();

    // Add attribute(s) and class(es) to banner
    banner.classList.add('page');
    banner.classList.add('homepage');
    banner.dataset.page = 'homepage';
    // Append sides to banner
    banner.appendChild(sideLeft);
    banner.appendChild(sideRight);
    _contentPage_js__WEBPACK_IMPORTED_MODULE_1__["default"].appendContentPage(banner);

    // // Add event listener to order button
    orderButton();
  };
  var removePage = function removePage() {
    _contentPage_js__WEBPACK_IMPORTED_MODULE_1__["default"].removeContentPage(banner);
    banner = undefined;
  };
  return {
    createPage: createPage,
    removePage: removePage
  };
}();
function createSideLeft() {
  // Get product data
  var products = _products_js__WEBPACK_IMPORTED_MODULE_8__.productData.getProduct();
  // Initialize featured being 0(First Cuppyccino)
  var c1 = products[0];
  var sideLeft = document.createElement('div');

  // Define bubble text
  var bubbleText = (0,_comp_cloudFeaturedBubble_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
  bubbleText.bubbleText(c1.name, c1.price, c1.desc);

  // Get images
  var img = _images_js__WEBPACK_IMPORTED_MODULE_0__["default"].getImages();

  // Defining featured products
  var featured1 = _images_js__WEBPACK_IMPORTED_MODULE_0__["default"].createImage(img[0]);
  var featured2 = _images_js__WEBPACK_IMPORTED_MODULE_0__["default"].createImage(img[7]);
  var featured3 = _images_js__WEBPACK_IMPORTED_MODULE_0__["default"].createImage(img[11]);

  // Creating featured array
  var featuredArr = [];
  // Adding all imags
  featuredArr.push(featured1);
  featuredArr.push(featured2);
  featuredArr.push(featured3);
  // Adding attribute(s) and class(es)
  for (var iter = 0; iter < featuredArr.length; ++iter) {
    var _img = featuredArr[iter];
    _img.setAttribute('id', "featured-img img-".concat(iter + 1));
    _img.dataset.featuredNo = iter + 1;
  }
  ;

  // Creating featured bubble
  var bubble = document.createElement('div');
  // Creating bubble buttons
  for (var _iter = 0; _iter < 3; ++_iter) {
    var bubbleButton = document.createElement('button');
    // Add attribute(s) and class(es)
    bubbleButton.classList.add('bubble-item');
    bubbleButton.dataset.featuredNo = _iter + 1;
    // Initialize first active bubble
    if (_iter === 0) {
      bubbleButton.classList.add('active');
    }
    ;
    // Appending featured images to bubble button
    bubbleButton.appendChild(featuredArr[_iter].cloneNode(true));
    // Appending bubble button to bubble
    bubble.appendChild(bubbleButton);
  }
  ;
  // Add attribute(s) and class(es) to bubble
  bubble.classList.add('featured-bubble');

  // Append images to side left
  for (var _iter2 = 0; _iter2 < featuredArr.length; ++_iter2) {
    var _img2 = featuredArr[_iter2];
    // Add class to the featured img
    _img2.classList.add('featured-banner');
    // Initialize active featured image
    if (_iter2 !== 0) _img2.classList.add('opacity-none');
    sideLeft.appendChild(featuredArr[_iter2]);
  }
  ;

  // Add attribute(s) and class(es) to side left
  sideLeft.classList.add('side');
  sideLeft.classList.add('left');
  // Append bubble to side left
  sideLeft.appendChild(bubble);

  // Append bubble text to side left
  sideLeft.appendChild(bubbleText.getComponent());

  // Add event listener for featured buttons
  var featuredButtons = sideLeft.querySelectorAll('.bubble-item');
  featuredButtons.forEach(function (button) {
    featuredBubbleListener(button, bubbleText);
  });
  return sideLeft;
}
;
function createSideRight() {
  var sideRight = document.createElement('div');
  var textureOverlay = document.createElement('div');
  var containerSocial = document.createElement('div');
  var gitHubLink = document.createElement('a');
  var instagramLink = document.createElement('a');
  var xLink = document.createElement('a');
  var containerTitle = document.createElement('div');
  var title = document.createElement('p');
  var containerRights = document.createElement('div');
  var copyright = document.createElement('p');
  var author = document.createElement('p');

  // Add attribute(s) and class(es) to author
  author.classList.add('author');
  // Add text to author
  author.textContent = '@ poufsadev 2024';

  // Add attribute(s) and class(es) to copyright
  copyright.classList.add('copyright');
  // Add text to copyright
  copyright.textContent = 'All Rights Reserved';

  // Add attribute(s) and class(es) to container rights
  containerRights.classList.add('container-rights');
  // Append copyright and author to container rights
  containerRights.appendChild(copyright);
  containerRights.appendChild(author);

  // Add attribute(s) and class(es) to title
  title.classList.add('title');
  title.classList.add('brand-name');
  // Add text to title
  title.textContent = 'Cuppy';

  // Add attribute(s) and class(es) to container title
  containerTitle.classList.add('container-title');
  // Append title to container title
  containerTitle.appendChild(title);

  // Define social svgs
  var gitHub = (0,_createSVG_js__WEBPACK_IMPORTED_MODULE_7__.createGitHubSVG)();
  var instagram = (0,_createSVG_js__WEBPACK_IMPORTED_MODULE_7__.createInstagramSVG)();
  var twitter = (0,_createSVG_js__WEBPACK_IMPORTED_MODULE_7__.createTwitterSVG)();

  // Append svgs to their links
  gitHubLink.appendChild(gitHub);
  instagramLink.appendChild(instagram);
  xLink.appendChild(twitter);

  // Add attribute(s) and class(es) to social container
  containerSocial.classList.add('container-social');
  // Append svgs to social container
  containerSocial.appendChild(gitHubLink);
  containerSocial.appendChild(instagramLink);
  containerSocial.appendChild(xLink);

  // Add attribute(s) and class(es) to texture overlay
  textureOverlay.classList.add('texture-overlay');

  // Add attribute(s) and class(es) to side left
  sideRight.classList.add('side');
  sideRight.classList.add('right');
  // Append all to side right
  sideRight.appendChild(textureOverlay);
  sideRight.appendChild(containerSocial);
  sideRight.appendChild(containerTitle);
  sideRight.appendChild(containerRights);
  return sideRight;
}
;
function featuredBubbleListener(buttonEl, featuredBubble) {
  buttonEl.addEventListener('mouseup', function () {
    var side = document.querySelector('.side.left');
    var featuredImg = side.querySelectorAll('.featured-banner');
    var buttons = side.querySelectorAll('.bubble-item');

    // Get dataset of button element
    var featuredNo = buttonEl.dataset.featuredNo;

    // Validate the proper clicked button
    buttons.forEach(function (button) {
      if (button.dataset.featuredNo !== featuredNo) {
        button.classList.remove('active');
      }
      ;
      buttonEl.classList.add('active');
    });

    // Depending on the button, validate the proper
    // image to be shown
    featuredImg.forEach(function (img) {
      if (img.dataset.featuredNo !== featuredNo) {
        img.classList.add('opacity-none');
      } else {
        img.classList.remove('opacity-none');
      }
      ;
    });

    // Get products
    var products = _products_js__WEBPACK_IMPORTED_MODULE_8__.productData.getProduct();
    // "Featured" are as follows:
    // Cuppyccino (First in array)
    var c1 = products[0];
    // Macchiee (7th in array)
    var m1 = products[7];
    // Expressie (11th in array)
    var e1 = products[11];

    // Depending on the button, change the content
    // of the featured bubble/cloud
    if (featuredNo == 1) {
      featuredBubble.bubbleText(c1.name, c1.price, c1.desc);
      orderButton();
    } else if (featuredNo == 2) {
      featuredBubble.bubbleText(m1.name, m1.price, m1.desc);
      orderButton();
    } else {
      featuredBubble.bubbleText(e1.name, e1.price, e1.desc);
      orderButton();
    }
    ;
  });
}
;
function orderButton() {
  // Add event listener to order button
  var orderButton = document.querySelector('.page .side.left .bubble-action');
  orderButton.addEventListener('mouseup', function () {
    _comp_loading_js__WEBPACK_IMPORTED_MODULE_5__["default"].playAnimation();
    setTimeout(function () {
      homepage.removePage();
      _page_cuppiespage_js__WEBPACK_IMPORTED_MODULE_2__["default"].createPage();
      var featuredElements = _page_cuppiespage_js__WEBPACK_IMPORTED_MODULE_2__["default"].getComponent().querySelectorAll('.page .hero .featured-banner');
      var products = _products_js__WEBPACK_IMPORTED_MODULE_8__.productData.getProduct();
      var selectedProduct;
      featuredElements.forEach(function (element) {
        // Validate which featured item is currently shown
        if (!element.classList.contains('opacity-none')) {
          for (var iter = 0; iter < products.length; ++iter) {
            // Compare images to get the right shown featured item
            if (products[iter].img === element.src) {
              selectedProduct = products[iter];
              break;
            }
            ;
          }
          ;
        }
        ;
      });

      // Create modal
      setTimeout(function () {
        var modal = (0,_comp_product_card_and_modal_js__WEBPACK_IMPORTED_MODULE_6__.createModal)(selectedProduct.img, selectedProduct.name, selectedProduct.desc);
        _contentPage_js__WEBPACK_IMPORTED_MODULE_1__["default"].appendContentPage(modal);
        modal.showModal();
      }, 2100);
    }, 2000);
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homepage);

/***/ }),

/***/ "./src/scripts/products.js":
/*!*********************************!*\
  !*** ./src/scripts/products.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Product: () => (/* binding */ Product),
/* harmony export */   productData: () => (/* binding */ productData)
/* harmony export */ });
var productData = function () {
  var productArr = [];
  var addProduct = function addProduct(product) {
    var productNumber = productArr.length;
    var rating = Math.round((Math.random() * (5.001 - 3) + 3) * 10) / 10;
    var newProduct = {
      productNumber: productNumber,
      img: product.productImage,
      category: product.productCategory,
      name: product.productName,
      price: product.productPrice,
      desc: product.productDesc,
      rating: rating
    };
    productArr.push(newProduct);
  };
  function refresh() {
    var currentLength = productArr.length;
    for (var productNumber = 0; productNumber < currentLength; ++productNumber) {
      productArr[productNumber].productNumber = productNumber;
    }
    ;
  }
  ;
  var deleteProduct = function deleteProduct(product) {
    var currentLength = productArr.length;
    for (var iter = 0; iter < currentLength; ++iter) {
      if (productArr[iter].name === product.productName) {
        productArr.splice(iter, 1);
        refresh();
        return;
      }
    }
  };
  var getProduct = function getProduct() {
    return productArr;
  };
  return {
    addProduct: addProduct,
    refresh: refresh,
    deleteProduct: deleteProduct,
    getProduct: getProduct
  };
}();
function Product(image, category, name, price, desc) {
  var productImage = image;
  var productCategory = category;
  var productName = name;
  var productPrice = price;
  var productDesc = desc;
  var getProduct = function getProduct() {
    return {
      productImage: productImage,
      productCategory: productCategory,
      productName: productName,
      productPrice: productPrice,
      productDesc: productDesc
    };
  };
  return {
    getProduct: getProduct
  };
}
;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/pexels-janakukebal-6496463.jpg */ "./src/assets/pexels-janakukebal-6496463.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/pexels-luiza-maria-scurtu-883871-2102037.jpg */ "./src/assets/pexels-luiza-maria-scurtu-883871-2102037.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/rr-abrot-pNIgH0y3upM-unsplash.jpg */ "./src/assets/rr-abrot-pNIgH0y3upM-unsplash.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.cdnfonts.com/css/lathic);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.cdnfonts.com/css/seafood);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.cdnfonts.com/css/lettifa-cutes);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
:root {
  font-family: "Lathic", sans-serif;
}

*:not(dialog) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.opacity-none {
  opacity: 0;
}

.display-none {
  display: none;
}

.scale-1 {
  transform: scale(1);
}

.scale-05 {
  transform: scale(0.5);
}

.nav-hide-animation {
  top: 200% !important;
}

.brand-name {
  color: #FFFAF1;
  font-family: "Lettifa Cutes", sans-serif;
  text-transform: capitalize;
  position: relative;
  transform: rotate(-3deg);
}

.brand-name::after {
  content: "Life in a Cup";
  font-size: 2rem;
  width: max-content;
  position: absolute;
  bottom: 73%;
  right: 5%;
}

.featured-banner {
  object-fit: cover;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.3s;
}

.featured.active {
  opacity: 1;
}

.featured-bubble .bubble-item {
  border: 3px solid #101015;
  aspect-ratio: 1;
  border-radius: 50%;
  box-shadow: 0 0 15px -3px #101015;
  width: 80px;
  height: 80px;
  overflow: hidden;
  transition: 0.3s;
  position: relative;
}

.featured-bubble .bubble-item.active {
  border: 3px solid #FFFAF1;
  transform: scale(1.2);
}

.featured-bubble img {
  object-fit: cover;
  width: 100%;
  object-position: 0 -15px;
}

.featured-bubble .bubble-item .bubble-text {
  transform: translateY(-50%);
  position: absolute;
  right: 100%;
  top: 50%;
}

.wrapper-bubble-text {
  position: absolute;
}

.bubble-text {
  background-color: rgba(0, 0, 0, 0.4549019608);
  backdrop-filter: blur(15px);
  border-radius: 30px;
  padding: 24px 27px 33px;
  height: max-content;
  width: max-content;
  max-width: 450px;
  position: relative;
  transition: 0.3s;
}

.bubble-text .featured-name {
  color: #FFFAF1;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
}

.bubble-text .featured-price {
  color: #FFFDD0;
  font-size: 2.8rem;
  font-weight: normal;
  text-align: center;
}

.bubble-text .featured-desc {
  color: #FFFAF1;
  font-size: 1.4rem;
  text-align: justify;
  text-transform: capitalize;
  padding-top: 10px;
}

.bubble-action {
  background-color: #FFFAF1;
  border: 0;
  border-radius: 30px;
  color: #101015;
  font-size: 1.7rem;
  padding: 13px 22px;
  position: absolute;
  transition: 0.3s;
}

.wrapper-bubble-list {
  position: absolute;
}

.wrapper-bubble-list .featured-list {
  background-color: rgba(0, 0, 0, 0.4549019608);
  backdrop-filter: blur(15px);
  border-radius: 30px;
  padding: 13px 23px 13px 47px;
  list-style-type: "✓ ";
  display: flex;
  gap: 40px;
}

.wrapper-bubble-list .item {
  color: #FFFAF1;
  font-size: 1.5rem;
}
.wrapper-bubble-list .item::marker {
  color: rgb(0, 255, 0);
  font-weight: bold;
}

@keyframes banner_animation-after {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
.loading_strip {
  animation: loading_strip 4s ease-in-out var(--_strip-delay);
}

@keyframes loading_strip {
  0% {
    transform: translateX(-100%);
  }
  20%, 80% {
    transform: translate(0);
  }
  100% {
    transform: translate(100%);
  }
}
.coffee_bounce {
  animation: coffee_bounce 1.1s ease-in-out 1.7s;
}

@keyframes coffee_bounce {
  0%, 60%, 80%, 100% {
    transform: translateY(0);
  }
  10% {
    transform: translateY(-50%);
  }
  50%, 53% {
    transform: translateY(-55%);
  }
  70%, 73% {
    transform: translateY(-40%);
  }
  90%, 93% {
    transform: translateY(-20%);
  }
}
.zoom_in {
  animation: zoom_in 0.3s ease-in-out;
}

@keyframes zoom_in {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0.5);
    opacity: 0;
  }
}
.zoom_out {
  animation: zoom_out 0.3s ease-in-out;
}

@keyframes zoom_out {
  from {
    transform: scale(0.5);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.wrapper-loading-screen {
  width: 100%;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
}

.wrapper-loading-screen.active {
  z-index: 99;
}

.loading-screen {
  height: 100dvh;
  position: relative;
}

.strip {
  background-image: linear-gradient(90deg, #FFFDD0, #c99c83);
  height: 20%;
  transform: translateX(-100%);
}

.strip:nth-of-type(3) {
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-content: center;
}

.loading-screen svg {
  fill: #8B3F3F;
  height: 120px;
  width: 120px;
}

.loading-text {
  color: #8B3F3F;
  font-size: 2.5rem;
}

.loading-strip {
  animation: loading_strip 4s ease-in-out var(--_strip-delay);
}

.coffee-bounce {
  animation: coffee_bounce 1.1s ease-in-out 1.7s;
}

.nav-backdrop {
  backdrop-filter: blur(3px);
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 50;
}

.nav-backdrop.inactive {
  display: none;
}

.comp_nav {
  transition: 0.5s;
  transform: translate(-50%, -50%);
  position: fixed;
  top: 100%;
  left: 50%;
  z-index: 50;
}

.comp_nav nav {
  position: relative;
}

.comp_nav nav button {
  cursor: pointer;
  position: relative;
}

.comp_nav .page-container {
  background-color: #FFFAF1;
  border: 0;
  border-radius: 50%;
  box-shadow: 0 0 15px -3px #101015;
  color: #101015;
  font-size: 3rem;
  height: 250px;
  width: 250px;
  overflow: hidden;
}

.comp_nav .page-container p {
  color: #101015;
  transform: rotate(0) translateX(-50%);
  bottom: 15%;
  left: 50%;
}

.comp_nav .page-container p::after {
  right: 26%;
  font-size: 0.8rem;
}

.comp_nav .pages .item {
  list-style-type: none;
  transform: translate(-50%, -50%);
  transition: 0.3s ease-in-out;
  position: absolute;
  z-index: -1;
}

.comp_nav .pages .item:first-of-type {
  top: -10%;
  left: 0;
}

.comp_nav .pages .item:nth-of-type(2) {
  top: -30%;
  left: 50%;
}

.comp_nav .pages .item:last-of-type {
  top: -10%;
  left: 100%;
}

.comp_nav .pages .item button {
  background-color: #FFFAF1;
  border: 0;
  border-radius: 50%;
  box-shadow: 0 0 15px -3px #101015;
  width: 85px;
  height: 85px;
}

.comp_nav .pages .item button svg {
  width: 30px;
  height: 30px;
}

.comp_nav .pages .item.hide {
  top: 50% !important;
  left: 50% !important;
}

body {
  background-color: #c99c83;
  position: relative;
}

button {
  font-family: "Lathic", sans-serif;
  font-weight: bold;
  cursor: pointer;
}

svg {
  width: 30px;
  height: 30px;
}

.page.homepage {
  height: 100dvh;
  min-height: 400px;
  display: flex;
}

.texture-overlay {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  filter: blur(3px) brightness(0.7);
  width: 100%;
  height: 100%;
  opacity: 0.25;
  position: absolute;
  top: 0;
  left: 0;
}

.side {
  width: 50%;
}

.side.left {
  position: relative;
}

.side .featured-bubble {
  display: flex;
  flex-direction: column;
  gap: 23px;
  transform: translateX(-50%);
  position: absolute;
  left: 100%;
  top: 10%;
  z-index: 1;
}

.homepage .wrapper-bubble-text {
  transform: translate(-50%, -50%);
  top: 24%;
  left: 50%;
}

.homepage .bubble-action {
  transform: translate(50%, -50%);
  top: 100%;
  right: 50%;
}

.homepage .bubble-action:hover {
  transform: translate(50%, -50%) scale(1.08);
}

.side.right {
  padding: 30px;
  position: relative;
}

.side.right::after {
  content: "";
  background: radial-gradient(circle at top left, #FFFDD0 50%, #d1c392 70%, #a18c61 90%);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  animation: banner_animation-after 30s ease-in-out infinite;
}

.side.right::before {
  content: "";
  background: radial-gradient(circle at top center, #c99c83 50%, #b88367 70%, #a35e5e 90%);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.side .container-social {
  display: flex;
  gap: 13px;
  align-items: center;
  justify-content: right;
}

.side .container-social a {
  z-index: 1;
}

.side .container-social svg {
  cursor: pointer;
  fill: #101015;
  transition: 0.3s;
}

.side .container-social svg:hover {
  transform: scale(1.2);
}

.side .container-title {
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
}

.side .container-title .title {
  font-size: 15rem;
  text-shadow: 8px 8px #c99c83;
}

.side .container-title .title::after {
  text-shadow: 1px 1px #c99c83;
}

.side .container-rights {
  color: #FFFAF1;
  position: absolute;
  bottom: 30px;
  right: 30px;
}

.card {
  --_transition: 0.5s;
  --_padding: 1.5rem;
  --_placement: calc(0% + var(--_padding));
  border: 0;
  cursor: pointer !important;
  font-family: "Lathic", sans-serif;
  width: 350px;
  transition: var(--_transition);
  overflow: hidden;
  outline: 3px solid #FFFAF1;
  position: relative;
}

.card::after {
  content: "";
  box-shadow: 0 0 30px 10px rgba(0, 0, 0, 0.6392156863) inset;
  width: 100%;
  height: 100%;
  transition: var(--_transition);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}

.card .product-img {
  object-fit: cover;
  width: 100%;
  height: 450px;
  transition: var(--_transition);
  display: block;
  position: relative;
}

.card div {
  position: absolute;
}

.card div:not(.overlay) {
  cursor: default;
  z-index: 1;
}

:is(.card, .dialog-container) .overlay {
  content: "";
  background-image: radial-gradient(circle at top right, transparent 50%, #000);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.card .product-rating {
  display: flex;
  gap: 9px;
  align-items: center;
  justify-content: center;
  top: var(--_placement);
  right: var(--_placement);
}

.card .product-rating .rating {
  color: #FFFAF1;
  font-size: 1.2rem;
  font-weight: bold;
}

.card .product-rating svg {
  stroke: #FFFAF1;
  stroke-width: 2px;
  display: flex;
  align-items: center;
}

.card .product-desc {
  font-size: 2.3rem;
  bottom: var(--_placement);
  left: var(--_placement);
}

.card .product-desc .name {
  color: #FFFAF1;
  font-weight: bold;
  text-align: left;
  width: 240px;
}

.card .product-desc .price {
  color: #c99c83;
  width: max-content;
  transition: var(--_transition);
}

.card .product-logo {
  background-color: #c99c83;
  border: 0;
  border-radius: 50%;
  box-shadow: 0 0 10px #c99c83;
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--_transition);
  bottom: var(--_placement);
  right: var(--_placement);
}

.card .product-logo svg {
  height: 30px;
  width: 30px;
  fill: #FFFAF1;
}

/* Hovers */
.card:hover {
  outline: 3px solid transparent;
  box-shadow: 0 17px 17px rgba(0, 0, 0, 0.6392156863);
  transform: scale(1.05);
}

.card:hover::after {
  box-shadow: 0px 0px 0px 0px transparent;
}

.card:active {
  box-shadow: 0 10px 10px #000000;
  transition: 0.3s;
  transform: scale(0.9);
}

.card:active:not(:hover) {
  transform: scale(1);
}

.card .product-desc .price:hover {
  font-size: 3rem;
}

.card:hover .product-img {
  transform: scale(1.3);
}

.card .product-logo:hover {
  background-color: #8B3F3F;
  box-shadow: 0 0 10px #8B3F3F;
}

dialog {
  background-color: transparent;
  border: 0;
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.5s allow-discrete, transform 0.5s allow-discrete;
  z-index: -1;
}

dialog::backdrop {
  background-color: transparent;
  transition: backdrop-filter 0.5s allow-discrete;
}

dialog[open]::backdrop {
  backdrop-filter: blur(5px);
}

dialog[open] {
  opacity: 1;
  transform: translateY(0);
}

@starting-style {
  dialog[open] {
    opacity: 0;
    transform: translateY(1000%);
  }
  dialog[open]::backdrop {
    backdrop-filter: blur(0);
  }
}
.dialog-container {
  --_border-radius: 30px;
  --_gap: 15px;
  border-radius: var(--_border-radius);
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.537254902);
  width: 600px;
  height: 800px;
  overflow: hidden;
  display: flex;
  gap: var(--_gap);
  flex-direction: column;
  justify-content: center;
  position: relative;
}

.dialog-container img {
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.dialog-container :is(button, img)::selection {
  color: none;
  background: none;
}

.dialog-container .exit {
  background-color: #fffaf1;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  width: 40px;
  height: 40px;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: var(--_border-radius);
  right: var(--_border-radius);
}

.dialog-container .exit svg {
  transition: 0.3s;
  width: 30px;
  height: 30px;
  fill: #000;
}

.dialog-container .exit:hover {
  background-color: #000;
  box-shadow: 0 0 15px #FFFAF1;
}

.dialog-container .exit:active {
  transform: scale(0.8);
}

.dialog-container .exit:not(:hover):active {
  transform: scale(1);
}

.dialog-container .exit:hover svg {
  fill: #FFFAF1;
}

.dialog-container .item-name {
  color: #FFFAF1;
  font-size: 2.6rem;
  font-weight: bold;
  width: 300px;
  position: absolute;
  top: var(--_border-radius);
  left: var(--_border-radius);
}

.dialog-container .bottom-part {
  width: calc(100% - var(--_border-radius) * 2);
  display: flex;
  flex-direction: column;
  gap: 17px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: var(--_border-radius);
  left: var(--_border-radius);
}

.dialog-container .item-desc {
  color: #FFFAF1;
  font-size: 1.25rem;
  text-align: justify;
}

.dialog-container .option {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.dialog-container .item-size {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 13px;
}

.dialog-container .size-text {
  color: #fffaf1;
  font-size: 1.25rem;
  font-weight: bold;
}

.dialog-container .size {
  background-color: transparent;
  border: 2px solid #FFFAF1;
  border-radius: 50%;
  color: #FFFAF1;
  font-size: 1rem;
  font-weight: bold;
  height: 30px;
  width: 30px;
  transition: 0.2s;
}

.dialog-container .size:hover {
  background-color: #c99c83;
}

.dialog-container .size.active {
  background-color: #c99c83;
  border: 2px solid transparent;
  box-shadow: 0 0 15px -2px #FFFAF1;
}

.dialog-container .item-quantity {
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
}

.dialog-container .quantity {
  color: #FFFAF1;
  font-size: 1.25rem;
}

.dialog-container .item-quantity svg {
  fill: #c99c83;
  height: 25px;
  width: 25px;
}

.dialog-container .item-quantity button {
  background-color: #FFFAF1;
  border: transparent;
  border-radius: 50%;
  color: #000;
  font-size: 1.5rem;
  font-weight: bold;
  height: 30px;
  width: 30px;
  transition: 0.2s;
}

.dialog-container .item-quantity button:hover {
  background-color: #c99c83;
  color: #FFFAF1;
}

.dialog-container .item-quantity button:active {
  background-color: #8B3F3F;
}

.dialog-container .item-quantity button:active:not(:hover) {
  background-color: #FFFAF1;
  color: #000;
}

.dialog-container .item-action {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 25px;
}

.dialog-container .item-action button {
  border: 0;
  border-radius: 40px;
  cursor: pointer;
  font-size: 1.25rem;
  padding: 13px 19px;
  transition: 0.2s;
}

.dialog-container .item-action button:hover {
  background-color: #8B3F3F;
  border: 2px solid #8B3F3F;
}

.dialog-container .item-action button:active {
  transform: scale(0.95);
}

.dialog-container .item-action .add-to-cart {
  background-color: transparent;
  border: 2px solid #FFFAF1;
  color: #FFFAF1;
  text-align: center;
  width: 30%;
}

.dialog-container .item-action button:active:not(:hover) {
  transform: scale(1);
}

.dialog-container .item-action .checkout {
  background-color: #c99c83;
  border: 2px solid #FFFAF1;
  color: #FFFAF1;
  font-weight: bold;
  display: flex;
  gap: 7px;
  align-items: center;
  justify-content: center;
  width: calc(70% - 25px);
}

.dialog-container .item-action .checkout svg {
  width: 20px;
  height: 20px;
  fill: #FFFAF1;
}

.exit_modal {
  animation: exit_modal 0.5s ease-in-out forwards;
}

/* Animation */
@keyframes exit_modal {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(1000%);
  }
}
footer {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-size: cover;
  background-position: center;
  margin-top: 150px;
  padding: 60px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}

footer::after {
  content: "";
  box-shadow: 0 0 20px 15px rgba(0, 0, 0, 0.5333333333) inset;
  backdrop-filter: blur(20px);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}

footer > * {
  font-size: 1.3rem;
  color: #FFFAF1;
  text-align: center;
  z-index: 1;
  text-shadow: 0 2px #000;
}

footer .disclaimer {
  font-size: 2rem;
  font-weight: bold;
}

footer .disclaimer-text {
  max-width: 700px;
  min-width: 300px;
  position: relative;
}

footer .disclaimer-text::before {
  --_width: 110%;
  content: "";
  width: var(--_width);
  position: absolute;
  top: 0;
  left: calc(var(--_width) / -22);
}

footer .disclaimer-text span {
  background-color: transparent;
  border: none;
  font-size: 1.9rem;
  text-shadow: 1px 1px #101015;
}

footer .disclaimer-text span::after {
  content: "Life in a Cup";
  font-size: 0.4rem;
  width: max-content;
  text-shadow: 0 0 #101015;
  position: absolute;
  bottom: 73%;
  right: 5%;
}

footer li {
  list-style: none;
}

footer .socials {
  margin-top: 11px;
  display: flex;
  gap: 13px;
  align-items: center;
  justify-content: center;
}

footer .socials svg {
  fill: #FFFAF1;
}

body:has(dialog[open]) {
  overflow: hidden;
}

.cuppiespage {
  --_global-padding: 30px;
  background-color: #c99c83;
}

.cuppiespage .hero {
  width: 100%;
  height: 90dvh;
  overflow: hidden;
  position: relative;
}

.cuppiespage .hero::after {
  content: "";
  box-shadow: 0 0 30px 20px rgba(0, 0, 0, 0.7098039216) inset;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}

.cuppiespage .hero .featured-banner {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.cuppiespage .top-layer {
  background-image: radial-gradient(circle at center bottom, transparent 45%, #101015);
  padding: 45px 75px;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.cuppiespage .top-container {
  height: 100%;
  position: relative;
}

.cuppiespage .logo {
  background-color: transparent;
  border: none;
  font-size: 8rem;
  text-shadow: 5px 5px #101015;
  transform: translateX(-50%);
  left: 50%;
}

.cuppiespage .logo::after {
  content: "Life in a Cup";
  font-size: 1.5rem;
  width: max-content;
  text-shadow: 2px 2px #101015;
  position: absolute;
  bottom: 73%;
  right: 5%;
}

.cuppiespage .featured-item {
  display: flex;
  flex-direction: column;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 7%;
}

.cuppiespage .featured-title {
  color: #FFFAF1;
  font-family: "Seafood", sans-serif;
  font-size: 5rem;
  text-shadow: 4px 4px #101015;
  margin-bottom: 13px;
}

.cuppiespage .featured-bubble {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 23px;
}

.cuppiespage .wrapper-bubble-text {
  transform: translateY(-50%);
  top: 50%;
  right: 0;
}

.cuppiespage .bubble-action {
  transform: translate(-50%, -50%);
  top: 100%;
  left: 50%;
}

.cuppiespage .wrapper-bubble-list {
  transform: translateX(-50%);
  bottom: 0;
  left: 50%;
}

.cuppiespage .product-section {
  margin: 75px var(--_global-padding) 0 var(--_global-padding);
  position: relative;
}

.cuppiespage .header-text .detail {
  color: #FFFAF1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.cuppiespage .header-text .detail .title {
  font-family: "Lettifa Cutes", sans-serif;
  font-size: 4rem;
  text-shadow: 0 5px #101015;
}

.cuppiespage .header-text .detail .desc {
  font-size: 1.6rem;
  text-align: center;
  width: 700px;
}

.cuppiespage .header-text .category {
  margin: 75px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.cuppiespage .header-text .category .item {
  background-color: transparent;
  border: 0;
}

.cuppiespage .header-text .category h1 {
  color: #FFFAF1;
  font-family: "Lettifa Cutes", sans-serif;
  font-size: 3rem;
  text-shadow: 0 4px #000;
  transition: 0.3s;
  position: relative;
  z-index: 1;
}

.cuppiespage .header-text .category h1:hover {
  transform: scale(1.25);
}

.cuppiespage .header-text .category h1.active {
  color: #FFFAF1;
  transform: scale(1.25);
}

.cuppiespage .header-text .category h1.active::before {
  background-color: #8B3F3F;
  box-shadow: 7px 7px #101015;
  border-radius: 0;
  width: 80%;
  height: 65px;
  transform: translate(-50%, -50%) rotate(0);
}

.cuppiespage .header-text .category h1::before {
  content: "";
  background-color: #101015;
  box-shadow: 7px 7px #FFFAF1;
  border-radius: 7px;
  width: 90px;
  height: 90px;
  transform: translate(-50%, -50%) rotate(-15deg) skew(-30deg);
  transition: 0.3s;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: -1;
}

.cuppiespage .header-text .category h1:hover::before {
  box-shadow: 0;
  border-radius: 0;
  width: 80%;
  height: 65px;
  transform: translate(-50%, -50%) rotate(0);
}

.cuppiespage article.category-container {
  padding: 35px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 30px;
  justify-content: center;
  justify-items: center;
  z-index: 1;
}

.about-page .about-container {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: #FFFAF1;
  padding: 0 75px 40px;
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  justify-content: center;
  position: relative;
}

.about-page .about-container::after {
  content: "";
  background-image: linear-gradient(0deg, #101015 10%, transparent);
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}

.about-page .about-container .detail {
  text-align: center;
  width: 1000px;
  z-index: 1;
}

.about-page .about-container .detail .title {
  font-family: "Lettifa Cutes", sans-serif;
  font-size: 4rem;
  text-shadow: 6px 6px #101015;
}

.about-page .about-container .detail .title .brand-name {
  font-size: 5rem;
}

.about-page .about-container .detail .title .brand-name::after {
  font-size: 1.2rem;
  text-shadow: 2px 2px #101015;
}

.about-page .about-container .detail .desc {
  font-size: 1.6rem;
  text-shadow: 2px 2px #101015;
}

.about-page .contacts {
  display: flex;
  gap: 40px;
  align-items: center;
  z-index: 1;
}

.about-page .contacts .item {
  font-size: 1.6rem;
  list-style: none;
  text-shadow: 2px 2px #101015;
  display: flex;
  gap: 7px;
  align-items: center;
}

.about-page .contacts .item svg {
  fill: #FFFAF1;
  filter: drop-shadow(3px 3px #101015);
  width: 40px;
  height: 40px;
}

.about-page .contacts .item .text {
  width: max-content;
}

@media screen and (max-width: 1400px) {
  .side .container-title .title {
    font-size: 10rem;
    text-shadow: 5px 5px #c99c83;
  }
}
@media screen and (max-width: 900px) {
  .side.left {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .side .featured-bubble {
    flex-direction: row;
    transform: translateX(-50%);
    left: 50%;
    top: 65%;
  }
  .homepage .wrapper-bubble-text {
    display: none;
  }
  .homepage .texture-overlay {
    background-image: linear-gradient(0deg, #101015, transparent);
    background-size: auto;
    backdrop-filter: blur(3px);
    filter: none;
    opacity: 1;
  }
  .side.right {
    width: 100%;
  }
  .side .container-social svg {
    fill: #FFFAF1;
  }
}
@media screen and (max-width: 500px) {
  .side .container-rights {
    top: 70px;
    bottom: 0;
  }
}
@media screen and (max-width: 450px) {
  .side .featured-bubble {
    top: 60%;
  }
  .side .container-title .title {
    font-size: 7rem;
  }
  .side .container-title .title.brand-name::after {
    font-size: 1.5rem;
  }
  .side .container-social svg {
    width: 25px;
    height: 25px;
  }
}
@media screen and (max-width: 1620px) {
  .bubble-text .featured-name {
    font-size: 2rem;
  }
  .bubble-text .featured-price {
    font-size: 2.3rem;
  }
  .bubble-action {
    font-size: 1.5rem;
  }
}
@media screen and (max-width: 1350px) {
  .bubble-text .featured-name {
    width: 200px;
    font-size: 1.7rem;
  }
  .bubble-text .featured-price {
    font-size: 2rem;
  }
  .bubble-action {
    font-size: 1.3rem;
    width: max-content;
  }
}
@media screen and (max-width: 1080px) {
  .cuppiespage article.category-container {
    grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
    grid-gap: 20px;
  }
}
@media screen and (max-width: 1020px) {
  .bubble-text .featured-name {
    width: 150px;
    font-size: 1.7rem;
  }
  .bubble-text .featured-price {
    font-size: 2rem;
  }
  .bubble-action {
    font-size: 1.3rem;
    width: max-content;
  }
}
@media screen and (max-width: 950px) {
  .cuppiespage .featured-item {
    transform: translateY(-50%);
    left: 10%;
  }
  .cuppiespage .top-layer {
    padding: 45px 30px;
  }
}
@media screen and (max-width: 900px) {
  .cuppiespage .header-text .detail .desc {
    font-size: 1.3rem;
    text-align: center;
    width: 600px;
  }
  .cuppiespage .header-text .category h1 {
    font-size: 2rem;
    text-shadow: 0 3px #000;
  }
  .cuppiespage .header-text .category h1::before {
    width: 75px;
    height: 75px;
  }
  .cuppiespage .header-text .category h1.active::before {
    height: 45px;
  }
}
@media screen and (max-width: 700px) {
  .cuppiespage .logo {
    font-size: 6rem;
  }
  .cuppiespage .logo::after {
    font-size: 1.2rem;
  }
  .cuppiespage .featured-item {
    transform: translate(-50%, -50%);
    top: 25%;
    left: 50%;
  }
  .cuppiespage .featured-bubble {
    flex-direction: row;
  }
  .cuppiespage .top-layer {
    padding: 45px 30px;
  }
  .cuppiespage .wrapper-bubble-text {
    transform: translate(50%, -50%);
    top: 77%;
    right: 50%;
  }
  .bubble-text {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .bubble-text .featured-name {
    width: max-content;
    font-size: 1.7rem;
  }
  .cuppiespage .header-text .detail .title {
    font-size: 3rem;
  }
  .cuppiespage .header-text .detail .desc {
    font-size: 1.3rem;
    width: 100%;
  }
}
@media screen and (max-width: 530px) {
  .cuppiespage {
    --_global-padding: 10px;
  }
  .bubble-text {
    display: block;
  }
  .bubble-text .featured-name {
    font-size: 1.5rem;
  }
  .bubble-text .featured-price {
    font-size: 2rem;
  }
  .bubble-action {
    font-size: 1.3rem;
    width: max-content;
  }
  .cuppiespage .wrapper-bubble-list .item {
    font-size: 1.2rem;
  }
  .cuppiespage article.category-container {
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  }
}
@media screen and (max-width: 450px) {
  .cuppiespage .header-text .detail .title {
    text-align: center;
  }
  .cuppiespage .header-text .detail .desc {
    font-size: 1.1rem;
    width: 100%;
  }
  .cuppiespage .header-text .category {
    margin: 35px 0;
  }
  .cuppiespage .header-text .category h1 {
    font-size: 1.7rem;
  }
  .cuppiespage .header-text .category h1::before {
    border-radius: 4px;
    width: 55px;
    height: 55px;
  }
  .cuppiespage .header-text .category h1.active::before {
    height: 45px;
  }
  .cuppiespage .header-text .category h1:hover::before {
    height: 45px;
  }
}
@media screen and (max-width: 400px) {
  .cuppiespage .article.category-container {
    grid-gap: 0px;
  }
  .cuppiespage .header-text .category h1 {
    font-size: 1.3rem;
  }
  .cuppiespage .header-text .category h1::before {
    border-radius: 2px;
    width: 40px;
    height: 40px;
  }
  .cuppiespage .header-text .category h1.active::before {
    height: 45px;
  }
  .cuppiespage .header-text .category h1:hover::before {
    height: 45px;
  }
}
@media screen and (max-width: 450px) and (max-height: 750px) {
  .cuppiespage .featured-item {
    top: 30%;
  }
  .featured-bubble .bubble-item {
    width: 60px;
    height: 60px;
  }
  .featured-bubble img {
    object-position: 0 -10px;
  }
  .cuppiespage .wrapper-bubble-text {
    top: 74%;
  }
  .bubble-text {
    padding: 24px 27px 27px;
  }
  .bubble-text .featured-name {
    font-size: 1.5rem;
  }
  .bubble-text .featured-price {
    display: none;
  }
  .bubble-action {
    font-size: 1.2rem;
    width: max-content;
  }
}
@media screen and (max-width: 1200px) {
  .about-page .contacts .item .text {
    font-size: 1.4rem;
  }
  .about-page .contacts .item svg {
    width: 30px;
    height: 30px;
  }
}
@media screen and (max-width: 1000px) {
  .about-page .about-container .detail {
    width: 100%;
  }
  .about-page .about-container .detail .desc {
    font-size: 1.4rem;
  }
  .about-page .contacts {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }
}
@media screen and (max-width: 600px) {
  .about-page .about-container {
    padding: 0 30px 40px;
    gap: 20px;
  }
}
@media screen and (max-width: 600px) and (max-height: 800px) {
  .about-page .about-container .detail .title {
    font-size: 2rem;
    text-shadow: 3px 3px #101015;
  }
  .about-page .about-container .detail .title .brand-name {
    font-size: 3rem;
  }
  .about-page .about-container .detail .title .brand-name::after {
    font-size: 0.8rem;
  }
  .about-page .about-container .detail .desc {
    font-size: 1.3rem;
  }
}
@media screen and (max-width: 400px) {
  .about-page .contacts .item .text {
    font-size: 1.2rem;
  }
  .about-page .contacts .item svg {
    width: 20px;
    height: 20px;
  }
}
@media screen and (max-width: 600px) and (max-height: 800px) {
  .comp_nav .page-container {
    font-size: 2rem;
    height: 190px;
    width: 190px;
  }
  .comp_nav .page-container p::after {
    right: 31%;
    font-size: 0.5rem;
  }
  .comp_nav .pages .item button {
    font-size: 1rem;
    width: 75px;
    height: 75px;
  }
  .comp_nav .pages .item button svg {
    width: 23px;
    height: 23px;
  }
}
@media screen and (max-width: 1080px) {
  .card {
    width: 225px;
  }
  .card .product-img {
    height: 275px;
  }
  .card .product-rating .rating {
    font-size: 1.2rem;
  }
  .card .product-desc {
    font-size: 1.5rem;
  }
  .card .product-desc .name {
    width: 65%;
  }
  .card .product-logo {
    height: 50px;
    width: 50px;
  }
  .card .product-logo svg {
    height: 25px;
    width: 25px;
  }
}
@media screen and (max-width: 530px) {
  .card {
    --_padding: 0.6rem;
    width: 150px;
  }
  .card .product-img {
    height: 200px;
  }
  .card .product-rating {
    gap: 2px;
  }
  .card .product-rating .rating {
    font-size: 0.9rem;
  }
  .card .product-rating svg {
    transform: scale(0.8);
  }
  .card .product-desc {
    font-size: 0.9rem;
  }
  .card .product-desc .name {
    width: 73%;
  }
  .card .product-logo {
    height: 30px;
    width: 30px;
  }
  .card .product-logo svg {
    height: 15px;
    width: 15px;
  }
}
@media screen and (max-width: 530px) {
  footer .disclaimer {
    font-size: 1.5rem;
  }
  footer .disclaimer-text {
    font-size: 1rem;
  }
  footer .disclaimer-text span {
    background-color: transparent;
    border: none;
    font-size: 1.3rem;
    text-shadow: 1px 1px #101015;
  }
  footer .disclaimer-text span::after {
    font-size: 0.2rem;
  }
  footer .copyright-author {
    font-size: 1rem;
  }
}
@media screen and (max-width: 650px) {
  dialog {
    margin: 0;
    padding: 0;
    overflow: visible;
  }
  .dialog-container {
    border-radius: 0;
    width: 100dvw;
    height: 100dvh;
  }
}
@media screen and (max-width: 450px) {
  .dialog-container .item-action .add-to-cart {
    width: 40%;
  }
}
@media screen and (max-width: 400px) {
  .dialog-container .item-name {
    width: 270px;
  }
  .dialog-container .item-action {
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }
  .dialog-container .item-action button {
    width: 100% !important;
  }
  .dialog-container .option {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    justify-content: center;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/main.scss","webpack://./src/styles/_config.scss","webpack://./src/styles/_utility.scss","webpack://./src/styles/_animation.scss","webpack://./src/styles/_component-loading.scss","webpack://./src/styles/_component-navbar.scss","webpack://./src/styles/_component-card.scss","webpack://./src/styles/_component_modal.scss","webpack://./src/styles/_component-footer.scss","webpack://./src/styles/_page-cuppiespage.scss","webpack://./src/styles/_page-about.scss","webpack://./src/styles/_responsive_page-main.scss","webpack://./src/styles/_responsive_page-cuppiespage.scss","webpack://./src/styles/_responsive_page-about.scss","webpack://./src/styles/_responsive_component-navbar.scss","webpack://./src/styles/_responsive_component-card.scss","webpack://./src/styles/_responsive_component-footer.scss","webpack://./src/styles/_responsive_component-modal.scss"],"names":[],"mappings":"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","sourcesContent":["// Import utilities\r\n@import './config';\r\n@import './utility';\r\n\r\n// Import animations\r\n@import './animation';\r\n\r\n// Imports of components\r\n@import './component-loading';\r\n@import './component-navbar';\r\n\r\nbody {\r\n    background-color: $primary-color;\r\n    position: relative;\r\n}\r\n\r\nbutton {\r\n    font-family: $font-stack-main;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n}\r\n\r\nsvg {\r\n    width: 30px;\r\n    height: 30px;\r\n}\r\n\r\n.page.homepage {\r\n    height: 100dvh;\r\n    min-height: 400px;\r\n    display: flex;\r\n}\r\n\r\n.texture-overlay {\r\n    background-image: url(../assets/pexels-janakukebal-6496463.jpg);\r\n    background-size: cover;\r\n    filter: blur(3px) brightness(0.7);\r\n    width: 100%;\r\n    height: 100%;\r\n    opacity: 0.25;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n.side {\r\n    width: 50%;\r\n}\r\n\r\n.side.left {\r\n    position: relative;\r\n}\r\n\r\n.side .featured-bubble {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 23px;\r\n    transform: translateX(-50%);\r\n    position: absolute;\r\n    left: 100%;\r\n    top: 10%;\r\n    z-index: 1;\r\n}\r\n\r\n.homepage .wrapper-bubble-text {\r\n    transform: translate(-50%, -50%);\r\n    top: 24%;\r\n    left: 50%;\r\n}\r\n\r\n.homepage .bubble-action {\r\n    transform: translate(50%, -50%);\r\n    top: 100%;\r\n    right: 50%;\r\n}\r\n\r\n.homepage .bubble-action:hover {\r\n    transform: translate(50%, -50%) scale(1.08);\r\n}\r\n\r\n.side.right {\r\n    padding: 30px;\r\n    position: relative;\r\n}\r\n\r\n.side.right::after {\r\n    content: '';\r\n    background: $main-gradient;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: -1;\r\n    animation: banner_animation-after 30s ease-in-out infinite;\r\n}\r\n\r\n.side.right::before {\r\n    content: '';\r\n    background: $main-gradient-alt;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: -1;\r\n}\r\n\r\n.side .container-social {\r\n    display: flex;\r\n    gap: 13px;\r\n    align-items: center;\r\n    justify-content: right;\r\n}\r\n\r\n.side .container-social a {\r\n    z-index: 1;\r\n}\r\n\r\n.side .container-social svg {\r\n    cursor: pointer;\r\n    fill: $dark-text_color;\r\n    transition: 0.3s;\r\n}\r\n\r\n.side .container-social svg:hover {\r\n    transform: scale(1.2);\r\n}\r\n\r\n.side .container-title {\r\n    transform: translate(-50%, -50%);\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n}\r\n\r\n.side .container-title .title {\r\n    font-size: 15rem;\r\n    text-shadow: 8px 8px $primary-color;\r\n}\r\n\r\n.side .container-title .title::after {\r\n    text-shadow: 1px 1px $primary-color;\r\n}\r\n\r\n.side .container-rights {\r\n    color: $light-text_color;\r\n    position: absolute;\r\n    bottom: 30px;\r\n    right: 30px;\r\n}\r\n\r\n\r\n// Imports of pages\r\n@import './page-cuppiespage';\r\n@import './page-about';\r\n\r\n// Imports of responsive\r\n@import './responsive_page-main';\r\n@import './responsive_page-cuppiespage';\r\n@import './responsive_page-about';\r\n@import './responsive_component-navbar';\r\n@import './responsive_component-card';\r\n@import './responsive_component-footer';\r\n@import './responsive_component-modal';","// Import font(s)\r\n@import url('https://fonts.cdnfonts.com/css/lathic');\r\n@import url('https://fonts.cdnfonts.com/css/seafood');\r\n@import url('https://fonts.cdnfonts.com/css/lettifa-cutes');\r\n\r\n// Variables ===================\r\n\r\n// Colors\r\n$primary-color: #c99c83;\r\n$secondary-color: #FFFDD0;\r\n$accent-color: #8B3F3F;\r\n$main-gradient: radial-gradient(circle at top left, #FFFDD0 50%, #d1c392 70%, #a18c61 90%);\r\n$main-gradient-alt: radial-gradient(circle at top center, #c99c83 50%, #b88367 70%, #a35e5e 90%);\r\n$light-text_color: #FFFAF1;\r\n$dark-text_color: #101015;\r\n\r\n// Fonts\r\n$font-stack-main: 'Lathic', sans-serif;\r\n$font-stack-sub: 'Seafood', sans-serif;\r\n$font-stack-accent: 'Lettifa Cutes', sans-serif;\r\n                                                \r\n\r\n// Variables ===================\r\n\r\n// Configure root\r\n:root {\r\n    font-family: $font-stack-main;\r\n}\r\n\r\n// Reset boxes\r\n*:not(dialog) {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}",".opacity-none {\r\n    opacity: 0;\r\n}\r\n\r\n.display-none {\r\n    display: none;\r\n}\r\n\r\n.scale-1 {\r\n    transform: scale(1);\r\n}\r\n\r\n.scale-05 {\r\n    transform: scale(0.5);\r\n}\r\n\r\n.nav-hide-animation {\r\n    top: 200% !important;\r\n}\r\n\r\n.brand-name {\r\n    color: $light-text_color;\r\n    font-family: $font-stack-accent;\r\n    text-transform: capitalize;\r\n    position: relative;\r\n    transform: rotate(-3deg);\r\n}\r\n\r\n.brand-name::after {\r\n    content: 'Life in a Cup';\r\n    font-size: 2rem;\r\n    width: max-content;\r\n    position: absolute;\r\n    bottom: 73%;\r\n    right: 5%;\r\n}\r\n\r\n.featured-banner {\r\n    object-fit: cover;\r\n    height: 100%;\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    transition: 0.3s;\r\n}\r\n\r\n.featured.active {\r\n    opacity: 1;\r\n}\r\n\r\n.featured-bubble .bubble-item {\r\n    border: 3px solid $dark-text_color;\r\n    aspect-ratio: 1;\r\n    border-radius: 50%;\r\n    box-shadow: 0 0 15px -3px $dark-text_color;\r\n    width: 80px;\r\n    height: 80px;\r\n    overflow: hidden;\r\n    transition: 0.3s;\r\n    position: relative;\r\n}\r\n\r\n.featured-bubble .bubble-item.active {\r\n    border: 3px solid $light-text_color;\r\n    transform: scale(1.2);\r\n}\r\n\r\n.featured-bubble img {\r\n    object-fit: cover;\r\n    width: 100%;\r\n    object-position: 0 -15px;\r\n}\r\n\r\n.featured-bubble .bubble-item .bubble-text {\r\n    transform: translateY(-50%);\r\n    position: absolute;\r\n    right: 100%;\r\n    top: 50%;\r\n}\r\n\r\n.wrapper-bubble-text {\r\n    position: absolute;\r\n}\r\n\r\n.bubble-text {\r\n    background-color: #00000074;\r\n    backdrop-filter: blur(15px);\r\n    border-radius: 30px;\r\n    padding: 24px 27px 33px;\r\n    height: max-content;\r\n    width: max-content;\r\n    max-width: 450px;\r\n    // display: flex;\r\n    // align-items: center;\r\n    // justify-content: center;\r\n    position: relative;\r\n    transition: 0.3s;\r\n}\r\n\r\n.bubble-text .featured-name {\r\n    color: $light-text_color;\r\n    font-size: 2.5rem;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    // width: max-content;\r\n}\r\n\r\n.bubble-text .featured-price {\r\n    color: $secondary-color;\r\n    font-size: 2.8rem;\r\n    font-weight: normal;\r\n    text-align: center;\r\n}\r\n\r\n.bubble-text .featured-desc {\r\n    color: $light-text_color;\r\n    font-size: 1.4rem;\r\n    text-align: justify;\r\n    text-transform: capitalize;\r\n    padding-top: 10px;\r\n}\r\n\r\n.bubble-action {\r\n    background-color: $light-text_color;\r\n    border: 0;\r\n    border-radius: 30px;\r\n    color: $dark-text_color;\r\n    font-size: 1.7rem;\r\n    padding: 13px 22px;\r\n    position: absolute;\r\n    transition: 0.3s;\r\n}\r\n\r\n.wrapper-bubble-list {\r\n    position: absolute;\r\n}\r\n\r\n.wrapper-bubble-list .featured-list {\r\n    background-color: #00000074;\r\n    backdrop-filter: blur(15px);\r\n    border-radius: 30px;\r\n    padding: 13px 23px 13px 47px;\r\n    list-style-type: '\\2713  ';\r\n    display: flex;\r\n    gap: 40px\r\n\r\n}\r\n\r\n.wrapper-bubble-list .item {\r\n    color: $light-text_color;\r\n    font-size: 1.5rem;\r\n\r\n    &::marker {\r\n        color: rgb(0, 255, 0);\r\n        font-weight: bold;\r\n    }\r\n}","@keyframes banner_animation-after {\r\n    0%, 100% {\r\n        opacity: 1;\r\n    }\r\n    50% {\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n.loading_strip {\r\n    animation: loading_strip 4s ease-in-out var(--_strip-delay);\r\n}\r\n\r\n@keyframes loading_strip {\r\n    0% {\r\n        transform: translateX(-100%);\r\n    }\r\n    20%, 80% {\r\n        transform: translate(0);\r\n    }\r\n    100% {\r\n        transform: translate(100%);\r\n    }\r\n}\r\n\r\n.coffee_bounce {\r\n    animation: coffee_bounce 1.1s ease-in-out 1.7s;\r\n}\r\n\r\n@keyframes coffee_bounce {\r\n    0%, 60%, 80%, 100% {\r\n        transform: translateY(0);\r\n    }\r\n    10% {\r\n        transform: translateY(-50%);\r\n    }\r\n    50%,53% {\r\n        transform: translateY(-55%);\r\n    }\r\n    70%,73% {\r\n        transform: translateY(-40%);\r\n    }\r\n    90%, 93% {\r\n        transform: translateY(-20%);\r\n    }\r\n}\r\n\r\n.zoom_in {\r\n    animation: zoom_in 0.3s ease-in-out;\r\n}\r\n\r\n@keyframes zoom_in {\r\n    from {\r\n        transform: scale(1);\r\n        opacity: 1;\r\n    }\r\n    to {\r\n        transform: scale(0.5);\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n.zoom_out {\r\n    animation: zoom_out 0.3s ease-in-out;\r\n}\r\n\r\n@keyframes zoom_out {\r\n    from {\r\n        transform: scale(0.5);\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        transform: scale(1);\r\n        opacity: 1;\r\n    }\r\n}",".wrapper-loading-screen {\r\n    width: 100%;\r\n    overflow: hidden;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n.wrapper-loading-screen.active {\r\n    z-index: 99;\r\n}\r\n\r\n.loading-screen {\r\n    height: 100dvh;\r\n    position: relative;\r\n}\r\n\r\n.strip {\r\n    background-image: linear-gradient(90deg, #FFFDD0, #c99c83);\r\n    height: calc(100% / 5);\r\n    transform: translateX(-100%);\r\n}\r\n\r\n.strip:nth-of-type(3) {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.loading-screen svg {\r\n    fill: #8B3F3F;\r\n    height: 120px;\r\n    width: 120px;\r\n}\r\n\r\n.loading-text {\r\n    color: #8B3F3F;\r\n    font-size: 2.5rem;\r\n}\r\n\r\n.loading-strip {\r\n    animation: loading_strip 4s ease-in-out var(--_strip-delay);\r\n}\r\n\r\n.coffee-bounce {\r\n    animation: coffee_bounce 1.1s ease-in-out 1.7s;\r\n}",".nav-backdrop {\r\n    backdrop-filter: blur(3px);\r\n    height: 100%;\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 50;\r\n}\r\n\r\n.nav-backdrop.inactive {\r\n    display: none;\r\n}\r\n\r\n.comp_nav {\r\n    transition: 0.5s;\r\n    transform: translate(-50%, -50%);\r\n    position: fixed;\r\n    top: 100%;\r\n    left: 50%;\r\n    z-index: 50;\r\n}\r\n\r\n.comp_nav nav {\r\n    position: relative;\r\n}\r\n\r\n.comp_nav nav button {\r\n    cursor: pointer;\r\n    position: relative;\r\n}\r\n\r\n.comp_nav .page-container {\r\n    background-color: $light-text_color;\r\n    border: 0;\r\n    border-radius: 50%;\r\n    box-shadow: 0 0 15px -3px $dark-text_color;\r\n    color: $dark-text_color;\r\n    font-size: 3rem;\r\n    height: 250px;\r\n    width: 250px;\r\n    overflow: hidden;\r\n}\r\n\r\n.comp_nav .page-container p {\r\n    color: $dark-text_color;\r\n    transform: rotate(0) translateX(-50%);\r\n    bottom: 15%;\r\n    left: 50%;\r\n}\r\n\r\n.comp_nav .page-container p::after {\r\n    right: 26%;\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.comp_nav .pages .item {\r\n    list-style-type: none;\r\n    transform: translate(-50%, -50%);\r\n    transition: 0.3s ease-in-out;\r\n    position: absolute;\r\n    z-index: -1;\r\n}\r\n\r\n.comp_nav .pages .item:first-of-type {\r\n    top: -10%;\r\n    left: 0;\r\n}\r\n.comp_nav .pages .item:nth-of-type(2) {\r\n    top: -30%;\r\n    left: 50%;\r\n}\r\n\r\n.comp_nav .pages .item:last-of-type {\r\n    top: -10%;\r\n    left: 100%;\r\n}\r\n\r\n.comp_nav .pages .item button {\r\n    background-color: $light-text_color;\r\n    border: 0;\r\n    border-radius: 50%;\r\n    box-shadow: 0 0 15px -3px $dark-text_color;\r\n    width: 85px;\r\n    height: 85px;\r\n}\r\n\r\n.comp_nav .pages .item button svg {\r\n    width: 30px;\r\n    height: 30px;\r\n}\r\n\r\n.comp_nav .pages .item.hide {\r\n    top: 50% !important;\r\n    left: 50% !important;\r\n}",".card {\r\n    --_transition: 0.5s;\r\n    --_padding: 1.5rem;\r\n    --_placement: calc(0% + var(--_padding));\r\n    border: 0;\r\n    cursor: pointer !important;\r\n    font-family: 'Lathic', sans-serif;\r\n    width: 350px;\r\n    transition: var(--_transition);\r\n    overflow: hidden;\r\n    outline: 3px solid $light-text_color;\r\n    position: relative;\r\n}\r\n\r\n.card::after {\r\n    content: '';\r\n    // border-radius: 27px;\r\n    box-shadow: 0 0 30px 10px #000000a3 inset;\r\n    width: 100%;\r\n    height: 100%;\r\n    transition: var(--_transition);\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 0;\r\n}\r\n\r\n.card .product-img {\r\n    object-fit: cover;\r\n    width: 100%;\r\n    height: 450px;\r\n    transition: var(--_transition);\r\n    display: block;\r\n    position: relative;\r\n}\r\n\r\n.card div {\r\n    position: absolute;\r\n}\r\n\r\n.card div:not(.overlay) {\r\n    cursor: default;\r\n    z-index: 1;\r\n}\r\n\r\n:is(.card, .dialog-container) .overlay {\r\n    content: '';\r\n    background-image: radial-gradient(circle at top right, transparent 50%, #000);\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n.card .product-rating {\r\n    display: flex;\r\n    gap: 9px;\r\n    align-items: center;\r\n    justify-content: center;\r\n    top: var(--_placement);\r\n    right: var(--_placement);\r\n}\r\n\r\n.card .product-rating .rating {\r\n    color: #FFFAF1;\r\n    font-size: 1.2rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.card .product-rating svg {\r\n    stroke: #FFFAF1;\r\n    stroke-width: 2px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.card .product-desc {\r\n    font-size: 2.3rem;\r\n    bottom: var(--_placement);\r\n    left: var(--_placement);\r\n}\r\n\r\n.card .product-desc .name {\r\n    color: #FFFAF1;\r\n    font-weight: bold;\r\n    text-align: left;\r\n    width: 240px;\r\n}\r\n\r\n.card .product-desc .price {\r\n    color: #c99c83;\r\n    width: max-content;\r\n    transition: var(--_transition);\r\n}\r\n\r\n.card .product-logo {\r\n    background-color: #c99c83;\r\n    border: 0;\r\n    border-radius: 50%;\r\n    box-shadow: 0 0 10px #c99c83;\r\n    height: 60px;\r\n    width: 60px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    transition: var(--_transition);\r\n    bottom: var(--_placement);\r\n    right: var(--_placement);\r\n}\r\n\r\n.card .product-logo svg {\r\n    height: 30px;\r\n    width: 30px;\r\n    fill: #FFFAF1;\r\n}\r\n\r\n/* Hovers */\r\n.card:hover {\r\n    outline: 3px solid transparent;\r\n    box-shadow: 0 17px 17px #000000a3;\r\n    transform: scale(1.05);\r\n}\r\n\r\n.card:hover::after {\r\n    box-shadow: 0px 0px 0px 0px transparent;\r\n}\r\n\r\n.card:active {\r\n    box-shadow: 0 10px 10px #000000;\r\n    transition: 0.3s;\r\n    transform: scale(0.9);\r\n}\r\n\r\n.card:active:not(:hover) {\r\n    transform: scale(1);\r\n}\r\n\r\n.card .product-desc .price:hover {\r\n    font-size: 3rem;\r\n}\r\n\r\n.card:hover .product-img {\r\n    transform: scale(1.3);\r\n}\r\n\r\n.card .product-logo:hover {\r\n    background-color: #8B3F3F;\r\n    box-shadow: 0 0 10px #8B3F3F;\r\n}","dialog {\r\n    background-color: transparent;\r\n    border: 0;\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n    transition: \r\n    opacity 0.5s allow-discrete,\r\n    transform 0.5s allow-discrete;\r\n    z-index: -1;\r\n}\r\n\r\ndialog::backdrop {\r\n    background-color: transparent;\r\n    transition: backdrop-filter 0.5s allow-discrete;\r\n}\r\n\r\ndialog[open]::backdrop {\r\n    backdrop-filter: blur(5px);\r\n}\r\n\r\ndialog[open] {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n}\r\n\r\n@starting-style {\r\n    dialog[open] {\r\n        opacity: 0;\r\n        transform: translateY(1000%);\r\n    }\r\n\r\n    dialog[open]::backdrop {\r\n        backdrop-filter: blur(0);\r\n    }\r\n}\r\n\r\n.dialog-container {\r\n    --_border-radius: 30px;\r\n    --_gap: 15px;\r\n    border-radius: var(--_border-radius);\r\n    box-shadow: 0 3px 15px #00000089;\r\n    width: 600px;\r\n    height: 800px;\r\n    overflow: hidden;\r\n    display: flex;\r\n    gap: var(--_gap);\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    position: relative;\r\n}\r\n\r\n.dialog-container img {\r\n    display: block;\r\n    object-fit: cover;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.dialog-container :is(button, img)::selection {\r\n    color: none;\r\n    background: none;\r\n}\r\n\r\n.dialog-container .exit {\r\n    background-color: #fffaf1;\r\n    border: 0;\r\n    border-radius: 50%;\r\n    cursor: pointer;\r\n    width: 40px;\r\n    height: 40px;\r\n    transition: 0.3s;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: absolute;\r\n    top: var(--_border-radius);\r\n    right: var(--_border-radius);\r\n}\r\n\r\n.dialog-container .exit svg {\r\n    transition: 0.3s;\r\n    width: 30px;\r\n    height: 30px;\r\n    fill: #000;\r\n}\r\n\r\n.dialog-container .exit:hover {\r\n    background-color: #000;\r\n    box-shadow: 0 0 15px #FFFAF1;\r\n}\r\n\r\n.dialog-container .exit:active {\r\n    transform: scale(0.8);\r\n}\r\n\r\n.dialog-container .exit:not(:hover):active {\r\n    transform: scale(1);\r\n}\r\n\r\n.dialog-container .exit:hover svg {\r\n    fill: #FFFAF1;\r\n}\r\n\r\n.dialog-container .item-name {\r\n    color: #FFFAF1;\r\n    font-size: 2.6rem;\r\n    font-weight: bold;\r\n    width: 300px;\r\n    position: absolute;\r\n    top: var(--_border-radius);\r\n    left: var(--_border-radius);\r\n}\r\n\r\n.dialog-container .bottom-part {\r\n    width: calc(100% - var(--_border-radius) * 2);\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 17px;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: absolute;\r\n    bottom: var(--_border-radius);\r\n    left: var(--_border-radius);\r\n}\r\n\r\n.dialog-container .item-desc {\r\n    color: #FFFAF1;\r\n    font-size: 1.25rem;\r\n    text-align: justify;\r\n}\r\n\r\n.dialog-container .option {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.dialog-container .item-size {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 13px;\r\n}\r\n\r\n.dialog-container .size-text {\r\n    color: #fffaf1;\r\n    font-size: 1.25rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.dialog-container .size {\r\n    background-color: transparent;\r\n    border: 2px solid #FFFAF1;\r\n    border-radius: 50%;\r\n    color: #FFFAF1;\r\n    font-size: 1rem;\r\n    font-weight: bold;\r\n    height: 30px;\r\n    width: 30px;\r\n    transition: 0.2s;\r\n}\r\n\r\n.dialog-container .size:hover {\r\n    background-color: #c99c83;\r\n}\r\n\r\n.dialog-container .size.active {\r\n    background-color: #c99c83;\r\n    border: 2px solid transparent;\r\n    box-shadow: 0 0 15px -2px #FFFAF1;\r\n}\r\n\r\n.dialog-container .item-quantity {\r\n    display: flex;\r\n    gap: 5px;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.dialog-container .quantity {\r\n    color: #FFFAF1;\r\n    font-size: 1.25rem;\r\n}\r\n\r\n.dialog-container .item-quantity svg {\r\n    fill: #c99c83;\r\n    height: 25px;\r\n    width: 25px;\r\n}\r\n\r\n.dialog-container .item-quantity button {\r\n    background-color: #FFFAF1;\r\n    border: transparent;\r\n    border-radius: 50%;\r\n    color: #000;\r\n    font-size: 1.5rem;\r\n    font-weight: bold;\r\n    height: 30px;\r\n    width: 30px;\r\n    transition: 0.2s;\r\n}\r\n\r\n.dialog-container .item-quantity button:hover {\r\n    background-color: #c99c83;\r\n    color: #FFFAF1;\r\n}\r\n\r\n.dialog-container .item-quantity button:active {\r\n    background-color: #8B3F3F;\r\n}\r\n\r\n.dialog-container .item-quantity button:active:not(:hover) {\r\n    background-color: #FFFAF1;\r\n    color: #000;\r\n}\r\n\r\n.dialog-container .item-action {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 25px;\r\n}\r\n\r\n.dialog-container .item-action button {\r\n    border: 0;\r\n    border-radius: 40px;\r\n    cursor: pointer;\r\n    font-size: 1.25rem;\r\n    padding: 13px 19px;\r\n    transition: 0.2s;\r\n}\r\n\r\n.dialog-container .item-action button:hover {\r\n    background-color: #8B3F3F;\r\n    border: 2px solid #8B3F3F;\r\n}\r\n\r\n.dialog-container .item-action button:active {\r\n    transform: scale(0.95);\r\n}\r\n\r\n.dialog-container .item-action .add-to-cart {\r\n    background-color: transparent;\r\n    border: 2px solid #FFFAF1;\r\n    color: #FFFAF1;\r\n    text-align: center;\r\n    width: 30%;\r\n}\r\n\r\n.dialog-container .item-action button:active:not(:hover) {\r\n    transform: scale(1);\r\n}\r\n\r\n.dialog-container .item-action .checkout {\r\n    background-color: #c99c83;\r\n    border: 2px solid #FFFAF1;\r\n    color: #FFFAF1;\r\n    font-weight: bold;\r\n    display: flex;\r\n    gap: 7px;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: calc(70% - 25px);\r\n}\r\n\r\n.dialog-container .item-action .checkout svg {\r\n    width: 20px;\r\n    height: 20px;\r\n    fill: #FFFAF1;\r\n}\r\n\r\n.exit_modal {\r\n    animation: exit_modal 0.5s ease-in-out forwards;\r\n}\r\n\r\n/* Animation */\r\n@keyframes exit_modal {\r\n    from {\r\n        opacity: 1;\r\n        transform: translateY(0);\r\n    }\r\n    to {\r\n        opacity: 0;\r\n        transform: translateY(1000%);\r\n    }\r\n}","footer {\r\n    background-image: url(/src/assets/pexels-luiza-maria-scurtu-883871-2102037.jpg);\r\n    background-size: cover;\r\n    background-position: center;\r\n    margin-top: 150px;\r\n    padding: 60px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n\r\nfooter::after {\r\n    content: '';\r\n    box-shadow: 0 0 20px 15px #00000088 inset;\r\n    backdrop-filter: blur(20px) ;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 0;\r\n}\r\n\r\nfooter>* {\r\n    font-size: 1.3rem;\r\n    color: $light-text_color;\r\n    text-align: center;\r\n    z-index: 1;\r\n    text-shadow: 0 2px #000;\r\n}\r\n\r\nfooter .disclaimer {\r\n    font-size: 2rem;\r\n    font-weight: bold;\r\n}\r\n\r\nfooter .disclaimer-text {\r\n    max-width: 700px;\r\n    min-width: 300px;\r\n    position: relative;\r\n}\r\n\r\nfooter .disclaimer-text::before {\r\n    --_width: 110%;\r\n    content: '';\r\n    width: var(--_width);\r\n    position: absolute;\r\n    top: 0;\r\n    left: calc(var(--_width) / -22);\r\n}\r\n\r\nfooter .disclaimer-text span {\r\n    background-color: transparent;\r\n    border: none;\r\n    font-size: 1.9rem;\r\n    text-shadow: 1px 1px $dark-text_color;\r\n}\r\n\r\nfooter .disclaimer-text span::after {\r\n    content: 'Life in a Cup';\r\n    font-size: 0.4rem;\r\n    width: max-content;\r\n    text-shadow: 0 0 $dark-text_color;\r\n    position: absolute;\r\n    bottom: 73%;\r\n    right: 5%;\r\n}\r\n\r\nfooter li {\r\n    list-style: none;\r\n}\r\n\r\nfooter .socials {\r\n    margin-top: 11px;\r\n    display: flex;\r\n    gap: 13px;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\nfooter .socials svg {\r\n    fill: $light-text_color;\r\n}","@import './component-card';\r\n@import './component_modal';\r\n@import './component-footer';\r\n\r\nbody:has(dialog[open])\r\n{\r\n    overflow: hidden;\r\n}\r\n\r\n.cuppiespage {\r\n    --_global-padding: 30px;\r\n    background-color: $primary-color;\r\n}\r\n\r\n.cuppiespage .hero {\r\n    width: 100%;\r\n    height: 90dvh;\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n\r\n.cuppiespage .hero::after {\r\n    content: '';\r\n    box-shadow: 0 0 30px 20px #000000b5 inset;\r\n    height: 100%;\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left:0;\r\n    z-index: 0;\r\n}\r\n\r\n.cuppiespage .hero .featured-banner {\r\n    object-fit: cover;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.cuppiespage .top-layer {\r\n    background-image: radial-gradient(circle at center bottom, transparent 45%, $dark-text_color);\r\n    padding: 45px 75px;\r\n    height: 100%;\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 1;\r\n}\r\n\r\n.cuppiespage .top-container {\r\n    height: 100%;\r\n    position: relative;\r\n}\r\n\r\n.cuppiespage .logo {\r\n    background-color: transparent;\r\n    border: none;\r\n    font-size: 8rem;\r\n    text-shadow: 5px 5px $dark-text_color;\r\n    transform: translateX(-50%);\r\n    left: 50%;\r\n}\r\n\r\n.cuppiespage .logo::after {\r\n    content: 'Life in a Cup';\r\n    font-size: 1.5rem;\r\n    width: max-content;\r\n    text-shadow: 2px 2px $dark-text_color;\r\n    position: absolute;\r\n    bottom: 73%;\r\n    right: 5%;\r\n}\r\n\r\n.cuppiespage .featured-item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    transform: translate(-50%, -50%);\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 7%;\r\n}\r\n\r\n.cuppiespage .featured-title {\r\n    color: $light-text_color;\r\n    font-family: $font-stack-sub;\r\n    font-size: 5rem;\r\n    text-shadow: 4px 4px $dark-text_color;\r\n    margin-bottom: 13px;\r\n}\r\n\r\n.cuppiespage .featured-bubble {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 23px;\r\n}\r\n\r\n.cuppiespage .wrapper-bubble-text {\r\n    transform: translateY(-50%);\r\n    top: 50%;\r\n    right: 0;\r\n}\r\n\r\n.cuppiespage .bubble-action {\r\n    transform: translate(-50%, -50%);\r\n    top: 100%;\r\n    left: 50%;\r\n}\r\n\r\n.cuppiespage .wrapper-bubble-list {\r\n    transform: translateX(-50%);\r\n    bottom: 0;\r\n    left: 50%;\r\n}\r\n\r\n.cuppiespage .product-section {\r\n    margin: 75px var(--_global-padding) 0 var(--_global-padding);\r\n    position: relative;\r\n}\r\n\r\n.cuppiespage .header-text .detail {\r\n    color: $light-text_color;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.cuppiespage .header-text .detail .title {\r\n    font-family: $font-stack-accent;\r\n    font-size: 4rem;\r\n    text-shadow: 0 5px $dark-text_color;\r\n}\r\n\r\n.cuppiespage .header-text .detail .desc {\r\n    font-size: 1.6rem;\r\n    text-align: center;\r\n    width: 700px;\r\n}\r\n\r\n.cuppiespage .header-text .category {\r\n    margin: 75px 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n}\r\n\r\n.cuppiespage .header-text .category .item {\r\n    background-color: transparent;\r\n    border: 0;\r\n}\r\n\r\n.cuppiespage .header-text .category h1 {\r\n    color: $light-text_color;\r\n    font-family: $font-stack-accent;\r\n    font-size: 3rem;\r\n    text-shadow: 0 4px #000;\r\n    transition: 0.3s;\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n\r\n.cuppiespage .header-text .category h1:hover {\r\n    transform: scale(1.25);\r\n}\r\n\r\n.cuppiespage .header-text .category h1.active {\r\n    color: $light-text_color;\r\n    transform: scale(1.25);\r\n}\r\n\r\n.cuppiespage .header-text .category h1.active::before {\r\n    background-color: $accent-color;\r\n    box-shadow: 7px 7px $dark-text_color;\r\n    border-radius: 0;\r\n    width: 80%;\r\n    height: 65px;\r\n    transform: translate(-50%, -50%) rotate(0);\r\n}\r\n\r\n.cuppiespage .header-text .category h1::before {\r\n    content: '';\r\n    background-color: $dark-text_color;\r\n    box-shadow: 7px 7px $light-text_color;\r\n    border-radius: 7px;\r\n    width: 90px;\r\n    height: 90px;\r\n    transform: translate(-50%, -50%) rotate(-15deg) skew(-30deg);\r\n    transition: 0.3s;\r\n    display: block;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    z-index: -1;\r\n}\r\n\r\n.cuppiespage .header-text .category h1:hover::before {\r\n    box-shadow: 0;\r\n    border-radius: 0;\r\n    width: 80%;\r\n    height: 65px;\r\n    transform: translate(-50%, -50%) rotate(0);\r\n}\r\n\r\n.cuppiespage article.category-container {\r\n    padding: 35px 0;\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\r\n    grid-gap: 30px;\r\n    justify-content: center;\r\n    justify-items: center;\r\n    z-index: 1;\r\n}",".about-page .about-container {\r\n    background-image: url('/src/assets/rr-abrot-pNIgH0y3upM-unsplash.jpg');\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    color: $light_text-color;\r\n    padding: 0 75px 40px;\r\n    width: 100%;\r\n    height: 100dvh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 50px;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: relative;\r\n}\r\n\r\n.about-page .about-container::after {\r\n    content: '';\r\n    background-image: linear-gradient(0deg, $dark_text-color 10%, transparent);\r\n    height: 100%;\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 0;\r\n}\r\n\r\n.about-page .about-container .detail {\r\n    text-align: center;\r\n    width: 1000px;\r\n    z-index: 1;\r\n}\r\n\r\n.about-page .about-container .detail .title {\r\n    font-family: $font-stack-accent;\r\n    font-size: 4rem;\r\n    text-shadow: 6px 6px $dark_text-color;\r\n}\r\n\r\n.about-page .about-container .detail .title .brand-name {\r\n    font-size: 5rem;\r\n}\r\n\r\n.about-page .about-container .detail .title .brand-name::after {\r\n    font-size: 1.2rem;\r\n    text-shadow: 2px 2px $dark_text-color;\r\n}\r\n\r\n.about-page .about-container .detail .desc {\r\n    font-size: 1.6rem;\r\n    text-shadow: 2px 2px $dark_text-color;\r\n}\r\n\r\n.about-page .contacts {\r\n    display: flex;\r\n    gap: 40px;\r\n    align-items: center;\r\n    z-index: 1;\r\n}\r\n\r\n.about-page .contacts .item {\r\n    font-size: 1.6rem;\r\n    list-style: none;\r\n    text-shadow: 2px 2px $dark-text_color;\r\n    display: flex;\r\n    gap: 7px;\r\n    align-items: center;\r\n}\r\n\r\n.about-page .contacts .item svg {\r\n    fill: $light-text_color;\r\n    filter: drop-shadow(3px 3px $dark-text_color);\r\n    width: 40px;\r\n    height: 40px;\r\n}\r\n\r\n.about-page .contacts .item .text {\r\n    width: max-content;\r\n}","@media screen and (max-width: 1400px) {\r\n    .side .container-title .title {\r\n        font-size: 10rem;\r\n        text-shadow: 5px 5px $primary-color;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 900px) {\r\n    .side.left {\r\n        // display: none;\r\n        width: 100%;\r\n        height: 100%;\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n    }\r\n\r\n    .side .featured-bubble {\r\n        flex-direction: row;\r\n        transform: translateX(-50%);\r\n        left: 50%;\r\n        top: 65%;\r\n    }\r\n\r\n    .homepage .wrapper-bubble-text {\r\n        display: none;\r\n    }\r\n\r\n    .homepage .texture-overlay {\r\n        background-image: linear-gradient(0deg, $dark-text_color, transparent);\r\n        background-size: auto;\r\n        backdrop-filter: blur(3px);\r\n        filter: none;\r\n        opacity: 1;\r\n    }\r\n\r\n    .side.right {\r\n        width: 100%;\r\n    }\r\n\r\n    .side .container-social svg {\r\n        fill: $light-text_color;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n    .side .container-rights {\r\n        top: 70px;\r\n        bottom: 0;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 450px) {\r\n    .side .featured-bubble {\r\n        top: 60%;\r\n    }\r\n\r\n    .side .container-title .title {\r\n        font-size: 7rem;\r\n    }\r\n\r\n    .side .container-title .title.brand-name::after {\r\n        font-size: 1.5rem;\r\n    }\r\n\r\n    .side .container-social svg {\r\n        width: 25px;\r\n        height: 25px;\r\n    }\r\n}","@media screen and (max-width: 1620px) {\r\n    .bubble-text .featured-name {\r\n        font-size: 2rem;\r\n    }\r\n\r\n    .bubble-text .featured-price {\r\n        font-size: 2.3rem;\r\n    }\r\n\r\n    .bubble-action {\r\n        font-size: 1.5rem;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1350px) {\r\n    .bubble-text .featured-name {\r\n        width: 200px;\r\n        font-size: 1.7rem;\r\n    }\r\n\r\n    .bubble-text .featured-price {\r\n        font-size: 2rem;\r\n    }\r\n\r\n    .bubble-action {\r\n        font-size: 1.3rem;\r\n        width: max-content;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1080px) {\r\n    .cuppiespage article.category-container {\r\n        grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));\r\n        grid-gap: 20px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1020px) {\r\n    .bubble-text .featured-name {\r\n        width: 150px;\r\n        font-size: 1.7rem;\r\n    }\r\n\r\n    .bubble-text .featured-price {\r\n        font-size: 2rem;\r\n    }\r\n\r\n    .bubble-action {\r\n        font-size: 1.3rem;\r\n        width: max-content;\r\n    }\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 950px) {\r\n    .cuppiespage .featured-item {\r\n        transform: translateY(-50%);\r\n        left: 10%;\r\n    }\r\n\r\n    .cuppiespage .top-layer {\r\n        padding: 45px 30px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 900px) {\r\n    .cuppiespage .header-text .detail .desc {\r\n        font-size: 1.3rem;\r\n        text-align: center;\r\n        width: 600px;\r\n    }\r\n\r\n    .cuppiespage .header-text .category h1 {\r\n        font-size: 2rem;\r\n        text-shadow: 0 3px #000;\r\n    }\r\n\r\n    .cuppiespage .header-text .category h1::before {\r\n        width: 75px;\r\n        height: 75px;\r\n    }\r\n\r\n    .cuppiespage .header-text .category h1.active::before {\r\n        height: 45px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 700px) {\r\n    .cuppiespage .logo {\r\n        font-size: 6rem;\r\n    }\r\n\r\n    .cuppiespage .logo::after {\r\n        font-size: 1.2rem;\r\n    }\r\n\r\n    .cuppiespage .featured-item {\r\n        transform: translate(-50%, -50%);\r\n        top: 25%;\r\n        left: 50%;\r\n    }\r\n\r\n    .cuppiespage .featured-bubble {\r\n        flex-direction: row;\r\n    }\r\n\r\n    .cuppiespage .top-layer {\r\n        padding: 45px 30px;\r\n    }\r\n\r\n    .cuppiespage .wrapper-bubble-text {\r\n        transform: translate(50%, -50%);\r\n        top: 77%;\r\n        right: 50%;\r\n    }\r\n\r\n    .bubble-text {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        gap: 10px;\r\n    }\r\n\r\n    .bubble-text .featured-name {\r\n        width: max-content;\r\n        font-size: 1.7rem;\r\n    }\r\n\r\n    .cuppiespage .header-text .detail .title {\r\n        font-size: 3rem;\r\n    }\r\n\r\n    .cuppiespage .header-text .detail .desc {\r\n        font-size: 1.3rem;\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 530px) {\r\n    .cuppiespage {\r\n        --_global-padding: 10px;\r\n    }\r\n    \r\n    .bubble-text {\r\n        display: block;\r\n    }\r\n\r\n    .bubble-text .featured-name {\r\n        font-size: 1.5rem;\r\n    }\r\n\r\n    .bubble-text .featured-price {\r\n        font-size: 2rem;\r\n    }\r\n\r\n    .bubble-action {\r\n        font-size: 1.3rem;\r\n        width: max-content;\r\n    }\r\n\r\n    .cuppiespage .wrapper-bubble-list .item {\r\n        font-size: 1.2rem;\r\n    }\r\n\r\n    .cuppiespage article.category-container {\r\n        grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 450px) {\r\n    .cuppiespage .header-text .detail .title {\r\n        text-align: center;\r\n    }\r\n\r\n    .cuppiespage .header-text .detail .desc {\r\n        font-size: 1.1rem;\r\n        width: 100%;\r\n    }\r\n\r\n    .cuppiespage .header-text .category {\r\n        margin: 35px 0;\r\n    }\r\n\r\n    .cuppiespage .header-text .category h1 {\r\n        font-size: 1.7rem;\r\n    }\r\n\r\n    .cuppiespage .header-text .category h1::before {\r\n        border-radius: 4px;\r\n        width: 55px;\r\n        height: 55px;\r\n    }\r\n\r\n    .cuppiespage .header-text .category h1.active::before {\r\n        height: 45px;\r\n    }\r\n\r\n    .cuppiespage .header-text .category h1:hover::before {\r\n        height: 45px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 400px) {\r\n    .cuppiespage .article.category-container {\r\n        grid-gap: 0px;\r\n    }\r\n\r\n    .cuppiespage .header-text .category h1 {\r\n        font-size: 1.3rem;\r\n    }\r\n\r\n    .cuppiespage .header-text .category h1::before {\r\n        border-radius: 2px;\r\n        width: 40px;\r\n        height: 40px;\r\n    }\r\n\r\n    .cuppiespage .header-text .category h1.active::before {\r\n        height: 45px;\r\n    }\r\n\r\n    .cuppiespage .header-text .category h1:hover::before {\r\n        height: 45px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 450px) and (max-height: 750px) {\r\n    .cuppiespage .featured-item {\r\n        top: 30%;\r\n    }\r\n\r\n    .featured-bubble .bubble-item {\r\n        width: 60px;\r\n        height: 60px;\r\n    }\r\n\r\n    .featured-bubble img {\r\n        object-position: 0 -10px;\r\n    }\r\n\r\n    .cuppiespage .wrapper-bubble-text {\r\n        top: 74%;\r\n    }\r\n\r\n    .bubble-text {\r\n        padding: 24px 27px 27px;\r\n    }\r\n\r\n    .bubble-text .featured-name {\r\n        font-size: 1.5rem;\r\n    }\r\n\r\n    .bubble-text .featured-price {\r\n        display: none;\r\n    }\r\n\r\n    .bubble-action {\r\n        font-size: 1.2rem;\r\n        width: max-content;\r\n    }\r\n}","@media screen and (max-width: 1200px) {\r\n    .about-page .contacts .item .text {\r\n        font-size: 1.4rem;\r\n    }\r\n\r\n    .about-page .contacts .item svg {\r\n        width: 30px;\r\n        height: 30px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n    .about-page .about-container .detail {\r\n        width: 100%;\r\n    }\r\n\r\n    .about-page .about-container .detail .desc {\r\n        font-size: 1.4rem;\r\n    }\r\n\r\n    .about-page .contacts {\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 10px;\r\n        align-items: flex-start;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n    .about-page .about-container {\r\n        padding: 0 30px 40px;\r\n        gap: 20px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 600px) and (max-height: 800px) {\r\n    .about-page .about-container .detail .title {\r\n        font-size: 2rem;\r\n        text-shadow: 3px 3px $dark_text-color;\r\n\r\n    }\r\n\r\n    .about-page .about-container .detail .title .brand-name {\r\n        font-size: 3rem;\r\n    }\r\n\r\n    .about-page .about-container .detail .title .brand-name::after {\r\n        font-size: 0.8rem;\r\n    }\r\n\r\n    .about-page .about-container .detail .desc {\r\n        font-size: 1.3rem;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 400px) {\r\n    .about-page .contacts .item .text {\r\n        font-size: 1.2rem;\r\n    }\r\n\r\n    .about-page .contacts .item svg {\r\n        width: 20px;\r\n        height: 20px;\r\n    }\r\n}","@media screen and (max-width: 600px) and (max-height: 800px) {\r\n    .comp_nav .page-container {\r\n        font-size: 2rem;\r\n        height: 190px;\r\n        width: 190px;\r\n    }\r\n\r\n    .comp_nav .page-container p::after {\r\n        right: 31%;\r\n        font-size: 0.5rem;\r\n    }\r\n\r\n    .comp_nav .pages .item button {\r\n        font-size: 1rem;\r\n        width: 75px;\r\n        height: 75px;\r\n    }\r\n\r\n    .comp_nav .pages .item button svg {\r\n        width: 23px;\r\n        height: 23px;\r\n    }\r\n}","@media screen and (max-width: 1080px) {\r\n    .card {\r\n        width: 225px;\r\n    }\r\n\r\n    .card .product-img {\r\n        height: 275px;\r\n    }\r\n\r\n    .card .product-rating .rating {\r\n        font-size: 1.2rem;\r\n    }\r\n\r\n    .card .product-desc {\r\n        font-size: 1.5rem;\r\n    }\r\n\r\n    .card .product-desc .name {\r\n        width: 65%;\r\n    }\r\n\r\n    .card .product-logo {\r\n        height: 50px;\r\n        width: 50px;\r\n    }\r\n\r\n    .card .product-logo svg {\r\n        height: 25px;\r\n        width: 25px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 530px) {\r\n    .card {\r\n        --_padding: 0.6rem;\r\n        width: 150px;\r\n    }\r\n\r\n    .card .product-img {\r\n        height: 200px;\r\n    }\r\n\r\n    .card .product-rating {\r\n        gap: 2px;\r\n    }\r\n\r\n    .card .product-rating .rating {\r\n        font-size: 0.9rem;\r\n    }\r\n\r\n    .card .product-rating svg {\r\n        transform: scale(0.8);\r\n    }\r\n\r\n    .card .product-desc {\r\n        font-size: 0.9rem;\r\n    }\r\n\r\n    .card .product-desc .name {\r\n        width: 73%;\r\n    }\r\n\r\n    .card .product-logo {\r\n        height: 30px;\r\n        width: 30px;\r\n    }\r\n\r\n    .card .product-logo svg {\r\n        height: 15px;\r\n        width: 15px;\r\n    }\r\n}","@media screen and (max-width: 530px) {\r\n    footer .disclaimer {\r\n        font-size: 1.5rem;\r\n    }\r\n\r\n    footer .disclaimer-text {\r\n        font-size: 1rem;\r\n    }\r\n\r\n    footer .disclaimer-text span {\r\n        background-color: transparent;\r\n        border: none;\r\n        font-size: 1.3rem;\r\n        text-shadow: 1px 1px $dark-text_color;\r\n    }\r\n\r\n    footer .disclaimer-text span::after {\r\n        font-size: 0.2rem;\r\n    }\r\n\r\n    footer .copyright-author {\r\n        font-size: 1rem;\r\n    }\r\n}","@media screen and (max-width: 650px) {\r\n    dialog {\r\n        margin: 0;\r\n        padding: 0;\r\n        overflow:visible;\r\n    }\r\n    \r\n    .dialog-container {\r\n        border-radius: 0;\r\n        width: 100dvw;\r\n        height: 100dvh;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 450px) {\r\n    .dialog-container .item-action .add-to-cart {\r\n        width: 40%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 400px) {\r\n    .dialog-container .item-name {\r\n        width: 270px;\r\n    }\r\n\r\n    .dialog-container .item-action {\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        gap: 10px\r\n    }\r\n\r\n    .dialog-container .item-action button {\r\n        width: 100% !important;\r\n    }\r\n\r\n    .dialog-container .option {\r\n        flex-direction: column;\r\n        gap: 10px;\r\n        align-items: flex-start;\r\n        justify-content: center;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/pexels-janakukebal-6496463.jpg":
/*!***************************************************!*\
  !*** ./src/assets/pexels-janakukebal-6496463.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pexels-janakukebal-6496463.jpg";

/***/ }),

/***/ "./src/assets/pexels-luiza-maria-scurtu-883871-2102037.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/pexels-luiza-maria-scurtu-883871-2102037.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pexels-luiza-maria-scurtu-883871-2102037.jpg";

/***/ }),

/***/ "./src/assets/pexels-oznur-taskan-172633297-12896257.jpg":
/*!***************************************************************!*\
  !*** ./src/assets/pexels-oznur-taskan-172633297-12896257.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pexels-oznur-taskan-172633297-12896257.jpg";

/***/ }),

/***/ "./src/assets/pexels-rachel-claire-5865232.jpg":
/*!*****************************************************!*\
  !*** ./src/assets/pexels-rachel-claire-5865232.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pexels-rachel-claire-5865232.jpg";

/***/ }),

/***/ "./src/assets/pexels-tyler-nix-1259808-2396220.jpg":
/*!*********************************************************!*\
  !*** ./src/assets/pexels-tyler-nix-1259808-2396220.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pexels-tyler-nix-1259808-2396220.jpg";

/***/ }),

/***/ "./src/assets/rr-abrot-pNIgH0y3upM-unsplash.jpg":
/*!******************************************************!*\
  !*** ./src/assets/rr-abrot-pNIgH0y3upM-unsplash.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "rr-abrot-pNIgH0y3upM-unsplash.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images.js */ "./src/scripts/images.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _comp_loading_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comp_loading.js */ "./src/scripts/comp_loading.js");
/* harmony import */ var _comp_navbar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comp_navbar.js */ "./src/scripts/comp_navbar.js");
/* harmony import */ var _contentPage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contentPage.js */ "./src/scripts/contentPage.js");
/* harmony import */ var _page_homepage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page_homepage.js */ "./src/scripts/page_homepage.js");
/* harmony import */ var _products_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products.js */ "./src/scripts/products.js");


// Importing components



// Importing pages



// Importing Products


// Initial load
window.addEventListener('load', function () {
  _comp_loading_js__WEBPACK_IMPORTED_MODULE_2__["default"].createComponent();
  _comp_loading_js__WEBPACK_IMPORTED_MODULE_2__["default"].playAnimation();
  setTimeout(function () {
    _page_homepage_js__WEBPACK_IMPORTED_MODULE_5__["default"].createPage();
    _comp_navbar_js__WEBPACK_IMPORTED_MODULE_3__["default"].createComponent();
    _contentPage_js__WEBPACK_IMPORTED_MODULE_4__["default"].prependContentPage(_comp_navbar_js__WEBPACK_IMPORTED_MODULE_3__["default"].getNavbar());
    _contentPage_js__WEBPACK_IMPORTED_MODULE_4__["default"].prependContentPage(_comp_navbar_js__WEBPACK_IMPORTED_MODULE_3__["default"].getBackdrop());
  }, 2000);

  /*
      Initializing coffee as there is no database.
      This simply acts as the "database" but array
      and objects are utilized.
  */

  // Get images
  var img = _images_js__WEBPACK_IMPORTED_MODULE_0__["default"].getImages();

  // Cuppyccino
  var c1 = (0,_products_js__WEBPACK_IMPORTED_MODULE_6__.Product)(img[0], 'Cuppyccino', 'Caramelized Chilly Cuppyccino', 5.99, 'desc');
  var c2 = (0,_products_js__WEBPACK_IMPORTED_MODULE_6__.Product)(img[1], 'Cuppyccino', 'Amer-Doux Cuppyccino', 5.99, 'desc');
  var c3 = (0,_products_js__WEBPACK_IMPORTED_MODULE_6__.Product)(img[2], 'Cuppyccino', 'Warm Fantasy Cuppyccino', 5.49, 'desc');
  var c4 = (0,_products_js__WEBPACK_IMPORTED_MODULE_6__.Product)(img[3], 'Cuppyccino', 'Chocoholic Delight Cuppyccino', 5.49, 'desc');
  var c5 = (0,_products_js__WEBPACK_IMPORTED_MODULE_6__.Product)(img[4], 'Cuppyccino', 'Noble Elegance Cuppyccino', 5.49, 'desc');
  var c6 = (0,_products_js__WEBPACK_IMPORTED_MODULE_6__.Product)(img[5], 'Cuppyccino', 'Dark Desire Cuppyccino', 4.99, 'desc');
  var c7 = (0,_products_js__WEBPACK_IMPORTED_MODULE_6__.Product)(img[6], 'Cuppyccino', 'Bachelor\'s Cuppychino', 4.59, 'desc');

  // Macchiee
  var m1 = (0,_products_js__WEBPACK_IMPORTED_MODULE_6__.Product)(img[7], 'Macchiee', 'Graceful Touch Macchiee', 5.49, 'desc');
  var m2 = (0,_products_js__WEBPACK_IMPORTED_MODULE_6__.Product)(img[8], 'Macchiee', 'Cloudy Sun Macchiee', 4.99, 'desc');
  var m3 = (0,_products_js__WEBPACK_IMPORTED_MODULE_6__.Product)(img[9], 'Macchiee', 'Hazel Hug Macchiee', 4.99, 'desc');
  var m4 = (0,_products_js__WEBPACK_IMPORTED_MODULE_6__.Product)(img[10], 'Macchiee', 'Macchiee-ing Taste', 4.49, 'desc');

  // Expressie
  var e1 = (0,_products_js__WEBPACK_IMPORTED_MODULE_6__.Product)(img[11], 'Expressie', 'Ame-Sœur Expressie', 5.49, 'desc');
  var e2 = (0,_products_js__WEBPACK_IMPORTED_MODULE_6__.Product)(img[12], 'Expressie', 'Serene Warmth Expressie', 5.49, 'desc');
  var e3 = (0,_products_js__WEBPACK_IMPORTED_MODULE_6__.Product)(img[13], 'Expressie', 'Happy Hour Expressie', 4.99, 'desc');
  var e4 = (0,_products_js__WEBPACK_IMPORTED_MODULE_6__.Product)(img[14], 'Expressie', 'Zenful Sip Expressie', 4.49, 'desc');
  var e5 = (0,_products_js__WEBPACK_IMPORTED_MODULE_6__.Product)(img[15], 'Expressie', 'Lover\'s Touch Expressie', 4.49, 'desc');
  var e6 = (0,_products_js__WEBPACK_IMPORTED_MODULE_6__.Product)(img[16], 'Expressie', 'Breaking Point Expressie', 3.99, 'desc');

  // Creating an array to store each variables
  var coffeeArr = [];
  coffeeArr.push(c1);
  coffeeArr.push(c2);
  coffeeArr.push(c3);
  coffeeArr.push(c4);
  coffeeArr.push(c5);
  coffeeArr.push(c6);
  coffeeArr.push(c7);
  coffeeArr.push(m1);
  coffeeArr.push(m2);
  coffeeArr.push(m3);
  coffeeArr.push(m4);
  coffeeArr.push(e1);
  coffeeArr.push(e2);
  coffeeArr.push(e3);
  coffeeArr.push(e4);
  coffeeArr.push(e5);
  coffeeArr.push(e6);

  // Add product to the array "database"
  for (var iter = 0; iter < coffeeArr.length; ++iter) {
    _products_js__WEBPACK_IMPORTED_MODULE_6__.productData.addProduct(coffeeArr[iter].getProduct());
  }
});

// Check if user has reached the bottom of the screen
window.addEventListener('scroll', function () {
  var d = document.documentElement;
  var offset = d.scrollTop + window.innerHeight;
  var height = d.offsetHeight * 0.95;
  var nav = _comp_navbar_js__WEBPACK_IMPORTED_MODULE_3__["default"].getNavbar();
  if (offset >= height) {
    nav.classList.add('nav-hide-animation');
  } else {
    nav.classList.remove('nav-hide-animation');
  }
  ;
});
/******/ })()
;
//# sourceMappingURL=bundleb7daacdb5c08df460a9d.js.map