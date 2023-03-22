//შემოწმებულია
const cararray = ["bmw", "opel", "lada", "opel", "BMW"];
function uniqArrayi(arr) {
  const setone = new Set();
  for (let elem of arr) {
    elem = elem.toLowerCase();
    setone.add(elem);
  }
  return [...setone];
}
console.log(uniqArrayi(cararray));