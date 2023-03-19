const array1 = [1, 5, 2, 3];
const array2 = [3, 5, 6, 7, 8, 13];
function aggregrate(first, second) {
  let count = 0;
  const array3 = [];
  for (let elem of second) {
    if (first[count] != undefined) {
      elem += first[count];
      count++;
      array3.push(elem);
    } else {
      elem += 0;
      array3.push(elem);
    }
  }
  return array3;
}
console.log(aggregrate(array1, array2));
