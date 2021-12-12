// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
let posts = document.getElementsByClassName('posts')[0];
let commentsEl = document.getElementsByClassName('comments')[0];


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(someResponse => someResponse.json())
    .then(postsArray => {
        for (const post of postsArray) {
            buildPostBlock(post);
        }
    });


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

    posts.appendChild(postEl);

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
