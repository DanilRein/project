"use strict";

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
   
   if (arr.length === 0)
      return `Семья пуста`;
   return `Семья состоит из: ${arr.join(' ')} `;
}

// console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
   let result = '';
   for (let key in arr)
      result += `${arr[key].toLowerCase()}\n`; 
   return result;
};
//console.log(standardizeStrings(favoriteCities));