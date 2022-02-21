"use strict";

// function first() {
//    //Do something
//    setTimeout(function(){
//       console.log(1);
//    },500);
// }

// function second(){
//    console.log(2);
// }

function learnJS(lang, callback) {
   console.log(`Я учу ${lang}`);
   callback();
}
// learnJS('JavaScript', function () {
//    console.log('Я прошёл этот урок');
// });
learnJS('JavaScript', done);//ВНИМАНИЕ!!! done БЕЗ КРУГЛЫХ СКОБОК
function done() {
   console.log('я прошёл этот урок');
} 

// first();
// second();