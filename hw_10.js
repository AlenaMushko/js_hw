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
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let ageUser = parseInt(input.value);

    p.innerText = '';
    if (ageUser) {
        ageUser < 18 ? p.innerText = 'You are under 18 years old.' : p.innerText = 'You are 18 years old or older.';
    }
    e.currentTarget.reset();
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
formBig.addEventListener('submit', (e) => {
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

    e.currentTarget.reset();
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
    sessionItem.style.alignItems = 'center';
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
// зробити масив на 100 об'єктів та дві кнопки prev next
let arrBox = document.createElement('div');

let btnPrev = document.createElement('button');
btnPrev.innerText = 'Prev 10 items';
btnPrev.style.marginRight = '20px';

let btnNext = document.createElement('button');
btnNext.innerText = 'Next 10 items';
let arr = [];
let arrList = document.createElement('ul');
//створюємо масив із 100 елементів
for (let i = 0; i < 100; i++) {
    arr.push(`це обєкт № ${i + 1}`)
}
;
// розбиваємо масив із 100 елементів на масив із обєктами по 10 елементів
let firstId = 0;
let lastId = 10;

//     При натисканні next виводяться настпні 10 об'єктів
let errorText = document.createElement('p');
errorText.style.color = 'red';
btnNext.addEventListener('click', () => {
    errorText.innerText = '';
    if (lastId < arr.length) {
        btnPrev.disabled = false;
        firstId += 10;
        lastId += 10;
        showItems();
        return;
    } else {
        btnNext.disabled = true;
        errorText.innerText = 'End of Items';
    }
});
// При натисканні prev виводяться попередні 10 об'єктів
btnPrev.addEventListener('click', () => {
    errorText.innerText = '';
    if (firstId > 0) {
        btnNext.disabled = false;
        firstId -= 10;
        lastId -= 10;
        showItems();
        return;
    } else {
        btnPrev.disabled = true;
        errorText.innerText = 'End of Items';
    }
});
const showItems = () => {
    arrList.innerHTML = '';

    const tenItems = arr.slice(firstId, lastId);
// при завантажені сторінки з'являються перші 10 об'єктів.
    for (let i = 0; i < tenItems.length; i++) {
        let arrItem = document.createElement('li');
        arrItem.innerText = tenItems[i];
        arrItem.style.fontSize = '22px';
        arrList.appendChild(arrItem);
    }
};
showItems();
arrBox.append(btnPrev, btnNext, arrList, errorText)
document.body.appendChild(arrBox);
document.write(`<hr>`);
// ===>
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
let newDiv = document.createElement('div')

let newForm = document.createElement('form');
newForm.style.display = 'flex';
newForm.style.gap = '24px';

let newInputLine = document.createElement('input');
newInputLine.placeholder = 'кількість рядків';

let newInputNumOfCell = document.createElement('input');
newInputNumOfCell.placeholder = 'кількість ячеєк';

let newInputCell = document.createElement('input');
newInputCell.placeholder = 'вмиіст ячеєк';

let newBtn = document.createElement('button');
newBtn.innerText = 'формуємо табличку';

newForm.addEventListener('submit', onSubmitNewForm);

// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
function onSubmitNewForm(e) {
    e.preventDefault();
    let line = parseInt(newInputLine.value);
    let numOfCell = parseInt(newInputNumOfCell.value);
    let cell = newInputCell.value;

    if (isNaN(line) || isNaN(numOfCell)) {
        let errorText = document.createElement('p');
        errorText.style.color = 'red';
        errorText.innerText = 'введіть дані у всі поля';
        document.body.append(errorText);
    }
    buildTable(line, numOfCell, cell);
    e.currentTarget.reset();
}

function buildTable(line, cell, text) {
    const table = document.createElement('table');
    table.style.borderCollapse = 'collapse';

    for (let i = 0; i < line; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < cell; j++) {
            const cell = document.createElement('td');
            cell.innerText = text;
            cell.style.border = '1px solid black';
            cell.style.padding = '8px'
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    newDiv.append(table);
}

newForm.append(newInputLine, newInputNumOfCell, newInputCell, newBtn);
newDiv.append(newForm);
document.body.appendChild(newDiv);
document.write(`<hr>`)
// ===>
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
let newBlock = document.createElement('div');
newBlock.id = 'text';
newBlock.style.width = '100px';
newBlock.style.height = '35px';
newBlock.style.background = 'yellow';

let counterMoney = JSON.parse(localStorage.getItem('counterMoney')) || 100;
localStorage.setItem('counterMoney', JSON.stringify(counterMoney))

let money = document.createElement('p')
money.innerText = `${counterMoney}UAN`;
money.style.color = 'blue';
money.style.fontSize = '30px';
money.style.textAlign = 'center';
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
// час останнього оновлення з localStorage
const lastUpdateTime = localStorage.getItem('lastUpdateTime') || '';
const currentTime = new Date().getTime();
localStorage.setItem('lastUpdateTime', currentTime.toString());

// Перевірити, чи пройшло 10 секунд з останнього оновлення
const isPassedTenS = currentTime - parseInt(lastUpdateTime) >= 10000;
//  зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
window.onload = function () {
    if (isPassedTenS) {
        counterMoney += 10;
        money.innerText = `${counterMoney}UAN`;
        localStorage.setItem('counterMoney', JSON.stringify(counterMoney));
    };
    localStorage.setItem('lastUpdateTime', currentTime.toString());
};

newBlock.append(money);
document.body.append(newBlock);


