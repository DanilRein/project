"use strict";
// возращает истинну, если хотя бы один элемент нечетный, если все четные, то false.
function filterArr(arr) {
    let result;
    for (let key in arr) {
        if (arr[key] % 2 == 0) {
            result= false;
        }
        else {
            result = true;
            break;
        }
    }
    return result;
}
const mass = [1,2,5];
console.log(filterArr(mass));

//возращает новый массив, где все элементы кратны пяти.
function findFive(arr) {
    let result=[];
    for (let key in arr)
    {
        if (arr[key] % 5 == 0) {
            result.push(arr[key]);
        }
    }    
    return result;
}
console.log(findFive(mass));

// возвращает среднее арифметическое с округлением до десятых
function middle(arr) {
    let result = 0;
    arr.forEach( function(item) {
        result += item;
    });
    result = result / arr.length;
    return result.toFixed(1);
}
console.log(middle(mass));

const mass2 = [1,2,5,10,23,43,12,44,34,32];

//ставим первый элемент в конец массива
function firstLast(arr) {
    let result = [];
    arr.forEach(function(item,i) {
        result.push(arr[i + 1]);
    });
    result[arr.length-1]=arr[0];
    return result;
}
console.log(firstLast(mass2));