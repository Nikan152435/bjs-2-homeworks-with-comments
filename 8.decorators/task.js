//Задача № 1Debounce декоратор с моментальным вызовом и подсчётом 

//количества вызовов
function debounceDecoratorNew(func, delay) { //Объявляем ф-ию, которая принимает функцию func и время задержки вызова вложенной ф-ии
  let timeoutId = null; // Инициализируем переменную для идентификатора таймера
  wrapper.count = 0; //  Инициализируем  счетчик вызовов вложенной, в главную, функции.
  wrapper.allCount = 0; //  Инициализируем (общий) счетчик вызовов вложенной, в главную, функции.
  function wrapper(...args) { // Обьявляем функцию обертку с использованием оператора spread
  wrapper.allCount++; // Увеличиваем общий счетчик вызовов обернутой функции
  if (timeoutId === null) { // Если идентификатор таймера равен null
      wrapper.count++; // То это первый вызов функции, увеличиваем счетчик вызовов обернутой функции
      func(...args) // Вызываем функцию func с переданными аргументами
  }
  clearTimeout(timeoutId); // Отчищаем предыдущий таймер
//clearTimeout() - метод WindowOrWorkerGlobalScope отменяет таймаут, ранее установленный вызовом setTimeout() 
  timeoutId = setTimeout(() => {
  func(...args); // Вызываем функцию func с переданными аргументами
  wrapper.count++; // Увеличиваем счетчик вызовов
  }, delay);// время задержки вызова ф-ии
}

return wrapper; // Возвращаем обернутую функцию
}
module.exports = {
  debounceDecoratorNew, 
}

//Задача № 2 Усовершенствовать кеширующий декоратор

const md5 = require('./js-md5.js');
function cachingDecoratorNew(func) { //Декоратор cachingDecoratorNew прнимает функцию, которая добавляет кеширование результатов выполнения
let cache = []; // Создаем пустой массив для кеша
const maxCacheValuesCount = 5; // Устанавливаем максимальное количество значений , в кэше, т.е. в массиве должно всегда быть не более установленного кол-ва значений/элементов
  return (...args) => { // Возвращаем стрелочную функцию, принимаемые аргументы собираем в массив
const hash = args.join(","); // преобразование массива в строку по указанному разделителю. 
    //Метод join() экземпляров Array создает и возвращает новую строку путем объединения всех элементов в этом массиве, разделенных запятыми или заданной строкой-разделителем . Если в массиве только один элемент, то этот элемент будет возвращен без использования разделителя.
    let searchingObjectInCache = cache.find((item) => {//Ищем обьект с таким же Хэш в Кеш
      if (hash in item) {// ??
        return item;// ??
        }
      });
      if (searchingObjectInCache) {//Если обьект найден в Кеш, выводим значение
      return "Из кеша: " + searchingObjectInCache[hash];//Возвращаем значение из Кеш
      }
      const result = func(...args);//Вызываем функцию func с переданными аргументами
      let newObjest = {};// создаём объект, сохранением его в переменную.
      newObjest[hash] = result;// в объекте создаём свойство/ключ с именем, хранящимся в переменной hash, и присваиваем туда значение из переменной result
      cache.push(newObjest);// добавляем в массив кэшей (объектов), новое значение (очередной объект), созданный на предыдущей строке. push 
      if (cache.length > maxCacheValuesCount) {//Если количество обьектов превышает норму
        cache.shift();//Удаляем самый старый обьект
      }
        return "Вычисляем: " + result;// Решение плюс результат
      }
  }
  module.exports = {// Это экспорт написанной ф-ии для использования в другом файле, здесь используется для тестирования решения.
    cachingDecoratorNew//
  }

// =====================Пример декоратора Логгера =======================================================

// Декоратор журнолирования, фиксирует и выводит все что важно

function loggerDecoretor(func){ // Принимает ф-ю которую мы передаем
  return(...args)=>{
    console.log("Вызов функции:", func.name); // Выводим название этой функции
    console.log("Аргументы", args); // Выводим аргументы
    const result = func(...args); // 
    console.log("Результат", result); // Выводим результат
    return result;
  };
}
function multiply(a,b){
  return a*b; // Простое умножение одного числа на другое
}
const DecoretedMultiply = loggerDecoretor(Multiply); // Функция loggerDecoretor внутри в качестве 
//аргументоми другая функция Multiply
const result = DecoretedMultiply(2,3); // Пытаемся получить результат, даем инф-ю (2,3)
console.log("Итоговый результат:", result); 
//Вызов ф-ии Multiply
//Аргументы (2,3)
//Результат 6
//Итоговый результат 6




  //================================Решение эксперта задачи 1========================================
  function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    wrapper.count = 0;
    wrapper.allCount = 0;

    function wrapper(...args) {
    wrapper.allCount++;
    if (timeoutId === null) {
        wrapper.count++;
        func(...args)
    }
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
    func(...args);
    wrapper.count++;
    }, delay);
}

return wrapper;
}
module.exports = {
  debounceDecoratorNew, 
}


  //Задача № 2 Усовершенствовать кеширующий декоратор  Пояснение:

  //Пример для решения
  //1. Хеш (однозначное соответствие аргументы => строка) удобно реализовать hash = md5(args). Кеш можно сделать массивом объектов. Например:
 
//cache = [
 // { hash: "7f49b84d0bbc38e96493718013baace6", value: 60 },
 // { hash: "36d9d8df7a0a21c339bf74e2a30d68bd", value: 6 },
 // { hash: "fd526d0a3bfd3ebdc1fc0f998d241da6", value: 791 },
//];
//2. При каждом запуске возвращаемой функции нам следует проверять, есть ли hash для данных аргументов в кеше.
//Это можно сделать, например, методом find. const objectInCache = cache.find((item) => тут нужно подумать).

//3. Этот код мог бы служить базой для решения, но всё равно остаётся место для подумать
//Пример решения 
//function cachingDecoratorNew(func) {
   // let cache = [];
   // return (...args) => {
     // const hash = ???; // получаем правильный хеш c помощью функции md5
      //if (!objectInCache) { // если элемент не найден
         // return "Из кеша: " + ???;
     // }
  
      //let result = func(...args); // в кеше результата нет — придётся считать
      //cache.push(???) ; // добавляем элемент с правильной структурой
      //if (cache.length > 5) { 
      //  ??? // если слишком много элементов в кеше, надо удалить самый старый (первый) 
     // return "Вычисляем: " + result;  
   // }
  //}

  

  //==============================Решение эксперта Задача 2 ============================================

  const md5 = require('./js-md5.js');

function cachingDecoratorNew(func) {
  let cache = [];
  const maxCacheValuesCount = 5;
  return (...args) => {
    const hash = md5(args);
    const objectFromCache = cache.find(object => object.hash === hash);
    if (objectFromCache){
      console.log("Из кеша: ", objectFromCache.value);
      return "Из кеша: " + objectFromCache.value;
    }

    const value = func(...args);
    cache.push({hash, value})
    if(cache.length > maxCacheValuesCount) {
      cache.shift();
    }

    console.log("Вычисляем: ", value);
    return "Вычисляем: " + value;
  };
}

module.exports = {
  cachingDecoratorNew
}