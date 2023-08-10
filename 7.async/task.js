class AlarmClock {// Класс представляет будильник
    constructor() { //Конструктор
        this.alarmCollection = []; //свойства для хранения коллекции звонков
        this.intervalId = null;       //свойства для хранения id таймера  
    }
    //добавляет новый звонок в коллекцию
    addClock(timeStart, callback) { 
        if (!timeStart || !callback) { //Если проверка истинна, тогда выбрасывается исключение с сообщением "Отсутствуют обязательные аргументы"
            throw new Error("Отсутствуют обязательные аргументы");
        }

        // if (this.alarmCollection.some(alarm => alarm.time === timeStart)) {
        //     console.warn('Уже присутствует звонок на это же время');
        //     return;
        // }
        
        
        const newAlarm = { //Создание обьекта будильника
            time: timeStart,
            callback: callback,
            canCall: true
          };

        this.alarmCollection.push(newAlarm);// Добавляем newAlarm  в alarmCollection
        return console.log('Будильник установлен!'); // Возвращаем вывод в консоль
    }
    //удаляет звонки по определённому времени
    removeClock(time) {              
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
// получаем новый массив, отфильтровав элементы с помощью переданной колбэк-функции. Колбэк-функция будет вызвана для каждого элемента массива и по результату функции примет решение включать этот элемент в новый массив или нет.
    }
    //возвр текущее время в стр.формате HH:MM 
    getCurrentFormattedTime() {            
        const now = new Date();//Создаем обьек new Date() со временем
        const hours = now.getHours().toString().padStart(2, '0');
// getHours метод возвращают компоненты относительно местного часового пояса.
// toString метод преобразует в строку
// padStart метод дополняет текущую строку другой строкой (при необходимости несколько раз), пока результирующая строка не достигнет заданной длины . Заполнение применяется с начала текущей строки.
        const minutes = now.getMinutes().toString().padStart(2, '0');
// getMinutes() метод возвращает минуты для этой даты по местному времени
        return `${hours}:${minutes}`; // возвращем вывод в консоль hours: minutes 
    }
    //запускает будильник
    start() { // Пишем функцию    
        //проверка наличия свойства для хранения таймера id (интервалов)                 
                if (this.intervalId !== null) { //Если свойства для хранения id таймера не равно null
                    return;   // Возвращаем это свойство
                }
        
                this.intervalId = setInterval(() => {// Присваиваем к свойству для хранения id таймера -установку интервала
                    const currentTime = this.getCurrentFormattedTime();// присваиваем свойству  currentTime -"Эта функция используется для возврата текущего времени звукового файла в формате секунд, который воспроизводится в это время в Интернете " свойство getCurrentFormattedTime() текущее время в стр.формате HH:MM
                
                    this.alarmCollection.forEach(alarm => {//С помощью метода массива forEach  перебираем  массив, выполняя предоставленную функцию один раз для каждого элемента массива в порядке возрастания индекса . Эта функция называется функцией обратного вызова
                      if (alarm.time === currentTime && alarm.canCall) {// Если время звонока===текущему времени и звонок ТУТ Я НЕ ПОНЯЛА? 
                        alarm.canCall = false;//?
                        alarm.callback();//?
                      }
                    });
                  }, 1000);//с интервалом для вывода сообщения в 1 секунду
            }
            //останавливает выполнение интервала будильника
    stop() {    // Пишем функцию для того, чтобы удалить интервал вывода сообщений
        clearInterval(this.intervalId);//Функция clearInterval() отменяет многократные повторения действий, установленные вызовом функции setInterval(). Примечание: значение идентификатора, возвращённого функцией setInterval() , используется в качестве параметра для clearInterval() 
        this.intervalId = null;//свойства для хранения id таймера  присваиваем null локально в этой функции
    }
    //сбрасывает возможность запуска всех звонков.
    resetAllCalls() {     //  Пишем функцию для сброса запусков всех звонков.
        this.alarmCollection.forEach(alarm => {//С помощью метода массива forEach  перебираем  массив, выполняя предоставленную функцию один раз для каждого элемента массива в порядке возрастания индекса .
        alarm.canCall = true;// ТУТ НЕ ПОНЯЛА ПОЧЕМУ null?
        });
    }
    //удаляет все звонки
    clearAlarms() {    //     
        this.stop(); // Вызов метода остановки интервала
//stop() останавливает дальнейшую загрузку ресурсов в текущем контексте просмотра, что эквивалентно кнопке остановки в браузере . Из-за того, как выполняются сценарии, этот метод не может прервать загрузку своего родительского документа, но он остановит его изображения, новые окна и другие загружаемые объекты
        this.alarmCollection = [];// ТУТ НЕ ПОНЯЛА?
    }

}

const alarm = new AlarmClock();//

// console.log(alarm);
console.log(alarm.addClock('16:45', () => console.log('Будильник установлен!')));//
console.log(alarm.alarmCollection.length);//
// console.log(alarm);
// console.log(alarm.removeClock('16:45'));
// console.log(alarm);
alarm.clearAlarms();//
console.log(alarm);//
console.log(alarm.alarmCollection.length);//

   