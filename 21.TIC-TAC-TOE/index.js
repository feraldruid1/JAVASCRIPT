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
alldiv.addEventListener("click", function (event) {
  event.target.innerHTML = "X";
});
