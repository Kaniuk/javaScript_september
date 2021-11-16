// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 1. перебрати його циклом while
/*let i = 0;
while (i < array.length) {
    let arrayItem = array [i];
    console.log(arrayItem);

    i++;
}*/

// 2. перебрати його циклом for

/*for (let i = 0; i < array.length; i++) {
    const arrayElement = array[i];
    console.log(arrayElement);
}*/

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
/*let i = 0;
while (i < array.length) {
    let arrayItem = array [i];
    if (i % 2 === 1) {
        console.log(i,arrayItem);
    }
    i++;
}*/

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
/*
for (let i = 0; i < array.length; i++) {
    const arrayElement = array[i];
    if (i % 2 === 1) {
        console.log(i, arrayElement);
    }
}*/

// 5. перебрати циклом while та вивести  числа тільки парні  значення
/*
let i = 0;
while (i < array.length) {
    let arrayItem = array[i];
    if (arrayItem % 2 === 0) {
        console.log(arrayItem);
    }
    i++;
}
*/

// 6. перебрати циклом for та вивести  числа тільки парні  значення
/*
for (let i = 0; i < array.length; i++) {
    const arrayElement = array[i];
    if (arrayElement % 2 === 0) {
        console.log(arrayElement);
    }
}
*/

// 7. замінити кожне число кратне 3 на слово "okten"
/*for (let i = 0; i < array.length; i++) {
    let arrayElement = array[i];
    if (arrayElement % 3 === 0) {
        arrayElement = 'okten';

    }
    console.log(arrayElement);
}*/


/*
for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0) {
        array[i] = 'okten';
    }
}
console.log(array);*/

// 8. вивести масив в зворотньому порядку.
/*for (let i =array.length-1 ; i >= 0; i--) {
    const arrayElement = array[i];
    console.log(arrayElement);

}*/

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

/*
let i = array.length - 1;
while (i >= 0) {
    let arrayItem = array [i];
    console.log(arrayItem);

    i--;
}*/


/*
for (let i = array.length - 1; i >= 0; i--) {
    const arrayElement = array[i];
    console.log(arrayElement);
}
*/


/*
let i = array.length-1;
while (i >=0 ) {
    let arrayItem = array [i];
    if (i % 2 === 1) {
        console.log(i,arrayItem);
    }
    i--;
}*/


/*
for (let i = array.length - 1; i >= 0; i--) {
    const arrayElement = array[i];
    if (i % 2 === 1) {
        console.log(i, arrayElement);
    }
}*/

/*
let i = array.length - 1;
while (i > 0) {
    let arrayItem = array[i];
    if (arrayItem % 2 === 0) {
        console.log(arrayItem);
    }
    i--;
}*/


/*
for (let i =  array.length; i >0; i--) {
    const arrayElement = array[i];
    if (arrayElement % 2 === 0) {
        console.log(arrayElement);
    }
}*/


/*
for (let i = array.length-1; i >= 0; i--) {
    if (array[i] % 3 === 0) {
        array[i] = 'okten';
    }
}
console.log(array);*/
