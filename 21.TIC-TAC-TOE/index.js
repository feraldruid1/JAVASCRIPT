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
const array = [div1, div2, div3, div4, div5, div6, div7, div8, div9];
for (let i = 0; i < alldiv.length; i++) {
  alldiv[i].addEventListener("click", function (event) {
    console.log(JSON.stringify(array[2].innerHTML));
    if (JSON.stringify(array[2].innerHTML) === "X") {
      console.log("WIN");
    }
    if (alldiv[i].innerHTML != "X" && alldiv[i].innerHTML != "O") {
      event.target.innerHTML = "X";
    } else {
      return null;
    }
    for (let y = 0; y < array.length; y++) {
      const random = Math.floor(Math.random() * 8);
      if (array[random].innerHTML != "X" && array[random].innerHTML != "O") {
        array[random].innerHTML = "O";
        break;
      } else {
        if (array[y].innerHTML != "X" && array[y].innerHTML != "O") {
          array[y].innerHTML = "O";
          break;
        }
      }
    }
  });
}
