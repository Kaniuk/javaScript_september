// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

/*const showNumber = (a, b, c) => {
    let min = a;
    if (b < min) {
        min = b;
    }
    if (c < min) {
        min = c;
    } else console.log('something goes wrong');

    console.log(min);
}
showNumber(5, 2, 1);*/

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

/*let showMaxNumber = (a, b, c) => {
    let max = a;
    if (b > max) {
        max = b;
    } else if (c > max) {
        max = c;
    } else console.log('something goes wrong');

    console.log(max);
}
showMaxNumber(2, 5, 1);*/

// - створити функцію яка повертає найбільше число з масиву

/*
const returnMaxArrNumber = (array) => {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element > max) {
            max = element
        }
         return max
    }
}
returnMaxArrNumber([25, 12, 36, 45]);
*/

// - створити функцію яка повертає найменьше число з масиву
/*
let returnMinArrNumber = (array) => {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element < min) {
            min = element
        }
        return min;
    }
}
returnMinArrNumber([25, 12, 36, 45]);
*/

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
/*
const sumArray = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = array[i] + sum;
    }
    return sum;

}
sumArray([1, 2, 3]);*/

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
/*
const arithmeticSumArray = (array) =>{
    let sum = 0;
    let arithmetic = [0];
    for (let i = 0; i < array.length; i++) {
        sum = array[i] + sum;
        arithmetic = sum / array.length;
    }
    return arithmetic;
}
arithmeticSumArray([1, 2, 3]);*/

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

/*const minNumberReturnMaxLog = (numbers) => {
    let min = numbers[0];
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
        if (numbers[i] > max) {
            max = numbers[i];
        }
        console.log(max);
        return min;
    }
}
minNumberReturnMaxLog([1, 25, 3, 58, 55, 42, 2, 6, 85]);*/

// - створити функцію яка заповнює масив рандомними числами
/*
const randomNumbers = (array) => {
    for (let i = 0; i < 100; i++) {
        array[i] = Math.round(Math.random() * 100);
    }
    console.log(array);
}

randomNumbers([]);*/

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
/*
const randomNumbers = (array,limit) => {
    for (let i = 0; i < limit; i++) {
        array[i] = Math.round(Math.random() * 100);
    }
    console.log(array);
}

randomNumbers([],10);*/

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

/*
const reversArray = (array) => {
    let newArr = [];
    for (let i = array.length - 1,j=0; i >= 0; i--,j++) {
        newArr [j] = array [i];
    }
    console.log(newArr);
}
reversArray([1, 2, 3]);*/
