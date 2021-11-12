// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

/*let time = +prompt('Type the minutes');
if (time <= 15) {
    alert('it is the first part');
} else if (time <= 30) {
    alert('it is the second part');
} else if (time <= 45) {
    alert('it is the third part');
} else if (time <= 59) {
    alert('it is the last part');
} else alert('it is the wrong time');
*/


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

/*let date = +prompt('Type date');
if (date <= 10) {
    alert('The first decade!');
}else if (date <=20) {
    alert('Second decade!')
}else if (date <=31){
    alert('Third decade!')
}
*/

// - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

/*let test ='';
if (test===true) {
    console.log('Вірно');
}else console.log('Неправильно');*/

/*let test = true ? 'Вірно' : 'Неправильно';
console.log(test);*/

// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

/*
let a = '';
if (a !== 0) {
    console.log('Вірно')
} else console.log('Невірно')
*/

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

/*
let day = +prompt('Enter day');
switch (day) {
    case 1:
        alert('Monday: Today you have appointment with your dentist!')
        break;
    case 2:
        alert('Tuesday: You should call your mum')
        break;
    case 3:
        alert('Wednesday: Plan your holiday')
        break;
    case 4:
        alert('Thursday: Today you have english classes)')
        break;
    case 5:
        alert('Party!!!')
        break;
    case 6:
        alert('Saturday:You can sleep all day')
        break;
    case 7:
        alert('You should prepare for next day')
        break;
}
*/

// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

/*
let year = prompt('Enter year');
if (year%4===0) {
    alert('Високосний рік');
}else alert('Не високосний рік');
*/


// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

/*
let js = prompt('„Яка «офіційна» назва JavaScript?“');
if (js === 'ECMAScript') {
    alert('Правильно!');
} else alert('Не знаєте? ECMAScript!');*/
