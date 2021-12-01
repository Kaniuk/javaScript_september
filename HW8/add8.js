// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

let newArr = [];

function reCall(startElement) {
    for (const classItem of startElement.classList) {
        newArr.push(classItem);
    }

    for (const child of startElement.children) {
        reCall(child)
    }
}

reCall(document.body);

console.log(newArr)


