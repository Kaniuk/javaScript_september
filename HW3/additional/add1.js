// a. заповнити його 50 парними числами за допомоги циклу.
const evenNumbers = [];
for (let i = 0; i < 50; i++) {
    evenNumbers[i] = 2 * i;
}
console.log(evenNumbers);


//     b. заповнити його 50 непарними числами за допомоги циклу.
/*const oddNumbers = [];
for (let i = 0; i < 50; i++) {
    oddNumbers[i] = (i * 2) + 1;
}
console.log(oddNumbers);


//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
let randomNumbers = [];
for (let i = 0; i < 20; i++) {
    randomNumbers[i] = Math.floor(100 * Math.random() + 1);
}
console.log(randomNumbers);*/


// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
let randomDifNumbers = [];
for (let i = 0; i < 20; i++) {
    randomDifNumbers[i] = Math.floor(732 * Math.random() + 3);
}
console.log(randomDifNumbers);


// 2. Вивести за допомогою console.log кожен третій елемен
/*for (let i = 0; i < randomDifNumbers.length; i = i + 3) {
    const randomDifNumber = randomDifNumbers[i];
    console.log(randomDifNumber);
}*/


// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
/*for (let i = 0; i < randomDifNumbers.length; i = i + 3) {
    const randomDifNumber = randomDifNumbers[i];
    if (randomDifNumber % 2 === 0) {
        console.log(randomDifNumber);
    }
}*/


// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
/*
let newArr = [];
for (let i = 0,j = 0; i < randomDifNumbers.length; i = i + 3) {
    const randomDifNumber = randomDifNumbers[i];
    if (randomDifNumber % 2 === 0) {
        // newArr[j++] = randomDifNumber;
        newArr[newArr.length] = randomDifNumber;
    }
}
console.log(newArr);*/

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
/*
for (let i = 0; i < randomDifNumbers.length - 1; i++) {
    const rightNeighbor = randomDifNumbers[i + 1];
    if (rightNeighbor % 2 === 0) {
        console.log(randomDifNumbers[i]);
    }
}*/

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// let purchaseArr = [100, 250, 50, 168, 120, 345, 188];
// let sum = 0;
// for (let i = 0; i < purchaseArr.length; i++) {
//     sum += purchaseArr[i];
// }
// console.log(sum / purchaseArr.length);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
/*
let newArray = [];
let randomArray = [];
for (let i = 0; i < 10; i++) {
    randomArray[i] = Math.floor(100 * Math.random() +1);
    newArray[i]=randomArray[i]*5;
}
console.log(newArray);
console.log(randomArray);*/

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let newSomeArr = [];
let someArr = [1, 2, 'day', 'night', true, false, 5, 'sun', 8];
/*
for (let i = 0; i < someArr.length; i++) {
    if (typeof someArr[i] === 'number') {
        newSomeArr[newSomeArr.length] = someArr[i];
    }
}
console.log(newSomeArr);*/


/*for (let someArrElement of someArr) {
    if (typeof someArrElement === 'number'){
        newSomeArr[newSomeArr.length] = someArrElement;
    }
}
console.log(newSomeArr);*/


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
/*
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

let usersWithCities = [];

for (const userWithId of usersWithId) {
    for (const cityWidthId of citiesWithId) {
        if (userWithId.id === cityWidthId.user_id) {
            const userWithCity = userWithId;
            userWithCity.address = cityWidthId;
            usersWithCities[usersWithCities.length] = userWithCity;
        }
    }
}
console.log(usersWithCities);
*/


//  - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

/*let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const number of numbers) {
    if (number % 2 === 0) {
        console.log(number);
    }
}*/


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
/*let copyNumbers = [];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbers.length; i++) {
    copyNumbers[i] = numbers[i];

}
console.log(copyNumbers);*/

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
/*
let word = '';
let lettersArr = ['a', 'b', 'c'];
for (const letter of lettersArr) {
    word = `${word}${letter}`;
}

console.log(word);
*/


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
/*let word = '';
let lettersArr = ['a', 'b', 'c'];

let i = 0;
while (i < lettersArr.length) {
    word = `${word}${lettersArr[i]}`
    i++
}
console.log(word);*/


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
/*let word = '';
let lettersArr = ['a', 'b', 'c'];

for (let i = 0; i < lettersArr.length; i++) {
    const letter = lettersArr[i];
    word += letter;
}
console.log(word);*/



