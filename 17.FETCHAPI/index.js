const body = document.querySelector("body");
const input = document.querySelector("input");
const main = document.querySelector("main");
function github() {
  fetch(`https://api.github.com/users/${input.value}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("profile not found");
      }
      return response.json();
    })
    .then((data) => {
      main.innerHTML = `<div>${data.followers} <span>followers</span></div><div>${data.public_repos}<span>repos</span></div> <div>${data.following} <span>following</span></div>`;
      main.style.display = "flex";
    });
}
input.addEventListener("submit", github);
