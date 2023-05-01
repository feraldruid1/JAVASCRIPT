const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const h1 = document.querySelector(".winner");
const player = document.querySelector(".playercount");
const computer = document.querySelector(".computercount");
let playercount = 0;
let computercount = 0;
function game() {
  const random = Math.floor(Math.random() * 4);
  if (random > 2) {
    h1.innerHTML = "you lose";
    computercount++;
    player.innerHTML = `player:${playercount}`;
    computer.innerHTML = `computer:${computercount}`;
    rock.remove();
  }
  if (random < 2) {
    h1.innerHTML = "you win";
    playercount++;
    player.innerHTML = `player:${playercount}`;
    computer.innerHTML = `computer:${computercount}`;
  }
  if (playercount === 3 || computercount === 3) {
    window.location.reload();
  }
}
rock.addEventListener("click", game);
paper.addEventListener("click", game);
scissors.addEventListener("click", game);
