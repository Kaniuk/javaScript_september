// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
/*
let firstString = 'hello world';
console.log(firstString.length);

let secondString = 'lorem ipsum';
console.log(secondString.length);

let thirdString = 'javascript is cool';
console.log(thirdString.length);*/

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let firstString = 'hello world';
console.log(firstString.toUpperCase());

let secondString = 'lorem ipsum';
console.log(secondString.toUpperCase());

let thirdString = 'javascript is cool';
console.log(thirdString.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let lowerCaseFirstString = firstString.toLowerCase();
console.log(lowerCaseFirstString);

let lowerCaseSecondString = secondString.toLowerCase();
console.log(lowerCaseSecondString);

let lowerCaseThirdString = thirdString.toLowerCase();
console.log(lowerCaseThirdString);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let trimString = ' dirty string   ';
console.log(trimString.trim());

/*- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';*/

let stringToArray = (string) => {
    console.log(string.split(' '));
}
stringToArray('Каждый охотник желает знать');

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

let delete_characters = (str, length) => {
    return str.slice(0, length);
}
const newStr = delete_characters('Каждый охотник желает знать', 7);
console.log(newStr);

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let insert_dash = (string) => {
    // return string.toUpperCase().split(' ').join('-');
    return string.toUpperCase().replaceAll(' ', '-')
}
const newString = insert_dash("HTML JavaScript PHP");
console.log(newString);

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

let upperFirstSymbol = (string) => {
    return string[0].toUpperCase() + string.slice(1);
}
const newFirstSymbol = upperFirstSymbol('hello my friends');
console.log(newFirstSymbol);

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.*/

let capitalize = (str) => {
    const capitalizedWords = [];
    for (const word of str.split(' ')) {
        capitalizedWords.push(upperFirstSymbol(word))
    }

    return capitalizedWords.join(' ')
}
const ww = capitalize('today is lovely day');
console.log(ww);