"use strict";
const input = document.querySelector("input");
const main = document.querySelector("main");
const form = document.querySelector("form");
const apikey = "ca13458cc8f7d31e877d4c3e5247aac9";
let genre = [];
moviedb(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`);
form.addEventListener("submit", function (event) {
  event.preventDefault();
  moviedb(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${input.value}`);
});
function apigenres() {
  fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apikey}&language=en-US`)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.genres.length; i++) {
        genre.push(data.genres[i]);
      }
    });
  return genre;
}
function starimg(number) {
  let img = "";
  for (let i = 0; i < Math.round(number); i++) {
    img += `<img class="star" src="./images/star.svg" alt="star" />`;
  }
  return img;
}

function moviedb(link) {
  apigenres();
  fetch(link)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (let k = 0; k < data.results.length; k++) {
        const div = `<div class="conteiner">
        <img src="http://image.tmdb.org/t/p/w500/${data.results[k].poster_path}">
        <div class="infodiv"><h1>${data.results[k].original_title}</h1>
        <span class="genre">${genresfunc(data.results[k].genre_ids, genre)}</span>
        <div class="stars">${starimg(data.results[k].vote_average)}</div> 
        <div class="enddiv"> <span class="date">${data.results[k].release_date.slice(0, 4)}</span><span>${data.results[k].vote_average}</span> </div> </div></div>`;
        main.insertAdjacentHTML("beforeend", div);
      }
    });
  main.innerHTML = "";
}
function genresfunc(arr) {
  let genres = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < genre.length; j++) {
      if (arr[i] === genre[j].id) {
        genres.push(genre[j].name);
      }
    }
  }
  return genres.join(", ");
}
