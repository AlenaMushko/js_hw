// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [0, 2, 'name', true, 44, 889, false, [3, 5, 6], 'age', 44];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let bookFirst = {
    title: 'worm', pageCount: 400, genre: 'fantasy',
};
console.log(bookFirst)
let bookSecond = {
    title: 'ABC', pageCount: 170, genre: 'ducational',
};
console.log(bookSecond)
let bookThird = {
    title: 'Js', pageCount: 307, genre: 'educational',
};
console.log(bookThird)
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let bookFirstA = {
    title: 'worm', pageCount: 400, genre: 'fantasy', authors: [{name: 'John C.McCrae'}, {age: 27}],
};
console.log(bookFirstA)
let bookSecondA = {
    title: 'ABC', pageCount: 170, genre: 'ducational', authors: [{name: 'Alex'}, {age: 44}],
};
console.log(bookSecondA)
let bookThirdA = {
    title: 'Js', pageCount: 307, genre: 'educational', authors: [{name: 'John Smith'}, {age: 37}],
};
console.log(bookThirdA)
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача
let users = [
    {name: 'Dasha', username: 'dashaM', password: 'dfgb46hfg',},
    {name: 'Misha', username: 'mishaM', password: 'bfgh56gh',},
    {name: 'Alona', username: 'alonaM', password: 'hvjhdlfjk544g',},
    {name: 'Pasha', username: 'pashaM', password: 'gdh454ghf',},
    {name: 'Dima', username: 'dimaM', password: 'fhfgdh4564hfg',},
    {name: 'Bogdan', username: 'bogdanM', password: 'fgh3435ggf',},
    {name: 'Sonni', username: 'sonniM', password: 'ghfghj45645',},
    {name: 'Blu', username: 'bluM', password: 'bfgh46545fgh',},
    {name: 'Yellow', username: 'yellowM', password: 'gdgh5gf',},
    {name: 'Dariy', username: 'dariyM', password: 'hfgj45756jg',}]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// Логічні розгалуження:

//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = +prompt('enter number');
if (x !== 0) {
    console.log(true)
} else {
    console.log(false)
}
console.log(x);
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої
// четверті години попадає число (в першу, другу, третю или четверту частину години).
let time = +prompt('enter number from 0 to 59');
if (time >= 0 && time < 25) {
    console.log('the first quarter of an hour ');
} else if (time >= 25 && time < 30) {
    console.log('the second quarter of an hour ');
} else if (time >= 30 && time < 45) {
    console.log('the third quarter of an hour ');
} else if (time >= 45 && time < 60) {
    console.log('the fourth quarter of an hour ');
} else {
    alert(`${time} wrong number. Please enter number from 0 to 59`);
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця
// потрапляє це число (у першу, другу чи третю).
let day = +prompt('enter number from 1 to 31');
if (day > 0 && day < 11) {
    console.log('the first decade of an month ');
} else if (day >= 11 && day < 21) {
    console.log('the second decade of an month ');
} else if (day >= 21 && day <= 31) {
    console.log('the third decade of an month');
} else {
    alert(`${day} wrong number. Please enter number from 1 to 31`);
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і
// на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву
// дня англійською).
let dayOfWeek = prompt('enter day of week');

switch (dayOfWeek) {
    case 'Monday':
        console.log('Monday');
        break;
    case 'Tuesday':
        console.log('Tuesday');
        break;
    case 'Wednesday':
        console.log('Wednesday');
        break;
    case 'Thursday':
        console.log('Thursday');
        break;
    case 'Friday':
        console.log('Friday');
        break;
    case 'Saturday':
        console.log('Saturday');
        break;
    case 'Sunday':
        console.log('Sunday');
        break;
    default:
        alert(`sorry, ${dayOfWeek} there is no such day of the week`);
}

//  - Користувач вводить або має два числа. Потрібно знайти та вивести максимальне число з тих двох .
//   Також потрібно врахувати коли введені рівні числа.
let firstNumber = +prompt("enter first number");
let secondNumber = +prompt("enter second number");

if (isNaN(firstNumber) || isNaN(secondNumber)) {
    alert("Wrong. Please, enter number");
} else if (firstNumber === secondNumber) {
    console.log('the numbers are equal');
} else {
    console.log(Math.max(firstNumber, secondNumber));
}
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який, за допомоги  оператора || буде присвоювати змінній х значення "default"
// якщо значення мінної х являється falsy (хибноподібні, тобто приводиться до false)
// let xx = prompt("enter any symbols");
let xx = null;
if (xx === null || xx === '0' || xx === '' || xx === undefined) {
    xx = "default";
}
console.log(xx);

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість
// довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log(coursesAndDurationArray[0].title, ' ===> supper')
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log(coursesAndDurationArray[1].title, ' ===> supper')
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log(coursesAndDurationArray[2].title, ' ===> supper')
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log(coursesAndDurationArray[3].title, ' ===> supper')
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log(coursesAndDurationArray[4].title, ' ===> supper')
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log(coursesAndDurationArray[5].title, ' ===> supper')
}

// for (let i =0; i < coursesAndDurationArray.length; i +=1){
//     if (coursesAndDurationArray[i].monthDuration > 5) {
//         console.log(coursesAndDurationArray[i].title, ' ===> supper')
//     }
// }
