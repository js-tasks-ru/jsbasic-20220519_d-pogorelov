let arr = [5, 3, 8, 1];

// function filterRange(arr, a, b) {
//   return arr.filter(item => (a <= item && item <= b));
// }
function filterRange(arr, a, b) {
  let arr1 = [];
  arr.forEach(element => {
    if (a <= element && element <= b) {
      arr1.push(element)

    }
  })
  return arr1;
}

let filtered = filterRange(arr, 1, 9);

console.log(filtered); // [3,1] (совпадающие значения)
console.log(arr); // [5,3,8,1] (без изменений)
