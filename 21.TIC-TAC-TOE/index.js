const div1 = document.querySelector(".one");
const div2 = document.querySelector(".two");
const div3 = document.querySelector(".three");
const div4 = document.querySelector(".four");
const div5 = document.querySelector(".five");
const div6 = document.querySelector(".six");
const div7 = document.querySelector(".seven");
const div8 = document.querySelector(".eight");
const div9 = document.querySelector(".nine");
const pointplayer = document.querySelector(".pointplayer");
const pointcomputer = document.querySelector(".pointcomputer");
let pointX = 0;
let pointO = 0;
const array = [div1, div2, div3, div4, div5, div6, div7, div8, div9];
for (let i = 0; i < array.length; i++) {
  array[i].addEventListener("click", function (event) {
    if (array[i].innerHTML != "X" && array[i].innerHTML != "O") {
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
    // X win
    if (div1.innerHTML === "X" && div2.innerHTML === "X" && div3.innerHTML === "X") {
      pointX++;
      array.forEach((elem) => {
        elem.innerHTML = "";
      });
    }
    if (div4.innerHTML === "X" && div5.innerHTML === "X" && div6.innerHTML === "X") {
      pointX++;
      array.forEach((elem) => {
        elem.innerHTML = "";
      });
    }
    if (div7.innerHTML === "X" && div8.innerHTML === "X" && div9.innerHTML === "X") {
      pointX++;
      array.forEach((elem) => {
        elem.innerHTML = "";
      });
    }
    if (div1.innerHTML === "X" && div4.innerHTML === "X" && div7.innerHTML === "X") {
      pointX++;
      array.forEach((elem) => {
        elem.innerHTML = "";
      });
    }
    if (div2.innerHTML === "X" && div5.innerHTML === "X" && div8.innerHTML === "X") {
      pointX++;
      array.forEach((elem) => {
        elem.innerHTML = "";
      });
    }
    if (div3.innerHTML === "X" && div6.innerHTML === "X" && div9.innerHTML === "X") {
      pointX++;
      array.forEach((elem) => {
        elem.innerHTML = "";
      });
    }
    if (div1.innerHTML === "X" && div5.innerHTML === "X" && div9.innerHTML === "X") {
      pointX++;
      array.forEach((elem) => {
        elem.innerHTML = "";
      });
    }
    if (div3.innerHTML === "X" && div5.innerHTML === "X" && div7.innerHTML === "X") {
      pointX++;
      array.forEach((elem) => {
        elem.innerHTML = "";
      });
    }
    //O win

    if (div1.innerHTML === "O" && div2.innerHTML === "O" && div3.innerHTML === "O") {
      pointO++;
      array.forEach((elem) => {
        elem.innerHTML = "";
      });
    }
    if (div4.innerHTML === "O" && div5.innerHTML === "O" && div6.innerHTML === "O") {
      pointO++;
      array.forEach((elem) => {
        elem.innerHTML = "";
      });
    }
    if (div7.innerHTML === "O" && div8.innerHTML === "O" && div9.innerHTML === "O") {
      pointO++;
      array.forEach((elem) => {
        elem.innerHTML = "";
      });
    }
    if (div1.innerHTML === "O" && div4.innerHTML === "O" && div7.innerHTML === "O") {
      pointO++;
      array.forEach((elem) => {
        elem.innerHTML = "";
      });
    }
    if (div2.innerHTML === "O" && div5.innerHTML === "O" && div8.innerHTML === "O") {
      pointO++;
      array.forEach((elem) => {
        elem.innerHTML = "";
      });
    }
    if (div3.innerHTML === "O" && div6.innerHTML === "O" && div9.innerHTML === "O") {
      pointO++;
      array.forEach((elem) => {
        elem.innerHTML = "";
      });
    }
    if (div1.innerHTML === "O" && div5.innerHTML === "O" && div9.innerHTML === "O") {
      pointO++;
      array.forEach((elem) => {
        elem.innerHTML = "";
      });
    }
    if (div3.innerHTML === "O" && div5.innerHTML === "O" && div7.innerHTML === "O") {
      pointO++;
      array.forEach((elem) => {
        elem.innerHTML = "";
      });
    }
    pointplayer.innerHTML = pointX;
    pointcomputer.innerHTML = pointO;
  });
}
