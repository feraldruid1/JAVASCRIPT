const body = document.querySelector("body");
const input = document.querySelector("input");
const form = document.querySelector("form");
const div = document.querySelector("div");
function github() {
  fetch(`https://api.github.com/users/${input.value}`)
    .then((response) => {
      if (!response.ok) {
        const status404 = `<main><img style="background-color:white;" src="./images/nouser.png" alt"">   <div class="login">No profile with this username</div> <div class="borderdiv"> </div> <div class="maindiv"><div class="followers">-- <span>followers</span></div><div class="repos">--<span>repos</span></div> <div class="following">-- <span>following</span></div></div></main>`;
        div.innerHTML = status404;
        input.value = "";
        return console.log("profile not found");
      }
      return response.json();
    })
    .then((data) => {
      const status200 = `<main><img src="${data.avatar_url}" alt"">   <div class="login">${data.login}</div><div class="location">${data.location}</div> <div class="borderdiv"> </div> <div class="maindiv"><div class="followers">${data.followers} <span>followers</span></div><div class="repos">${data.public_repos}<span>repos</span></div> <div class="following">${data.following} <span>following</span></div></div></main>`;
      div.innerHTML = status200;
      input.value = "";
    });
}
form.addEventListener("submit", function (event) {
  event.preventDefault();
  github();
});
