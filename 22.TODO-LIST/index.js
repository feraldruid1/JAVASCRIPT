const morning = document.querySelector(".morning");
const afternoon = document.querySelector(".afternoon");
const evening = document.querySelector(".evening");
const morningjob = document.querySelector(".morningjob");
const afternoonjob = document.querySelector(".afternoonjob");
const eveningjob = document.querySelector(".eveningjob");
const h1 = document.querySelector("h1");
const date = new Date();
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
h1.innerHTML = weekday[date.getDay()];
if (h1.innerHTML != "Friday" && h1.innerHTML != "Saturday") {
  morningjob.innerHTML = "school";
  afternoonjob.innerHTML = "Learning JavaScript";
  eveningjob.innerHTML = "rest";
}
if (h1.innerHTML === "Friday") {
  morningjob.innerHTML = "sleep";
  afternoonjob.innerHTML = "go to church";
  eveningjob.innerHTML = "A walk in the park";
}
if (h1.innerHTML === "Saturday") {
  morningjob.innerHTML = "go to church";
  afternoonjob.innerHTML = "A walk in the park";
  eveningjob.innerHTML = "sleep";
}
