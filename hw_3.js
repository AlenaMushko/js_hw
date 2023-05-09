let arr = [
    {
        id: 1,
        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    },
    {
        id: 2,
        title: 'qui est esse',
        body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
    },
    {
        id: 3,
        title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
        body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut'
    },
    {
        id: 4,
        title: 'eum et est occaecati',
        body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit'
    },
    {
        id: 5,
        title: 'nesciunt quas odio',
        body: 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque'
    },
    {
        id: 6,
        title: 'dolorem eum magni eos aperiam quia',
        body: 'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae'
    },
    {
        id: 7,
        title: 'magnam facilis autem',
        body: 'dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas'
    },
    {
        id: 8,
        title: 'dolorem dolore est ipsam',
        body: 'dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae'
    },
    {
        id: 9,
        title: 'nesciunt iure omnis dolorem tempora et accusantium',
        body: 'consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas'
    },
    {
        id: 10,
        title: 'optio molestias id quia eum',
        body: 'quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error'
    }]
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
document.write('<h2> Task 1</h2>') ;
for (let i = 0; i < arr.length; i++) {
    let arrElement = arr[i];
    document.write(`<div>
<p>${arrElement.body}</p>
</div>`)
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
document.write('<h2> Task 2</h2>') ;
for (let element of arr) {
    document.write(`<div>
<p> ${element.id}) ${element.title}</p>
</div>`)
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let arrBigger = [
    {
        id: 1,
        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    },
    {
        id: 2,
        title: 'qui est esse',
        body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
    },
    {
        id: 3,
        title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
        body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut'
    },
    {
        id: 4,
        title: 'eum et est occaecati',
        body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit'
    },
    {
        id: 5,
        title: 'nesciunt quas odio',
        body: 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque'
    },
    {
        id: 6,
        title: 'dolorem eum magni eos aperiam quia',
        body: 'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae'
    },
    {
        id: 7,
        title: 'magnam facilis autem',
        body: 'dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas'
    },
    {
        id: 8,
        title: 'dolorem dolore est ipsam',
        body: 'dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae'
    },
    {
        id: 9,
        title: 'nesciunt iure omnis dolorem tempora et accusantium',
        body: 'consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas'
    },
    {
        id: 10,
        title: 'optio molestias id quia eum',
        body: 'quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error'
    },
    {
        id: 11,
        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    },
    {
        id: 12,
        title: 'qui est esse',
        body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
    },
    {
        id: 13,
        title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
        body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut'
    },
    {
        id: 14,
        title: 'eum et est occaecati',
        body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit'
    },
    {
        id: 15,
        title: 'nesciunt quas odio',
        body: 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque'
    },
    {
        id: 16,
        title: 'dolorem eum magni eos aperiam quia',
        body: 'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae'
    },
    {
        id: 17,
        title: 'magnam facilis autem',
        body: 'dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas'
    },
    {
        id: 18,
        title: 'dolorem dolore est ipsam',
        body: 'dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae'
    },
    {
        id: 19,
        title: 'nesciunt iure omnis dolorem tempora et accusantium',
        body: 'consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas'
    },
    {
        id: 20,
        title: 'optio molestias id quia eum',
        body: 'quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error'
    },
]
document.write('<h2> Task 3</h2>') ;
let i =0;
while (i<arrBigger.length){
    let element = arrBigger[i];
    document.write(`
<div>
<h1>${element.title}</h1>
</div>
<hr>`);
    i ++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
document.write('<h2> Task 4</h2>') ;
let j = 0;
while (j<arrBigger.length){
    let element = arrBigger[j];
    document.write(`
<div>
<h1>${element.id}. ${element.title}</h1>
</div>`);
    j ++;
}

// - Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону
// Масив:
    let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
// -----------------------------------------------
document.write('<h2> Task 5</h2>') ;
document.write(`<ul>`);
for (let listOfItem of listOfItems) {
    document.write(`<li><p>${listOfItem}</p></li>`)
}
    document.write(`</ul>`)
//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
document.write('<h2> Task 6</h2>') ;
for (let product of products) {
    document.write(`<div class="product-card">
  <h3 class="product-title"><span>${product.title}.</span> Price - ${product.price}Uan</h3>
 <img src="${product.image}"  alt="${product.title}" class="product-image">
</div>`)
}

// --------------------
//     є масив
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років
document.write('<h2> Task 7</h2>') ;
document.write('<h3>On lesson</h3>');
document.write(`<ul>`);
 for (const user of users) {
     if(user.status === false){
        document.write(`<li> <p>${user.name}</p></li>`);
    }}
document.write(`</ul>`);
    document.write('<h3>Bad students</h3>');
document.write(`<ul>`);
for (const user of users) {
    if (user.status === true) {
        document.write(`<li> <p>${user.name}</p></li>`)
    }
}
document.write(`</ul>`);
    document.write('<h3>+30</h3>');
document.write(`<ul>`);
for (const user of users) {
    if(user.age >= 30){
        document.write(`<li> <p>${user.name}</p></li>`);
    }
}
document.write(`</ul>`);

// --створити масив з:
//     - з 5 числових значень
let arr1 = [1,2,3,4,5];
// - з 5 стічкових значень
let arr2 = ['a', '2', 'c', 'e', 'f'];
// - з 5 значень стрічкового, числового та булевого типу
let arr3 =['all', 44, true, 'work', 2]
// - та вивести його в консоль
console.log(arr1);
console.log(arr2);
console.log(arr3);
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let arr4 = [];
arr4[0]=4;
arr4[1]='jhj';
arr4[2]=true;
arr4[4]=433;
arr4[33]='apple';
console.log(arr4)
const arrNumber= [2,17,13,6,22,31,45,66,100,-18];
// 1. перебрати його циклом while
console.log('перебрати його циклом while')
let k =0;
while (k<arrNumber.length){
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
let l =0;
while (l<arrNumber.length){
    let arr = arrNumber[l];
    if ( l%2 !==0){
        console.log(arr)
    }
    l++;
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
console.log('циклом for та вивести  числа тільки з непарним індексом')
for(let key in arrNumber){
    if(key%2 !== 0){
        console.log(key, arrNumber[key])
    }
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
console.log('while та вивести  числа тільки парні  значення')
let g =0;
while (g<arrNumber.length){
    let arr = arrNumber[g];
    if ( arr%2 ===0){
        console.log(arr)
    }
    g++;
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
console.log('циклом for та вивести  числа тільки парні  значення')
for(let number of arrNumber){
    if(number%2 === 0){
        console.log(number)
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"
console.log('замінити кожне число кратне 3 на слово "okten"')
for(let number of arrNumber){
    if(number%3 === 0){
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
let arr5 = [1,2,3,4,5,'apple','banana', true, false, 'chery'];
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
arr6[0]=4;
arr6[1]='jhj';
arr6[2]=true;
arr6[3]=433;
arr6[4]='apple';
arr6[5]=4;
arr6[6]='jhj';
arr6[7]=true;
arr6[8]=433;
arr6[7]='apple';
console.log(arr6)
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
console.log('цикл for на 10  ітерацій з кроком 1')
for (let i =0; i<11; i++){
    console.log(i);
    document.write(i)
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
console.log('цикл for на 100 ітерацій з кроком 1')
for (let i =0; i<101; i++){
    console.log(i);
    document.write(i)
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
console.log('цикл for на 100 ітерацій з кроком 2')
for (let i =0; i<101; i+=2){
    console.log(i);
    document.write(i)
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
console.log('цикл for на 20 ітерацій з кроком 1, парні кроки')
for (let i =0; i<21; i++){
    if(i%2 === 0){
        console.log(i);
        document.write(i)
    }
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
console.log('цикл for на 20 ітерацій з кроком 1, непарні кроки')
for (let i =0; i<21; i+=1){
    if(i%2 !== 0){
        console.log(i);
        document.write(i)
    }
}
