"use strict";

const arr = [14312423, 83276, 32, 6234, 8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
   return a - b;
} // запоминаем конструкцию, она для сортировки чисел

// arr.pop(); // удаление в конце

// arr.push('novoe');  //добавление в конце

// console.log(arr);

// for (let i = 0; i<arr.length; i++){
//    console.log(arr[i]);
// }
// for (let value of arr) {
//    console.log(value);
// }

// arr[99] = 0;

// console.log(arr.length);
// console.log(arr);
// arr.forEach(function (item, i, arr) { //Ф-я для каждого элемента массива
//    console.log(`номер по порядку: ${i}, ${item} -  внутри массива,${arr} - сам массив`);
// });
//  