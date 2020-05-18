import {profileTemplate} from './components/profile.js';
import {menuTemplate} from './components/menu.js';
import {filmListTemplate} from './components/film-list.js';
import {filmListTopRatedTemplate} from './components/top-rated.js';
import {filmListMostCommentedTemplate} from './components/most-commented.js';
import {cardTemplate} from './components/film-card.js';
import {showMoreTemplate} from './components/show-more.js';
import {getRandomInt, pickRandom, generateList} from './utils.js';
import commentMock from './mocks/comment.js';
import filmMock from './mocks/film.js';

const generateComment = (data, count) => {
  const id = getRandomInt(1, count);
  const author = pickRandom(data.author);
  const comment = pickRandom(data.comment);
  const emotion = pickRandom(data.emotion);
  const dateString = `2019-${getRandomInt(1, 12)}-${getRandomInt(1, 31)}`;
  const date = new Date(dateString);
  return {
    id,
    author,
    comment,
    emotion,
    date,
  }
}

const trueFalse = (int) => int ? true : false

const generateFilm = (data) => {
  const id = getRandomInt(1, 999);
  const comments = generateList(generateComment, commentMock, getRandomInt(1, 5)).map((comment) => {
    return comment.id;
  });
  const releaseDateString = `${getRandomInt(1900, 2019)}-${getRandomInt(1, 12)}-${getRandomInt(1, 31)}`
  const releaseDate = new Date(releaseDateString);
  const watchedDateString = `${getRandomInt(2000, 2019)}-${getRandomInt(1, 12)}-${getRandomInt(1, 31)}T${getRandomInt(0, 24)}:${getRandomInt(0, 60)}:${getRandomInt(0, 60)}Z`
  const watchedDate = new Date(watchedDateString);
  const watched = trueFalse(getRandomInt(0, 1));
  const film_info = {
    title: pickRandom(data.film_info.title),
    alternative_title: pickRandom(data.film_info[`alternative_title`]),
    total_rating: getRandomInt(1, 5),
    poster: pickRandom(data.film_info.poster),
    age_rating: pickRandom(data.film_info.age_rating),
    director: pickRandom(data.film_info.director),
    writers: generateList(pickRandom, data.film_info.writers, getRandomInt(1, 2)),
    actors: generateList(pickRandom, data.film_info.actors, getRandomInt(1, 3)),
    release: {
      date: releaseDate,
      release_country: pickRandom(data.film_info.release.release_country)
    },
    runtime: getRandomInt(20, 180),
    genre: generateList(pickRandom, data.film_info.genre, getRandomInt(1, 2)),
    description: generateList(pickRandom, data.film_info.description, getRandomInt(1, 5)),

  };
  const user_details = {
    watchlist: trueFalse(getRandomInt(0, 1)),
    already_watched: watched,
    watching_date: watched ? watchedDate : ``,
    favorite: trueFalse(getRandomInt(0, 1))
  }
  return {
    id,
    comments,
    film_info,
    user_details
  }
}

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


