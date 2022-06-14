"use strict";


function findMaxNumber(a, b, c, d) {
   let max = a;
   const M = [a, b, c, d];
   if (M.length<4||typeof(a)!='number'||typeof(b)!='number'||typeof(c)!='number'||typeof(d)!='number')
      return 0;
   for (let i = 1; i < 4; i++)
   {
      if (max < M[i]) {
         max = M[i];
      }
   }
   return max;
}
console.log(findMaxNumber(1, 5, '6', '11'));



