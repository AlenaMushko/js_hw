// ===>
//  - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на
//  кнопку зникав елемент з id="text".
let div = document.createElement('div');
div.id = 'text';
div.style.width = '300px';
div.style.height = '150px';
div.style.background = 'tomato';
let btn = document.createElement('button');
btn.innerText = 'delete div';
btn.style.marginTop = '16px'
btn.addEventListener('click', () => {
    div.style.display = 'none';
})
document.body.append(div, btn);
document.write(`<hr>`)
// ===>
//  - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту
//  та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let form = document.createElement('form');

let input = document.createElement('input');
input.placeholder = 'enter your age';

let btnAge = document.createElement('button');
btnAge.innerText = 'age verification';
btnAge.style.marginLeft = '16px';

let p = document.createElement('p');
form.addEventListener('click', (e) => {
    e.preventDefault();
    let ageUser = parseInt(input.value);

    p.innerText = '';
    if (ageUser) {
        ageUser < 18 ? p.innerText = 'You are under 18 years old.' : p.innerText = 'You are 18 years old or older.';
    }
    input.value = '';
    form.appendChild(p);
})
form.append(input, btnAge)
document.body.appendChild(form)
document.write(`<hr>`)
// ===>
// Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let formBig = document.createElement('form');

let inputName = document.createElement('input');
inputName.placeholder = 'Enter your name';

let inputSurname = document.createElement('input');
inputSurname.placeholder = 'Enter your surname';

let inputAge = document.createElement('input');
inputAge.placeholder = 'Enter your age';

let btnSubmit = document.createElement('button');
btnSubmit.innerText = 'Submit';

const divObj = document.createElement('div');
btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    const name = inputName.value;
    const surname = inputSurname.value;
    const age = inputAge.value;

    const user = {
        name,
        surname,
        age,
    };
    if (user) {
        divObj.innerText = JSON.stringify(user);
    }

    formBig.reset();
});

formBig.append(inputName, inputSurname, inputAge, btnSubmit, divObj);
document.body.appendChild(formBig);
document.write(`<hr>`)
// ===>
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let block = document.createElement('div');
block.id = 'text';
block.style.width = '100px';
block.style.height = '35px';
block.style.background = 'blue';

let counter = JSON.parse(localStorage.getItem('counterNumber')) || 0;
localStorage.setItem('counterNumber', JSON.stringify(counter))

let number = document.createElement('p')
number.innerText = `${counter}`;
number.style.color = 'white';
number.style.fontSize = '30px';
number.style.textAlign = 'center';

window.onload = function () {
    counter++;
    number.innerText = `${counter}`;
    localStorage.setItem('counterNumber', JSON.stringify(counter))
};

block.append(number)
document.body.append(block)
document.write(`<hr>`)
// ===>
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час
// відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про
// відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію


let sessions = JSON.parse(localStorage.getItem('sessions')) || [];


const sessionList = document.createElement('ul');

for (let i = 0; i < sessions.length; i++) {
    let sessionItem = document.createElement('li');
    sessionItem.style.display = 'flex';
    sessionItem.style.alignItems='center';
    sessionItem.style.gap = '16px';

    let numberOfSession = document.createElement('span');


    let session = document.createElement('p');

    const date = new Date(sessions[i]);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds()

    numberOfSession.innerText = `${i + 1} ) `;
    session.innerText = year + "-" + month + "-" + day + ", " + hours + ":" + min + ":" + sec;

    sessionItem.append(numberOfSession, session);
    sessionList.append(sessionItem);
}

document.body.append(sessionList)
document.write(`<hr>`)
// ===>
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
document.write(`<hr>`)
// ===>
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав
// елемент з id="text".
document.write(`<hr>`)
// ===>
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та
//     перевірити вік чи
//     меньше він ніж 18, та повідомити про це користувача
document.write(`<hr>`)
// ===>
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
document.write(`<hr>`)
// ===>
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається


