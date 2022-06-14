"use strict";

function fib(a) {
   let result = '0 1';
   let M = [0, 1];
   if (isNaN(a) || a < 0 || a ==0) {
      return '';
   }
   if (a == 1)
      return 0;
   for (let i = 2; i < a; i++){
      M[i] = M[i - 1] + M[i - 2];
      result +=` ${M[i]}`;

   }
   return result;
}
console.log(fib(3));


