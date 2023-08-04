import { setHorario } from "../header/horario";
import { initMenuOurStores } from "./OurStores";
import { scrollToTop } from "./scrollToTop";

export const initFooter = () => {
  document.querySelector('.content-contato') ? setHorario() : null;
  document.querySelector('.content-lojas') ? initMenuOurStores() : null;
  scrollToTop(); 
}