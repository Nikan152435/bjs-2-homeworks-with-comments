function Student(name, gender, age) {// Создаем функцию название ф-ии говорит о том, что это конструктор, с заглавной буквы. 
  //Она поможет создать новые обьекты
    this.name = name;//This это ссылка на обьект. Создаём  свойство текущего объекта с присвоением ему значения, полученного 
    //в аргументе .
    this.gender = gender;
    this.age = age;
    this.marks = [];
};// Ничего не возвращаем, тк нет return.
const newStudent1 = new Student('Nikita', 'male', 33);// Создаём новый объект с передаваемыми, в аргументах, свойствами. 
const newStudent2 = new Student('Valentina', 'female', 35);
const newStudent3 = new Student('Alexandr', 'male', 38);

console.log('newStudent1',newStudent1);//Выводим в консоль и видим, что у newStudent1 внутри обьект Student со значениями,
//(где 'newStudent1' это текст пояснение):
//name: Nikita
//gender: male
//age: 33
//[[prototype]] Это ссылка на наш обьект конструктор, из коорого мы создвем этот обьект
Student.prototype.setSubject = function(subjectName) {//Мы сами создаем  новый метод, через ключевое слово prototype
    this.subject = subjectName;//Присваиваем полю subject - subjectName
}

newStudent1.setSubject('history');//Вызываем newStudent1 обращаемся через точку к setSubject и передаем параметры history.
//Появилось новое свойство setSubject: history(параметр)

Student.prototype.addMarks = function(...marks) {//Мы сами создаем новый метод addMarks через прототайп присваиваем функцию с 
  //оператором spread, разделяя значения на отдельные составляющие
    if (this.hasOwnProperty('marks') ) {//Проверяем значение marks методом проверки обьектов hasOwnProperty, 
                                        //возвращает логическое значение, указывающее,содержит ли обьект указанное свойство
        this.marks.push(...marks);//обращаемся к this.marks добавляем полученное значение через метод push 
    }
}
Student.prototype.getAverage = function() {//Мы сами создаем новый метод getAverage через прототайп 
    if (this.hasOwnProperty('marks') && this.marks.length !== 0) {//Проверяем значение marks методом Методом установленным в js, 
      //методом  hasOwnProperty() возвращает логическое значение, указывающее, содержит ли объект указанное свойство - взято с MDN. 
      //Т.е. данный метод просто проверяет наличие собственного (не унаследованного) свойства,  и длина обьекта marks не равны 0, то
      let sum = this.marks.reduce((total, mark) => total + mark, 0);//Переменной sum присваиваем значения marks и метод reduce
      //выполняет нужные действия сложения через стрелочную функцию
      this.average = sum / this.marks.length;//Создали свойство average и передали ему значение  среднее ариф и
      return this.average;// возвращаем результат
    } else {//в противном случае
      this.average = 0;// он равен нулю
      return this.average;//возвращаем это значение
    }
  };
  Student.prototype.exclude = function(reason) {//Мы сами создаем  новый метод exclude(Исклбючение студента) через прототайп 
    this.excluded = reason;//this это ссылка на обьект. Создаём  свойство текущего объекта с присвоением ему значения,
    // полученного в аргументе . 
    delete this.subject;//Удаляем свойство subject  будет исключать студента и
    delete this.marks;
  }