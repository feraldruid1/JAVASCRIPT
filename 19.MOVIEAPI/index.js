// "use strict";
// const input = document.querySelector("input");
// const main = document.querySelector("main");
// const form = document.querySelector("form");
// let genres = [];
// const apikey = "ca13458cc8f7d31e877d4c3e5247aac9";
// moviedb(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`);
// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   moviedb(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${input.value}`);
// });

// function apigenres() {
//   fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apikey}&language=en-US`)
//     .then((response) => response.json())
//     .then((data) => {
//       for (let i = 0; i < data.genres.length; i++) {
//         genres.push(data.genres[i]);
//       }
//     });
// }
// function moviedb(link) {
//   fetch(link)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       for (let k = 0; k < data.results.length; k++) {
//         let filmgenres = [];
//         for (let j = 0; j < data.results[k].genre_ids.length; j++) {
//           filmgenres.push(data.results[k].genre_ids[j]);
//         }
//         const div = `<div class="conteiner"><img src="http://image.tmdb.org/t/p/w500/${data.results[k].poster_path}"><div class="infodiv"><div class="infodiv"><h1>${data.results[k].original_title}</h1><span class="genre">${filmgenres}</span><div class="stars">${starimg(data.results[k].vote_average)}</div> <div class="enddiv"> <span class="date">${data.results[k].release_date.slice(0, 4)}</span><span>${data.results[k].vote_average}</span> </div> </div></div>`;
//         main.insertAdjacentHTML("beforeend", div);
//       }
//     });
//   main.innerHTML = "";
// }
// function starimg(number) {
//   let img = "";
//   for (let i = 0; i < Math.round(number); i++) {
//     img += `<img class="star" src="./images/star.svg" alt="star" />`;
//   }
//   return img;
// }
let genre = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
];
let array = [28, 12, 878];
function genrefy(arr) {
  for (let i = 0; i < arr.lenght; i++) {
    for (let j = 0; j < genre.lenght; j++) {
      if (arr[i] === genre[j].id) {
        arr.push(genre[i].name);
        console.log("ni");
      }
    }
  }
  return array;
}
genrefy();
