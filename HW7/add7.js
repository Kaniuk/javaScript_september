// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//         }
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }


class Customer {

    constructor(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyName, catchPhrase, bs) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = {
            street: street,
            suite: suite,
            city: city,
            zipcode: zipcode,
            geo: {
                lat: lat, lng: lng
            }
        };

        this.phone = phone;
        this.website = website;
        this.company = {
            name: companyName,
            catchPhrase: catchPhrase,
            bs: bs,
        };
    }

}

console.log(new Customer(1, 'Ivan', 'Ivanov', 'ivanov@zdes.net', 'Vesnyana', '123', 'Ivanovo', '123', 123, 123, '0565648897', 'ivanov.com', 'Ivanova', 'WOW', '123'))


// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

function TegDescription(title, description, attributeName1, attributeName2, attributeName3, attributeDescription1, attributeDescription2, attributeDescription3) {
    this.title = title;
    this.description = description;
    this.attributes = [
        {titleOfAttr: attributeName1, actionOfAttr: attributeDescription1},
        {titleOfAttr: attributeName2, actionOfAttr: attributeDescription2},
        {titleOfAttr: attributeName3, actionOfAttr: attributeDescription3},
    ];

}

let Descriptions = [
    new TegDescription('<a>', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.', 'accesskey', 'download', 'href', 'Задает адрес документа, на который следует перейти', 'Активация ссылки с помощью комбинации клавиш', 'Предлагает скачать указанный по ссылке файл.'),
    new TegDescription('<div>', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.', 'align', 'title', 'onclick', 'Выравнивание содержимого контейнера <div> по краю.', 'Добавляет поясняющий текст к контейнеру <div> в виде всплывающей подсказки, которая отображается, когда курсор мыши задерживается на содержимом.', 'Щелчок левой кнопкой мыши на элементе.'),
    new TegDescription('<h1>', 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше. Теги <h1>,...,<h6> относятся к блочным элементам, они всегда начинаются с новой строки, а после них другие элементы отображаются на следующей строке. Кроме того, перед заголовком и после него добавляется пустое пространство.', 'align', 'left', 'center', 'Выравнивание заголовка текста по краю.', 'Выравнивание заголовка по левому краю.', 'Выравнивание по центру.'),
    new TegDescription('<span>', 'Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль. Например, внутри абзаца (тега <p>) можно изменить цвет и размер первой буквы, если добавить начальный и конечный тег <span> и определить для него стиль текста. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.', 'accesskey', 'class', 'contenteditable', 'Задает адрес документа, на который следует перейти', 'Задает стилевой класс, который позволяет связать определенный тег со стилевым оформлением. В значении допускается указывать сразу несколько классов, разделяя их между собой пробелом.', 'Сообщает, что элемент доступен для редактирования пользователем — можно удалять текст и вводить новый. Также работают стандартные команды вроде отмены, вставки текста из буфера и др.'),
    new TegDescription('<input>', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. ', 'autocomplete', 'autofocus', 'border', 'Этот атрибут помогает заполнять поля форм текстом, который был введён в них ранее. ', 'Автоматически устанавливает фокус в поле формы. В таком поле можно сразу набирать текст без явного щелчка по нему курсором мыши.', 'Браузеры обрабатывают изображения, добавленные через тег <input>, подобно рисункам, созданным с помощью тега <img>. В том числе вокруг изображения можно добавить рамку, цвет которой совпадает с цветом текста.'),
    new TegDescription('<form>', 'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером.','accept-charset','action','autocomplete','Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные формы.','Указывает обработчик, к которому обращаются данные формы при их отправке на сервер.','Управляет автозаполнением полей форм'),
    new TegDescription('<option>', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.', 'disabled', 'label', 'selected', 'Блокирует элемент списка для его выбора.', 'Атрибут предназначен для указания метки пункта списка, сокращённой по сравнению с текстом внутри <option>.', 'Делает текущий пункт списка выделенным'),
    new TegDescription('<select>', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором.', 'accesskey', 'autofocus', 'disabled', 'Задает адрес документа, на который следует перейти', 'Атрибут autofocus устанавливает, что список получает фокус после загрузки страницы, при этом список становится доступным для выбора пунктов, например, с помощью клавиатуры.', 'Блокирует доступ и изменение элементов списка. Блокированный список не может получить фокус через курсор или клавиатуру, быть изменен, значение такого списка не передается на сервер.'),

]
console.log(Descriptions);







