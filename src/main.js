import {profileTemplate} from './components/profile.js';
import {menuTemplate} from './components/menu.js';
import {filmListTemplate} from './components/film-list.js';
import {filmListTopRatedTemplate} from './components/top-rated.js';
import {filmListMostCommentedTemplate} from './components/most-commented.js';
import {cardTemplate} from './components/film-card.js';
import {showMoreTemplate} from './components/show-more.js';

const headerContainer = document.querySelector(`.header`);
const mainContainer = document.querySelector(`.main`);

const append = (container, template, order) => {
  container.insertAdjacentHTML(order, template);
};

append(headerContainer, profileTemplate(), `beforeend`);
append(mainContainer, menuTemplate(), `beforeend`);
append(mainContainer, filmListTemplate(), `beforeend`);
const mainFilmList = document.querySelector(`.films`);
append(mainFilmList, filmListTopRatedTemplate(), `beforeend`);
append(mainFilmList, filmListMostCommentedTemplate(), `beforeend`);
const upcomingFilmSection = mainFilmList.querySelector(`.films-list`);
const upcomingFilmList = upcomingFilmSection.querySelector(`.films-list__container`);
for (let i = 0; i < 5; i++) {
  append(upcomingFilmList, cardTemplate(), `beforeend`);
}
append(upcomingFilmList, showMoreTemplate(), `beforeend`);
const extraBlocks = mainFilmList.querySelectorAll(`.films-list--extra`);
extraBlocks.forEach((block) => {
  const container = block.querySelector(`.films-list__container`);
  for (let i = 0; i < 2; i++) {
    append(container, cardTemplate(), `beforeend`);
  }
});


