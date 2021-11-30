// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
let contentElement = document.getElementById('content');
console.log(contentElement);

// -- отримує текст з блоку з id "rules"
let rulesElement = document.getElementById('rules');
console.log(rulesElement);

// -- замініть текст параграфа з id 'content' на будь-який інший
contentElement.innerText = 'замініть текст параграфа з id \'content\' на будь-який інший';

// -- замініть текст параграфа з id 'rules' на будь-який інший
rulesElement.innerText = 'замініть текст параграфа з id \'rules\' на будь-який інший';

// -- змініть кожному елементу колір фону на червоний
contentElement.style.background = 'red';
rulesElement.style.background = 'red';

// -- змініть кожному елементу колір тексту на синій

contentElement.style.color = 'blue';
rulesElement.style.color = 'blue';

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

let rulesElements = rulesElement.classList;
console.log('rulesElements',rulesElement)

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let fcRules = document.getElementsByClassName('fc_rules');
console.log(fcRules)
for (let i = 0; i < fcRules.length; i++) {
    const fcRule = fcRules[i];
    fcRule.style.color = 'red';

}
console.log(fcRules);













