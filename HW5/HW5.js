// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let area = (a, b) => a + b;

console.log(area(10, 20));


// - створити функцію яка обчислює та повертає площу кола з радіусом r

let circle = (r) => Math.PI * (r * r);

console.log(circle(10));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let cylinder = (r, h) => ((2 * Math.PI) * (r * h));

console.log(cylinder(2, 5));


// - створити функцію яка приймає масив та виводить кожен його елемент

let showElementsOfArray = (args) => {
    for (const arg of args) {
        console.log(arg);
    }
}
showElementsOfArray([1, 2, 3, 4, 5]);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let createParagraph = (text) => document.write(`<p>${text}</p>`);

createParagraph('text');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

const createList = (liText) => document.write(`
    <ul>
        <li>${liText}</li>
        <li>${liText}</li>
        <li>${liText}</li>
    </ul>
`);

createList('liText');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

const createListSize = (text,size) => {
    document.write(`<ul>`);
    for (let i = 0; i < size; i++) {
        document.write(`<li>${i + 1}-${text}</li>`);
    }
    document.write(`<ul>`);
}
createListSize('one', 10);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let createPrimitiveArray = (primitiveArray) => {
    document.write(`<ul>`);
    for (let i = 0; i < primitiveArray.length; i++) {
        document.write(`<li>${primitiveArray[i]}</li>`);
    }
    document.write(`</ul>`);
}
createPrimitiveArray([1, 2, 3, false, 'text']);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

 let displayUsers = (users) => {
     document.write(`<div class="users">`);
     for (const user of users) {
         document.write(`
            <div class="user">
                id: ${user.id}
                name: ${user.name}
                age: ${user.age}
            </div>
        `);
     }
     document.write(`</div>`)
 }
let users = [
    {id: 1, name: 'Olya', age: 23},
    {id: 2, name: 'Oleg', age: 40},
    {id: 3, name: 'Vasyl', age: 33},
    {id: 4, name: 'Nastya', age: 35},
    {id: 5, name: 'Ihor', age: 36},
]
displayUsers(users);
