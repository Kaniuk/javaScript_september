// - Дано натуральное число n. Выведите все числа от 1 до n.

/*function recursion2(n) {
    if (n < 1) {
        return
    }
    console.log(n);
    recursion2(n - 1);
}

recursion2(25);*/


// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

/*function logAllNumbers(a, b) {
    console.log(a);
    if (a === b) {
        return
    }

    if (a < b) {
        logAllNumbers(a + 1, b);
    } else {
        logAllNumbers(a - 1, b);
    }
}
logAllNumbers(4,6);*/

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

/*function swapArrElement(array, i) {
    if (i < 0 || i > array.length - 2) {
        return
    }
    const a = array[i];
    array[i] = array[i + 1];
    array[i + 1] = a;
}

let arr = [9, 8, 0, 4]

swapArrElement(arr, 0);
console.log(arr);*/

//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

/*let transferZeroInEnd = (array) => {
    let newArr = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 0) {
            newArr[newArr.length] = array[i];
        }
    }

    const countMissedZero = array.length - newArr.length
    for (let i = 0; i < countMissedZero; i++) {
        newArr[newArr.length] = 0;
    }

    return newArr;
}


console.log(transferZeroInEnd([1, 0, 6, 0, 3,5,0,2,4]));*/

/*    describe() {
        console.log(`------------<${this.title}>------------`);
        console.log(`Description: ${this.description}`);
        console.log(`---------ATTRIBUTES----------`);

        for (const attr of this.attributes) {
            console.log(`"${attr.titleOfAttr}" - ${attr.actionOfAttr}`)
        }
    }

}

class LinkDescription extends TegDescription {
    constructor() {
        super('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.');
        this.attributes = [
            {titleOfAttr: 'href', actionOfAttr: 'Задает адрес документа, на который следует перейти'},
            {titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш'},
            {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'},
        ];
    }
}

const link = new LinkDescription();
link.describe();*/

