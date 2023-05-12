// --створити масив з:
// - з 5 числових значень
let arr1 = [1, 2, 3, 4, 5];
// - з 5 стічкових значень
let arr2 = ['a', '2', 'c', 'e', 'f'];
// - з 5 значень стрічкового, числового та булевого типу
let arr3 = ['all', 44, true, 'work', 2]
// - та вивести його в консоль
console.log(arr1,arr2, arr3);
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let arr4 = [];
arr4[0] = 4;
arr4[1] = 'jhj';
arr4[2] = true;
arr4[4] = 433;
arr4[33] = 'apple';
console.log(arr4)
const arrNumber = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// 1. перебрати його циклом while
console.log('перебрати його циклом while')
let k = 0;
while (k < arrNumber.length) {
    let arr = arrNumber[k];
    console.log(arr);
    k++;
}
// 2. перебрати його циклом for
console.log('перебрати його циклом for')
for (let number of arrNumber) {
    console.log(number)
}
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
console.log('циклом while та вивести  числа тільки з непарним індексом')
let l = 0;
while (l < arrNumber.length) {
    let arr = arrNumber[l];
    if (l % 2 !== 0) {
        console.log(arr)
    }
    l++;
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
console.log('циклом for та вивести  числа тільки з непарним індексом')
for (let key in arrNumber) {
    if (key % 2 !== 0) {
        console.log(key, arrNumber[key])
    }
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
console.log('while та вивести  числа тільки парні  значення')
let g = 0;
while (g < arrNumber.length) {
    let arr = arrNumber[g];
    if (arr % 2 === 0) {
        console.log(arr)
    }
    g++;
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
console.log('циклом for та вивести  числа тільки парні  значення')
for (let number of arrNumber) {
    if (number % 2 === 0) {
        console.log(number)
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"
console.log('замінити кожне число кратне 3 на слово "okten"')
for (let number of arrNumber) {
    if (number % 3 === 0) {
        number = 'okten';
    }
    console.log(number)
}
// 8. вивести масив в зворотньому порядку.
console.log('вивести масив в зворотньому порядку.');
let arrReverse = arrNumber.reverse()
console.log(arrReverse);

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let arr5 = [1, 2, 3, 4, 5, 'apple', 'banana', true, false, 'chery'];
console.log('тільки булеві елементи')
for (const arr5Element of arr5) {
    if (typeof (arr5Element) === 'boolean') {
        console.log(arr5Element);
    }
}
console.log('тільки числові елементи')
for (const arr5Element of arr5) {
    if (typeof (arr5Element) === 'number') {
        console.log(arr5Element);
    }
}
console.log('тільки рядкові елементи')
for (const arr5Element of arr5) {
    if (typeof (arr5Element) === 'string') {
        console.log(arr5Element);
    }
}
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let arr6 = [];
arr6[0] = 4;
arr6[1] = 'jhj';
arr6[2] = true;
arr6[3] = 433;
arr6[4] = 'apple';
arr6[5] = 4;
arr6[6] = 'jhj';
arr6[7] = true;
arr6[8] = 433;
arr6[7] = 'apple';
console.log(arr6)
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
console.log('цикл for на 10  ітерацій з кроком 1')
document.write(`<p>цикл for на 10  ітерацій з кроком 1</p><ul></ul>`)
for (let i = 0; i < 11; i += 1) {
        console.log(i);
        document.write(`<li>${i}</li>`)
}
document.write(`</ul>`)
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
console.log('цикл for на 100 ітерацій з кроком 1')
document.write(`<p>цикл for на 100 ітерацій з кроком 1</p><ul></ul>`)
for (let i = 0; i < 101; i += 1) {
    console.log(i);
    document.write(`<li>${i}</li>`)
}
document.write(`</ul>`)
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
console.log('цикл for на 100 ітерацій з кроком 2')
document.write(`<p>цикл for на 100 ітерацій з кроком 2</p><ul></ul>`)
for (let i = 0; i < 101; i += 2) {
    console.log(i);
    document.write(`<li>${i}</li>`)
}
document.write(`</ul>`)
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
console.log('цикл for на 20 ітерацій з кроком 1, парні кроки')
document.write(`<p>цикл for на 20 ітерацій з кроком 1, парні кроки</p><ul></ul>`)
for (let i = 0; i < 21; i += 1) {
    if (i % 2 === 0) {
        console.log(i);
        document.write(`<li>${i}</li>`)
    }
}
document.write(`</ul>`)
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки.
// через console.log + document.write
console.log('цикл for на 100 ітерацій з кроком 1, непарні кроки')
document.write(`<p>цикл for на 100 ітерацій з кроком 1, непарні кроки</p><ul></ul>`)
for (let i = 0; i < 101; i += 1) {
    if (i % 2 !== 0) {
        console.log(i);
        document.write(`<li>${i}</li>`)
    }
}
document.write(`</ul>`)
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [
    {
        title: 'To Kill a Mockingbird',
        pages: 281,
        authors: ['Harper Lee'],
        genres: ['Classic', 'Fiction', 'Dystopian']
    },
    {
        title: '1984',
        pages: 328,
        authors: ['George Orwell'],
        genres: ['Dystopian', 'Political fiction']
    },
    {
        title: 'The Great Gatsby',
        pages: 218,
        authors: ['F. Scott', 'Fitzgerald'],
        genres: ['Classic', 'Fiction']
    },
    {
        title: 'Pride and Prejudice',
        pages: 279,
        authors: ['Jane Austen'],
        genres: ['Classic', 'Romance']
    },
    {
        title: 'The Lord of the Rings',
        pages: 1178,
        authors: ['J. R.', ' R. Tolkien'],
        genres: ['Fantasy', 'Adventure']
    }
];
// -знайти наібльшу книжку.
let bigBook = books[0];
for (let i = 1; i < books.length; i++) {
    if (books[i].pages > bigBook.pages) {
        bigBook = books[i];
    }
}
console.log('The biggest book is:', bigBook.title);
// - знайти книжку/ки з найбільшою кількістю жанрів
let genresBook= books[0];
for (let i = 1; i < books.length; i++) {
    if (books[i].genres.length > genresBook.genres.length) {
        genresBook = books[i];
    }
}
console.log('The book with biggest genres is:', genresBook.title);
// - знайти книжку/ки з найдовшою назвою
let longestTitleBook= books[0];
for (let i = 1; i < books.length; i++) {
    if (books[i].title.length > longestTitleBook.title.length) {
        longestTitleBook = books[i];
    }
}
console.log('The book with longest title is:', longestTitleBook.title);
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор (break)
let twoAuthors = [];
let oneAuthor = [];
for (let i = 0; i < books.length; i++) {
let authorsLength = books[i].authors.length;
    switch (authorsLength){
        case 1:
            oneAuthor.push(books[i].title);
            break;
        case 2:
           twoAuthors.push(books[i].title);
            break;
        default:
            console.log('authors of books more 2 ')
    }
}
console.log('twoAuthors ', twoAuthors);
console.log('oneAuthor', oneAuthor)

let usersList = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496'
            }
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets'
        }
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
                lat: '-43.9509',
                lng: '-34.4618'
            }
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains'
        }
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        address: {
            street: 'Douglas Extension',
            suite: 'Suite 847',
            city: 'McKenziehaven',
            zipcode: '59590-4157',
            geo: {
                lat: '-68.6102',
                lng: '-47.0653'
            }
        },
        phone: '1-463-123-4447',
        website: 'ramiro.info',
        company: {
            name: 'Romaguera-Jacobson',
            catchPhrase: 'Face to face bifurcated interface',
            bs: 'e-enable strategic applications'
        }
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        address: {
            street: 'Hoeger Mall',
            suite: 'Apt. 692',
            city: 'South Elvis',
            zipcode: '53919-4257',
            geo: {
                lat: '29.4572',
                lng: '-164.2990'
            }
        },
        phone: '493-170-9623 x156',
        website: 'kale.biz',
        company: {
            name: 'Robel-Corkery',
            catchPhrase: 'Multi-tiered zero tolerance productivity',
            bs: 'transition cutting-edge web services'
        }
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        address: {
            street: 'Skiles Walks',
            suite: 'Suite 351',
            city: 'Roscoeview',
            zipcode: '33263',
            geo: {
                lat: '-31.8129',
                lng: '62.5342'
            }
        },
        phone: '(254)954-1289',
        website: 'demarco.info',
        company: {
            name: 'Keebler LLC',
            catchPhrase: 'User-centric fault-tolerant solution',
            bs: 'revolutionize end-to-end systems'
        }
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        address: {
            street: 'Norberto Crossing',
            suite: 'Apt. 950',
            city: 'South Christy',
            zipcode: '23505-1337',
            geo: {
                lat: '-71.4197',
                lng: '71.7478'
            }
        },
        phone: '1-477-935-8478 x6430',
        website: 'ola.org',
        company: {
            name: 'Considine-Lockman',
            catchPhrase: 'Synchronised bottom-line interface',
            bs: 'e-enable innovative applications'
        }
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        address: {
            street: 'Rex Trail',
            suite: 'Suite 280',
            city: 'Howemouth',
            zipcode: '58804-1099',
            geo: {
                lat: '24.8918',
                lng: '21.8984'
            }
        },
        phone: '210.067.6132',
        website: 'elvis.io',
        company: {
            name: 'Johns Group',
            catchPhrase: 'Configurable multimedia task-force',
            bs: 'generate enterprise e-tailers'
        }
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        address: {
            street: 'Ellsworth Summit',
            suite: 'Suite 729',
            city: 'Aliyaview',
            zipcode: '45169',
            geo: {
                lat: '-14.3990',
                lng: '-120.7677'
            }
        },
        phone: '586.493.6943 x140',
        website: 'jacynthe.com',
        company: {
            name: 'Abernathy Group',
            catchPhrase: 'Implemented secondary concept',
            bs: 'e-enable extensible e-tailers'
        }
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        address: {
            street: 'Dayna Park',
            suite: 'Suite 449',
            city: 'Bartholomebury',
            zipcode: '76495-3109',
            geo: {
                lat: '24.6463',
                lng: '-168.8889'
            }
        },
        phone: '(775)976-6794 x41206',
        website: 'conrad.com',
        company: {
            name: 'Yost and Sons',
            catchPhrase: 'Switchable contextually-based project',
            bs: 'aggregate real-time technologies'
        }
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        address: {
            street: 'Kattie Turnpike',
            suite: 'Suite 198',
            city: 'Lebsackbury',
            zipcode: '31428-2261',
            geo: {
                lat: '-38.2386',
                lng: '57.2232'
            }
        },
        phone: '024-648-3804',
        website: 'ambrose.net',
        company: {
            name: 'Hoeger LLC',
            catchPhrase: 'Centralized empowering task-force',
            bs: 'target end-to-end models'
        }}
];
//*За допомогою циклу вивести всю інформацію про користувачів використовуючи шаблон Template 1.1
//* за допомоги стилів, побудувати сітку по 2 об'єкта в лінію
document.write(`<div class="users-box">`);
for (const user of usersList) {
    let {id, name, username, email, phone,} = user;
    let {city, street, suite, zipcode} = user.address;
    document.write(` <div class="user-block">
        <h2>${id} - ${name} - ${username} </h2>
        <h3>${email} - ${phone}</h3>
        <div class="address-block">
            <p>City - ${city}</p>
            <p>Street - ${street}</p>
            <p>Suite - ${suite}</p>
            <p>Zip code - ${zipcode}</p>
        </div>
    </div>`)
}
document.write(`</div>`)
// 1. Створити пустий масив та :
let evenNumberArr = [];
let oddNumberArr = [];
let randomNumberArr = [];
let randomArr = [];
//     a. заповнити його 50 парними числами за допомоги циклу.
for (let i = 0; i < 51; i++) {
    evenNumberArr.push(i * 2);
}
console.log('evenNumberArr', evenNumberArr)
//     b. заповнити його 50 непарними числами за допомоги циклу.
for (let i = 0; i < 51; i++) {
    oddNumberArr.push(i * 2 + 1 );
}
console.log('oddNumberArr', oddNumberArr)
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
for (let i = 0; i < 21; i++) {
    randomNumberArr.push(Math.floor(Math.random() * 100500));
}
console.log('randomNumberArr', randomNumberArr)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
for (let i = 0; i <21 ; i++) {
    // Math.floor(Math.random() * (max - min + 1) + min)
    randomArr.push(Math.floor(Math.random() * (732 - 8 + 1) + 8));
}
console.log('randomArr від 8 до 732', randomArr)
// 2. Вивести за допомогою console.log кожен третій елемен
let thirdEl = [];
for (let i = 0; i < randomArr.length; i+=3) {
    thirdEl.push(randomArr[i])
}
console.log('кожен третій елемен ', thirdEl)
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
let thirdEvenEl = [];
for (let i = 0; i < randomArr.length; i+=3) {
    if(randomArr[i]%2 === 0){
        thirdEvenEl.push(randomArr[i])
    }
}
console.log('кожен третій елемен тільки якщо цей елемент є парним', thirdEvenEl)
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
const someArr =  [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] //-> Має бути виведено 1, 9, 56
let evenNeighbor = [];
for (let i = 0; i < someArr.length; i++) {
    if(someArr[i+1]%2 === 0){
        evenNeighbor.push(someArr[i])
    }
}
console.log(`елемент масиву, сусід справа якого є парним ${someArr}`, evenNeighbor)
const shopping = [100,250,50,168,120,345,188];
let middleCheck = 0;
// Які характеризують вартість окремої покупки. Обрахувати середній чек.
for (let i = 0; i < shopping.length; i++) {
    let sum = 0;
     sum += shopping[i];
     middleCheck = sum / shopping.length
}
console.log('середній чек', middleCheck)
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх
// в інший масив.
let randomArr2 = [];
let arr2Mult5 = [];
for (let i = 0; i < 21; i++) {
    randomArr2.push(Math.floor(Math.random() * 100));
}
for (const el of randomArr2) {
    arr2Mult5.push(el * 5)
}
console.log(`${randomArr2} помножити всі його елементи на 5`, arr2Mult5)
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо
// елемент є числом - додати його в інший масив.
const someArr2 = [1, 64, '77', true, 33, 'qweqwe', '23'];
let numbersArr2 = [];
for (const el of someArr2) {
    if(typeof el === 'number'){
        numbersArr2.push(el)
    }
}
console.log(`${someArr2} only numbers`, numbersArr2)
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
    let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
let usersWithCities =[];
for (let user of usersWithId) {
    let userId = user.id ;
    for (const citi of citiesWithId) {
        let citiId = citi.user_id;
        if(userId === citiId){
            usersWithCities.push({
                id: userId,
                name: user.name,
                age: user.age,
                status: user.status,
                address: {
                    user_id: citi.user_id,
                    country: citi.country,
                    city: citi.city,
                },
            })
        }
    }
}
console.log('usersWithCities', usersWithCities)
// - Взяти масив з 10 чисел . Вивести в консоль тільки ті елементи, значення яких є парними.
const newArr = [1,2,3,4,5,6,7,8,9,0];
for (const number of newArr) {
    if(number%2 === 0){
        console.log(number)
    }
}
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого
// циклу скопіювати значення одного масиву в інший.
let copyNewArr = []
for (const el of newArr) {
    copyNewArr.push(el)
}
console.log(`${newArr} copy`, copyNewArr)
// За допомогою циклу for зібрати всі букви в слово.
const letterArr =[ 'a', 'b', 'c'];
let wordWithForI ='';
for (let i = 0; i < letterArr.length; i++) {
    wordWithForI +=letterArr[i];
}
console.log('За допомогою циклу for зібрати всі букви в слово ===>', wordWithForI)
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let wordWithWhile='';
let i = 0;
while (i<letterArr.length){
    wordWithWhile +=letterArr[i];
    i++;
}
console.log('За допомогою циклу while зібрати всі букви в слово ===>', wordWithWhile)
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let wordWithForOf = '';
for (const letter of letterArr) {
    wordWithForOf +=letter;
}
console.log('За допомогою циклу for of зібрати всі букви в слово ===>', wordWithForOf)