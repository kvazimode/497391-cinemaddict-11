'use strict';

const headerContainer = document.querySelector(`.header`);
const mainContainer = document.querySelector(`.main`);

const append = (container, template, order) => {
  container.insertAdjacentHTML(order, template);
};

const profileTemplate = () => {
  return (
    `<section class="header__profile profile">
      <p class="profile__rating">Movie Buff</p>
      <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>`
  );
};

const menuTemplate = () => {
  return (`<nav class="main-navigation">
    <div class="main-navigation__items">
      <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
      <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>
      <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>
      <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>

  <ul class="sort">
    <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
    <li><a href="#" class="sort__button">Sort by date</a></li>
    <li><a href="#" class="sort__button">Sort by rating</a></li>
  </ul>`);
};

const filmListTemplate = () => {
  return (`<section class="films">
  <section class="films-list">
    <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
    <div class="films-list__container"></div>
  </section></section>`);
};

const filmListTopRatedTemplate = () => {
  return (`<section class="films-list--extra">
  <h2 class="films-list__title">Top rated</h2>
  <div class="films-list__container"></div>
  </section>`);
};

const filmListMostCommentedTemplate = () => {
  return (`<section class="films-list--extra">
  <h2 class="films-list__title">Most commented</h2>
  <div class="films-list__container"></div>
  </section>`);
};

const cardTemplate = () => {
  return (`<article class="film-card">
    <h3 class="film-card__title">The Dance of Life</h3>
    <p class="film-card__rating">8.3</p>
    <p class="film-card__info">
      <span class="film-card__year">1929</span>
      <span class="film-card__duration">1h 55m</span>
      <span class="film-card__genre">Musical</span>
    </p>
    <img src="./images/posters/the-dance-of-life.jpg" alt="" class="film-card__poster">
    <p class="film-card__description">Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…</p>
    <a class="film-card__comments">5 comments</a>
    <form class="film-card__controls">
      <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
      <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
      <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
    </form>
  </article>`);
};

const showMoreTemplate = () => {
  return (`<button class="films-list__show-more">Show more</button>`);
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


