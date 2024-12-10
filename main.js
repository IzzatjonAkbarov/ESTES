// // 1-masal============================================
// function arrayMadness(a, b) {
//   let first = a
//     .map((value) => value ** 2)
//     .reduce((acc, value) => acc + value, 0);
//   let secont = b
//     .map((value) => value ** 3)
//     .reduce((acc, value) => acc + value, 0);

//   return first > secont ? true : false;
// }
// console.log(arrayMadness([2, 3, 4], [1, 2, 3]));
// 2-masala============================================
// function printArray(array) {
//   let newarr = "";
//   newarr += array;
//   return newarr;
// }
// console.log(printArray(["h", "o", "l", "a"]));
// 3-masala================================================
// let sum = 0;
// let average;
// function calctheaverage(numbers) {
//   for (let number of numbers) {
//     sum += number;
//   }
//   average = sum / numbers.length;
//   return average;
// }
// console.log(calctheaverage([1, 3]));
// 4 - masala;
// let newarr = "";
// function stringToArray(string) {
//   newarr = string.split(" ");
//   return newarr;
// }
// console.log(stringToArray("I love arrays they are my favorite"));
// 5-masala==============================================================
function findminimum(params) {
  let minnumber = Math.min(...params);
  return minnumber;
}

console.log(findminimum([34, -345, -1, 100]));
// 6-masala================================================
// let sum = 0;
// let average;
// function getAverage(marks) {
//   for (let number of marks) {
//     sum += number;
//   }
//   average = sum / marks.length;
//   return Math.floor(average);
// }
// console.log(getAverage([1, 2, 3, 4, 5]);
