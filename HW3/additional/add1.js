// a. заповнити його 50 парними числами за допомоги циклу.
/*
const evenNumbers = [];
for (let i = 0; i < 50; i++) {
    evenNumbers[i] = 2 * i;
}
console.log(evenNumbers);
*/


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
/*
let randomDifNumbers = [];
for (let i = 0; i < 20; i++) {
    randomDifNumbers[i] = Math.floor(732 * Math.random() + 3);
}
console.log(randomDifNumbers);
*/


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
/*let newSomeArr = [];
let someArr = [1, 2, 'day', 'night', true, false, 5, 'sun', 8];*/
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

/*За допомогою циклу вивести всю інформацію про користувачів використовуючи шаблон Template 1.1
			* за допомоги стилів, побудувати сітку по 2 об'єкта в лінію */
let usersList = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496'
            }
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets'
        }
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
                lat: '-43.9509',
                lng: '-34.4618'
            }
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains'
        }
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        address: {
            street: 'Douglas Extension',
            suite: 'Suite 847',
            city: 'McKenziehaven',
            zipcode: '59590-4157',
            geo: {
                lat: '-68.6102',
                lng: '-47.0653'
            }
        },
        phone: '1-463-123-4447',
        website: 'ramiro.info',
        company: {
            name: 'Romaguera-Jacobson',
            catchPhrase: 'Face to face bifurcated interface',
            bs: 'e-enable strategic applications'
        }
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        address: {
            street: 'Hoeger Mall',
            suite: 'Apt. 692',
            city: 'South Elvis',
            zipcode: '53919-4257',
            geo: {
                lat: '29.4572',
                lng: '-164.2990'
            }
        },
        phone: '493-170-9623 x156',
        website: 'kale.biz',
        company: {
            name: 'Robel-Corkery',
            catchPhrase: 'Multi-tiered zero tolerance productivity',
            bs: 'transition cutting-edge web services'
        }
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        address: {
            street: 'Skiles Walks',
            suite: 'Suite 351',
            city: 'Roscoeview',
            zipcode: '33263',
            geo: {
                lat: '-31.8129',
                lng: '62.5342'
            }
        },
        phone: '(254)954-1289',
        website: 'demarco.info',
        company: {
            name: 'Keebler LLC',
            catchPhrase: 'User-centric fault-tolerant solution',
            bs: 'revolutionize end-to-end systems'
        }
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        address: {
            street: 'Norberto Crossing',
            suite: 'Apt. 950',
            city: 'South Christy',
            zipcode: '23505-1337',
            geo: {
                lat: '-71.4197',
                lng: '71.7478'
            }
        },
        phone: '1-477-935-8478 x6430',
        website: 'ola.org',
        company: {
            name: 'Considine-Lockman',
            catchPhrase: 'Synchronised bottom-line interface',
            bs: 'e-enable innovative applications'
        }
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        address: {
            street: 'Rex Trail',
            suite: 'Suite 280',
            city: 'Howemouth',
            zipcode: '58804-1099',
            geo: {
                lat: '24.8918',
                lng: '21.8984'
            }
        },
        phone: '210.067.6132',
        website: 'elvis.io',
        company: {
            name: 'Johns Group',
            catchPhrase: 'Configurable multimedia task-force',
            bs: 'generate enterprise e-tailers'
        }
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        address: {
            street: 'Ellsworth Summit',
            suite: 'Suite 729',
            city: 'Aliyaview',
            zipcode: '45169',
            geo: {
                lat: '-14.3990',
                lng: '-120.7677'
            }
        },
        phone: '586.493.6943 x140',
        website: 'jacynthe.com',
        company: {
            name: 'Abernathy Group',
            catchPhrase: 'Implemented secondary concept',
            bs: 'e-enable extensible e-tailers'
        }
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        address: {
            street: 'Dayna Park',
            suite: 'Suite 449',
            city: 'Bartholomebury',
            zipcode: '76495-3109',
            geo: {
                lat: '24.6463',
                lng: '-168.8889'
            }
        },
        phone: '(775)976-6794 x41206',
        website: 'conrad.com',
        company: {
            name: 'Yost and Sons',
            catchPhrase: 'Switchable contextually-based project',
            bs: 'aggregate real-time technologies'
        }
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        address: {
            street: 'Kattie Turnpike',
            suite: 'Suite 198',
            city: 'Lebsackbury',
            zipcode: '31428-2261',
            geo: {
                lat: '-38.2386',
                lng: '57.2232'
            }
        },
        phone: '024-648-3804',
        website: 'ambrose.net',
        company: {
            name: 'Hoeger LLC',
            catchPhrase: 'Centralized empowering task-force',
            bs: 'target end-to-end models'
        }
    }
];
document.write(`<div class="users">`);
for (let i = 0; i < usersList.length; i++) {
    const user = usersList[i];
    document.write(`
        <div class="user">
            <div class="id">
                <div>id:${user.id}</div>
                <div>name:${user.name}</div>
                <div>username:${user.username}</div>
                <div>email:${user.email}</div>
            </div>      
            <div class="address">
                <div>address:</div>
                <div>street:${user.address.street}</div>
                <div>suite:${user.address.suite}</div>
                <div>city:${user.address.city}</div>
                <div>zipcode:${user.address.zipcode}</div>
                <div>geo:</div>
                <div>lat:${user.address.geo.lat}</div>
                <div>lng:${user.address.geo.lng}</div>
            </div>
            <div class="phone">
               <div>phone:${user.phone}</div> 
               <div>website:${user.website}</div> 
               <div>company:</div> 
               <div>${user.company.name}</div> 
               <div>${user.company.catchPhrase}</div> 
               <div>${user.company.bs}</div> 
            </div>
        </div>
    `);
}
document.write(`</div>`);
