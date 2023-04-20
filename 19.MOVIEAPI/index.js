const input = document.querySelector("input");
const main = document.querySelector("main");
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=ca13458cc8f7d31e877d4c3e5247aac9&language=en-US&page=1`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (let k = 0; k < data.results.length; k++) {
      fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=ca13458cc8f7d31e877d4c3e5247aac9&language=en-US`)
        .then((response) => {
          return response.json();
        })
        .then((genresdata) => {
          console.log(genresdata);
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
                  div = `<div class="conteiner"><img src="http://image.tmdb.org/t/p/w500/${data.results[k].poster_path}"><div class="infodiv"><div class="infodiv"><h1>${data.results[k].original_title}</h1><span class="genre">${moviegenre}</span> <div class="enddiv"> <span class="date">${data.results[k].release_date}</span><span>${data.results[k].vote_average}</span> </div> </div></div>`;
                  main.insertAdjacentHTML("beforeend", div);
                }
              }
            }
          }
        });
    }
    console.log(data);
  });
