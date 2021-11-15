// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

/*
let numArr = [1, 2, 3, 4, 5];
for (let i = 0; i < numArr.length; i++) {
    console.log(numArr[i]);

}

let stringArr = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i < stringArr.length; i++) {
    console.log(stringArr[i]);
}

let allArr = ['hey', 1, 2, false, true, 'WOW'];
for (let i = 0; i < allArr.length; i++) {
    console.log(allArr[i]);

}
*/


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

/*let arr = [];
arr[0] = 1;
arr[1] = 'hello';
arr[2] = false;
arr[3] = 15;
arr[4] = 'string';

for (const element of arr) {
    console.log(element);
}*/



// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

/*
let arrayOfStrings = [
    "Lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet,",
    "consectetur",
    "adipisicing",
    "elit.",
    "Deserunt,",
    "quibusdam?",
];
for (let i = 0; i < arrayOfStrings.length; i++) {
    document.write(`
        <div>
            ${arrayOfStrings[i]}
        </div>
    `);
}


let arrayOfNewStrings = ['apple', 'orange', 'cherry', 'pear', 'peach'];
for (let i = 0; i < arrayOfNewStrings.length; i++) {
    document.write(`
        <div>
            ${i}. ${arrayOfNewStrings[i]} 
        </div>
    `);
}
*/


/*
let whileArrayOfStrings = ['Olya', 'Vasya', 'Ihor', 'Lidiia', 'Natalya', 'Olya', 'Vasya', 'Ihor', 'Lidiia', 'Natalya', 'Olya', 'Vasya', 'Ihor', 'Lidiia', 'Natalya', 'Olya', 'Vasya', 'Ihor', 'Lidiia', 'Natalya'];
let i = 0;
while (i < whileArrayOfStrings.length) {
    let whileArrayOfString = whileArrayOfStrings[i];
    document.write(`
        <div>
            ${whileArrayOfString}
        </div>
    `);
    i++;
}
*/

/*

let whileNewArray = ['Olya', 'Vasya', 'Ihor', 'Lidiia', 'Natalya', 'Olya', 'Vasya', 'Ihor', 'Lidiia', 'Natalya', 'Olya', 'Vasya', 'Ihor', 'Lidiia', 'Natalya', 'Olya', 'Vasya', 'Ihor', 'Lidiia', 'Natalya'];
let i = 0;
while (i < whileNewArray.length) {
    let whileNewArrayItem = whileNewArray[i];
    document.write(`
        <div>
           ${[i]} ${whileNewArrayItem} 
        </div>
    `);
    i++;
}*/


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

/*
let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const number of numArr) {
    console.log(number);
}

let strArr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
for (const string of strArr) {
    console.log(string);
}
let allArr = [1, false, 'type', 2, true, 'string', 3, 'number', 4, 5];
for (const allArrElement of allArr) {
    console.log(allArrElement);
}*/

/*
let allArr = [1, false, 'type', 2, true, 'string', 3, 'number', 4, 5];
for (let i = 0; i < allArr.length; i++) {
    let allArrElement = allArr [i];
    if (typeof allArrElement === 'boolean') {
        console.log(allArrElement);
    }
}*/

/*
let allArr = [1, false, 'type', 2, true, 'string', 3, 'number', 4, 5];
for (let i = 0; i < allArr.length; i++) {
    const allArrElement = allArr[i];
    if (typeof allArrElement === 'number') {
        console.log(allArrElement);
    }

}*/

/*
let allArr = [1, false, 'type', 2, true, 'string', 3, 'number', 4, 5];
for (let i = 0; i < allArr.length; i++) {
    const allArrElement = allArr[i];
    if (typeof allArrElement === 'string') {
        console.log(allArrElement);
    }
}*/

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

/*let someArr = [];
someArr[0] = true;
someArr[1] = 1;
someArr[2] = 'string';
someArr[3] = 2;
someArr[4] = false;
someArr[5] = 3;
someArr[6] = 'hey';
someArr[7] = 4;
someArr[8] = 'fly';
someArr[9] = 5;
for (let i = 0; i < someArr.length; i++) {
    const someArrElement = someArr[i];
    console.log(someArrElement);
}*/

/*
let someArr = [];
someArr[0] = true;
someArr[1] = 1;
someArr[2] = 'string';
someArr[3] = 2;
someArr[4] = false;
someArr[5] = 3;
someArr[6] = 'hey';
someArr[7] = 4;
someArr[8] = 'fly';
someArr[9] = 5;
for (let i = 0; i < someArr.length; i++) {
    const someArrElement = someArr[i];
    console.log([i]);
}
*/

/*

for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(`<div>${i}</div>`);
}


for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(`<div>${i}</div>`);
}


for (let i = 0; i < 100; i += 2) {
    console.log(i);
    document.write(`<div>${i}</div>`);
}

for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
        document.write(`<div>${i}</div>`);
    }
}

for (let i = 0; i < 100; i++) {
    if (i % 2 === 1) {
        console.log(i);
        document.write(`<div>${i}</div>`);
    }
}
*/
