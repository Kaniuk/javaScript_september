/*
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

function sortNums(arr, direction) {
     let newArr = [];
    if (direction === 'asc') {
        arr.sort((a,b) => (a-b))
        newArr.push(arr);

    } else if (direction === 'desc') {
        arr.sort((b,a) => (b-a));
        newArr.push(arr)
    }
    console.log(newArr)
}
sortNums([11,21,3],'asc')

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
*/

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

/*
let emailValidation = (email) => {
    let checkExistAndPositionOfSnail = (email) => {
        if (email.indexOf('@') < 1) {
            return false;
        }
        return true;
    }
    let checkExistAndPositionOfPoint = (email) => {
        const indexOfSnail = email.indexOf('@')

        if (indexOfSnail === -1) {
            return false;
        }
        const lastIndexOfPoint = email.lastIndexOf('.')
        return lastIndexOfPoint - indexOfSnail >= 2;
    }

    return (
        checkExistAndPositionOfSnail(email) &&
        checkExistAndPositionOfPoint(email)
    )


}
let validEmail = emailValidation('someemail@gmail.com');
console.log('validEmail', validEmail);


// - є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced'
        ]
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: [
            'html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced'
        ]
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: [
            'html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java'
        ]
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


// відсортувати його в спадаючому порядку за кількістю елементів в полі modules


let sortArray = coursesArray.sort((a, b) => a.modules.length - b.modules.length);
console.log(sortArray);


// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

function count(str, search) {
    let countText = 0;
    for (let i = 0; i < str.length; i++) {
        const element = str[i];

        if (element === search) {
            countText++;
        }

    }
    return countText;
}

document.writeln(count('Астрономия это наука о небесных объектах', 'о'));


// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

let cutString = (str, n) => {
    return str.split(' ')
        .slice(0, n)
        .join(' ');

}

let str = "Сила тяжести приложена к центру масс тела";
document.writeln(cutString(str, 2));
*/

/*
Сумма цифр числа
Дано натуральное число N. Вычислите сумму его цифр.
При решении этой задачи нельзя использовать строки,
массивы ну и циклы
Вам поможет Рекурсія)

пример:
1234 -> 10
879 -> 24
11 -> 2
 */

/*

function getSumOfNumberDigits(number) {
    const strNumber = number.toString();

    if (strNumber.length === 1) {
        return  +strNumber
    }

    return +strNumber[0] + getSumOfNumberDigits(+strNumber.slice(1));
}
*/

function getSumOfNumberDigits(number) {

    
    if (number < 10) {
        return number;
    }
    const numberOfDigits = number.toString().length
debugger
    const div = Math.pow(10, numberOfDigits - 1)
    return Math.floor(number / div) + getSumOfNumberDigits(number - div);
}

console.log(1234, getSumOfNumberDigits(1234));
// console.log(879, getSumOfNumberDigits(879));
// console.log(11, getSumOfNumberDigits(11));