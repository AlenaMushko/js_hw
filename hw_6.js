// - Знайти та вивести довижину настипних стрінгових значень
const hello = 'hello world';
const lorem ='lorem ipsum';
const js = 'javascript is cool';
 const stringLength = (str)=>{
    return  str.length
 }

console.log(stringLength(hello));
console.log(stringLength(lorem));
console.log(stringLength(js));
// - Перевести до великого регістру наступні стрінгові значення
const stringToUpperCase = (str)=>{
    return str.toUpperCase()
}
console.log(stringToUpperCase(hello));
console.log(stringToUpperCase(lorem));
console.log(stringToUpperCase(js))
;
// - Перевести до нижнього регістру настипні стрінгові значення
const hello2 = 'HELLO WORLD';
const lorem2 ='LOREM IPSUM';
const js2 = 'JAVASCRIPT IS COOL';
const strToLowerCase =(str)=>{
    return str.toLowerCase();
}
console.log(strToLowerCase(hello2));
console.log(strToLowerCase(lorem2));
console.log(strToLowerCase(js2));

// - Є "брудна" стрінга  . Почистити її від зайвих пробілів.
let strDirty = ' dirty string   '
const strTrim =(str)=>{
    return str.trim()
}
console.log(strTrim(strDirty));

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
 let str = 'Ревуть воли як ясла повні';
 const  stringToarray = (str)=>{
     return str.split(' ');
 }
let arr = stringToarray(str);
console.log(arr)

const numbersArr =[10,8,-7,55,987,-1011,0,1050,0];
// за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
const numberInString = (arr)=> arr.map(value => String(value));
console.log(numberInString(numbersArr))
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до
// меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
const sortNums = (arr, direction) =>{
let result = [];
if (direction === 'ascending'){
    result = arr.sort((a,b)=> a-b)
} else if (direction === 'descending'){
    result = arr.sort((a,b)=> b-a)
}  else {
    console.log('unknown operation')}
return result;
}

console.log(sortNums(nums,'ascending')) // [3,11,21]
console.log(sortNums(nums,'descending')) // [21,11,3]

// ==========================
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
const monthDurationDescending =(arr)=> arr.sort((a,b) => b.monthDuration - a.monthDuration)
console.log(monthDurationDescending(coursesAndDurationArray))
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
const monthDurationMoreFiveMonths =(arr)=> arr.filter(value => value.monthDuration > 5)
console.log(monthDurationMoreFiveMonths(coursesAndDurationArray))
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
const coursesArr =(arr)=> arr.map((value, i) => { return  {id: i+1,...value, }})
console.log(coursesArr(coursesAndDurationArray))
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
const cardDeck  = [
    { cardSuit: 'spade', value: '6', color: 'black' },
    { cardSuit: 'spade', value: '7', color: 'black' },
    { cardSuit: 'spade', value: '8', color: 'black' },
    { cardSuit: 'spade', value: '9', color: 'black' },
    { cardSuit: 'spade', value: '10', color: 'black' },
    { cardSuit: 'spade', value: 'jack', color: 'black' },
    { cardSuit: 'spade', value: 'queen', color: 'black' },
    { cardSuit: 'spade', value: 'king', color: 'black' },
    { cardSuit: 'spade', value: 'ace', color: 'black' },
    { cardSuit: 'diamond', value: '6', color: 'red' },
    { cardSuit: 'diamond', value: '7', color: 'red' },
    { cardSuit: 'diamond', value: '8', color: 'red' },
    { cardSuit: 'diamond', value: '9', color: 'red' },
    { cardSuit: 'diamond', value: '10', color: 'red' },
    { cardSuit: 'diamond', value: 'jack', color: 'red' },
    { cardSuit: 'diamond', value: 'queen', color: 'red' },
    { cardSuit: 'diamond', value: 'king', color: 'red' },
    { cardSuit: 'diamond', value: 'ace', color: 'red' },
    { cardSuit: 'heart', value: '6', color: 'red' },
    { cardSuit: 'heart', value: '7', color: 'red' },
    { cardSuit: 'heart', value: '8', color: 'red' },
    { cardSuit: 'heart', value: '9', color: 'red' },
    { cardSuit: 'heart', value: '10', color: 'red' },
    { cardSuit: 'heart', value: 'jack', color: 'red' },
    { cardSuit: 'heart', value: 'queen', color: 'red' },
    { cardSuit: 'heart', value: 'king', color: 'red' },
    { cardSuit: 'heart', value: 'ace', color: 'red' },
    { cardSuit: 'clubs', value: '6', color: 'black' },
    { cardSuit: 'clubs', value: '7', color: 'black' },
    { cardSuit: 'clubs', value: '8', color: 'black' },
    { cardSuit: 'clubs', value: '9', color: 'black' },
    { cardSuit: 'clubs', value: '10', color: 'black' },
    { cardSuit: 'clubs', value: 'jack', color: 'black' },
    { cardSuit: 'clubs', value: 'queen', color: 'black' },
    { cardSuit: 'clubs', value: 'king', color: 'black' },
    { cardSuit: 'clubs', value: 'ace', color: 'black' }
];
// - знайти піковий туз
const spadeAce = (arr)=> arr.find(value => value.value === 'ace' && value.cardSuit === 'spade');
console.log(spadeAce(cardDeck))
// - всі шістки
const sixes =(arr) => arr.filter(value => value.value === '6');
console.log(sixes(cardDeck))
// - всі червоні карти
const redCards =(arr) => arr.filter(value => value.color === 'red');
console.log(redCards(cardDeck))
// - всі буби
const diamonds =(arr) => arr.filter(value => value.cardSuit === 'diamond');
console.log(diamonds(cardDeck))
// - всі трефи від 9 та більше
const clubs =(arr) => arr.filter(value => value.cardSuit === 'clubs' && value.value !== '6' && value.value !== '7' && value.value !== '8' );
console.log( clubs(cardDeck))
// =========================
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
const cardArr = (arr)=>{
 return  arr.reduce((acc, value) =>{
       switch (value.cardSuit) {
           case 'spade':
              acc.spades.push(value);
              break;
           case 'diamond':
               acc.diamonds.push(value);
               break;
           case 'heart':
               acc.hearts.push(value);
               break;
           case  'clubs':
               acc.clubs.push(value);
               break;
           default:
               console.log('there are no such masts')
       }
       return acc;
    }, {
        spades:[],
        diamonds:[],
        hearts:[],
        clubs:[]
    })
}
console.log(cardArr(cardDeck))
// =========================
//  взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
const reduceModules = (arr, symbols)=> arr.filter(course => course.modules.includes(symbols));

console.log(reduceModules(coursesArray, 'sass'))
console.log(reduceModules(coursesArray, 'docker'))
