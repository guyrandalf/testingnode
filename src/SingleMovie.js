import { createElement } from "./utils";

function SingleMovie() {
    console.log('One movie');
    const movieCard = createElement('div',{
        className: 'movie-card',
        dataId: ""
    });
    const movieAnchor = createElement('a',{
        className:'movie-anchor',
        href: "/"
    },[createElement('img', {
        className:"movie-img",
        src: ""
    })])
    const movieInfo = createElement('div', {
        className: "movie-info"
    },[createElement('p', {
        className: "movie-title"
    })])
    
    const extraP = createElement('p', {
        className: "movie-rating"
    })
    const movieGenre = createElement('p', {
        className: "movie-genre"
    })

    movieCard.appendChild(movieAnchor)
    movieInfo.appendChild(extraP);
    movieCard.appendChild(movieInfo)
    movieCard.appendChild(movieGenre)

    return createElement('div', {
        className: 'movie-card',
        dataId: ""
    }, [movieAnchor, movieInfo, movieGenre]);
}

export default SingleMovie;