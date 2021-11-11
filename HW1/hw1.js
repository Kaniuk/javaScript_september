// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

/*let first = 'hello';
first = 1;
console.log(first);
alert(first);
document.write(first);

let second = 'owu';
second = 2;
console.log(second);
alert(second);
document.write(second);

let third = 'com';
third = 3;
console.log(third);
alert(third);
document.write(third);

let fourth = 1;
fourth = 4;
console.log(fourth);
alert(fourth);
document.write(fourth);

let fifth = 10;
fifth = 5;
console.log(fifth);
alert(fifth);
document.write(fifth);

let sixth = -999;
sixth = 6;
console.log(sixth);
alert(sixth);
document.write(sixth);

let seventh = 123;
seventh = 7;
console.log(seventh);
alert(seventh);
document.write(seventh);

let eighth = 3.14;
eighth = 8;
console.log(eighth);
alert(eighth);
document.write(eighth);

let ninth = 2.7;
ninth = 9;
console.log(ninth);
alert(ninth);
document.write(ninth);

let tenth = 16;
tenth = 10;
console.log(tenth);
alert(tenth);
document.write(tenth);

let eleventh = true;
eleventh = 11;
console.log(eleventh);
alert(eleventh);
document.write(eleventh);

let twelfth = false;
twelfth = 12;
console.log(twelfth);
alert(twelfth);
document.write(twelfth);
*/


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)

let firstName = "Liumyla";
let middleName = 'Viktorivna';
let lastName = 'Kaniuk';

let person = (`${firstName} ${middleName} ${lastName}`);
/*alert(person);*/


// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

/*let name = prompt(`What is your name?`, `Vasya`);
let midName = prompt(`Type your middle name`, `Ivanov`);
let age = prompt(`How old are you?`, `18`);

alert(`Hello ${name} ${midName}! You are ${age} years old.`);*/


// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a = 100;
console.log(typeof a);

let b = '100'
console.log(typeof b);

let c = true;
console.log(typeof c);


// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
/*
5? 6 -> true
5 ? 6 -> false
5 ? 6 -> false
5 ? 6 -> false
10 ? 10 -> true
10 ? 10 -> true
10 ? 10 -> false
10 ? 10 -> false
10 ? 10 -> false
123 ? '123' -> false
123 ? '123' -> true
*/

console.log(5 < 6);
console.log(5 > 6);
console.log(5 == 6);
console.log(5 >= 6);
console.log(10 === 10);
console.log(10 == 10);
console.log(10 != 10);
console.log(10 < 10);
console.log(10 > 10);
console.log(123 === `123`);
console.log(123 == `123`);


// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
/*let str = "20";
let a = 5;
document.write(str + a + "<br/>"); - 205
document.write(str - a + "<br/>"); - 15 - Numerical transformation occurs in mathematical functions and expressions
document.write(str * "2" + "<br/>"); - 40
document.write(str / 2 + "<br/>"); - 10
*/






