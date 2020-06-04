export const cardTemplate = (film) => {
  const {comments, film_info} = film;
  const hours = Math.floor(film_info.runtime / 60);
  const minutes = film_info.runtime % 60;
  const desc = film_info.description.reduce((arr, item) => `${arr} ${item}`);
  const genreLine = film_info.genre.reduce((arr, item) => `${arr}, ${item}`);
  const trimmedDesc = desc.length > 139 ? desc.slice(0, 140) + `…` : desc;
  return (`<article class="film-card">
    <h3 class="film-card__title">${film_info.title}</h3>
    <p class="film-card__rating">${film_info.total_rating}</p>
    <p class="film-card__info">
      <span class="film-card__year">${film_info.release.date.getFullYear()}</span>
      <span class="film-card__duration">${hours}h ${minutes}m</span>
      <span class="film-card__genre">${film_info.genre.length == 1 ? film_info.genre : genreLine}</span>
    </p>
    <img src="/images/posters/${film_info.poster}" alt="" class="film-card__poster">
    <p class="film-card__description">${trimmedDesc}</p>
    <a class="film-card__comments">${comments.length} comments</a>
    <form class="film-card__controls">
      <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
      <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
      <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
    </form>
  </article>`);
};
