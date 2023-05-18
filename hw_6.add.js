// // Всі функції повинні бути описані стрілочним типом!!!!
// const arrNumbers = [1, 0, 3, 1, -3]
// console.log('arrNumbers ==>', arrNumbers)
// //  - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// const minNumber = (a, b, c) => {
//     let minNumber = a;
//     if (a > b) {
//         minNumber = b;
//     }
//     if (b > c) {
//         minNumber = c;
//     }
//     return minNumber;
// }
// console.log('min number of (9, 8, 0) ===>', minNumber(9, 8, 0));
// // - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// const maxNumber = (a, b, c) => {
//     let maxNumber = a;
//     if (a < b) {
//         maxNumber = b;
//     }
//     if (b < c) {
//         maxNumber = c;
//     }
//     return maxNumber;
// }
// console.log('max number of (9, 8, 0) ===>', maxNumber(9, 8, 0));
// // - створити функцію яка повертає найбільше число з масиву
// const maxArrNumber = (arr) => Math.max(...arr);
// console.log(`maxArrNumber of ${arrNumbers} ===>`, maxArrNumber(arrNumbers))
// // - створити функцію яка повертає найменьше число з масиву
// const minArrNumber = (arr) => Math.min(...arr);
// console.log(`minArrNumber of ${arrNumbers} ===>`, minArrNumber(arrNumbers))
// // - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// const sumArrNumbers = (arr) => arr.reduce((acc, number) => {
//     return acc + number
// }, 0)
// console.log(`sumArrNumber of ${arrNumbers} ===>`, sumArrNumbers(arrNumbers))
// // - Дано натуральное число n. Выведите все числа от 1 до n.
// const factorial = (n) => {
//     let arrFactorial = [];
//     for (let i = 0; i <= n; i++) {
//         arrFactorial.push(i)
//     }
//     return arrFactorial;
// }
// console.log('Дано натуральное число 7. Выведите все числа от 1 до 7===>', factorial(7))
// // - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания,
// // если A < B, или в порядке убывания в противном случае.
// const sortNumberInSegment = (a, b) => {
//     let arr = [];
//     if (a < b) {
//         for (let i = a; i <= b; i++) {
//             arr.push(i);
//         }
//     }
//     ;
//     if (a > b) {
//         for (let i = a; i >= b; i--) {
//             arr.push(i);
//         }
//     }
//     return arr;
// }
// console.log('sortNumberInSegment(2, 4)', sortNumberInSegment(2, 4));
// console.log('sortNumberInSegment(2, 4)', sortNumberInSegment(12, 4));
// //-функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i"на "i+1"
// const rearrangeNumberByIndex = (arr, index) => {
//     [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]]
//     return arr;
// }
// console.log(`Приймає масив  ${arrNumbers} та число 2, та міняє місцями обєкт який знаходиться в індексі "i"на "i+1" `,
//     rearrangeNumberByIndex(arrNumbers, 2))
// console.log('([9,8,0,4], 0)', rearrangeNumberByIndex([9, 8, 0, 4], 0));
// // - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не
// // нульових значень.  Двожина масиву від 2 до 100
// const zeroInEndArr = (arr) => {
//     const result = arr.reduce((acc, number) => {
//         number ? acc.arrNum.push(number) : acc.arrZero.push(number);
//         return acc;
//     }, {arrNum: [], arrZero: []});
//     return result.arrNum.concat(result.arrZero);
// }
// console.log('[1, 0, 6, 0, 3] ===>', zeroInEndArr([1, 0, 6, 0, 3])); //  => [1,6,3,0,0]
// console.log('[0, 1, 2, 3, 4] ===>', zeroInEndArr([0, 1, 2, 3, 4])); //  => [1lo,2,3,4,0]
// console.log('[0, 0, 1, 0] ===>', zeroInEndArr([0, 0, 1, 0])); //    => [1,0,0,0]
//
// // ===========================================================================================================
// - Напишите функцию , которая делит строку на подстроки, состоящие из n символов.
const cutString = (str, n) => {
    let result = [];

    for (let i = 0; i < str.length; i += n) {
        result.push(str.slice(i, i + n))
    }
    return result;
}
document.writeln(cutString('наслаждение', 3)) // [нас,лаж,ден,ие]
// - Напишіть функцію , яка повертає підрядок, що складається із зазначеної кількості символів.
let str = 'Каждый охотник желает знать';
const delete_characters = (str, length) => str.slice(0, length)
document.write('<hr>');
document.writeln(delete_characters(str, 7)); // Каждый

// - Напишіть функцію , яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи
// рядка необхідно перевести у верхній регістр.
let str1 = "HTML JavaScript PHP";
const insert_dash = (str) => str.toUpperCase().split(' ').join('-');
document.write('<hr>');
document.writeln(insert_dash(str1)); // 'HTML-JAVASCRIPT-PHP'

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру
// у верхній.
const foo = (str) => str.charAt(0).toUpperCase().concat(str.slice(1));
document.write('<hr>');
document.writeln(foo('hello'));
// - Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// // let n2 = 'Ron Whisley'
// // let n3 = 'Hermione Granger'
const validName = (str)=>str.replaceAll('..',' ').replaceAll('---', ' ').replaceAll('__', ' ')
document.write('<hr>');
document.writeln(validName(n1));
document.write('<hr>');
document.writeln(validName(n2));
document.write('<hr>');
document.writeln(validName(n3));
// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
const randomNumbers = (min, max)=>{
    let randomNumbers = [];
    for (let i = 0; i < 13; i++) {
   let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        randomNumbers.push(randomNumber);
    }
    return randomNumbers;
}
let randomNum = randomNumbers(0, 100);
console.log(randomNum)
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort
const sortRandomNumbers=(arr)=>arr.sort((a,b)=>a-b);
console.log(sortRandomNumbers(randomNum))
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
const filterRandomNumbers = (arr)=> arr.filter(number => number%2 === 0 && number !==0);
console.log(filterRandomNumbers(randomNum))
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над
// протоколом, з регулярками будете потім бавитись.
// - є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
//
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
//
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
//
//
// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
// - вісортувати книжки по кількості сторінок по зростанню