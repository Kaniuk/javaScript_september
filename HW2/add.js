// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.

/*
let friends = [];
if ( friends.length <= 3) {
    console.log('це великий масивв ,якому  3 і більше елементи');
}else console.log('що це маленький масив, в якому менше 3-х елементів');
*/


// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//  Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.

/*
let numbers = [];
if (numbers[0] > numbers[1] && numbers[0] < numbers[2]) {
    console.log(numbers[0]);

} else if (numbers[1] > numbers[0] && numbers[1] < numbers[2]) {
    console.log(numbers[1], 'middle number');

} else if (numbers[2] > numbers[0] && numbers[2] < numbers[1]) {
    console.log(numbers[2]);

} else console.log('Something goes wrong');
*/


// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }
/*

let a = '';
let b = '';
let result = (a + b < 4) ? console.log('Мало') : console.log('Багато');
*/



// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором

/*
let number = '';
number = (number <= -1 && number >= -100) ? console.log('негативним') : (number >= 1 && number <= 100) ? console.log('позитивним') : console.log(0);
*/