const alldiv = document.querySelectorAll(".div");
const div1 = document.querySelector(".one");
const div2 = document.querySelector(".two");
const div3 = document.querySelector(".three");
const div4 = document.querySelector(".four");
const div5 = document.querySelector(".five");
const div6 = document.querySelector(".six");
const div7 = document.querySelector(".seven");
const div8 = document.querySelector(".eight");
const div9 = document.querySelector(".nine");
const main = document.querySelector("main");
for (let i = 0; i < alldiv.length; i++) {
  alldiv[i].addEventListener("click", function (event) {
    if (alldiv[i].innerHTML != "X" && alldiv[i].innerHTML != "O") {
      event.target.innerHTML = "X";
      alldiv[i + 1].innerHTML = "O";
    }
  });
}
