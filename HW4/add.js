// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
/*
function selectionOfArguments() {
    if (arguments.length === 1) {
        console.log(arguments[0]);
    } else if (arguments.length === 2) {
        console.log(arguments[0] + arguments[1]);
    }else console.log('this function is for two (one) argument')
}

selectionOfArguments();*/

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
/*
function addNumbers(arr1, arr2) {
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        newArr[i] = arr1[i] + arr2[i];
    }
    console.log(newArr);
}

addNumbers([1, 2, 3], [1, 1, 1]);*/

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів

/*
function getArrKeys(array) {
    let keys = [];
    for (const element of array) {
        for (const key in element) {
            keys[keys.length] = key;
        }
    }
    return keys
}

const keys = getArrKeys([{name: 'Dima', age: 13}, {model: 'Camry'}]);
console.log(keys);*/

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів

/*
function getArrValues(array) {
    let values = [];
    for (const element of array) {
        for (const key in element) {
            values.push(element[key])
        }
    }
    return values;
}

const values = getArrValues([{name: 'Dima', age: 13}, {model: 'Camry'}]);
console.log(values);*/
