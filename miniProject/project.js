// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули
//

// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)

let usersEl = document.getElementsByClassName('users')[0];

fetch('https://jsonplaceholder.typicode.com/users')
    .then(someResponse => someResponse.json())
    .then(usersArray => {
        for (const user of usersArray) {
            buildUserBlock(user);
        }
    });

function buildUserBlock(user) {
    let userEl = document.createElement('div');
    userEl.classList.add('user');
    let id = document.createElement('h3');
    id.innerText = `Id: ${user.id}`;
    let name = document.createElement('h3');
    name.innerText = `Name: ${user.name}`;
    let userBtn = document.createElement('button');
    userBtn.classList.add('details-button');
    userBtn.innerText = 'Show details';

    userEl.append(id, name, userBtn);
    usersEl.appendChild(userEl);

    userBtn.onclick = function () {
        document.location = `user-details.html?id=${user.id}`;
    };

}




