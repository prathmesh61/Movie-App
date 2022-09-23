const request = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=6f0a51047d1a5047327fe89cc3ffa5d3&language=en-US`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=6f0a51047d1a5047327fe89cc3ffa5d3&language=en-US`,
    requestUpComing: `https://api.themoviedb.org/3/movie/upcoming?api_key=6f0a51047d1a5047327fe89cc3ffa5d3&language=en-US`,
    requestNowPlaying: 'https://api.themoviedb.org/3/movie/now_playing?api_key=6f0a51047d1a5047327fe89cc3ffa5d3&language=en-US',
    movies: 'https://api.themoviedb.org/3/movie/{movie_id}?api_key=6f0a51047d1a5047327fe89cc3ffa5d3&language=en-US'
}


export default request;

// export const KEY = `6f0a51047d1a5047327fe89cc3ffa5d3`