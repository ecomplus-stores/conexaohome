import { setHorario } from "../header/horario"

export const initFooter = () => {
  document.querySelector('.content-contato') ? setHorario() : null;
}