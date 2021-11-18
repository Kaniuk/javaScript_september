// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function area(a, b) {
    return a * b;
}

let result = area(10, 20);
console.log(result);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function circle(r) {
    return (Math.PI * (r * r));
}

let result1 = circle(10);
console.log(result1);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinder(h, r) {
    return ((2 * Math.PI) * (r * h));
}

let result2 = cylinder(2, 5);
console.log(result2);

// - створити функцію яка приймає масив та виводить кожен його елемент

function showElementsOfArray(args) {
    for (let i = 0; i < args.length; i++) {
        const argument = args[i];
        console.log(argument);
    }
}

showElementsOfArray([1, 2, 3, 4, 5]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function textParagraph(a, b, c, d) {
    document.write(`<p>${a}</p>`);
    document.write(`<p>${b}</p>`);
    document.write(`<p>${c}</p>`);
    document.write(`<p>${d}</p>`);

}

textParagraph('cherry', 'peach', 'apple', 'watermelon');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function list(arg) {
    document.write(`<ul>`);
    document.write(`<li>${arg}</li>`);
    document.write(`<li>${arg}</li>`);
    document.write(`<li>${arg}</li>`);
    document.write(`</ul>`);
}

list('some text');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function listSize(arg, size) {
    document.write(`<div>`);
    for (let i = 0; i < size; i++) {
        document.write(`<div>${i + 1}-${arg}</div>`);
    }
    document.write(`</div>`);
}

listSize('some item', 25);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function someArray() {
    document.write(`<ul>`);
    for (let i = 0; i < arguments.length; i++) {
        document.write(`<li>${arguments[i]}</li>`);

    }
    document.write(`</ul>`);
}

someArray(1, 2, 3, false, 'text');

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function displayUsers(users) {
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