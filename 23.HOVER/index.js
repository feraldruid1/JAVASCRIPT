const main = document.querySelector("main");
const question = prompt("block pixels");
const button = document.querySelector("button");
button.addEventListener("click", function () {
  location.reload();
});
main.addEventListener("mousemove", function (event) {
  const mainarea = 400 * 400;
  const divarea = question * question;
  const count = mainarea / divarea;
  let div = "";
  for (let i = 0; i < count; i++) {
    div += `<div style="width:${question}px;height:${question}px;"></div>`;
  }
  main.innerHTML = div;
});
