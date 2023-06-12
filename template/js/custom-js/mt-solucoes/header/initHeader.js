import { isMobile } from "../utils/isMobile"
import { changeHeader } from "./changeHeader"
import { initSubMenu } from "./mainSubMenu";


const initHeaderDesktop = () => {
  changeHeader();
  initSubMenu();
}


export const initHeader = () => {
  // DESKTOP
  // Change header on scroll
  !isMobile ? initHeaderDesktop() : null;
  
}