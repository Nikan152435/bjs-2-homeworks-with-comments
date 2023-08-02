"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;
 
  if (d > 0) {
  let rootFirst = (-b + Math.sqrt(d)) / (2 * a);
  let rootSecond = (-b - Math.sqrt(d)) / (2 * a);
  arr.push(rootFirst, rootSecond);

} else if (d === 0) {
  let root = -b / (2 * a);
  arr.push(root);
} 
return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (
    typeof percent !== "number" ||
    typeof contribution !== "number" ||
    typeof amount !== "number" ||
    typeof countMonths !== "number"
  ) {
    return false;
  }

 //percent - процент за пользование кредитом, 
//contribution - первоначальный взнос, 
//amount -  сумма кредита,
//countMonths - длительность кредита
//loanAmount - остаток по кредиту - тело кредита
//monthlyInteres - Месячная процентная ставка
//monthlyPayment - Месячный платеж


  percent = percent / 100; // Преобразование процентной ставки в десятичную форму
  let loanAmount = amount - contribution; // Тело кредита=сумма кредита-первоначальный взнос
  let monthlyInterest = percent / 12; // Месячная процентная ставка

  let monthlyPayment =
    loanAmount *
    (monthlyInterest +
      monthlyInterest / (Math.pow(1 + monthlyInterest, countMonths) - 1));// Math.pow() это возведение первого аргумента 
// в степень (второй аргумент). 1 прибавляем для того, чтобы получить не только % от ежемесячн. платежа, а итоговую сумму, 
//т.е. исходный платёж + процент от этого платежа. 

//Тело кредита *(Месячная процент ставка+ Месячная процентная ставка/(Math.pow(1 + monthlyInterest, countMonths) - 1))
//Math.pow(1 + monthlyInterest, countMonths) - 
  
  let totalPayment = monthlyPayment * countMonths; // Общая сумма выплат
  totalPayment = Math.round(totalPayment * 100) / 100; // Округление до целых чисел
                 //to Fixed(2)                           // Округление до 2 запятой

  return totalPayment;
}
   
//Пример задачи ДОП на вклад 1000 руб , годавая ставка 5 %
//              Через сколько получим милион?

const PROCENT_YEAR = 1.05;
const GOAL = 1000000;
let account = 1000;
let year = 1;

while (account < GOAL) {
account *= PROCENT_YEAR;
year++;
}
console.log(year)