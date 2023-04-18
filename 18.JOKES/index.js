const main = document.querySelector("main");
const button = document.querySelector("button");
const h1 = document.querySelector("h1");
function jokes() {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      h1.innerHTML = `${data.joke}`;
      return data;
    });
}
jokes();
button.addEventListener("click", jokes);
