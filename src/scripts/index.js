// import '../styles/main.scss';
// Importing components
import loading from './comp_loading.js';
import navbar from './comp_navbar.js';

// Importing pages
import contentpage from './contentPage.js';
import homepage from './page_homepage.js';

// Initial load
window.addEventListener('load', () => {
    loading.createComponent();
    loading.playAnimation();
    setTimeout(() => {
        homepage.createPage();
        navbar.createComponent();
        contentpage.prependContentPage(navbar.getComponent())
    }, 2000);
});