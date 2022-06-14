"use strict";

const options = {
   name: 'test',
   width: 1024,
   height: 1024,
   colors: {
      border: 'black',
      bg:'red'
   },
   makeTest: function(){
      console.log('test')
   }
};
options.makeTest();

const { border, bg } = options.colors;
console.log(bg);

// console.log(options.name);

// delete options.name;

// console.log(options.name);

// let counter = 0;

// for (let key in options) {
//    if (typeof (options[key]) == 'object') {
//       for (let i in options[key]) {
//          console.log(`Свойство ${i} имеет зачение ${options[key][i]}`);
//          counter++;
//       }
//    }
//    else {
//       console.log(`Свойство ${key} имеет зачение ${options[key]}`);
//       counter++;
//    }
// }
// console.log(`Количество свойств равно: ${counter}`);
// console.log(Object.keys(options));

