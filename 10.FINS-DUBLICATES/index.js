const firstarray = [1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6];
function uniqArrayi(arr) {
  const setone = new Set();
  let count = 0;
  for (let y = 0; y < arr.length; y++) {
    count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[y]) {
        count++;
      }
    }
    if (count >= 2) {
      setone.add(arr[y]);
    }
  }
  return [...setone];
}
console.log(uniqArrayi(firstarray));
