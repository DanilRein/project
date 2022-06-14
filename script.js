"use strict";

function getTimeFromMinutes(time) {
   if (isNaN(time) || !Number.isInteger(time) || time < 0) {
      return (`Проверьте правильное ли число`);
   }
   let minutes = time % 60;
   let hours = (time - minutes)/60;
   return(`${hours} часов и ${minutes} минут`);
}
console.log(getTimeFromMinutes(150));
