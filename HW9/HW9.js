// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
//


/*
let blockElement = document.createElement('div');
blockElement.style.background = 'lightblue';
blockElement.style.color = 'yellow';
blockElement.style.height = '100px';
blockElement.style.width = '200px';
blockElement.style.borderRadius = '20px';
blockElement.style.margin = '10px';
blockElement.style.fontSize = '35px';
blockElement.style.textAlign = 'center';
blockElement.innerText = 'Today is lovely day';
blockElement.classList.add('wrap,collapse,alpha,beta');
document.body.append(blockElement);
let cloneBlockElement = blockElement.cloneNode(true);
document.body.appendChild(cloneBlockElement);
*/


// - Є масив:
// ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
//


/*
let mainArray = ['Main', 'Products', 'About us', 'Contacts'];

for (const string of mainArray) {
    let liElement = document.createElement('li');
    liElement.innerText = string;
    let menu = document.getElementsByTagName('ul');
    menu[0].appendChild(liElement);
}
*/


// - Є масив
/*let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}];*/
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.


/*for (const element of coursesAndDurationArray) {
    let oneElement = document.createElement('div');
    oneElement.innerText = ` title:${element.title} , monthDuration: ${element.monthDuration}`;

    document.body.appendChild(oneElement);

}*/


// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.


/*
for (const item of coursesAndDurationArray) {
    let oneItem = document.createElement('div');
    oneItem.classList.add('item');
    let head = document.createElement('h1');
    head.classList.add('heading');
    head.innerText = item.title;
    let paragraph = document.createElement('p');
    paragraph.classList.add('description');
    paragraph.innerText = item.monthDuration;

    head.appendChild(paragraph);
    oneItem.appendChild(head);
    document.body.appendChild(oneItem);
}*/
