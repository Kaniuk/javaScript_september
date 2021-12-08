
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//


// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
//

/*
let modal = document.getElementById("myModal");
let closeModal = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
closeModal.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};



function cleanModalContent() {
    let tagInfo = document.getElementById('tag-info');
    if (tagInfo) {
        tagInfo.remove();
    }
}


document.body.onclick = function (e) {
    cleanModalContent();
    const target = e.target;
    console.group();
    console.log('tag:', target.tagName);
    console.log('width:', target.offsetWidth);
    console.log('height:', target.offsetHeight);

    const attributes = e.target.attributes;
    let attributesStr = '';
    for (const attribute of attributes) {
        console.log(attribute);
        attributesStr += `
        ${attribute.name}: ${attribute.nodeValue}`;
    }

    console.groupEnd();


    let content = document.getElementsByClassName('modal-content')[0];
    let tagInfo = document.createElement('div');
    tagInfo.setAttribute('id', 'tag-info');
    tagInfo.innerText = `tag: ${target.tagName}
    width: ${target.offsetWidth}
    height: ${target.offsetHeight}
    ${attributesStr}
    `;

    content.append(tagInfo);
    modal.style.display = "block";


};*/


// -- взять массив пользователей
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

/*let filters = {
    activeStatus: false,
    olderThan29: true,
    liveInKyiv: false,
};

function filterUsers(users) {
    let filteredUsers = users
        .filter(user => {
            if (filters.activeStatus) {
                return user.status;
            }
            return true;
        }).filter(user => {
            if (filters.olderThan29) {
                return user.age >= 29;
            }
            return true;
        }).filter(user => {
            if (filters.liveInKyiv) {
                return user.address.city === 'Kyiv';
            }
            return true;
        });
    return filteredUsers;
}


function showUser(user, parentElement) {
    let userElement = document.createElement('div');
    let userId = document.createElement('div');
    userId.innerText = `id - ${user.id} `;
    let userName = document.createElement('h3');
    userName.innerText = `name - ${user.name} `;
    let userAge = document.createElement('p');
    userAge.innerText = `age - ${user.age} `;
    let userStatus = document.createElement('p');
    userStatus.innerHTML = `status - ${user.status} `;
    let userAddress = document.createElement('p');
    userAddress.innerHTML = 'Address';
    let addressCity = document.createElement('p');
    addressCity.innerText = `city - ${user.address.city} `;
    let addressStreet = document.createElement('p');
    addressStreet.innerText = `street - ${user.address.street} `;
    let addressNumber = document.createElement('p');
    addressNumber.innerText = `number - ${user.address.number} `;




    userElement.append(userId, userName, userAge, userStatus,userAddress,addressCity,addressStreet,addressNumber);
    parentElement.append(userElement);
}


let firstCheck = document.createElement('input');
firstCheck.setAttribute('type', 'checkbox');

let secondCheck = document.createElement('input');
secondCheck.setAttribute('type', 'checkbox');

let thirdCheck = document.createElement('input');
thirdCheck.setAttribute('type', 'checkbox');

firstCheck.onchange = function (e) {
    filters.activeStatus = e.target.checked;

    usersElement.innerHTML = '';
    showFilteredUser();
};
secondCheck.onchange = function (e) {
    filters.olderThan29 = e.target.checked;

    usersElement.innerHTML = '';
    showFilteredUser();
};
thirdCheck.onchange = function (e) {
    filters.liveInKyiv = e.target.checked;

    usersElement.innerHTML = '';
    showFilteredUser();
};


document.body.append(firstCheck, secondCheck, thirdCheck);

let usersElement = document.createElement('div');
usersElement.classList.add('users');

function showFilteredUser() {
    for (const user of filterUsers(usersWithAddress)) {
        showUser(user, usersElement);
    }
}

document.body.appendChild(usersElement);

showFilteredUser();*/

//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

let btn = document.getElementById('select-text');
btn.onclick = function () {

    let select = document.getSelection().toString();
    let wrappedSelectedText =`<span style="font-style: italic">${select}</span>`;
debugger
    let editorElement = document.getElementsByClassName('editor')[0];
    editorElement.innerHTML = editorElement.innerHTML.replace(select, wrappedSelectedText);

}

