// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
// кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
// Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста


let usersEl = document.getElementsByClassName('users')[0];
let postsEl = document.getElementsByClassName('posts')[0];
let commentsEl = document.getElementsByClassName('comments')[0];

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
    let userId = document.createElement('div');
    userId.innerText = `id: ${user.id}`;
    let userName = document.createElement('div');
    userName.innerText = `name: ${user.name}`;
    let userUsername = document.createElement('div');
    userUsername.innerText = `username: ${user.username}`;
    let userEmail = document.createElement('div');
    userEmail.innerText = `email: ${user.email}`;

    let userAddress = document.createElement('div');
    userAddress.innerText = `address:`;
    let userStreet = document.createElement('div');
    userStreet.innerText = `street: ${user.address.street}`;
    let userSuite = document.createElement('div');
    userSuite.innerText = `suite: ${user.address.suite}`;
    let userCity = document.createElement('div');
    userCity.innerText = `city: ${user.address.city}`;
    let userZipcode = document.createElement('div');
    userZipcode.innerText = `zipcode: ${user.address.zipcode}`;

    let userGeo = document.createElement('div');
    userGeo.innerText = `geo:`;
    let userGeoLat = document.createElement('div');
    userGeoLat.innerText = `lat: ${user.address.geo.lat}`;
    let userGeoLng = document.createElement('div');
    userGeoLng.innerText = `lat: ${user.address.geo.lng}`;

    let userPhone = document.createElement('div');
    userPhone.innerText = `phone: ${user.phone}`;
    let userWebsite = document.createElement('div');
    userWebsite.innerText = `website: ${user.website}`;

    let userCompany = document.createElement('div');
    userCompany.innerText = `company:`;
    let companyName = document.createElement('div');
    companyName.innerText = `name: ${user.company.name}`;
    let companyCatchPhrase = document.createElement('div');
    companyCatchPhrase.innerText = `catchPhrase: ${user.company.catchPhrase}`;
    let companyBs = document.createElement('div');
    companyBs.innerText = `bs: ${user.company.bs}`;

    let userPostsButton = document.createElement('button');
    userPostsButton.classList.add('post-button');
    userPostsButton.innerText = 'show posts';

    userCompany.append(companyName, companyCatchPhrase, companyBs);
    userGeo.append(userGeoLat, userGeoLng);
    userAddress.append(userStreet, userSuite, userCity, userZipcode, userGeo);
    userEl.append(userId, userName, userUsername, userEmail, userAddress, userGeo, userPhone, userWebsite, userCompany, userPostsButton);
    usersEl.appendChild(userEl);

    userPostsButton.onclick = function (event) {
        fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
            .then(someResponse => someResponse.json())
            .then(userPosts => {
                commentsEl.innerHTML = '';
                for (const post of userPosts) {
                    buildPostBlock(post);
                }
            });
    };
}

function buildPostBlock(post) {
    let postEl = document.createElement('div');
    postEl.classList.add('post');
    let userId = document.createElement('div');
    userId.innerText = `userId: ${post.userId}`;
    let id = document.createElement('div');
    id.innerText = `id: ${post.id}`;
    let title = document.createElement('div');
    title.innerText = `title: ${post.title}`;
    let body = document.createElement('div');
    body.innerText = `body: ${post.body}`;
    let postBtn = document.createElement('button');
    postBtn.classList.add('post-button');

    postBtn.innerText = 'show comments';
    postEl.append(userId, id, title, body, postBtn);

    postsEl.appendChild(postEl);

    postBtn.onclick = function (event) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
            .then(someResponse => someResponse.json())
            .then(userComments => {
                commentsEl.innerHTML = '';
                for (const comment of userComments) {
                    buildCommentBlock(comment);
                }
            });
    };
}

function buildCommentBlock(comment) {
    let commentEl = document.createElement('div');
    commentEl.classList.add('comment');
    let postId = document.createElement('div');
    postId.innerText = `postId: ${comment.postId}`;
    let id = document.createElement('div');
    id.innerText = `id: ${comment.id}`;
    let name = document.createElement('div');
    name.innerText = `name: ${comment.name}`;
    let email = document.createElement('div');
    email.innerText = `email: ${comment.email}`;

    commentEl.append(postId, id, name, email);
    commentsEl.appendChild(commentEl);
}
