// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

/*
let postsEl = document.getElementsByClassName('posts')[0];
postsEl.style.display = 'flex';

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(someResponse => someResponse.json())
    .then(usersPostArray => {

        for (const usersPost of usersPostArray) {
            let post = document.createElement('div');
            post.classList.add('post');
            let userId = document.createElement('div');
            userId.innerText = ` userId : ${usersPost.userId}`;
            let id = document.createElement('div');
            id.innerText = `id : ${usersPost.id}`;
            let title = document.createElement('div');
            title.innerText = `title : ${usersPost.title}`;
            let body = document.createElement('div');
            body.innerText = `body: ${usersPost.body}`;


            post.append(userId, id, title,body);
            postsEl.appendChild(post);

        }
    });
*/

// 2.Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments


let commentsEl = document.getElementsByClassName('comments')[0];

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(someResponse => someResponse.json())
    .then(usersCommentArray => {

        for (const usersCommentElement of usersCommentArray) {
            let comment = document.createElement('div');
            comment.classList.add('comment');
            let postId = document.createElement('div');
            postId.innerText = `postId: ${usersCommentElement.postId}`;
            let id = document.createElement('div');
            id.innerText = `id: ${usersCommentElement.id}`;
            let name = document.createElement('div');
            name.innerText = `name: ${usersCommentElement.name}`;
            let email = document.createElement('div');
            email.innerText = `email: ${usersCommentElement.email}`;


            comment.append(postId, id, name, email);
            commentsEl.appendChild(comment);
        }

    });