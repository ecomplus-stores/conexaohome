import { cloneButtons } from "./cloneButtons"
import { isMobile } from "../utils/isMobile"
import { initProductPageMobile } from "./Mobile";
export const initProductPage = () => {
  setTimeout(() => {
    cloneButtons();
  }, 2000);

  isMobile ? initProductPageMobile () : null;
}