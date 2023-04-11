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
      main.innerHTML = `<img src="${data.avatar_url} alt"">   <div class="login">${data.login}</div><div class="location">${data.location}</div> <div class="borderdiv"> </div> <div class="maindiv"><div class="followers">${data.followers} <span>followers</span></div><div class="repos">${data.public_repos}<span>repos</span></div> <div class="following">${data.following} <span>following</span></div></div>`;
      main.style.display = "flex";
      console.log(data);
      console.log(data.followers, data.public_repos, data.following, data.location, data.login);
    });
}
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    github();
  }
});
