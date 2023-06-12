import { createElement } from "../../utils/createElementHTML";

const startSubMenu = (element) => {
  element.parentElement.prepend(createElement('div', 'btn-submenu-menu'));
  element.parentElement.firstElementChild.addEventListener('click', e=> {
    e.target.parentElement.lastElementChild.classList.toggle('show-submenu-main')
    e.target.classList.toggle('btn-close-submenu-menu')
  })
}

export const initSubMenu = () => {
  document.querySelectorAll('.main-submenu').forEach(element => {
    startSubMenu(element);
  })
}

