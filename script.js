"use strict";

const personalPlanPeter = {
   name: "Peter",
   age: "29",
   skills: {
      languages: ['ru', 'eng'],
      programmingLangs: {
         js: '20%',
         php: '10%'
      },
      exp: '1 month'
   },
   showAgeandLangs: function (plan) {
      let result;
      let lang='';
         lang=plan.skills.languages.join(' ');
         result = `Мне ${plan.age} и я владею языками:${lang.toUpperCase()} `;
      return result;
   }
};

function showExperience(plan) {

   const {exp} = plan.skills;
   return (exp);
};

function showProgrammingLangs(plan) {
   let result='';
   for (let key in plan.skills.programmingLangs) {
      result+=(`Язык ${key} изучен на ${plan.skills.programmingLangs[key]}\n`);
   }
   return result;
};

