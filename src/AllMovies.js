// AllMovies.js
import { createElement } from "./utils";

const API_KEY = "1bbd72f65a0b1467640f1ec5f35f67b9";
const BASE_URL = `https://api.themoviedb.org/3/`;

async function AllMovies() {
	try {
		// Fetch all movies from the API
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

async function createMovieCard(movie, movieId) {
	// Create a movie card container
	const movieCard = createElement("div", {
		className: "movie-card",
	});

	// Create the anchor tag for the movie card
	const movieAnchor = createElement("a", {
		href: `/#/single-movie/${movie.id}`,
		onclick: handleMovieCardClick(movie.id),
	});

	// Create movie details elements
	const movieTitle = createElement("h2", {
		className: "movie-title",
		textContent: movie.title,
	});

	const moviePoster = createElement("img", {
		className: "movie-img",
		src: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
		alt: movie.title,
	});

	//   const movieOverview = createElement("p", {
	//     className: "movie-overview",
	//     textContent: movie.overview,
	//   });

	// Append the movie details to the anchor tag
	movieAnchor.appendChild(moviePoster);
	movieAnchor.appendChild(movieTitle);
	//   movieAnchor.appendChild(movieOverview);

	// Append the anchor tag to the movie card container
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
		root.innerHTML = ""; // Clear the existing content in the 'root' element
		root.appendChild(cardsContainer);
	} catch (error) {
		console.error("Error rendering movies:", error);
	}
}

function handleMovieCardClick(movieId) {
	return function (event) {
		event.preventDefault();
		showMovieDetails(movieId);

		// Update the URL/route when a card is clicked
		const newUrl = `${window.location.origin}/#/single-movie/${movieId}`;
		history.pushState({}, "", newUrl);
	};
}

// ... (AllMovies.js)

// ... (Other functions)

async function showMovieDetails(movieId) {
    try {
      // Fetch the details of the clicked movie by its ID
      const response = await fetch(
        `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const movieDetails = await response.json();
  
      // Create a container to hold the movie details
      const detailsContainer = createElement("div", {
        className: "movie-detail",
      });
  
      // Create movie details elements
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
  
      // Create the "Add to Favorite" button
      const addToFavoriteBtn = createElement("button", {
        className: "add-to-favorite-button",
        textContent: "Add to Favorite",
        onclick: () => addToFavorite(movieDetails),
      });
  
      // Append the button and movie details to the details container
      detailsContainer.appendChild(moviePoster);
      detailsContainer.appendChild(movieDetailInfo);
      movieDetailInfo.appendChild(addToFavoriteBtn);
  
      // Create a container for the similar movies section
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
  
      // Fetch and display similar movies
      const similarMovies = await fetchSimilarMovies(movieId);
      similarMovies.forEach(async (movie) => {
        const similarMovieCard = await createMovieCard(movie);
        similarMoviesDiv.appendChild(similarMovieCard);
      });
  
      // Create a container to hold both movie details and similar movies
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
  
      // Clear the existing content in the 'root' element and display the movie details and similar movies
      root.innerHTML = "";
      root.appendChild(mainContainer);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  }  
  
  // Function to add a movie to favorites
  function addToFavorite(movie) {
    // Get the favorites list from localStorage or create an empty array if it doesn't exist
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  
    // Check if the movie is already in favorites to avoid duplicates
    if (!favorites.some((fav) => fav.id === movie.id)) {
      favorites.push(movie);
      // Save the updated favorites list back to localStorage
      localStorage.setItem("favorites", JSON.stringify(favorites));
      alert("Movie added to favorites!");
    } else {
      alert("Movie is already in favorites!");
    }
  }
  

// function addToFavorites(movie) {
// 	// Get the existing favorites from LocalStorage or initialize it as an empty array
// 	const favorites = getLocalStorage("favorites") || [];

// 	// Check if the movie is already in favorites
// 	const isAlreadyAdded = favorites.some((favMovie) => favMovie.id === movie.id);

// 	if (!isAlreadyAdded) {
// 		// Add the movie to favorites if it's not already added
// 		favorites.push(movie);
// 		// Save the updated favorites list to LocalStorage
// 		localStorage.setItem("favorites", JSON.stringify(favorites));
// 		alert("Movie added to favorites!");
// 	} else {
// 		alert("Movie is already in favorites!");
// 	}
// }

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

// Call the renderMovies function when the component is rendered
renderMovies();

export default AllMovies; // Return null as we already append the cardsContainer to 'root'
