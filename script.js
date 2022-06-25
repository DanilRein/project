"use strict";

const box = document.getElementById('box'); //поиск по ID

console.log(box);

// const btns = document.getElementsByTagName('button')[1]; //поиск по тегу(создаётся псевдомассив), а потом[нужный нам номер элемента]

// console.log(btns);//можно [ ] написать сюда
// оставим одну кнопку
const btns = document.getElementsByTagName('button');

console.log(btns); // тоже будет создаваться коллекция(псевдомассив)


const circles = document.getElementsByClassName('circle'); //по классу
console.log(circles);

const hearts = document.querySelectorAll('.heart');

console.log(hearts);