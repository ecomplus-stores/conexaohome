import { addClassOnClasses } from "./home/addClassOnSections/";
import { initCategoryPage } from "./categoryPage";
import { initHeader } from "./header/initHeader";
import { initProductPage } from "./productPage";



// INIT HEADER
document.querySelector('.header') ? initHeader() : null;

// CATEGORY PAGE
document.querySelector('#page-categories') ? initCategoryPage() : null;

//PRODUCT PAGE
document.querySelector('#page-products') ? initProductPage() : null; 

// HOME
document.querySelector('.page--home') ? addClassOnClasses() : null;
