"use strict";

const someString = 'This is some strange string';

function reverse(str) {
   if (typeof (str) != 'string')
      return 'Ошибка!';
   const Arr = str.split('').reverse().join(''); //самый оптимальный вариант
   // let Arr1 = [],
   //    Arr2 = [],
   //    Fin = [];
   // for (let key in Arr) {
   //    Arr1 = Arr[key].split(''); 
   //    Arr2 = Arr1.reverse();
   //    Fin = [...Fin, ...Arr2];
   // }
   // const Fin1 = Fin.join('');
   // return Fin1;
   return Arr;
}
console.log(reverse(someString));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
   if (arr.length === 0)
      return 'Нет доступных валют';
   let result = `Доступные валюты:\n`;
   for (let key in arr) {
      if (arr[key] == missingCurr)
         continue;
      result += `${arr[key]}\n`;
   }
   return result;
}
console.log(availableCurr(additionalCurrencies,'CNY'));