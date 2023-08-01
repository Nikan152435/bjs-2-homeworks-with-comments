//TASK 1 Печатное издание

class PrintEditionItem {//Класс представляющий книги. 
    constructor(name, releaseDate, pagesCount) { //Задано 3 аргумента
        this.name = name;// Имя книги             
        this.releaseDate = releaseDate; // Год выпуска книги
        this.pagesCount = pagesCount; // количество страниц  
        this._state = 100; // Сосотояние книги новой по умолчанию               
        this.type = null; //Тип книги по умолчанию             
    }
    fix() {// Метод для восстановления состояния книги
        this.state = this.state * 1.5;// Если мы ее чиним, то получаем состояние на 50 %  
    }
    //контроль состояния книги. Метод изменения состояния
    set state(newState) { //В методе set мы аргументам ПОЛУЧАЕМ значение
        if (newState < 0) {// Если состояние меньше 0 то
            this._state = 0;
        } else if (newState > 100) { // Если состояние БОЛЬШЕ новой то
            this._state = 100;
        } else { // В противном случае
            this._state = newState;
        }
    }
    get state() { //В методе get мы ВОЗВРАЩАЕМ значение, для получения состояния книги
        return this._state;
    }    
  }
class Magazine extends PrintEditionItem{// Клас Magazine наследуемый от PrintEditionItem
// в аргументы конструктора передается то, что будет передано при создании экземпляра класса
    constructor(name, releaseDate, pagesCount) {
// super - вызываем конструктор родителя, передаем те аргументы, которые там поименованы
        super(name, releaseDate, pagesCount);// Вызов родительского поведения.переопределяет методы с исп. родительского поведения.
        this.type = 'magazine';// создается свойство, которое будет с этим значением только в этом классе
    }
} 
class Book extends PrintEditionItem{ // Класс Book наследуемый от  PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);// Вызов родительского поведения
        this.type = 'book';
        this.author = author;// в родителе его нет, оно создается только в этом класса, создается стандартно
    }
}   
class NovelBook extends Book{ // Клас NovelBook еаследуемый от Book
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);// Вызов родительского поведения
        this.type = 'novel';
    }
}
class FantasticBook extends Book{ // Класс FantasticBook наследуемый от Book
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);// Вызов родительского поведения
        this.type = 'fantastic';
    }
}
class DetectiveBook extends Book{ // Класс DetectiveBook наследуемый от Book
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);// Вызов родительского поведения
        this.type = 'detective';    
    }
}

const Sherlock = new PrintEditionItem( // Создание экземпляров класса.
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
);

const magazineSherlock = new Magazine( // Создание экземпляров класса.
    'Журнал о Шерлоке',
    2023,
    777
);

const bookSherlock = new Book( // Создание экземпляров класса.
    'Артур Конан Дойл',
    'Книга о Шерлоке',
    2020,
    555,
);

const detective = new DetectiveBook( // Создание экземпляров класса.
    'Автор детектива',
    'Книга детектив',
    2023,
    1555,
);

// console.log(Sherlock);
// console.log(magazineSherlock);
// console.log(bookSherlock);
// console.log(detective);

//Task 2 Library  
class Library { // создаем класс библиотеки, а не экземпляр класса
    constructor(name) {
        this.name = name;  // name из аргумента              
        this.books = [];   // books созданается с дефолтным значением пустого массива, оно нам нужно для хранения книги             
    }    
    addBook(book) { // по заданию, метод addBook должен добавлять книжку в массив, поэтому в методе ошибка
        if (book.state > 30) { // смотрим состояние книжки
            this.books.push(book); // если состояние книжки превышает 30 единиц - добавляем книжку в библиотеку
            return 'Книга успешно добавлена';
        }
        return 'Книга в плохом состоянии';
    }
    findBookBy(key, value) { //Метод поиска по типу и значению
        const foundBook = this.books.find(book => book[key] === value);// ищем книжку
        return foundBook || null; // если книжка найдена - возвращаем книжку, если нет - возвращаем null
   }
// giveBookByName(bookName) { Мерод выдачи книги по маркам, поиск по индексу
//const bookIndex = this.books.findIndex(book => book.name === bookName);
// if (bookIndex !== -1) {
//const book = this.books[bookIndex];//Ищем индекс в массиве
//this.books.splice(bookIndex, 1);
//return book;
//}
// return null; Если индекс не найден,  возвращаем null

//Преподаватель просит внести корректировки:
giveBookByName(bookName) { //Метод поиска по типу и значению
    const book = this.findBookBy('name', bookName); //Ищем книгу по типу и значению
    if (!book) return null; //Если не книга то возвращаем null
        this.books = this.books.filter((item)=> item.name !== book.Name); //Метод filter() позволяет получить новый массив, отфильтровав элементы с помощью переданной колбэк-функции. 
//Колбэк-функция будет вызвана для каждого элемента массива и по результату функции примет решение включать этот элемент в новый массив или нет
          return book;//возвращаем найденную книгу               
   }
}

const library = new Library('Библиотека');

library.addBook(bookSherlock);
library.addBook(magazineSherlock);
library.addBook(detective);

console.log(library);

//Task 3 journal - Не решена!

class Student {
    constructor(name) {               
        this.name = name;
        this.evaluations = {};                
    }

    addMarks(...marks) {
        if (this.evaluations('физика') && this.evaluations !== []) {
            this.marks.push(...marks);
        } else {
        return 0;
        }
    }
}