const input = document.querySelector("input");
const main = document.querySelector("main");
const form = document.querySelector("form");
let svg = "";
const apikey = "ca13458cc8f7d31e877d4c3e5247aac9";
function fetchmovie() {
  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (let k = 0; k < data.results.length; k++) {
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apikey}&language=en-US`)
          .then((response) => {
            return response.json();
          })
          .then((genresdata) => {
            for (let stars = 0; stars < Math.round(data.results[k].vote_average); stars++) {
              svg += `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(243, 154, 19, 1);transform: ;msFilter:;"><path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path></svg>`;
            }
            let moviegenre;
            for (let i = 0; i < data.results[k].genre_ids.length; i++) {
              for (let y = 0; y < genresdata.genres.length; y++) {
                if (data.results[k].genre_ids[i] === genresdata.genres[y].id) {
                  if (moviegenre === undefined) {
                    moviegenre = genresdata.genres[y].name;
                  } else {
                    moviegenre += "," + genresdata.genres[y].name;
                  }
                  if (i === data.results[k].genre_ids.length - 1) {
                    div = `<div class="conteiner"><img src="http://image.tmdb.org/t/p/w500/${data.results[k].poster_path}"><div class="infodiv"><h1>${data.results[k].original_title}</h1><span class="genre">${moviegenre}</span><div class="stars">${svg}</div> <div class="enddiv"><span class="date">${data.results[k].release_date.slice(0, 4)}</span><span>${data.results[k].vote_average}</span> </div> </div>`;
                    main.insertAdjacentHTML("beforeend", div);
                    svg = "";
                  }
                }
              }
            }
          });
      }
    });
}
fetchmovie();
form.addEventListener("submit", function (event) {
  event.preventDefault();
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${input.value}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      main.innerHTML = "";
      for (let k = 0; k < data.results.length; k++) {
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apikey}&language=en-US`)
          .then((response) => {
            return response.json();
          })
          .then((genresdata) => {
            for (let stars = 0; stars < Math.round(data.results[k].vote_average); stars++) {
              svg += `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(243, 154, 19, 1);transform: ;msFilter:;"><path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path></svg>`;
            }
            let moviegenre;
            for (let i = 0; i < data.results[k].genre_ids.length; i++) {
              for (let y = 0; y < genresdata.genres.length; y++) {
                if (data.results[k].genre_ids[i] === genresdata.genres[y].id) {
                  if (moviegenre === undefined) {
                    moviegenre = genresdata.genres[y].name;
                  } else {
                    moviegenre += "," + genresdata.genres[y].name;
                  }
                  if (i === data.results[k].genre_ids.length - 1) {
                    if (data.results[k].poster_path === null) {
                      div = `<div class="conteiner"><div class="IMG"><h1>No Poster</h1></div><div class="infodiv"><div class="infodiv"><h1>${data.results[k].original_title}</h1><span class="genre">${moviegenre}</span> <div class="enddiv"> <span class="date">${data.results[k].release_date.slice(0, 4)}</span><span>${data.results[k].vote_average}</span> </div> </div></div>`;
                      main.insertAdjacentHTML("beforeend", div);
                    } else {
                      div = `<div class="conteiner"><img src="http://image.tmdb.org/t/p/w500/${data.results[k].poster_path}"><div class="infodiv"><div class="infodiv"><h1>${data.results[k].original_title}</h1><span class="genre">${moviegenre}</span><div class="stars">${svg}</div> <div class="enddiv"> <span class="date">${data.results[k].release_date.slice(0, 4)}</span><span>${data.results[k].vote_average}</span> </div> </div></div>`;
                      main.insertAdjacentHTML("beforeend", div);
                      svg = "";
                    }
                  }
                }
              }
            }
          });
      }
    });
  input.value = "";
});
function apigenres() {
  fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apikey}&language=en-US`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const genres = [];
      for (i = 0; i < data.genres.length; i++) {
        genres.push(data.genres[i]);
      }
      console.log(genres);
    });
}
apigenres();
