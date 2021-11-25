// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let n1 = 'Harry..Potter';
let n2 = 'Ron-------Whisley';
let n3 = 'Hermione__Granger';

let normalizeName = (name) => {
    let nameWithSpaces = name.replaceAll('.', ' ')
        .replaceAll('-', ' ')
        .replaceAll('_', ' ');

    let resultName;
    while (resultName !== nameWithSpaces) {
        resultName = nameWithSpaces;
        nameWithSpaces = nameWithSpaces.replaceAll('  ', ' ')
    }

    return resultName;
}
let normalName = normalizeName(n2);
console.log(normalName);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
function generateArray(limit) {
    const array = [];
    for (let i = 0; i < limit; i++) {
        array[i] = Math.round(Math.random() * 100);
    }
    return array;
}

let generatedArray = generateArray(100);
console.log(generatedArray);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

let sortNewFillArray = generateArray(50).sort((n1, n2) => n1 - n2);
console.log(sortNewFillArray);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
let filterNewFillArray = generateArray(100).filter((item) => item % 2 === 0);
console.log(filterNewFillArray);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let mapNewFillArray = generateArray(10).map((item) => item.toString());
console.log(mapNewFillArray);

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration

let userMonthDuration = coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration);
console.log(userMonthDuration);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filterMonthDuration = coursesAndDurationArray.filter((user) => user.monthDuration > 5);
console.log(filterMonthDuration);

// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

let cutString = (str, n) => {
    let result = [];
    for (let i = 0; i < str.length; i += n) {
        result.push(str.slice(i, i + n));
    }
    return result;
}
const cutStr = cutString('наслаждение', 3);
console.log(cutStr);


