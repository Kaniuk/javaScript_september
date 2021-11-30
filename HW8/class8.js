// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
let mainHeader = document.getElementById('main_header');
mainHeader.innerText = 'september - 2021';
mainHeader.style.color = 'red';

// b) робить шириниу елементу ul 400px
let ulList = document.getElementsByTagName('ul')[0];
ulList.style.width = '400px';

// c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkList = document.getElementsByClassName('linkList');
for (const linkListElement of linkList) {
    linkListElement.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2
let listElement2Text = document.getElementsByClassName('listElement2')[0];
console.log(listElement2Text.innerHTML);

// e) отримує всі елементи li та змінює ім колір фону на сірий
let liList = document.getElementsByTagName('li');
console.log(liList);
for (const liListElement of liList) {
    liListElement.style.background = 'gray';
}

// f) отримує всі елементи 'a' та додає їм клас anchor
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let aElements = document.getElementsByTagName('a');
for (const aElement of aElements) {
    aElement.classList.add('anchor');
    if (aElement.innerText === 'link3') {
        aElement.style.fontSize = ' 40px';
    }
    aElement.classList.add(`element_XXX${aElement.innerText}`);

}
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let subHeaderElements = document.getElementsByClassName('sub-header');
console.log(subHeaderElements);
 let colorElements = prompt('what color should the background be?','red');
for (const subHeaderElement of subHeaderElements) {
    subHeaderElement.style.background = colorElements;
    if (subHeaderElement.innerHTML === 'content 2 segment') {
       let color =  prompt('what color should the color be?', 'white');
        subHeaderElement.style.color = color;

    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let contentElement = document.getElementsByClassName('content_1');
for (const element of contentElement) {
    let arbitraryText = prompt('Enter some text','Let it be this text!');
    element.innerText = arbitraryText;
}



// l) отримати елементи p та змінити їм padding на 20px
let pList = document.getElementsByTagName('p');
for (const p of pList) {
    p.style.padding = '20px';
}


// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let textElements = document.getElementsByClassName('text2');
for (const textElement of textElements) {
    textElement.innerText = "sep-2021";
}









