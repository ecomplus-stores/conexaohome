import { initCategoryPage } from "./categoryPage";
import { initHeader } from "./header/initHeader";



// INIT HEADER
document.querySelector('.header') ? initHeader() : null;

// CATEGORY PAGE
document.querySelector('#page-categories') ? initCategoryPage() : null; 

