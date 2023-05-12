// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити
// перевірку якщо кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те,
// що це великий масив, в якому  3 і більше елементи. Інакше слід вивести на екран повідомлення про те,
// що це маленький масив, в якому менше 3-х елементів.
let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
if (friends.length >= 3) {
    console.log('це великий масив, в якому  3 і більше елементи')
} else {
    console.log('це маленький масив, в якому менше 3-х елементів')
}

// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині. Знайти, яке з них є середнім
// (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.
let a = 2;
let b = 5;
let c = 13;
let middle;
if ((a > b && a < c) || (a < b && a > c)) {
    middle = a;
} else if ((b > a && b < c) || (b < a && b > c)) {
    middle = b;
} else {
    middle = c;
}
console.log(`${middle} - середнє число`);

if (a === middle) {
    console.log(`Перше число (${a}) знаходиться між ${b} та ${c}`);
} else {
    console.log(`Перше число (${a}) не знаходиться між ${b} та ${c}`);
}

// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }
let result = a + b < 4 ? 'Мало' : 'Багато';
console.log(result)

// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або
// нулем  напишіть це тернарним оператором
let t = -900;
let temperature = (t < 0 && t >= -100) ? 'negative' : (t > 0 && t <= 100)
    ? 'positive' : t = 0 ? '0' : 'enter number from 100 to -100';
console.log(temperature)

// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'. Перевірте роботу
// скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
let test = 5 > 47;
let testAnswer = (test === true) ? 'Вірно' : 'Неправильно';
console.log(testAnswer)

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
let nameJS = prompt('Яка «офіційна» назва JavaScript?');
if (nameJS === 'ECMAScript') {
    console.log('Правильно!')
} else {
    console.log('Не знаєте? ECMAScript!')
}

//  - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90. Користувач вводить
//  номер квартири просто в змінні або через prompt('') . Програма повинна зазначити, в якому під'їзді
//  знаходиться дана квартира.
let flat = prompt('enter number you flat from 1 to 90');
if (flat > 1 && flat <= 20) {
    console.log('1 підїзд')
} else if (flat > 20 && flat <= 48) {
    console.log('2 підїзд')
} else if (flat > 48 && flat <= 90) {
    console.log('3 підїзд')
} else {
    console.log('такої квартири не існує, введіть число від 1 до 90')
}


// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення
// ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
let number = 10;
let numberValue = number === 10 ? 'ВІРНО' : 'НЕВІРНО'
console.log(numberValue)

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо
//   ВЧИТИСЯ . Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
let temperatureOut = 20;
let goStudy = (temperatureOut > 9 && temperatureOut < 23) ? 'йдемо ВЧИТИСЯ' : 'вчимося ОНЛАЙН'
console.log(goStudy)

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від
// введеного числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести
// Повідомлення - що число не вірне ... .
let prize = '4';
debugger;
switch (prize) {
    case '1':
        console.log('cur');
        break;
    case '2':
        console.log('phone');
        break;
    case '3':
        console.log('tv');
        break;
    case '4':
        console.log('apple');
        break;
    case '5':
        console.log('banana');
        break;
    default:
        console.log('you are not lucky');
}
