//- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//Вивести кожну змінну за допомогою: console.log
let hello = 'hello';
console.log(hello)
let owu = 'owu';
console.log(owu)
let com = 'com';
console.log(com)
let ua = 'ua';
console.log(ua)
let one = 1;
console.log(one)
let ten = 10;
console.log(ten)
let nine = -999;
console.log(nine)
let numbers = 123;
console.log(numbers)
let pi = 3.14;
console.log(pi)
let two = 2.17;
console.log(two)
let sixteen = 16;
console.log(sixteen)
let yes = true;
console.log(yes)
let no = false;
console.log(no)
//- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName = 'Alona';
let middleName = 'Olecsandrivna';
let lastName = 'Myshko';
let person = firstName + ' ' + middleName + ' ' + lastName;
console.log(person);
//- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100; let b = '100'; let c = true;
let a = 100;
console.log(typeof (a));
let b = '100';
console.log(typeof (b));
let c = true;
console.log(typeof (c));
// - За logопомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let nameFirst = prompt("you firstName");
let nameMiddle = prompt('you middleName');
let nameLast = prompt('you lastName');
let age = +prompt('you age');
console.log(`you foolName ${nameFirst} ${nameMiddle} ${nameLast} and age `, Number(age))
