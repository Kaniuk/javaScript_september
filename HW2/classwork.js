// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

/*let a = '';
let b = '';
if (a > b) {
    console.log(a);
} else if (b > a) {
    console.log(b)
} else if (a === b)
    console.log(a, b);*/


// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
//

/*
let apartment = +prompt('Enter your apartment');
if (apartment <= 20) {
    alert('WOW it the first entrance!');
} else if (apartment <= 48) {
    alert('WOW it the second entrance!');
} else if (apartment <=90){
    alert('WOW it the third entrance!');
}else alert('Something goes wrong');
*/


// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

/*
let someNumber = 12;
if (someNumber === 10) {
    console.log('ВІРНО');
}else console.log('НЕВІРНО');

let someNumb = 10 ? console.log('ВІРНО' ): console.log('НЕВІРНО');
*/


// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else

/*
let x = '';
if (typeof x === 'number') {
    console.log(1)
}else if (typeof x ==='string') {
    console.log(2)
}else if (typeof x === 'boolean' || typeof x === 'array' || typeof x === 'object')  {
    console.log(3)
}else console.log(4)
*/

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

/*let temperature =+prompt('чи ми йдемо сьогодні в OKTEN на навчання?');
if (temperature >=10 && temperature <=22) {
    alert('ми йдемо ВЧИТИСЯ');
}else alert('сидимо вдома і вчимося ОНЛАЙН');*/


// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .


/*
let loto = 5;
switch (loto) {
    case 1:
        console.log('Авто');
        break;
    case 2:
        console.log('Мото');
        break;
    case 3:
        console.log('Телефон');
        break;
    case 4:
        console.log('Квартира');
        break;
    case 5:
        console.log('Спробуй ще раз');
        break;
}
*/





