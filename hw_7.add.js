// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//              lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//        name: 'Romaguera-Crona',
//        catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
class User {
    constructor(id, name, username, email, streetAddress, suiteAddress, cityAddress, zipcodeAddress, latGeo, lngGeo,
                website, phone, nameCompany, catchPhraseCompany, bsCompany) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = {
            street: streetAddress,
            suite: suiteAddress,
            city: cityAddress,
            zipcode: zipcodeAddress,
            geo: {
                lat: latGeo,
                lng: lngGeo
            }
        };

        this.website = website;
        this.phone = phone;
        this.company = {
            name: nameCompany,
            catchPhrase: catchPhraseCompany,
            bs: bsCompany
        };
    }
}

const bret = new User(
    1,
    'Leanne Graham',
    'Bret',
    'Sincere@april.biz',
    'Kulas Light',
    'Apt. 556',
    'Gwenborough',
    '92998-3874',
    '-37.3159',
    '81.1496',
    'hildegard.org',
    '1-770-736-8031 x56442',
    'Romaguera-Crona',
    'Multi-layered client-server neural-net',
    'harness real-time e-markets'
);

console.log(bret);

// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
// }

class Tag {
    constructor(titleOfTag, action, attrs) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = attrs;
    }
}

const a = new Tag(
    'a',
    'Тег <a>  створює посилання на іншу сторіку(Зовнішне посилання) або на певний елемент цієї сторінки(Внутрішне посилання).\n' +
    '\n',
    [
        { titleOfAttr: 'href', actionOfAttr: 'Задає адресу документа, на який слід перейти.' },
        { titleOfAttr: 'download', actionOfAttr: 'Пропонує завантажити вказаний за посиланням файл.' }
    ]
);

const div = new Tag(
    'div',
    'Тег <div> представляє блочний елемент, який використовується для групування інших елементів...',
    [
        { titleOfAttr: 'align', actionOfAttr: 'Вирівнювання вмісту тега <div>.' }
    ]
);

const h1 = new Tag(
    'h1',
    'Тег <h1> визначає найбільш важливі заголовки',
    [
        { titleOfAttr: 'align', actionOfAttr: 'Вирівнювання заголовку.' }
    ]
);

const span = new Tag(
    'span',
    'Тег <span> являє собою універсальний порожній контейнер, який необхідно заповнити будь-яким вмістом',
    [
        { titleOfAttr: 'title', actionOfAttr: 'Вказує додаткову текстову підказку.' },
        { titleOfAttr: 'id', actionOfAttr: 'Задає унікальний ідентифікатор для елемента.' }
    ]
);

const input = new Tag(
    'input',
    'Тег <input> представляє елемент форми, який призначений для прийому інформації від користувача...',
    [
        { titleOfAttr: 'type', actionOfAttr: 'Вказує тип елемента форми.' },
        { titleOfAttr: 'value', actionOfAttr: 'Встановлює значення елемента форми.' }
    ]
);

const form = new Tag(
    'form',
    'Тег <form> використовується для створення форми на веб-сторінці...',
    [
        { titleOfAttr: 'action', actionOfAttr: 'Вказує URL-адресу або файл, який обробляє дані форми.' },
        { titleOfAttr: 'method', actionOfAttr: 'Вказує метод відправки форми на сервер.' }
    ]
);

const option = new Tag(
    'option',
'Тег <option> використовується для визначення окремих пунктів списку...',
        [
            { titleOfAttr: 'value', actionOfAttr: 'Вказує значення пункту списку, яке буде відправлене на сервер або прочитане з допомогою скриптів.' },
            { titleOfAttr: 'selected', actionOfAttr: 'Заздалегідь встановлює обраний пункт списку.' }
        ]
);

const select = new Tag(
    'select',
    'Тег <select> використовується для створення розкривного списку...',
    [
        { titleOfAttr: 'size', actionOfAttr: 'Вказує кількість відображуваних рядків списку.' },
        { titleOfAttr: 'multiple', actionOfAttr: 'Дозволяє вибрати декілька пунктів списку.' }
    ]
);
// Таким чином описати теги
console.log(a)
console.log(div)
console.log(h1)
console.log(span)
console.log(input)
console.log(form)
console.log(option)
console.log(select)
