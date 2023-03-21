const firstarray = [1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6];
function uniqArrayi(arr) {
  const setone = new Set(arr);
  return [...setone];
}
console.log(uniqArrayi(firstarray));
