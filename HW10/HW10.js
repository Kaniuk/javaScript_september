// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

let textElement = document.getElementById('text');
let buttonElement = document.getElementsByTagName('button')[0];
textElement.style.margin = '20px';

buttonElement.onclick = function () {
    textElement.style.display = 'none';
};

//- Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let buttonElement1 = document.getElementsByTagName('button')[0];
buttonElement1.onclick = function () {
    // buttonElement.style.display = 'none';
    // e.target.style.display = 'none';
    this.style.display = 'none';
};

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let submitButton = document.getElementsByClassName('submit-button')[0];

submitButton.onclick = function () {
    let someAge = document.getElementsByClassName('age')[0].value;
    if (someAge === '') {
        alert('Please enter your age');
        return;
    }
    if (someAge < 18) {
        alert('Oh my gosh you are so young!');
    } else alert('Hello!');

};

// - Создайте меню, которое раскрывается/сворачивается при клике

let menuHeader = document.querySelector('.menu-header');
let menuList = document.querySelector('.menu-item');

menuHeader.onclick = function () {
    menuList.classList.toggle('hidden');
    /* if (menuList.style.display === "none") {
         menuList.style.display = "block";
     } else {
         menuList.style.display = "none";
     }*/
};

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let arr = [
    {title: 'first', body: 'lorem ipsum dolo sit ameti'},
    {title: 'second', body: 'lorem ipsum dolo sit ameti'},
    {title: 'third', body: 'lorem ipsum dolo sit ameti'},
    {title: 'fourth', body: 'lorem ipsum dolo sit ameti'},
    {title: 'fifth', body: 'lorem ipsum dolo sit ameti'},
    {title: 'sixth', body: 'lorem ipsum dolo sit ameti'},
];
let someComments = document.getElementsByClassName('comments')[0];


for (const comment of arr) {
    let oneComment = document.createElement('div');
    oneComment.classList.add('comment');
    let commentTitle = document.createElement('h3');
    commentTitle.innerText = comment.title;
    let commentBody = document.createElement('p');
    commentBody.innerText = comment.body;
    let commentButton = document.createElement('button');
    commentButton.innerText = 'hide';

    commentButton.onclick = function () {
        commentBody.style.display = 'none';
    };

    oneComment.appendChild(commentTitle);
    oneComment.appendChild(commentBody);
    oneComment.appendChild(commentButton);
    someComments.appendChild(oneComment);
}



