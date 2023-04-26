const input = document.querySelector("input");
const main = document.querySelector("main");
const form = document.querySelector("form");
let genres = [];
const apikey = "ca13458cc8f7d31e877d4c3e5247aac9";
function fetchmovie() {
  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (let k = 0; k < data.results.length; k++) {
        div = `<div class="conteiner"><img src="http://image.tmdb.org/t/p/w500/${data.results[k].poster_path}"><div class="infodiv"><h1>${data.results[k].original_title}</h1><span class="genre">${"moviegenre"}</span><div class="stars"></div> <div class="enddiv"><span class="date">${data.results[k].release_date.slice(0, 4)}</span><span>${data.results[k].vote_average}</span> </div> </div>`;
        main.insertAdjacentHTML("beforeend", div);
      }
    });
}
fetchmovie();
form.addEventListener("submit", function (event) {
  event.preventDefault();
});

(function apigenres() {
  fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apikey}&language=en-US`)
    .then((response) => response.json())
    .then((data) => {
      for (i = 0; i < data.genres.length; i++) {
        genres.push(data.genres[i]);
      }
      console.log(genres);
    });
})();
