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
    for(let k=0; k<array.length; k++){
      if(array[k].innerHTML===array[k+1]&&array[k].innerHTML===array[k+1])
    }
    // if (alldiv[i - 1].innerHTML === "X" && alldiv[i + 1].innerHTML === "X") {
    //   console.log("win");
    // }
    // if (alldiv[i - 1].innerHTML === "X" && alldiv[i - 2].innerHTML === "X") {
    //   console.log("win");
    // }
    // if (alldiv[i - 3].innerHTML === "X" && alldiv[i + 3].innerHTML === "X") {
    //   console.log("win");
    // }
    // if (alldiv[i - 3].innerHTML === "X" && alldiv[i - 6].innerHTML === "X") {
    //   console.log("win");
    // }
    // if (alldiv[i - 4].innerHTML === "X" && alldiv[i + 4].innerHTML === "X") {
    //   console.log("win");
    // }
    // if (alldiv[i - 2].innerHTML === "X" && alldiv[i + 2].innerHTML === "X") {
    //   console.log("win");
    // }
  });
}
