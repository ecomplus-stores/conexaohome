import { inserTitleOnSection } from "../addTitleOnSections";
import { startBannerTarja } from "../bannerTarja";
const bannerTrile = document.querySelector('.sections').children[2];
const bannerTarja = document.querySelector('.sections').children[3];
const fullBannerPrimary = document.querySelector('.sections').children[6];
const bannerCategories = document.querySelector('.sections').children[7];
const fullBannerSecundary = document.querySelector('.sections').children[8];



export const addClassOnClasses = () => {
  bannerTrile.classList.add('triple-banner');
  bannerTarja.classList.add('banner-tarja');
  fullBannerPrimary.classList.add('full-banner-home');
  fullBannerPrimary.classList.add('full-banner-home');
  bannerCategories.classList.add('section-categories-banners');
  fullBannerSecundary.classList.add('full-banner-home');
  
  inserTitleOnSection(bannerCategories, 'ONDE VAI COMEÇAR A SUA CONEXÃO?')
  startBannerTarja();
}