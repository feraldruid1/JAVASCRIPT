//შემოწმებულია
const arr = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
function arrMode(ar) {
  const array = [];
  let count = 0;
  for (let y = 0; y < ar.length; y++) {
    count = 0;
    for (let i = 0; i < ar.length; i++) {
      if (ar[i] === ar[y]) {
        count++;
      }
    }
    array.push(count);
  }
  const index = array.indexOf(Math.max(...array));
  return console.log(ar[index] + "-" + Math.max(...array) + "times");
}
arrMode(arr);
