
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.


/*let formsContainer = document.createElement('div');
let firstForm = document.createElement('form');

firstForm.setAttribute('name', 'form1');
let firstFormFirstInput = document.createElement('input');
firstFormFirstInput.setAttribute('name', 'username');
firstFormFirstInput.setAttribute('type', 'text');
firstFormFirstInput.setAttribute('placeholder', 'Enter your name');

let firstFormSecondInput = document.createElement('input');
firstFormSecondInput.setAttribute('surname', 'surname');
firstFormSecondInput.setAttribute('type', 'text');
firstFormSecondInput.setAttribute('placeholder', 'Enter your surname');

firstForm.style.margin = '20px';
firstFormFirstInput.style.marginRight = '20px';


let secondForm = document.createElement('form');
secondForm.setAttribute('name', 'form2');
let secondFormFirstInput = document.createElement('input');
secondFormFirstInput.setAttribute('type', 'number');
secondFormFirstInput.setAttribute('placeholder', 'Please type your age');

let secondFormSecondInput = document.createElement('input');
secondFormSecondInput.setAttribute('type', 'month');
secondFormSecondInput.setAttribute('placeholder', 'Enter month');

secondForm.style.margin = '20px';
secondFormFirstInput.style.marginRight = '20px';

let formsButton = document.createElement('button');
formsButton.innerText = 'gather together';

formsButton.style.marginLeft = '150px';

formsButton.onclick = function () {
    console.log(firstFormFirstInput.value);
    console.log(firstFormSecondInput.value);
    console.log(secondFormFirstInput.value);
    console.log(secondFormSecondInput.value);
};


secondForm.append(secondFormFirstInput, secondFormSecondInput);
firstForm.append(firstFormFirstInput, firstFormSecondInput);
formsContainer.append(firstForm, secondForm, formsButton);

document.body.appendChild(formsContainer);*/

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//    При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
/*

let rowInput = document.createElement('input');
rowInput.setAttribute('type', 'number');
let columnInput = document.createElement('input');
columnInput.setAttribute('type', 'number');
let fillingInput = document.createElement('input');
let createTableButton = document.createElement('button');
createTableButton.innerText = 'Create table';

rowInput.style.margin = '10px';
columnInput.style.marginRight = '10px';
fillingInput.style.marginRight = '10px';

document.body.append(rowInput, columnInput, fillingInput, createTableButton);

function tableCreator(rowCount, colCount, cellData) {
    const tableEl = document.createElement('table');
    const tbodyEl = document.createElement('tbody');
    tableEl.appendChild(tbodyEl);

    for (let i = 0; i < rowCount; i++) {
        let rowElement = document.createElement('tr');

        tbodyEl.appendChild(rowElement);
        for (let j = 0; j < colCount; j++) {
            let columnElement = document.createElement('td');
            rowElement.appendChild(columnElement);

            columnElement.innerText = cellData;
        }
    }

    return tableEl;
}

createTableButton.onclick = function () {
    const rowCount = rowInput.value;
    const colCount = columnInput.value;
    const cellData = fillingInput.value;

    const tableElement = tableCreator(rowCount, colCount, cellData);

    document.body.appendChild(tableElement);
};
*/

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//

/*
let bedWords = ['козел', 'свиня', 'олень'];

let wordsInput = document.createElement('input');
let wordsButton = document.createElement('button');
wordsButton.innerText = 'Check it';
wordsButton.style.background = 'lightblue';
wordsButton.style.margin = '10px';

document.body.append(wordsInput, wordsButton);


function checkBedWords(sentence, bedWords) {
    for (const bedWord of bedWords) {
        if (sentence.includes(bedWord)) {
            alert('You are so rude! Brrrr');
            return;
        }
    }
}

wordsButton.onclick = function () {
    let someText = wordsInput.value;
    checkBedWords(someText, bedWords);
};*/

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку





