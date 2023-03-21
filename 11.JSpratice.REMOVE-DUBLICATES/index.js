const cararray = ["bmw", "opel", "lada", "opel", "BMW"];
function uniqArrayi(arr) {
  for (let elem of arr) {
    elem = elem.toLowerCase();
  }
  const setone = new Set([arr]);
  return [...setone];
}
console.log(uniqArrayi(cararray));
