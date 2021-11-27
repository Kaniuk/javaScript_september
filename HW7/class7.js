//  Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


/*function Car(model, year, manufactured, maxSpeed, engineCapacity) {
    this.model = model;
    this.year = year;
    this.manufactured = manufactured;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    this.info = function () {
        console.log(`Модель - "${this.model}",
Виробник - "${this.manufactured}",
Рік випуску - "${this.year}" ,
Максимальна швидкість - "${this.maxSpeed}",
Об'єм двигуна - "${this.engineCapacity}"`);
        if (this.driver) {
            console.log('Водій -', this.driver);
        }
    }

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    }
    this.changeYear = function (newValue) {
        this.year = newValue;
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    }

}

const myCar = new Car('Toyota', 2012, 'Japan', 200, 500);
myCar.info();


myCar.drive();
myCar.info();

myCar.increaseMaxSpeed(250);
myCar.info();

myCar.changeYear(2021);
myCar.info();

myCar.addDriver({name: 'Valera', Surname: 'Ivanov'});
myCar.info();*/

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


class Car {
    constructor(model, year, manufactured, maxSpeed, engineCapacity) {
        this.model = model;
        this.year = year;
        this.manufactured = manufactured;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };

    info() {
        console.log(`Модель - "${this.model}",
Виробник - "${this.manufactured}",
Рік випуску - "${this.year}" ,
Максимальна швидкість - "${this.maxSpeed}",
Об'єм двигуна - "${this.engineCapacity}"`);
        if (this.driver) {
            console.log('Водій -', this.driver);
        }
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }

}

const myCar = new Car('Toyota', 2012, 'Japan', 200, 500);
myCar.info();


myCar.drive();
myCar.info();

myCar.increaseMaxSpeed(250);
myCar.info();

myCar.changeYear(2021);
myCar.info();

myCar.addDriver({name: 'Valera', Surname: 'Ivanov'});
myCar.info();

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.


class SomeHero {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Cinderella extends SomeHero {
    constructor(name, age, size) {
        super(name, age);
        this.size = size;
    }
}

let Cinderellas = [
    new Cinderella('Olena', 21, 42),
    new Cinderella('Mariya', 28, 38),
    new Cinderella('Nastya', 41, 36),
    new Cinderella('Lidia', 19, 35),
    new Cinderella('Anna', 25, 40),
    new Cinderella('Svitlana', 35, 37),
    new Cinderella('Olga', 32, 39),
    new Cinderella('Lina', 18, 36),
    new Cinderella('Tatyana', 22, 37),
    new Cinderella('Inna', 36, 38),

];

class Prince extends SomeHero {
    constructor(name, age, shoe) {
        super(name, age);
        this.shoe = shoe;
    }
}

let prince = new Prince('Valera', 32, 35);

for (const cinderella of Cinderellas) {
    if (cinderella.size === prince.shoe) {
        console.log('This cinderella should be with prince', cinderella);
    }

}
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку*

let rightCinderella = Cinderellas.find((cinderella => cinderella.size === prince.shoe));
console.log(rightCinderella);