const input = document.querySelector("input");
input.addEventListener("keydown", space);
let count = -1;
function space() {
  if (count != 4) {
    count++;
  }
  if (count === 4) {
    count = 0;
    input.value += " ";
  }
}
