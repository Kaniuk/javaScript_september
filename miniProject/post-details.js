// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//

let postElement = document.getElementsByClassName('posts')[0];
const urlSearchParams = new URLSearchParams(window.location.search);

const params = Object.fromEntries(urlSearchParams.entries());
const postId = params.post;

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(someResponse => someResponse.json())
    .then(post => buildOnePostBlock(post));

function buildOnePostBlock(post) {
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

    postElement.appendChild(postEl);

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

let commentsEl = document.getElementsByClassName('comments')[0];

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


