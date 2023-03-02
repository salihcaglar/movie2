const key = "b1f37208505d197304b3983a228e9173";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/trending/all/week?api_key=${key}&page=1&language=tr-TR`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
  requestHorror: `https://api.themoviedb.org/3/search/horror?api_key=${key}&page=1`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
};

export default requests;
