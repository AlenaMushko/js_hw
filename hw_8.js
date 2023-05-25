// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname , email, phone) {
    this.id = id,
    this.name = name,
    this.surname = surname,
    this.email = email,
    this.phone = phone
}
let usersArr = [];

for (let i = 0; i < 10; i++) {
    let newUser = new User(i, `Kokos${i}`, `Africa${i}`, `kokos${i}"@gmail.com`, `38093${i}`);
    usersArr.push(newUser);
}
console.log(usersArr)
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let evenIdUser= usersArr.filter((user)=>user.id %2 ===0);
console.log('об\'єкти з парними id ',evenIdUser)
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortUsers = usersArr.sort((a,b)=> a.id - b.id)
console.log('по id. по зростанню ',sortUsers)
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let clientA = new Client(21, 'Alona',' Myshko', 'alona@mail.com', '(097)43566778', ['fish', 'apple pie', 'djuce']);
console.log(clientA.order)
// створити пустий масив, наповнити його 10 об'єктами Client
let clientsArr = [];

getRandomNumberOfWords=(minWords, maxWords) =>{
    let orderArr = [];
    const availableWords = ['apple', 'banana', 'orange', 'fish', 'meat', 'water', 'juice', 'whine'];
    const numberOfWords = Math.floor(Math.random() * (maxWords - minWords + 1)) + minWords;

    for (let i = 0; i < numberOfWords; i++) {
        const randomIndex = Math.floor(Math.random() * availableWords.length);
        const randomWord = availableWords[randomIndex];
        orderArr.push(randomWord);
    }
    return orderArr;
}

for (let i = 0; i < 10; i++) {
    let order = getRandomNumberOfWords(1, 7);
    let newClient = new Client(i, `Kokos${i}`, `Africa${i}`, `kokos${i}@gmail.com`, `38093${i}`, order);
    clientsArr.push(newClient);
}
console.log(clientsArr)
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortClientsArr= clientsArr.sort((a,b)=> a.order.length - b.order.length);
console.log('Відсортувати його по кількості товарів в полі order по зростанню', sortClientsArr)

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function CarFoo(model, manufacturer, yearOfManufacture, maximumSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.yearOfManufacture = yearOfManufacture;
    this.maximumSpeed = maximumSpeed;
    this.engineCapacity = engineCapacity;
    this.drive= function (speed){
        console.log(`їдемо зі швидкістю ${this.maximumSpeed } на годину`)
    };
    this.info = function (){
        for (let key in this){
          if(typeof  this[key] === "function") {
              continue;
          }
          console.log(`${key} - ${this[key]}`);
        }
    };
    this.increaseMaxSpeed =function (newSpeed){
        this.maximumSpeed= maximumSpeed +newSpeed;
        console.log( `підвищує значення максимальної швидкості на ${newSpeed} =>`, this.maximumSpeed)
    };
    this.changeYear= function (newValue){
        this.yearOfManufacture = newValue;
        console.log(`old year - ${yearOfManufacture}, new year - ${newValue} `);
    };
    this.addDriver = function (driver){
        this.driver = driver;
        console.log(this.driver);
    }
}
let carFoo = new CarFoo('Reno', 'Asd', 2020, 200, 1.4);
console.log('===================function=================');
carFoo.info();
carFoo.drive();
carFoo.increaseMaxSpeed(25);
carFoo.changeYear(2023);

const driverCocos = {name:'Cocos', age:'28', driverLicense:true};
carFoo.addDriver(driverCocos);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class CarClass {
    constructor(model, manufacturer, yearOfManufacture, maximumSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.yearOfManufacture = yearOfManufacture;
        this.maximumSpeed = maximumSpeed;
        this.engineCapacity = engineCapacity;
    }
    drive(speed){
        console.log(`їдемо зі швидкістю ${this.maximumSpeed } на годину`)
    };
   info  (){
        for (let key in this){
            if(typeof  this[key] === "function") {
                continue;
            }
            console.log(`${key} - ${this[key]}`);
        }
    };
    increaseMaxSpeed (newSpeed){
        this.maximumSpeed += newSpeed;
        console.log( `підвищує значення максимальної швидкості на ${newSpeed} =>`, this.maximumSpeed)
    };
  changeYear(newValue){
      console.log(`old year - ${this.yearOfManufacture}, new year - ${newValue} `);
        this.yearOfManufacture = newValue;
    };
  addDriver(driver){
        this.driver = driver;
        console.log(this.driver);
    }
};
let carClass = new CarClass('Audi', 'Asd', 2013, 250, 1.6)
console.log('===================Class=================');
carClass.info();
carClass.drive();
carClass.increaseMaxSpeed(25);
carClass.changeYear(2023);

const driverBanana = {name:'Banana', age:'16', driverLicense:false};
carClass.addDriver(driverBanana);

console.log('===================Class=================');
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    };
};
let cinderellasArr = [];

for (let i = 0; i < 10; i++) {
    let cindy = new Cinderella(`Cindy${i}`, 20+i, 30+i);
    cinderellasArr.push(cindy);
}
console.log('cinderellasArr', cinderellasArr)
const cindy = new Cinderella();

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince extends  Cinderella{
    constructor(name, age, footSize){
        super (name, age, footSize);
    }

};
let princeGury= new Prince('Gury', 36, 35);
console.log('princeGury)', princeGury);
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (let cindy of cinderellasArr) {
    if(cindy.footSize === princeGury.footSize){
        console.log(`Real Cinderella is `,cindy)
    }
};
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let rielCinderella = cinderellasArr.find(value => value.footSize === princeGury.footSize);
console.log(`Real Cinderella is `, rielCinderella)