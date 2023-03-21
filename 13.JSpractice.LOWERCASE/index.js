const cararray = ["bmw", "opel", "lada", "opel", "BMW"];
function uniqArrayi(arr) {
  const newarray = [];
  for (let elem of arr) {
    elem = elem.toLowerCase();
    newarray.push(elem);
  }
  return newarray;
}
console.log(uniqArrayi(cararray));
