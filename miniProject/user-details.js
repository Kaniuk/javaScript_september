// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.
//


let userElem = document.getElementsByClassName('user')[0];
const urlSearchParams = new URLSearchParams(window.location.search);

const params = Object.fromEntries(urlSearchParams.entries());
const userId = params.id;

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => response.json())
    .then((user) => buildOneUserBlock(user));

function buildOneUserBlock(user) {
    let oneUser = document.createElement('div');
    oneUser.classList.add('one-user');
    let userId = document.createElement('div');
    userId.innerText = `Id: ${user.id}`;
    let userName = document.createElement('div');
    userName.innerText = `Name: ${user.name}`;
    let userUsername = document.createElement('div');
    userUsername.innerText = `Username: ${user.username}`;
    let userEmail = document.createElement('div');
    userEmail.innerText = `Email: ${user.email}`;

    let userAddress = document.createElement('div');
    userAddress.innerText = `Address:`;
    let userStreet = document.createElement('div');
    userStreet.innerText = `Street: ${user.address.street}`;
    let userSuite = document.createElement('div');
    userSuite.innerText = `Suite: ${user.address.suite}`;
    let userCity = document.createElement('div');
    userCity.innerText = `City: ${user.address.city}`;
    let userZipcode = document.createElement('div');
    userZipcode.innerText = `Zipcode: ${user.address.zipcode}`;

    let userGeo = document.createElement('div');
    userGeo.innerText = `Geo:`;
    let userGeoLat = document.createElement('div');
    userGeoLat.innerText = `Lat: ${user.address.geo.lat}`;
    let userGeoLng = document.createElement('div');
    userGeoLng.innerText = `Lng: ${user.address.geo.lng}`;

    let userPhone = document.createElement('div');
    userPhone.innerText = `Phone: ${user.phone}`;
    let userWebsite = document.createElement('div');
    userWebsite.innerText = `Website: ${user.website}`;

    let userCompany = document.createElement('div');
    userCompany.innerText = `Company:`;
    let companyName = document.createElement('div');
    companyName.innerText = `Name: ${user.company.name}`;
    let companyCatchPhrase = document.createElement('div');
    companyCatchPhrase.innerText = `CatchPhrase: ${user.company.catchPhrase}`;
    let companyBs = document.createElement('div');
    companyBs.innerText = `Bs: ${user.company.bs}`;

    let userPostsButton = document.createElement('button');
    userPostsButton.classList.add('user-button');
    userPostsButton.innerText = 'Posts of Current User';

    userCompany.append(companyName, companyCatchPhrase, companyBs);
    userGeo.append(userGeoLat, userGeoLng);
    userAddress.append(userStreet, userSuite, userCity, userZipcode, userGeo);
    oneUser.append(userId, userName, userUsername, userEmail, userAddress, userGeo, userPhone, userWebsite, userCompany, userPostsButton);
    userElem.appendChild(oneUser);

    userPostsButton.onclick = function () {
        fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
            .then(someResponse => someResponse.json())
            .then(userPosts => {
                postsEl.innerHTML = '';
                for (const post of userPosts) {
                    buildPostBlock(post);
                }
            });
    };
}

let postsEl = document.getElementsByClassName('posts')[0];

function buildPostBlock(post) {
    let postEl = document.createElement('div');
    postEl.classList.add('post');
    let title = document.createElement('div');
    title.innerText = `title: ${post.title}`;
    let postBtn = document.createElement('button');
    postBtn.classList.add('post-button');

    postBtn.innerText = 'post details';
    postEl.append(title, postBtn);

    postsEl.appendChild(postEl);

    postBtn.onclick = function () {
        document.location = `post-details.html?post=${post.id}`;
    };
}