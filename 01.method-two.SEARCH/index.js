//შემოწმებულია
let elem = document.querySelector("input");
let elem2 = document.querySelector("div");
elem2.addEventListener("click", onick);
function onick() {
  elem.classList.toggle("active");
  elem2.classList.toggle("divborder");
}
