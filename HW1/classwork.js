// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
let arr = [
    Math.floor(10 * Math.random() + 1),
    Math.floor(10 * Math.random() + 1),
    Math.floor(10 * Math.random() + 1),
    Math.floor(10 * Math.random() + 1),
    Math.floor(10 * Math.random() + 1),
    Math.floor(10 * Math.random() + 1),
    Math.floor(10 * Math.random() + 1),
    Math.floor(10 * Math.random() + 1),
    Math.floor(10 * Math.random() + 1),
    Math.floor(10 * Math.random() + 1),
];
console.log(arr[0] + arr[1] + arr[2] + arr[3] + arr[4] + arr[5] + arr[6] + arr[7] + arr[8] + arr[9]);


// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
/*
let book = {
    name: 'Just work',
    pages: 150,
    genre: 'detective',
    authors: 'J.D. Jeferson'
};
console.log(book);*/


// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт

let book = [
    {
        name: 'Just work',
        pages: 150,
        genre: 'detective',
        authors: 'J.D. Jeferson'
    },
    {
        name: 'Paws',
        pages: 650,
        genre: 'medicine',
        authors: 'A.Beleryt'
    },
    {
        name: 'The end',
        pages: 150,
        genre: 'horrors',
        authors: 'J.D. Jeferson'
    },
    {
        name: 'To be better',
        pages: 100,
        genre: 'psychology',
        authors: 'L.L. Fab'
    },
    {
        name: 'Imagination',
        pages: 752,
        genre: 'biography',
        authors: 'F.Dammuyt'
    },
    {
        name: 'Temptation',
        pages: 250,
        genre: 'detective',
        authors: 'J.Dsawer'
    }

]
console.log(book [0]);
console.log(book[1]);
console.log(book[2]);
console.log(book[3]);
console.log(book[4]);
console.log(book[5]);

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
let height = 23;
let width = 10;
let s = height * width;
console.log(s);

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
let height1 = 10;
let dC = 4;
const pi = 3.14;
let r = dC / 2;

let v = pi * (Math.pow(r, 2)) * height1;
console.log(v);

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
let n = 3;
let m = 4;
let k = Math.pow(Math.pow(n, 2) + Math.pow(m, 2), 1 / 2);
console.log('k', k);