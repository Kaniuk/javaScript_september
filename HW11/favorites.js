let usersDiv = document.createElement('div');
usersDiv.classList.add('users');
document.body.appendChild(usersDiv);
const users = JSON.parse(localStorage.getItem('favorites'));


for (const user of users) {
    let oneUser = document.createElement('div');
    let userInfo = document.createElement('ul');
    for (const userKey in user) {
        let liElement = document.createElement('li');
        liElement.innerText = `${userKey} : ${user[userKey]}`;
        console.log(liElement);
        userInfo.appendChild(liElement);
    } oneUser.append(userInfo);
    usersDiv.appendChild(oneUser);
}

