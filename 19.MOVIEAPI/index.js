const input = document.querySelector("input");
const main = document.querySelector("main");
let div = `<div><img src=""><h1></h1></div>`;
const random = Math.floor(Math.random() * 999998 + 200000);
fetch(`https://api.themoviedb.org/3/movie/419704?api_key=ca13458cc8f7d31e877d4c3e5247aac9&language=en-US`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (let i = 0; i < input.value.length; i++) {
      if (i === data.original_title[i]) {
      }
    }
    let genre;
    console.log(data);
    data.genres.forEach((element) => {
      if (genre === undefined) {
        genre = element.name;
      } else {
        genre += "," + element.name;
      }
    });
    div = `<div class="conteiner"><img src="http://image.tmdb.org/t/p/w500/${data.poster_path}"> <div class="infodiv"> <h1>${data.original_title}</h1><span class="genre">${genre}</span> <div class="enddiv"> <span class="date">${data.release_date}</span><span>${Math.floor(data.vote_average)}</span> </div> </div> </div>`;
    main.insertAdjacentHTML("beforeend", div);
  });
// fetch(`https://api.themoviedb.org/3/movie/640146?api_key=ca13458cc8f7d31e877d4c3e5247aac9&language=en-US`)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     let genre;
//     console.log(data);
//     data.genres.forEach((element) => {
//       if (genre === undefined) {
//         genre = element.name;
//       } else {
//         genre += "," + element.name;
//       }
//     });
//     div = `<div class="conteiner"><img src="http://image.tmdb.org/t/p/w500/${data.poster_path}"><div class="infodiv"><div class="infodiv"><h1>${data.original_title}</h1><span class="genre">${genre}</span> <div class="enddiv"> <span class="date">${data.release_date}</span><span>${Math.floor(data.vote_average)}</span> </div> </div></div>`;
//     main.insertAdjacentHTML("beforeend", div);
//   });
// fetch(`https://api.themoviedb.org/3/movie/1068141?api_key=ca13458cc8f7d31e877d4c3e5247aac9&language=en-US`)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     let genre;
//     console.log(data);
//     data.genres.forEach((element) => {
//       if (genre === undefined) {
//         genre = element.name;
//       } else {
//         genre += "," + element.name;
//       }
//     });
//     div = `<div class="conteiner"><img src="http://image.tmdb.org/t/p/w500/${data.poster_path}"><div class="infodiv"><h1>${data.original_title}</h1><span class="genre">${genre}</span> <div class="enddiv"> <span class="date">${data.release_date}</span><span>${Math.floor(data.vote_average)}</span> </div> </div></div></div>`;
//     main.insertAdjacentHTML("beforeend", div);
//   });
// fetch(`https://api.themoviedb.org/3/movie/82856?api_key=ca13458cc8f7d31e877d4c3e5247aac9&language=en-US`)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     let genre;
//     console.log(data);
//     data.genres.forEach((element) => {
//       if (genre === undefined) {
//         genre = element.name;
//       } else {
//         genre += "," + element.name;
//       }
//     });
//     div = `<div class="conteiner"><img src="http://image.tmdb.org/t/p/w500/${data.poster_path}"><div class="infodiv"><h1>${data.original_title}</h1><span class="genre">${genre}</span> <div class="enddiv"> <span class="date">${data.release_date}</span><span>${Math.floor(data.vote_average)}</span> </div> </div></div>`;
//     main.insertAdjacentHTML("beforeend", div);
//   });
// fetch(`https://api.themoviedb.org/3/movie/948713?api_key=ca13458cc8f7d31e877d4c3e5247aac9&language=en-US`)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     let genre;
//     console.log(data);
//     data.genres.forEach((element) => {
//       if (genre === undefined) {
//         genre = element.name;
//       } else {
//         genre += "," + element.name;
//       }
//     });
//     div = `<div class="conteiner"><img src="http://image.tmdb.org/t/p/w500/${data.poster_path}"><div class="infodiv"><h1>${data.original_title}</h1><span class="genre">${genre}</span> <div class="enddiv"> <span class="date">${data.release_date}</span><span>${Math.floor(data.vote_average)}</span> </div> </div></div>`;
//     main.insertAdjacentHTML("beforeend", div);
//   });
// fetch(`https://api.themoviedb.org/3/movie/76600?api_key=ca13458cc8f7d31e877d4c3e5247aac9&language=en-US`)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     let genre;
//     console.log(data);
//     data.genres.forEach((element) => {
//       if (genre === undefined) {
//         genre = element.name;
//       } else {
//         genre += "," + element.name;
//       }
//     });
//     div = `<div class="conteiner"><img src="http://image.tmdb.org/t/p/w500/${data.poster_path}"><div class="infodiv"><h1>${data.original_title}</h1><span class="genre">${genre}</span> <div class="enddiv"> <span class="date">${data.release_date}</span><span>${Math.floor(data.vote_average)}</span> </div> </div></div>`;
//     main.insertAdjacentHTML("beforeend", div);
//   });

// fetch(`https://api.themoviedb.org/3/movie/594767?api_key=ca13458cc8f7d31e877d4c3e5247aac9&language=en-US`)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     let genre;
//     console.log(data);
//     data.genres.forEach((element) => {
//       if (genre === undefined) {
//         genre = element.name;
//       } else {
//         genre += "," + element.name;
//       }
//     });
//     div = `<div class="conteiner"><img src="http://image.tmdb.org/t/p/w500/${data.poster_path}"><div class="infodiv"><h1>${data.original_title}</h1><span class="genre">${genre}</span> <div class="enddiv"> <span class="date">${data.release_date}</span><span>${Math.floor(data.vote_average)}</span> </div> </div></div>`;
//     main.insertAdjacentHTML("beforeend", div);
//   });

// fetch(`https://api.themoviedb.org/3/movie/677179?api_key=ca13458cc8f7d31e877d4c3e5247aac9&language=en-US`)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     let genre;
//     console.log(data);
//     data.genres.forEach((element) => {
//       if (genre === undefined) {
//         genre = element.name;
//       } else {
//         genre += "," + element.name;
//       }
//     });
//     div = `<div class="conteiner"><img src="http://image.tmdb.org/t/p/w500/${data.poster_path}"><div class="infodiv"><h1>${data.original_title}</h1><span class="genre">${genre}</span> <div class="enddiv"> <span class="date">${data.release_date}</span><span>${Math.floor(data.vote_average)}</span> </div> </div></div>`;
//     main.insertAdjacentHTML("beforeend", div);
//   });
