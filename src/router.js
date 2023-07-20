import { createElement } from './utils';

import AllMovies from './AllMovies';
import SingleMovie from './SingleMovie';
import FavoriteMovie from './FavoriteMovies';

export function initRouter(mainView) {
  function updateView(newView) {
    mainView.innerHTML = '';
    mainView.appendChild(newView);
  }

  function hashToRoute(hash) {
    switch (hash) {
      case '#/all-movies':
        updateView(AllMovies());
        break;

      case '#/single-movie':
        updateView(SingleMovie());
        break;

      case '#/favorite-movies':
        updateView(FavoriteMovie());
        break;

      default:
        updateView(createElement('h3', { textContent: '404 Page Not Found' }));
        break;
    }
  }

  const defaultHash = window.location.hash || '#/all-movies';
  hashToRoute(defaultHash);

  window.addEventListener('hashchange', (evt) => {
    const newUrl = new URL(evt.newURL);
    const hash = newUrl.hash;

    hashToRoute(hash);
  });
}
