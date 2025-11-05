
//  инкапсуляция - это сокрытие от внешнего мира внутренности программы (перменных функций)
//  т.е. объект хранит свое состояние в приватном порядке, и только методы объекта имеют доступ для его изменения.
 

//функция конструктор
function User(name, age) {
  this.name = name;
  this.age = age; //свойство доступно и его можно перезаписывать
  let userAge = age; //сойство недоступно даже для чтения. для этого нужно использовать геттеры и сеттеры.

  this.say = function () {
    //функция конструктор

    console.log(`Имя пользователя: ${this.name}  возраст ${this.age}`);
  };

  this.getAge = function () {
    return userAge;
  };
  this.setAge = function (age) {
    if (typeof age === "number" && age > 0 && age < 110) {
      userAge = age;
    } else {
      console.log("Недопустимое значение.");
    }
  };
}

const ivan = new User("Ivan", 27);
console.log(ivan.name);
console.log(ivan.age);
console.log(ivan.userAge);
console.log(ivan.getAge());
ivan.name = "test";
ivan.age = 30;
ivan.setAge(30);
// console.log(ivan.say());
ivan.say();


//Как выглядит вв класса будет. следующем файле.