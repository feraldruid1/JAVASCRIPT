const array1 = [1, 25, 0, 8, 9];
const array2 = [3, 5, 6, 7, 8];
const array3 = [3, 13];
const array4 = [3, 13, 13];
console.log(aggregrate(array1, array2, array3, array4)); 
function aggregrate(...n) {
  const array = [];
  for (let i = 0; i < n.length; i++) {
    for (let y = 0; y < n[i].length; y++) {
      if (array[y] === undefined) {
        array.push(0);
      }
      array[y] += n[i][y];
    }
  }
  return array;
}
