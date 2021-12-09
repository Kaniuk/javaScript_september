// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

let usersDiv = document.createElement('div');
usersDiv.classList.add('users');
document.body.appendChild(usersDiv);
const favorites = JSON.parse(localStorage.getItem('favorites'));

function addToFavorites(user) {
    let isUserInFavorites = favorites.findIndex(favorite => favorite.name === user.name) > -1;
    if (!isUserInFavorites) {
        favorites.push(user);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
}

for (const user of users) {
    let oneUser = document.createElement('div');
    let userInfo = document.createElement('ul');
    for (const userKey in user) {
        let liElement = document.createElement('li');
        liElement.innerText = `${userKey} : ${user[userKey]}`;
        console.log(liElement);
        userInfo.appendChild(liElement);
    }
    let favoriteBtn = document.createElement('button');
    favoriteBtn.innerText = 'Add to favorite';
    favoriteBtn.style.padding = '5px';
    favoriteBtn.style.background = 'lightpink';
    favoriteBtn.style.marginLeft = '20px';

    favoriteBtn.onclick = function () {
        addToFavorites(user);
    };

    oneUser.append(userInfo, favoriteBtn);
    usersDiv.appendChild(oneUser);
}

