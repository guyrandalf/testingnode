import { createElement } from "./utils";

const API_KEY = "1bbd72f65a0b1467640f1ec5f35f67b9";
const BASE_URL = `https://api.themoviedb.org/3/`;

async function AllMovies() {
	try {		
		const response = await fetch(
			`${BASE_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false`
		);
		if (!response.ok) {
			throw new Error("Error in response");
		}
		const data = await response.json();
		return data.results;
	} catch (error) {
		console.error("Error fetching movies:", error);
		return [];
	}
}
// App.js file

// ... (previous code)

function Header(mainDiv) {
  const siteName = createElement("a", {
    href: "index.html",
  }, [
    createElement("h1", {
      textContent: "NETFLIX",
    }),
  ]);

  const favLink = createElement("div", {
    className: "favorite-box",
  }, [
    createElement("span", {
      className: "material-symbols-outlined",
      id: "favorite",
      textContent: "favorite",
    }),
  ]);

  const searchBox = createElement("div", {
    className: "box",
  }, [
    createElement("form", {
      id: "search-form",
    }, [
      createElement("input", {
        className: "search-input",
        type: "text",
        name: "search",
        onmouseout: `this.value = ''; this.blur();`,
        autocomplete: "off",
      }),
    ]),
  ]);

  const searchSpan = createElement("span", {
    className: "material-symbols-rounded",
    textContent: "search",
  });

  searchBox.appendChild(searchSpan);

  const nav = createElement("navbar", {}, [
    siteName,
    favLink,
    searchBox,
  ]);

  return createElement("header", {}, [nav]);
}

// ... (rest of the code)


async function createMovieCard(movie, movieId) {	
	const movieCard = createElement("div", {
		className: "movie-card",
	});
	
	const movieAnchor = createElement("a", {
		href: `/#/single-movie/${movie.id}`,
		onclick: handleMovieCardClick(movie.id),
	});
	
	const movieTitle = createElement("h2", {
		className: "movie-title",
		textContent: movie.title,
	});

	const moviePoster = createElement("img", {
		className: "movie-img",
		src: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
		alt: movie.title,
	});


	movieAnchor.appendChild(moviePoster);
	movieAnchor.appendChild(movieTitle);

	movieCard.appendChild(movieAnchor);

	return movieCard;
}

async function renderMovies() {
	try {
		const movies = await AllMovies();
		const cardsContainer = createElement("div", {
			className: "cards-container",
		});

		for (const movie of movies) {
			const movieCard = await createMovieCard(movie);
			cardsContainer.appendChild(movieCard);
		}

		const root = document.getElementById("cards");
		if (!root) {
			console.error("Could not find 'root' element.");
			return;
		}
		root.innerHTML = ""; 
		root.appendChild(cardsContainer);
	} catch (error) {
		console.error("Error rendering movies:", error);
	}
}

function handleMovieCardClick(movieId) {
	return function (event) {
		event.preventDefault();
		showMovieDetails(movieId);
		
		const newUrl = `${window.location.origin}/#/single-movie/${movieId}`;
		history.pushState({}, "", newUrl);
	};
}

async function showMovieDetails(movieId) {
    try {      
      const response = await fetch(
        `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const movieDetails = await response.json();
        
      const detailsContainer = createElement("div", {
        className: "movie-detail",
      });
        
      const moviePoster = createElement("img", {
        className: "detail-img",
        src: `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`,
        alt: movieDetails.title,
      });
  
      const movieDetailInfo = createElement("div", {
        className: "movie-detail-info",
      });
      const movieTitle = createElement("h1", {
        className: "title-heading",
        textContent: movieDetails.title,
      });
      const movieDesc = createElement("p", {
        className: "description",
        textContent: movieDetails.overview,
      });
      const movieReleaseDate = createElement("p", {
        className: "release-date",
        textContent: "Release Date: " + movieDetails.release_date,
      });
      const movieGenre = createElement("div", {
        className: "genre",
        textContent: "Genre: " + movieDetails.genre,
      });
  
      movieDetailInfo.appendChild(movieTitle);
      movieDetailInfo.appendChild(movieDesc);
      movieDetailInfo.appendChild(movieReleaseDate);
      movieDetailInfo.appendChild(movieGenre);
  
      const addToFavoriteBtn = createElement("button", {
        className: "add-to-favorite-button",
        textContent: "Add to Favorite",
        onclick: () => addToFavorite(movieDetails),
      });
      
      detailsContainer.appendChild(moviePoster);
      detailsContainer.appendChild(movieDetailInfo);
      movieDetailInfo.appendChild(addToFavoriteBtn);
      
      const similarMoviesContainer = createElement("div", {
        className: "similar-movies",
      });
      const similarMoviesTitle = createElement("h1", {
        textContent: "Similar Movies",
      });
      const similarMoviesDiv = createElement("div", {
        className: "similar-movies-container"        
      });      
      similarMoviesContainer.appendChild(similarMoviesTitle);
      similarMoviesContainer.appendChild(similarMoviesDiv);
      
      const similarMovies = await fetchSimilarMovies(movieId);
      similarMovies.forEach(async (movie) => {
        const similarMovieCard = await createMovieCard(movie);
        similarMoviesDiv.appendChild(similarMovieCard);
      });
      
      const mainContainer = createElement("div", {
        className: "main-container",
      });
      mainContainer.appendChild(detailsContainer);
      mainContainer.appendChild(similarMoviesContainer);
  
      const root = document.getElementById("cards");
      if (!root) {
        console.error("Could not find 'root' element.");
        return;
      }
      root.innerHTML = "";
      root.appendChild(mainContainer);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  }  
  
  function addToFavorite(movie) {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    
    if (!favorites.some((fav) => fav.id === movie.id)) {
      favorites.push(movie);      
      localStorage.setItem("favorites", JSON.stringify(favorites));
      alert("Movie added to favorites!");
    } else {
      alert("Movie is already in favorites!");
    }
  }

async function fetchSimilarMovies(movieId) {
	try {
		const response = await fetch(
			`${BASE_URL}movie/${movieId}/similar?api_key=${API_KEY}&language=en-US`
		);
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		const data = await response.json();
		return data.results;
	} catch (error) {
		console.error("Error fetching similar movies:", error);
		return [];
	}
}

renderMovies();

export default AllMovies;
