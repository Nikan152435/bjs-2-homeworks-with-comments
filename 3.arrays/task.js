function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false; 
      }  
        
     return arr1.every((element, index) => element === arr2[index]);
}

const people = [
    {firstName: "Александр", secondName: "Карпов", age: 17, gender: "мужской"},
    {firstName: "Егор", secondName: "Морозов", age: 21, gender: "мужской"},
    {firstName: "Мелисса", secondName: "Леонова", age: 40, gender: "женский"},
    {firstName: "Мелания", secondName: "Савельева", age: 37, gender: "женский"},
    {firstName: "Мария", secondName: "Овчинникова", age: 18, gender: "женский"},
    {firstName: "Марьяна", secondName: "Котова", age: 17, gender: "женский"},
    {firstName: "Фёдор", secondName: "Селезнев", age: 50, gender: "мужской"},
    {firstName: "Георгий", secondName: "Петров", age: 35, gender: "мужской"},
    {firstName: "Даниил", secondName: "Андреев", age: 49, gender: "мужской"},
    {firstName: "Дарья", secondName: "Савельева", age: 25, gender: "женский"},
    {firstName: "Михаил", secondName: "Шаров", age: 22, gender: "мужской"},
    {firstName: "Владислав", secondName: "Давыдов", age: 40, gender: "мужской"},
    {firstName: "Илья", secondName: "Казаков", age: 35, gender: "мужской"},
    {firstName: "Евгений", secondName: "Кузьмин", age: 19, gender: "мужской"},
  ]

  function getUsersNamesInAgeRange(users, gender) {
    let result = users.filter(gndr => gndr.gender === gender) // здесь отфильтровываем объекты, свойство gender которых совпадает с пришедшим аргументом, и помещаем их в новый массив, который передаёт дальше по цепочке вызовов
      .map(ages => ages.age) // здесь, выбираем только указанные свойства объекта, из принятого массива и опять же собираем их в новый массив и тоже передаём его дальше
      .reduce((acc, item, index, users) => { // этот метод, приняв массив, выполняет нужные/указанные действия с каждым его элементом. acc - это переменная для хранения итогового результата работы метода; item - текущий обрабатываемый элемент массива; index - индекс обрабатываемого элемента; users - это имя присваивается принимаемому массиву, т.к. нам нужен именованный массив, для получение и использования его длины при расчёте среднего значения
      acc += item; // операция сложения элементов массива (возрастов) с накоплением
      if (index === users.length - 1) { // сверка индекса текущего обрабатываемого элемента с кол-вом элементов массива, если они сравнялись, то
        return acc / users.length; // возвращаем среднее значение
      }
      return acc; // раз проверка выше не сработала, то значит ещё не дошли до конца и обязаны вернуть текущее значение - накопленный результат сложения элементов. Возврат происходит только из текущего шага, т.е. этот шаг завершился, начнётся следующий шаг метода (точнее стрелочной ф-ии в нём)
    }, 0); // 0 - это начальное значение переменной-аккумулятора - acc. При таком синтаксисе - не обязателен
    if (users.length === 0) { // если на вход получили пустой массив, то 
      return 0; // прерываем выполнение ф-ии. Но по логике эту проверку правильнее делать в самом начале ф-ии. Т.к. если массив пустой, то зачем пытаться выполнять другие расчёты, сразу прерываем и всё, не выполняем бесполезные операции...
    }
    return result; // возврат из ф-ии результата
}
// let result = arr.filter(...).map(...).reduce(...)
// let result = arr.filter(...).reduce(...)

console.log(getUsersNamesInAgeRange(people, "мужской"));

//Задача тема Массивы Доп

"Сформировать массив из чисел от 1 до 200, посчитайте среднее арифметическое и выведите в консоль."

let arr = [];

for (i = 0; i <= 200; i++) {
    arr.push(i);
}

let sum = 0;
for (j = 0; j < arr.length; j++) {
    sum += arr[j]
}

let average = sum / arr.length;
console.log(average);

// Задача тема Массивы доп

"Создайте массив из 7 произвольных чисел. Найдите максимальный элемент в массиве и его индекс."

решение

const arr = [];

for (i = 0; i < 7; i++) {
    arr.push(Math.random())
}

let maxIndex = 0;
let max = arr[maxIndex];

for (i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
        maxIndex = i;
    }
}

console.log(arr);
console.log(maxIndex, max)

