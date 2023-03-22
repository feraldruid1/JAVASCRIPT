console.log(arrayRange(-6, 4, -2)); //[-6, -8, -10, -12]
function arrayRange(start, count, difference) {
  const array = [start];
  for (let i = 0; i < count - 1; i++) {
    array.push(array[i] + difference);
  }
  return array;
}
