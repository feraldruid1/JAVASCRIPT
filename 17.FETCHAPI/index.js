const body = document.querySelector("body");
const input = document.querySelector("input");
const main = document.querySelector("main");
function github() {
  fetch(`https://api.github.com/users/${input.value}`)
    .then((response) => response.json())
    .then((data) => {
      main.innerHTML = `<main> <div>${data.followers} <span>followers</span></div><div>${data.public_repos}<span>repos</span></div> <div>${data.following} <span>following</span></div></main>`;
      main.style = "margin-top; 30px; width: 326px; height: 306px; background-color: white;border-radius: 15px;display: flex;justify-content: space-around;align-items: center;";
    });
}
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    github();
  }
  if (event.key != "Enter") {
    return;
  }
});
