// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
/*
function showNumber(a, b, c) {
    if (a < b && a < c) {
        console.log(a);
    } else if (b < a && b < c) {
        console.log(b);
    } else if (c < a && c < b) {
        console.log(c);
    } else {
        console.log('something goes wrong');
    }
}

showNumber(5, 4, 1);

function showMinNumber(a, b, c) {
    let min = a;
    if (b < min) {
        min = b;
    }
    if (c < min) {
        min = c
    }
    console.log(min);
}
*/

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

/*function showMaxNumber(a, b, c) {
    let max = a;
    if (b > max) {
        max = b;
    } else if (c > max) {
        max = c;
    }
    console.log(max);
}

showMaxNumber(15, 2, 45);*/


// - створити функцію яка повертає найбільше число з масиву
/*
function maxNumberFromArray(array) {
    let max = array[0]
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element > max) {
            max = element;
            console.log(max);
        }
        return max;
    }

}

maxNumberFromArray([25, 12, 36, 45]);*/

// - створити функцію яка повертає найменьше число з масиву

/*function minNumberOfArray(array) {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element < min) {
            min = element;
            console.log(min)

        }
        return min;
    }

}

minNumberOfArray([12, 2, 5, 8, 89, 6]);*/

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

/*
function sumOfArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        sum = element + sum;
    }
    console.log(sum);
    return sum;
}
sumOfArray([12,25,12])
*/

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

/*
function arithmeticArray(array) {
    let sum = 0;
    let arithmetic = [0];
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        arithmetic = sum / array.length

    }
    console.log(arithmetic);
    return arithmetic

}

arithmeticArray([1, 8, 3])*/

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
/*
function minNumberReturnMaxLog(numbers) {
    let min = numbers[0];
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (number < min) {
            min = number;
        }
        if (number > max) {
            max = number;
        }
    }
    console.log(min);
    return max;
}

minNumberReturnMaxLog([12, 2, 15, 22, 1, 255]);*/

// - створити функцію яка заповнює масив рандомними числами

/*function fillArray(array) {
    for (let i = 0; i < 100; i++) {
        array[i] = Math.round(Math.random() * 100);
    }
    console.log(array);
    return array;
}

fillArray([]);*/

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

/*
function fillArray(array,limit) {
    for (let i = 0; i < 100; i++) {
        array[i] = Math.round(Math.random() * limit);
    }
    // console.log(array);
    return array;
}

fillArray([],50);*/

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].


/*
function fillArray(array) {
    let newArr = [];
    for (let i = array.length - 1, j = 0; i >= 0; i--, j++) {
        newArr[j] = array[i];
    }
    // console.log(newArr);
    return newArr;
}

fillArray([1, 2, 3, 4]);
*/
