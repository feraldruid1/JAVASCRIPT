const firstarray = [1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6];
function finsDublicates(arr) {
  const array = [];
  const setone = new Set();
  let count = 0;
  let countA = 0;
  for (let y = 0; y < arr.length; y++) {
    count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[countA]) {
        count++;
      }
    }
    countA++;
    array.push(count);
    if (count >= 2) {
      const index = array.indexOf(Math.max(...array));
      setone.add(arr[index]);
    }
  }
  return [...setone];
}
console.log(finsDublicates(firstarray));
