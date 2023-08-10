//Задача № 1Debounce декоратор с моментальным вызовом и подсчётом 
//количества вызовов
 
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

  //Решение эксперта задачи 1================
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


  //Задача № 2 Усовершенствовать кеширующий декоратор

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
function cachingDecoratorNew(func) {
    let cache = [];
    return (...args) => {
      const hash = ???; // получаем правильный хеш c помощью функции md5
      let objectInCache = cache.find((item) => ???); // ищем элемент, хеш которого равен нашему хешу
      if (!objectInCache) { // если элемент не найден
          console.log("Из кеша: " + ???); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
          return "Из кеша: " + ???;
      }
  
      let result = func(...args); // в кеше результата нет — придётся считать
      cache.push(???) ; // добавляем элемент с правильной структурой
      if (cache.length > 5) { 
        ??? // если слишком много элементов в кеше, надо удалить самый старый (первый) 
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;  
    }
  }

  //Решение задачи 2
  
  const md5 = require('./js-md5.js');

  function cachingDecoratorNew(func) {
    let cache = [];
    const maxCacheValuesCount = 5;
  
    return (...args) => {
      const hash = args.join(",");
      let searchingObjectInCache = cache.find((item) => {
        if (hash in item) {
          return item;
  
        }
  
      });
  
      if (searchingObjectInCache) {
        return "Из кеша: " + searchingObjectInCache[hash];
  
      }
  
      const result = func(...args);
      let newObjest = {};
      newObjest[hash] = result;
      cache.push(newObjest);
  
      if (cache.length > maxCacheValuesCount) {
        cache.shift();
  
      }
  
      return "Вычисляем: " + result;
      
    }
  }
  
  module.exports = {
    cachingDecoratorNew
  }

  //Решение эксперта Задача 2 ==============

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