import { createElement } from "../utils/createElementHTML";

export const insertTitlePage = () => {
  const title = JSON.parse(document.querySelector('.page--categories script').innerText).itemListElement[1].item.name
  const contentBase = document.querySelector('.category-retail');
  const elTitle = createElement('h1', 'title-page');
  elTitle.textContent = title;
  console.log(elTitle)
  contentBase.before(elTitle)
}