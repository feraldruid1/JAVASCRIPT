const html = document.querySelector("body");
fetch(`https://api.github.com/users/otarza`)
  .then((response) => response.json())
  .then((data) => {
    return console.log(data);
  });
const div = `<div>${data.followers}<div>`;
html.insertAdjacentHTML("beforeend", div);
