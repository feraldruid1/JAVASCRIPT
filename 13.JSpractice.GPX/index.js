//შემოწმებულია
const arr = ["G", "P", "X"];
console.log(fillArr(arr, 10));
function fillArr(array, index) {
  const newarray = [];
  let count = 0;
  for (let i = 0; i < index; i++) {
    newarray.push(array[count]);
    count++;
    if (array[count] === undefined) {
      count = 0;
    }
  }
  return newarray;
}
