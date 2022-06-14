"use strict";


function getTimeFromMinutes(time) {
   if (isNaN(time) || !Number.isInteger(time) || time < 0) {
      return (`Проверьте правильное ли число`);
   }
   let minutes = time % 60;
   let hours = (time - minutes) / 60;
   let h
   switch (hours)
   {
      case 1: h = '';
         break;
      case 2:
      case 3:
      case 4: h = 'а';
         break;
      default: h = 'ов';
         break;
   }
   let m;
   switch (minutes)
   {
      case 1: m = 'а';
         break;
      case 2: 
      case 3:
      case 4: m = 'ы';
         break;
      default: m = '';
         break;
   }
   return(`${hours} час${h} и ${minutes} минут${m}`);
}
console.log(getTimeFromMinutes(10000));


