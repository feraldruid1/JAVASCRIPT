//შემოწმებულია
let str = "Brown fox";
let array = [];
let count = 0;
function caseTogler(text) {
  for (let elem of text) {
    if (elem === elem.toUpperCase()) {
      elem = elem.toLowerCase();
      array.push(elem);
    } else {
      elem = elem.toUpperCase();
      array.push(elem);
    }
    count++;
  }
  str = array.join("");
  return str;
}
console.log(caseTogler(str));
