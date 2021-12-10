// -створити форму з інпутами для name та age.
//При відправці форми записати об'єкт в localstorage

let myForm = document.createElement('form');

let firstInput = document.createElement('input');
firstInput.setAttribute('name', 'username');
firstInput.setAttribute('type', 'text');
firstInput.setAttribute('placeholder', 'Enter your name');

let secondInput = document.createElement('input');
secondInput.setAttribute('name', 'userAge');
secondInput.setAttribute('type', 'number');
secondInput.setAttribute('placeholder', 'Enter your age');

let formButton = document.createElement('button');
formButton.innerText = 'Enter information';

function save(userName, userAge) {
    let user = {
        name: userName,
        age: userAge
    };
    localStorage.setItem('key', JSON.stringify(user));
}

formButton.onclick = function () {

    save(firstInput.value, secondInput.value);
};

myForm.append(firstInput, secondInput, formButton);
document.body.appendChild(myForm);

// -створити форму з інпутами для model,type та volume автівки.
// при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let carForm = document.createElement('form');
carForm.style.marginTop = '50px';

let modelInput = document.createElement('input');
modelInput.setAttribute('name', 'madel');
modelInput.setAttribute('type', 'text');
modelInput.setAttribute('placeholder', 'Type model');
modelInput.style.marginRight = '20px';

typeInput = document.createElement('input');
typeInput.setAttribute('name', 'type');
typeInput.setAttribute('type', 'text');
typeInput.setAttribute('placeholder', 'Enter type');
typeInput.style.marginRight = '20px';

volumeInput = document.createElement('input');
volumeInput.setAttribute('name', 'volume');
volumeInput.setAttribute('type', 'text');
volumeInput.setAttribute('placeholder', 'Type volume');
volumeInput.style.marginRight = '20px';

let carBtn = document.createElement('button');
carBtn.innerText = 'Enter';

function saveCarInfo(carModel, carType, carVolume) {
    let car = {
        model: carModel,
        type: carType,
        volume: carVolume
    };

    let cars = JSON.parse(localStorage.getItem('cars'));
    if (!cars) {
        cars = [];
        cars.push(car);
    } else {
        cars.push(car);
    }
    localStorage.setItem('cars', JSON.stringify(cars));

}

carBtn.onclick = function () {
    saveCarInfo(modelInput.value, typeInput.value, volumeInput.value);
};

carForm.append(modelInput, typeInput, volumeInput, carBtn);
document.body.appendChild(carForm);
