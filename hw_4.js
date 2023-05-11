// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
areaRectangle =(a,b) =>{
    return a*b;
}
console.log('areaRectangle',areaRectangle(2, 5));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
 doublePi = ()=>{
    return 2*3.14
}
areaCircle=(r)=>{
    return doublePi()*r;
}
console.log('areaCircle', areaCircle(1))
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
 areaCylinder=(r, h)=>{
    return doublePi()*r*h;
}
console.log('areaCylinder', areaCylinder(1, 2))
// - створити функцію яка приймає масив та виводить кожен його елемент
 arrElements=(arr)=> {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}
const numbers= [1, 2, 3, 4, 5];
console.log('arrElements')
arrElements(numbers);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
text=(teg, info)=>{
  document.write(`<div><${teg}>${info}</${teg}></div>`)
}
text('h4', 'створити функцію яка створює параграф з текстом. Текст задати через аргумент')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
list=(text)=>{
    document.write('<ul>')
    for (let i = 0; i < 3; i++) {
        document.write(`<li><p>${text}</p></li>`);
    }
        document.write('</ul>')
}
list('створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
document.write('<hr>')
listWithUnknownLi =(a, text)=>{
    for (let i = 0; i < a; i++) {
        document.write(`<li><p>${text}</p></li>`);
    }
    document.write('</ul>')
}
listWithUnknownLi( 3,'створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий')
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
document.write('<hr>')
fooArr=(arr)=>{
    document.write('<ul>')
    for (let arrElement of arr) {
        document.write(`<li><p>${arrElement}</p></li>`);
    }
    document.write('</ul>')
}
const arr2 = [1, 'apple', true, 3, 'banana', false];
fooArr(arr2);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let usersWithId = [
        {id: 1, name: 'vasya', age: 31},
        {id: 2, name: 'petya', age: 30},
        {id: 3, name: 'kolya', age: 29},
        {id: 4, name: 'olya', age: 28}
    ];
arrObj=(users)=>{
    for (let user of users) {
       document.write(`<di>
            <h2><spam style="color: cadetblue">${user.id}) </spam>${user.name}</h2>
            <p>Is ${user.age} years old</p>
        </di>`)
    }
}
arrObj(usersWithId)
// - створити функцію яка повертає найменьше число з масиву
numbersOfArr =(arr)=>{
    let numbersArr = [];
    for (const numberOfArr of arr) {
        if (typeof numberOfArr === 'number') {
            numbersArr.push(numberOfArr);
        }
    }
    return numbersArr;
}
minNumber=(arr)=>{
    const numbersArr = numbersOfArr (arr);
    return Math.min(...numbersArr)
}
const numbersArr = [2,5,1,66,24, '8',222, -534];
console.log(`min number of numbers ${numbersArr} =>`, minNumber(numbersArr))
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
sum=(arr)=>{
    const numbersArr = numbersOfArr (arr);
    return numbersArr.reduce((acc, element) => {return acc+element },0)
}
let arrForSum = [1,2,10]
console.log(`sum of ${arrForSum} =`, sum(arrForSum))
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
swap=(arr,index1,index2)=>{
   [ arr[index1], arr[index2]] = [arr[index2], arr[index1]]
  return arr;
}
console.log('swap 0,1 elements of  arr [11,22,33,44]', swap([11,22,33,44],0,1))
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
exchange=(sumUAH,currencyValues,exchangeCurrency)=>{
    for (let currencyValue of currencyValues) {
        if(currencyValue.currency === exchangeCurrency){
            return sumUAH / currencyValue.value;
        }}
        return 'We do not have such currency, contact another bank branch';
}
console.log('exchange 10000UAN in USD ===>', exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'));
