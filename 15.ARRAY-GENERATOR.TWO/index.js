console.log(rangeBetwee(-4, 7));
//[-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7];
function rangeBetwee(start, count) {
  const array = [start];
  let countA = 0;
  for (let i = start; i < count; i++) {
    array.push(array[countA] + 1);
    countA++;
  }
  return array;
}
