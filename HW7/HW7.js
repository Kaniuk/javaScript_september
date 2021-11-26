
/*
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;

}


let users = [
    new User(1, 'Oleg', 'Petrov', 'petrov@gmai.com', '+380958746685'),
    new User(2, 'Vasyl', 'Antonov', 'antonov@ukr.net', '+380958742998'),
    new User(3, 'Vasyl', 'Antonov', 'antonov@ukr.com', '+380958716998'),
    new User(4, 'Vasyl', 'Antonov', 'antonov@ukr.net', '+380954556998'),
    new User(5, 'Vasyl', 'Antonov', 'antonov@ukr.net', '+380912316998'),
    new User(6, 'Vasyl', 'Antonov', 'antonov@ukr.com', '+380258746998'),
    new User(7, 'Vasyl', 'Antonov', 'antonov@ukr.net', '+380951236998'),
    new User(8, 'Vasyl', 'Antonov', 'antonov@ukr.net', '+380958746134'),
    new User(9, 'Vasyl', 'Antonov', 'antonov@ukr.net', '+380958746154'),
    new User(10, 'Vasyl', 'Antonov', 'antonov@ukr.net', '+380958746158'),
];
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filteredUsersById = users.filter((item) => item.id % 2 === 0);
console.log(filteredUsersById);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortUser = users.sort((a, b) => a.id - b.id);
console.log(sortUser);
*/

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;

    }

}


let clients = [
    new Client(1, 'Oleg', 'Petrov', 'petrov@gmai.com', '+380958746685', 45),
    new Client(2, 'Oleg', 'Petrov', 'petrov@gmai.com', '+380958746685', 4),
    new Client(3, 'Oleg', 'Petrov', 'petrov@gmai.com', '+380958746685', 5),
    new Client(4, 'Oleg', 'Petrov', 'petrov@gmai.com', '+380958746685', 75),
    new Client(5, 'Oleg', 'Petrov', 'petrov@gmai.com', '+380958746685', 15),
    new Client(6, 'Oleg', 'Petrov', 'petrov@gmai.com', '+380958746685', 65),
    new Client(7, 'Oleg', 'Petrov', 'petrov@gmai.com', '+380958746685', 8),
    new Client(8, 'Oleg', 'Petrov', 'petrov@gmai.com', '+380958746685', 102),
    new Client(9, 'Oleg', 'Petrov', 'petrov@gmai.com', '+380958746685', 1),
    new Client(10, 'Oleg', 'Petrov', 'petrov@gmai.com', '+380958746685', 7)
]
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortClients = clients.sort((a, b) => a.order - b.order);
console.log(sortClients);