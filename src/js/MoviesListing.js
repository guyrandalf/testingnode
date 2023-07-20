import { getLocalStorage } from './utils.js'

export default class MoviesListing {
  constructor(movieData, cardsContainerNode) {
    this.movieData = movieData
    this.parentNode = cardsContainerNode
    this.trendingMovies = {} 
    this.discoverMovies = {}
    this.movieGenres = {}
    this.isSearch = false
    this.isFavorite = false
  }

  async init () {
    // this.trendingMovies = await this.movieData.getTrendingMovies('week')
    this.discoverMovies = await this.movieData.discoverMovies()
    this.movieGenres = await this.movieData.getGenres()
    this.showMovies('#movie-card')
  }

  prepareTemplate(parent, template, list) {
    parent.innerText = ''
    list.map(movie => {
      const clone = template.content.cloneNode(true)
      const posterImg = clone.querySelector('.movie-img')
      posterImg.src = this.movieData.imgURL + movie.poster_path 
      const dataId = clone.querySelector('.movie-card')
      dataId.setAttribute('data-id', movie.id)
      const title = clone.querySelector('.movie-title')
      title.innerText = movie.title
      const rating = clone.querySelector('.movie-rating')
      rating.innerText = movie.vote_average
      const genre = clone.querySelector('.movie-genre')
      let movieGenreNames = []
      if (!this.isFavorite) {
        movieGenreNames = this.movieData.movieGenreNames(this.movieGenres.genres, movie.genre_ids)
      } else {
        movieGenreNames = movie.genres.map(genre => genre.name)
      }
      movieGenreNames.map(g => {
        const span = document.createElement('span')
        span.innerText = g
        span.setAttribute('class', 'movie-genre-span')
        genre.appendChild(span)
      })
      const aTag = clone.querySelector('.movie-anchor')
      // aTag.href = `./src/movie-page/index.html?movie=${movie.id}`
      aTag.href = `/src/movie-page/index.html?movie=${movie.id}`
      parent.appendChild(clone)
    })
  }

  async showMovies(selector, isSearch, queryString = "", isFavorite) {
    const template = document.querySelector(selector)
    this.isSearch = isSearch
    this.isFavorite = isFavorite
    if (!this.isSearch && !this.isFavorite) {
      this.prepareTemplate(this.parentNode, template, this.discoverMovies.results)
    } else if (this.isFavorite) {
      this.favLocal = await getLocalStorage('favorites')
      this.prepareTemplate(this.parentNode, template, this.favLocal)
    } 
    else {
      this.searchResults = await this.movieData.getSearchResults(queryString)
      this.prepareTemplate(this.parentNode, template, this.searchResults.results)
    }
  }
}
