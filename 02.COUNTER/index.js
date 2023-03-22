//შემოწმებულია
let h1 = document.querySelector("h1");
let random = Math.floor(Math.random() * 101);
let start = random;
h1.innerHTML = random;
function minus() {
  random--;
  h1.innerHTML = random;
}
function plus() {
  random++;
  h1.innerHTML = random;
}
function returntostart() {
  random = start;
  h1.innerHTML = random;
}
third.addEventListener("click", minus);
second.addEventListener("click", returntostart);
first.addEventListener("click", plus);
