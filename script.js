"use strict";

function calculateVolumeAndArea(a) {
   if (isNaN(a) || a < 0||!Number.isInteger (a))
      return('При вычислении произошла ошибка');
   else {
      let area = a * a * 6;
      let volume = a * a * a;
      return(`Объём куба: ${volume}, Площадь куба: ${area}`);
   }
}
console.log(calculateVolumeAndArea(5));
function getCoupeNumber(a) {
   if (isNaN(a) || Number.isInteger(a)== false || a < 0) {
      return('Ошибка.Проверьте правильность введенного номера места');
   }
   if (a == 0||a>36) {
      return('Таких мест в вагоне не существует');
   }
   for (let i = 4; i <= 36; i += 4)
   {
      if (a <= i) {
         let b = i / 4;
         return(b);
         break;
      }
      }
}
console.log(getCoupeNumber(5));


